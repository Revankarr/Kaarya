import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Spaces from './pages/Spaces.jsx';
import MeetingRooms from './pages/MeetingRooms.jsx';
import Events from './pages/Events.jsx';
import Book from './pages/Book.jsx';
import Policies from './pages/Policies.jsx';
import NotFound from './pages/NotFound.jsx';
import { meta } from './content.js';

export const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/spaces', element: <Spaces /> },
  { path: '/meeting-rooms', element: <MeetingRooms /> },
  { path: '/events', element: <Events /> },
  { path: '/book', element: <Book /> },
  { path: '/policies', element: <Policies /> },
];

function RouteEffects() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const m = meta[pathname];
    if (m) {
      document.title = m.title;
      document.querySelector('meta[name="description"]')?.setAttribute('content', m.description);
    }
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <RouteEffects />
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main" className={pathname === '/' ? 'is-home' : ''}>
        <Routes>
          {routes.map((r) => <Route key={r.path} path={r.path} element={r.element} />)}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
