import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import { images, site } from '../content.js';

export function Eyebrow({ children, light }) {
  return <p className={`eyebrow${light ? ' eyebrow--light' : ''}`}>{children}</p>;
}

export function SectionHead({ eyebrow, title, body, align = 'left', light, as: H = 'h2' }) {
  return (
    <header className={`section-head section-head--${align}${light ? ' is-light' : ''}`}>
      {eyebrow && <Eyebrow light={light}>{eyebrow}</Eyebrow>}
      {title && <H className="display">{title}</H>}
      {body && <p className="lead">{body}</p>}
    </header>
  );
}

export function Button({ to, href, children, variant = 'solid', size, icon = 'arrow', ...rest }) {
  const cls = `btn btn--${variant}${size ? ` btn--${size}` : ''}`;
  const inner = (
    <>
      <span>{children}</span>
      {icon && <Icon name={icon} size={18} />}
    </>
  );
  if (to) return <Link className={cls} to={to} {...rest}>{inner}</Link>;
  return <a className={cls} href={href} {...rest}>{inner}</a>;
}

// A clean rule with the ಕಾ mark at its centre, replacing ornate swirls.
export function Divider({ light }) {
  return (
    <div className={`divider${light ? ' divider--light' : ''}`} aria-hidden="true">
      <span />
      <Logo variant="mark" title="" />
      <span />
    </div>
  );
}

export function Photo({ name, className = '', shape = 'arch', eager }) {
  const img = images[name];
  return (
    <figure className={`photo photo--${shape} ${className}`}>
      <img src={img.src} alt={img.alt} style={img.position && { objectPosition: img.position }} loading={eager ? 'eager' : 'lazy'} decoding="async" width={img.width ?? 1600} height={img.height ?? 900} />
    </figure>
  );
}

export function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  );
}

export function PageHero({ eyebrow, title, body, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero__bg">
        <img src={images[image].src} alt="" loading="eager" />
      </div>
      <div className="container page-hero__inner">
        <h1>
          <span className="eyebrow eyebrow--light">{eyebrow}</span>
          <span className="display display--xl">{title}</span>
        </h1>
        {body && <p className="lead lead--light">{body}</p>}
      </div>
    </section>
  );
}

export function CtaBand({ title, body, primary, secondary }) {
  return (
    <section className="cta-band">
      <div className="container cta-band__inner">
        <Reveal>
          <Logo variant="mark" className="cta-band__mark" title="" />
          <h2 className="display">{title}</h2>
          <p className="lead">{body}</p>
          <div className="btn-row btn-row--center">
            {primary ?? <Button href={site.phoneHref} icon="phone">Call {site.phone}</Button>}
            {secondary ?? <Button to="/book" variant="outline">Book a Tour</Button>}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureGrid({ items, columns = 3, light, children }) {
  return (
    <div className={`feature-grid feature-grid--${columns}${light ? ' is-light' : ''}`}>
      {items.map((f, i) => (
        <Reveal className="feature" key={f.title} delay={(i % columns) * 90}>
          <span className="feature__icon"><Icon name={f.icon} /></span>
          <h3>{f.title}</h3>
          <p>{f.body}</p>
        </Reveal>
      ))}
      {children}
    </div>
  );
}
