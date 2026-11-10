import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const config = JSON.parse(await readFile('components/site-navigation.json', 'utf8'));
const escapeHtml = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const brand = (root) => `<a class="brand" href="${root}index.html"><span class="brand-mark" aria-hidden="true">${config.brand.mark}<span>.</span></span><span class="brand-name">${config.brand.name}</span></a>`;

for (const page of config.pages) {
  const file = path.resolve(page.file);
  const source = await readFile(file, 'utf8');
  const headerStart = source.indexOf('<header class="site-header">');
  const headerEnd = source.indexOf('</header>', headerStart);
  const footerStart = source.indexOf('<footer class="site-footer">');
  const footerEnd = source.indexOf('</footer>', footerStart);
  if (headerStart < 0 || headerEnd < 0) throw new Error(`Header absent/incomplet : ${page.file}`);
  if (footerStart < 0 || footerEnd < 0) throw new Error(`Footer absent/incomplet : ${page.file}`);

  const headerLinks = config.navigation.slice(0, 5).map((item) => {
    const current = item.key === page.key ? ' aria-current="page"' : '';
    const className = item.class ? ` class="${item.class}"` : '';
    return `      <a href="${page.root}${item.path}"${className}${current}>${escapeHtml(item.label)}</a>`;
  }).join('\n');
  const header = `<header class="site-header">\n  <div class="container header-inner">\n    ${brand(page.root)}\n    <nav class="main-nav" aria-label="Navigation principale">\n${headerLinks}\n    </nav>\n  </div>\n</header>`;

  const footerLinks = config.navigation.filter((item) => item.key !== page.key).map((item) =>
    `      <a href="${page.root}${item.path}">${escapeHtml(item.label)}</a>`
  ).join('\n');
  const footer = `<footer class="site-footer">\n  <div class="container">\n    <div class="footer-grid">\n      ${brand(page.root)}\n      <nav class="footer-links" aria-label="Navigation de pied de page">\n${footerLinks}\n      </nav>\n    </div>\n    <p class="footer-note">${escapeHtml(page.footerNote)}</p>\n  </div>\n</footer>`;

  const updated = source.slice(0, headerStart) + header + source.slice(headerEnd + '</header>'.length, footerStart) + footer + source.slice(footerEnd + '</footer>'.length);
  await writeFile(file, updated);
  console.log(`Shell synchronisé : ${page.file}`);
}
