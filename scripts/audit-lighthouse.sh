#!/usr/bin/env bash
set -euo pipefail

export CHROME_PATH="${CHROME_PATH:-/usr/bin/brave-browser}"
BASE_URL="${AUDIT_URL:-http://127.0.0.1:8765}"

declare -a ROUTES=(
  "home:/"
  "creation-sites-web:/creation-sites-web/"
  "ia-utile:/ia-utile/"
  "contact:/contact/"
  "mentions-legales:/mentions-legales/"
  "confidentialite:/confidentialite/"
)

for route in "${ROUTES[@]}"; do
  name="${route%%:*}"
  path="${route#*:}"
  echo "Lighthouse — ${name}"
  lighthouse "${BASE_URL}${path}" \
    --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage" \
    --only-categories=performance,accessibility,best-practices,seo \
    --output=json \
    --output-path="/tmp/portfolio-lighthouse-${name}.json" \
    --quiet
done

node --input-type=module <<'NODE'
import fs from "node:fs";
const names = ["home", "creation-sites-web", "ia-utile", "contact", "mentions-legales", "confidentialite"];
console.log("\nScores Lighthouse (mobile simulé) :");
console.log("Page | Performance | Accessibilité | Bonnes pratiques | SEO");
for (const name of names) {
  const report = JSON.parse(fs.readFileSync(`/tmp/portfolio-lighthouse-${name}.json`, "utf8"));
  const score = (category) => Math.round(report.categories[category].score * 100);
  console.log(`${name} | ${score("performance")} | ${score("accessibility")} | ${score("best-practices")} | ${score("seo")}`);
}
NODE
