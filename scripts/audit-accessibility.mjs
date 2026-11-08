import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const baseUrl = process.env.AUDIT_URL ?? "http://127.0.0.1:8765";
const pages = [
  "/",
  "/creation-sites-web/",
  "/ia-utile/",
  "/contact/",
  "/mentions-legales/",
  "/confidentialite/",
];
const viewports = [
  { name: "mobile", width: 390, height: 844 },
  { name: "desktop", width: 1440, height: 1000 },
];

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? "/usr/bin/brave-browser",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

let failed = false;
try {
  for (const path of pages) {
    for (const viewport of viewports) {
      const context = await browser.newContext({ viewport });
      const page = await context.newPage();
      const response = await page.goto(new URL(path, baseUrl).href, {
        waitUntil: "networkidle",
      });
      if (!response?.ok()) {
        console.error(`HTTP failure: ${path} (${response?.status() ?? "no response"})`);
        failed = true;
        await context.close();
        continue;
      }

      const overflow = await page.evaluate(
        () => document.documentElement.scrollWidth > document.documentElement.clientWidth,
      );
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa", "best-practice"])
        .analyze();

      console.log(
        `${path} [${viewport.name}] — HTTP ${response.status()}, overflow=${overflow}, violations=${results.violations.length}`,
      );
      if (overflow) failed = true;
      for (const violation of results.violations) {
        failed = true;
        console.error(`  ${violation.impact}: ${violation.id} — ${violation.help} (${violation.nodes.length} nodes)`);
        for (const node of violation.nodes.slice(0, 5)) {
          console.error(`    ${node.target.join(", ")}: ${node.failureSummary?.replace(/\n/g, " ")}`);
        }
      }
      await context.close();
    }
  }
} finally {
  await browser.close();
}

if (failed) process.exitCode = 1;
