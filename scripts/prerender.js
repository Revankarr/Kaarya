// Renders every route to static HTML with its own <title>, description and canonical,
// then writes sitemap.xml and a 404 page. Runs after the client and SSR builds.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const { render, paths, meta, site } = await import(path.join(root, 'dist-ssr/entry-server.js'));

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

function page(url, m) {
  const canonical = site.url + (url === '/' ? '/' : url);
  return template
    .replace(/<title>.*?<\/title>/, `<title>${esc(m.title)}</title>`)
    .replace(/(<meta name="description" content=")[^"]*/, `$1${esc(m.description)}`)
    .replace(/(<meta property="og:title" content=")[^"]*/, `$1${esc(m.title)}`)
    .replace(/(<link rel="canonical" href=")[^"]*/, `$1${canonical}`)
    .replace('<!--app-html-->', render(url));
}

for (const url of paths) {
  const file = url === '/' ? path.join(dist, 'index.html') : path.join(dist, url, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(url, meta[url]));
  console.log('prerendered', url);
}

fs.writeFileSync(
  path.join(dist, '404.html'),
  page('/404', { title: 'Page not found | Kaarya Coworking', description: meta['/'].description })
);

const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
    .map((u) => `  <url><loc>${site.url}${u}</loc><lastmod>${today}</lastmod><priority>${u === '/' ? '1.0' : '0.8'}</priority></url>`)
    .join('\n')}\n</urlset>\n`
);

fs.rmSync(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log('sitemap.xml + 404.html written');
