import { KANNADA, MARK, WORD } from './logoPaths.js';

// viewBoxes cut from the original A4 artboard of media/KAARYA.pdf
const variants = {
  lockup: { viewBox: '50 332 744 97', paths: MARK + WORD },
  mark: { viewBox: '50 332 89 97', paths: MARK },
  kannada: { viewBox: '64 180 727 134', paths: KANNADA },
  full: { viewBox: '50 178 744 252', paths: KANNADA + MARK + WORD },
};

export default function Logo({ variant = 'lockup', className = '', title = 'Kaarya' }) {
  const v = variants[variant];
  return (
    <svg
      className={`logo logo--${variant} ${className}`}
      viewBox={v.viewBox}
      fill="currentColor"
      {...(title ? { role: 'img', 'aria-label': title } : { 'aria-hidden': true })}
      dangerouslySetInnerHTML={{ __html: (title ? `<title>${title}</title>` : '') + v.paths }}
    />
  );
}
