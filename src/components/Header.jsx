import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { nav, site } from '../content.js';

// Routes that open on a dark photo/video hero, where the header starts transparent.
const darkHeroRoutes = ['/', '/about', '/spaces', '/events', '/book'];

export default function Header() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('menu-open', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const solid = scrolled || open || !darkHeroRoutes.includes(pathname);

  return (
    <header className={`site-header${solid ? ' is-solid' : ''}${open ? ' is-open' : ''}`}>
      <div className="container site-header__bar">
        <Link to="/" className="site-header__logo" aria-label="Kaarya home">
          <Logo variant="lockup" />
        </Link>

        <nav className="site-nav" aria-label="Main">
          {nav.map((n) => (
            <NavLink key={n.to} to={n.to} className="site-nav__link">
              {n.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link to="/#plans" className="site-header__plans">View Plans</Link>
          <Link to="/book?plan=Day%20Pass" className="btn btn--solid btn--sm">
            <span>Book a Day Pass</span>
          </Link>
          <button
            className="menu-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span />
          </button>
        </div>
      </div>

      {/* Close on any link tap, including the current page's link, where the route doesn't change. */}
      <div
        id="mobile-menu"
        className="mobile-menu"
        hidden={!open}
        onClick={(e) => e.target.closest('a') && setOpen(false)}
      >
        <nav aria-label="Mobile">
          <NavLink to="/" end className="mobile-menu__link">Home</NavLink>
          {nav.map((n, i) => (
            <NavLink key={n.to} to={n.to} className="mobile-menu__link" style={{ '--i': i + 1 }}>
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-menu__foot">
          <Link to="/book?plan=Day%20Pass" className="btn btn--solid"><span>Book a Day Pass</span><Icon name="arrow" size={18} /></Link>
          <a href={site.phoneHref} className="btn btn--outline-light"><span>Call us</span><Icon name="phone" size={18} /></a>
          <p>{site.hours}</p>
        </div>
      </div>
    </header>
  );
}
