// Geometric icon set on a 32px grid: 1.6 stroke, circles, arches and straight lines only.
const icons = {
  wifi: <><path d="M5 13a16 16 0 0 1 22 0" /><path d="M9 17.5a10 10 0 0 1 14 0" /><path d="M13 22a4.5 4.5 0 0 1 6 0" /><circle cx="16" cy="25.5" r="1.2" fill="currentColor" /></>,
  cup: <><path d="M7 12h15v7a7 7 0 0 1-7 7h-1a7 7 0 0 1-7-7z" /><path d="M22 14h2.5a3 3 0 0 1 0 6H22" /><path d="M12 5c-1 1.5 1 2.5 0 4M16.5 5c-1 1.5 1 2.5 0 4" /></>,
  desk: <><path d="M4 13h24" /><path d="M7 13v13M25 13v13" /><rect x="11" y="5" width="10" height="8" rx="1" /><path d="M7 19h8" /></>,
  community: <><circle cx="16" cy="10" r="3.5" /><circle cx="7" cy="14" r="2.8" /><circle cx="25" cy="14" r="2.8" /><path d="M9.5 26a6.5 6.5 0 0 1 13 0" /><path d="M2.5 25a4.5 4.5 0 0 1 7-3.7M29.5 25a4.5 4.5 0 0 0-7-3.7" /></>,
  spark: <><path d="M16 3v6M16 23v6M3 16h6M23 16h6" /><path d="M16 11l1.6 3.4L21 16l-3.4 1.6L16 21l-1.6-3.4L11 16l3.4-1.6z" /><path d="M7 7l2.5 2.5M25 7l-2.5 2.5M7 25l2.5-2.5M25 25l-2.5-2.5" /></>,
  flex: <><path d="M5 11h17l-4-4" /><path d="M27 21H10l4 4" /><circle cx="26" cy="11" r="1.6" /><circle cx="6" cy="21" r="1.6" /></>,
  key: <><circle cx="11" cy="16" r="5.5" /><circle cx="11" cy="16" r="1.6" /><path d="M16.5 16H28M24 16v4M28 16v3" /></>,
  diya: <><path d="M4 18h24c-1.5 5-6.5 8-12 8S5.5 23 4 18z" /><path d="M16 4c3 4 3 7.5 0 10c-3-2.5-3-6 0-10z" /><path d="M12 29h8" /></>,
  calendar: <><rect x="5" y="7" width="22" height="20" rx="2" /><path d="M5 13h22M11 4v5M21 4v5" /><circle cx="16" cy="20" r="2" /></>,
  sun: <><circle cx="16" cy="16" r="5" /><path d="M16 3v4M16 25v4M3 16h4M25 16h4M6.8 6.8l2.8 2.8M22.4 22.4l2.8 2.8M6.8 25.2l2.8-2.8M22.4 9.6l2.8-2.8" /></>,
  pin: <><path d="M16 29s9-8.5 9-16a9 9 0 0 0-18 0c0 7.5 9 16 9 16z" /><circle cx="16" cy="13" r="3.2" /></>,
  table: <><ellipse cx="16" cy="14" rx="11" ry="4.5" /><path d="M16 18.5V28M11 28h10" /><path d="M5 9V5M27 9V5" /></>,
  sizes: <><rect x="4" y="16" width="10" height="10" rx="1" /><rect x="11" y="6" width="17" height="20" rx="1" /></>,
  screen: <><rect x="4" y="6" width="24" height="15" rx="2" /><path d="M12 27h8M16 21v6" /><path d="M14 11l5 2.5-5 2.5z" /></>,
  clock: <><circle cx="16" cy="16" r="12" /><path d="M16 9v7l4.5 3" /></>,
  mic: <><rect x="12" y="4" width="8" height="14" rx="4" /><path d="M8 15a8 8 0 0 0 16 0M16 23v5M11 28h10" /></>,
  handshake: <><path d="M3 12l5-3 5 2 3-2 5 1 8 3" /><path d="M8 9v9l6 6a2 2 0 0 0 3-3" /><path d="M13 11l-3 4a2 2 0 0 0 3 2.5L16 15l7 6.5a1.8 1.8 0 0 1-2.6 2.5" /><path d="M24 12v8" /></>,
  tools: <><path d="M5 27l10-10" /><path d="M19 5a6 6 0 0 0 0 8.5a6 6 0 0 0 8.5 0l-3-3l-2.5-2.5z" /><path d="M8 5l4 4M5 8l4 4M5 8l3-3" /></>,
  lotus: <><path d="M16 6c3.5 3.5 3.5 10 0 15c-3.5-5-3.5-11.5 0-15z" /><path d="M16 21c-4-1-8-4-9.5-9c4 0 7.5 2 9.5 5" /><path d="M16 21c4-1 8-4 9.5-9c-4 0-7.5 2-9.5 5" /><path d="M5 25h22" /></>,
  phone: <><path d="M8 4h4l2 6-3 2a15 15 0 0 0 7 7l2-3 6 2v4a3 3 0 0 1-3 3A21 21 0 0 1 5 7a3 3 0 0 1 3-3z" /></>,
  mail: <><rect x="4" y="7" width="24" height="18" rx="2" /><path d="M5 9l11 8 11-8" /></>,
  arrow: <><path d="M6 16h20M19 9l7 7-7 7" /></>,
  check: <><path d="M7 16.5l6 6L25 10" /></>,
  instagram: <><rect x="5" y="5" width="22" height="22" rx="6" /><circle cx="16" cy="16" r="5" /><circle cx="22.5" cy="9.5" r="1" fill="currentColor" /></>,
  linkedin: <><rect x="5" y="5" width="22" height="22" rx="3" /><path d="M10.5 14v8M10.5 10v.5M15 22v-8M15 17.5a3.5 3.5 0 0 1 7 0V22" /></>,
  google: <><path d="M26 16.3c0-.8-.1-1.5-.2-2.3H16v4.3h5.6a5 5 0 0 1-2.1 3.2" /><path d="M24.2 23.5A11 11 0 1 1 23.4 8.3" /></>,
  plus: <><path d="M16 7v18M7 16h18" /></>,
};

export default function Icon({ name, size = 32, className = '' }) {
  return (
    <svg
      className={`icon ${className}`}
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}
