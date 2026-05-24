/* ─────────────────────────────────────────────────────────────────
   Navbar — Garden Vibe AI
   Botanical two-leaf logo (no background box) + premium nav
───────────────────────────────────────────────────────────────── */

const navLinks = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Garden Plans', href: '#builder' },
  { label: 'Shop', href: '#builder' },
  { label: 'Plant Guide', href: '#' },
  { label: 'Inspiration', href: '#' },
  { label: 'About Us', href: '#' },
];

/* Botanical leaf logo — two overlapping leaf shapes, no background */
function LeafLogo() {
  return (
    <svg
      width="26"
      height="32"
      viewBox="0 0 26 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Left leaf — dark green */}
      <path
        d="M13 30 C4 23 3 8 13 2 C11 11 10 22 13 30Z"
        fill="#256b28"
      />
      {/* Right leaf — brighter green, slightly transparent */}
      <path
        d="M13 30 C22 23 23 8 13 2 C15 11 16 22 13 30Z"
        fill="#4caf50"
        opacity="0.72"
      />
      {/* Center vein */}
      <line
        x1="13" y1="3"
        x2="13" y2="29"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.85"
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
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        height: 72,
      }}
    >
      <div
        className="max-w-[1440px] mx-auto px-8 flex items-center"
        style={{ height: '100%' }}
      >
        {/* ── Brand ───────────────────────────────────────────── */}
        <a
          href="/"
          className="flex items-center gap-2.5 flex-shrink-0"
          style={{ marginRight: 40 }}
        >
          <LeafLogo />
          <span
            className="text-[16px] font-bold tracking-[-0.015em]"
            style={{ color: '#111827' }}
          >
            Garden Vibe{' '}
            <span style={{ color: '#256b28' }}>AI</span>
          </span>
        </a>

        {/* ── Center nav links ────────────────────────────────── */}
        <div className="hidden md:flex items-center flex-1">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 text-[14px] font-medium text-[#374151] hover:text-[#111827] rounded-lg transition-colors whitespace-nowrap"
              style={{ letterSpacing: '-0.005em' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#f6f7f5')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* ── Right: Log in + Sign up ──────────────────────────── */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href="#"
            className="text-[14px] font-medium text-[#374151] hover:text-[#111827] transition-colors px-4 py-2.5 rounded-xl border border-[#e4e9e2] bg-white hover:border-[#d0d5ce]"
          >
            Log in
          </a>
          <a
            href="#builder"
            className="text-[14px] font-semibold px-5 py-2.5 rounded-xl text-white transition-colors"
            style={{ background: '#256b28' }}
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
