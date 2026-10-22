import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App, { routes } from './App.jsx';
import { meta, site } from './content.js';

export { meta, site };
export const paths = routes.map((r) => r.path);

export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
