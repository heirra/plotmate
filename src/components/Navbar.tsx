const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Garden Plans', href: '#builder' },
  { label: 'Shop', href: '#builder' },
  { label: 'Plant Guide', href: '#' },
  { label: 'Inspiration', href: '#' },
  { label: 'About Us', href: '#' },
];

/* ── Botanical two-leaf logo mark ───────────────────────────────── */
function LeafMark() {
  return (
    <svg
      width="32"
      height="38"
      viewBox="0 0 32 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left leaf — deep garden green */}
      <path
        d="M16 36 C5 28 4 10 16 3 C13.5 13 12.5 26 16 36Z"
        fill="#256b28"
      />
      {/* Right leaf — brighter green overlay */}
      <path
        d="M16 36 C27 28 28 10 16 3 C18.5 13 19.5 26 16 36Z"
        fill="#4caf50"
        opacity="0.68"
      />
      {/* Centre vein line */}
      <line
        x1="16" y1="4"
        x2="16" y2="35"
        stroke="white"
        strokeWidth="1.1"
        strokeLinecap="round"
        opacity="0.9"
      />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav
      className="w-full bg-white sticky top-0 z-50"
      style={{
        borderBottom: '1px solid #e8ebe6',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <div
        className="max-w-[1440px] mx-auto px-8 flex items-center"
        style={{ height: 72 }}
      >

        {/* ── Brand ─────────────────────────────────────────────── */}
        <a
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          style={{ marginRight: 44 }}
        >
          <LeafMark />
          <span
            style={{
              fontSize: 18,
              fontWeight: 800,
              color: '#111827',
              letterSpacing: '-0.02em',
              lineHeight: 1,
            }}
          >
            Garden Vibe{' '}
            <span style={{ color: '#256b28' }}>AI</span>
          </span>
        </a>

        {/* ── Centre nav ────────────────────────────────────────── */}
        <div className="hidden md:flex items-center flex-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="rounded-lg whitespace-nowrap transition-colors"
              style={{
                padding: '8px 14px',
                fontSize: 14,
                fontWeight: 500,
                color: '#374151',
                letterSpacing: '-0.005em',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = '#111827';
                (e.currentTarget as HTMLElement).style.background = '#f6f7f5';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = '#374151';
                (e.currentTarget as HTMLElement).style.background = 'transparent';
              }}
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Right: Log in + Sign up ────────────────────────────── */}
        <div className="flex items-center gap-2.5 flex-shrink-0">
          <a
            href="#"
            className="rounded-xl transition-colors"
            style={{
              padding: '9px 20px',
              fontSize: 14,
              fontWeight: 500,
              color: '#374151',
              border: '1.5px solid #d8dbd6',
              background: 'white',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#b0b8ac'; (e.currentTarget as HTMLElement).style.color = '#111827'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#d8dbd6'; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
          >
            Log in
          </a>
          <a
            href="#builder"
            className="rounded-xl text-white font-semibold transition-colors"
            style={{
              padding: '9px 22px',
              fontSize: 14,
              fontWeight: 600,
              background: '#256b28',
              boxShadow: '0 2px 8px rgba(37,107,40,0.25)',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#1e5c23')}
            onMouseLeave={e => (e.currentTarget.style.background = '#256b28')}
          >
            Sign up
          </a>
        </div>
      </div>
    </nav>
  );
}
