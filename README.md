# Kaarya Coworking: website

A static React site (Vite + React Router). It is prerendered to plain HTML per page for SEO.

## Commands

```bash
npm install
npm run dev       # local dev server at http://localhost:5173
npm run build     # builds + prerenders every route into dist/
npm run preview   # serves dist/ at http://localhost:4173
```

Deploy the `dist/` folder to any static host (Netlify, Vercel, Cloudflare Pages, S3, GitHub Pages).
Each route is written as `dist/<route>/index.html`, and `dist/404.html`, `sitemap.xml` and `robots.txt` are included.

## Where things live

| What | Where |
| --- | --- |
| All copy, phone, email, address, social links, SEO titles | `src/content.js` |
| Design tokens (colours, fonts, spacing) | top of `src/styles.css` |
| Pages | `src/pages/` |
| Logo (vector, from `media/KAARYA.pdf`) | `src/components/Logo.jsx` + `logoPaths.js` |
| Photos, hero video (frames/compressed from `media/IMG_2495.MOV`) | `public/media/` |

## Before launch

- [ ] Check the map on `/book` pins the right place; if not, use Google Maps → Share → Embed a map and paste its `src` into `site.mapEmbed`.
- [ ] Confirm the domain: the site, sitemap and Google listing assume `https://www.kaarya.co`.
- [ ] Set up the booking backend (Google Sheet + Apps Script) following [apps-script/README.md](apps-script/README.md) and paste its URL into `site.bookingEndpoint`. Until then the form opens a pre-filled email.
- [ ] Soul Signature (headings, `public/fonts/SoulSignature.ttf`) is © Fikryal.Co Studio. Confirm Kaarya holds a commercial licence before launch.
- All other text uses Eina 01 SemiBold (`public/fonts/Eina01-SemiBold.ttf`).
