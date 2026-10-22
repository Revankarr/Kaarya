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

- [ ] Replace the placeholder phone, email and street address in `src/content.js` (`site`).
- [ ] Replace the placeholder testimonials (`home.testimonials.items`) with real member reviews.
- [ ] Paste the Google Business Profile link (`site.googleBusiness`) and Instagram/LinkedIn URLs.
- [ ] Optional: set `site.formEndpoint` (e.g. Formspree) so bookings arrive directly. Without it the form opens a pre-filled email.
- [ ] Soul Signature font: add the licensed file to `public/fonts/` and its `url()` in `src/styles.css`. Until then headings use Mr Dafoe, a close match.
- [ ] Eina 01 only came in SemiBold, so it is used for headings, nav and buttons. Paragraphs use Figtree, an Eina-like Google font. Add Eina 01 Regular to use it everywhere.
