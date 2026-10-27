import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import Icon from './Icon.jsx';
import { nav, site } from '../content.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__brand">
          <Logo variant="kannada" className="site-footer__kannada" title="ಕಾರ್ಯ" />
          <p className="site-footer__tag">
            <span className="script">Work is worship.</span>
            A traditionally native coworking space in the heart of JP Nagar, Bangalore.
          </p>
        </div>

        <div className="site-footer__grid">
          <div>
            <h3>Visit</h3>
            <address>
              {site.address.map((l) => <span key={l}>{l}</span>)}
            </address>
            <a className="link-arrow" href={site.googleBusiness} target="_blank" rel="noreferrer">
              Get directions <Icon name="arrow" size={16} />
            </a>
          </div>
          <div>
            <h3>Hours</h3>
            <p>Monday – Saturday</p>
            <p>9:00 AM – 9:00 PM</p>
            <p className="muted">After-hours access on request</p>
          </div>
          <div>
            <h3>Contact</h3>
            <a href={site.phoneHref}><Icon name="phone" size={18} />{site.phone}</a>
            <a href={`mailto:${site.email}`}><Icon name="mail" size={18} />{site.email}</a>
            <div className="site-footer__social">
              <a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icon name="instagram" size={22} /></a>
              <a href={site.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" size={22} /></a>
              <a href={site.googleBusiness} target="_blank" rel="noreferrer" aria-label="Google Business Profile"><Icon name="google" size={22} /></a>
            </div>
          </div>
          <div>
            <h3>Explore</h3>
            {nav.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
            <Link to="/book">Book a Space</Link>
          </div>
        </div>

        <div className="site-footer__base">
          <p>© {new Date().getFullYear()} Kaarya Coworking Space, Bangalore. All rights reserved.</p>
          <p>
            Fonts made from <a href="http://www.onlinewebfonts.com" target="_blank" rel="noreferrer">Web Fonts</a> are licensed by CC BY 4.0
          </p>
        </div>
      </div>
    </footer>
  );
}
