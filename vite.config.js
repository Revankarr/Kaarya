import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Every route is prerendered to its own folder/index.html. Make `vite preview`
// resolve /about to /about/index.html like a static host, instead of the SPA fallback.
const prerenderedRoutes = {
  name: 'prerendered-routes',
  configurePreviewServer(server) {
    const dist = path.resolve(server.config.root, server.config.build.outDir);
    server.middlewares.use((req, _res, next) => {
      const url = req.url.split('?')[0].replace(/\/$/, '');
      if (url && !path.extname(url) && fs.existsSync(path.join(dist, url, 'index.html'))) {
        req.url = `${url}/index.html`;
      }
      next();
    });
  },
};

export default defineConfig({
  plugins: [react(), prerenderedRoutes],
});
