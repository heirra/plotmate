import { ArrowRight } from 'lucide-react';

/* ─── Trust item row ─────────────────────────────────────────────── */
const trustItems = [
  { label: 'Real UK products' },
  { label: 'Personalised for your space' },
  { label: 'Easy to follow' },
  { label: 'Beginner friendly' },
];

/* ─── Star rating ───────────────────────────────────────────────── */
function StarRow() {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= 4 ? '#f59e0b' : '#fde68a'} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span className="text-[13px] font-semibold text-[#111827] ml-1.5">4.8/5</span>
    </div>
  );
}

/* ─── Garden scene SVG ──────────────────────────────────────────── */
function GardenScene() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full"
      viewBox="0 0 800 680"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        {/* Sky/wall gradient */}
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#b8cbb0"/>
          <stop offset="100%" stopColor="#d4e4cc"/>
        </linearGradient>
        {/* Ground gradient */}
        <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c4b89a"/>
          <stop offset="100%" stopColor="#b0a082"/>
        </linearGradient>
        {/* Dark foliage gradient */}
        <linearGradient id="foliage" x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0%" stopColor="#1e5c30"/>
          <stop offset="100%" stopColor="#2d7a40"/>
        </linearGradient>
        {/* Bright leaf gradient */}
        <linearGradient id="brightLeaf" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4a9e5c"/>
          <stop offset="100%" stopColor="#3d8c4f"/>
        </linearGradient>
        {/* Fence gradient */}
        <linearGradient id="fence" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c8bfaa"/>
          <stop offset="100%" stopColor="#b5a992"/>
        </linearGradient>
        {/* Sofa cushion */}
        <linearGradient id="cushion" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f0e8"/>
          <stop offset="100%" stopColor="#ede5d4"/>
        </linearGradient>
      </defs>

      {/* ── Background: stone wall / fence ── */}
      <rect width="800" height="680" fill="url(#sky)"/>

      {/* Vertical fence slats */}
      {[0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((i) => (
        <rect key={i} x={i * 60 - 10} y="0" width="54" height="300" rx="2" fill="url(#fence)" opacity="0.55"/>
      ))}
      {/* Horizontal fence rail */}
      <rect x="0" y="85" width="800" height="14" rx="3" fill="#a89c84" opacity="0.7"/>
      <rect x="0" y="220" width="800" height="12" rx="3" fill="#a89c84" opacity="0.6"/>

      {/* ── Climbing plant tendrils on fence ── */}
      <path d="M100 0 C120 40 90 80 110 120 C130 160 100 200 120 260" stroke="#2d7a40" strokeWidth="3" fill="none" opacity="0.8" strokeLinecap="round"/>
      <path d="M200 0 C180 50 200 100 180 150 C160 200 190 240 170 300" stroke="#1e5c30" strokeWidth="2.5" fill="none" opacity="0.7" strokeLinecap="round"/>
      <path d="M650 0 C670 60 640 120 660 180 C680 230 650 270 680 310" stroke="#2d7a40" strokeWidth="3" fill="none" opacity="0.75" strokeLinecap="round"/>
      <path d="M730 0 C710 50 740 100 720 160 C700 210 720 260 700 310" stroke="#1e5c30" strokeWidth="2" fill="none" opacity="0.65" strokeLinecap="round"/>

      {/* Climbing leaves on fence */}
      {[
        {x:105,y:40,r:18},{x:95,y:90,r:14},{x:115,y:135,r:16},{x:105,y:185,r:15},
        {x:195,y:50,r:16},{x:185,y:110,r:13},{x:175,y:170,r:15},
        {x:655,y:45,r:17},{x:645,y:100,r:14},{x:665,y:160,r:16},{x:650,y:220,r:13},
        {x:725,y:55,r:15},{x:715,y:120,r:13},{x:705,y:180,r:14},
      ].map((l, i) => (
        <ellipse key={i} cx={l.x} cy={l.y} rx={l.r} ry={l.r * 0.65} fill="#2d7a40" opacity="0.75" transform={`rotate(${i*23} ${l.x} ${l.y})`}/>
      ))}

      {/* ── Ground / paving ── */}
      <rect x="0" y="440" width="800" height="240" fill="url(#ground)"/>
      {/* Paving stone lines */}
      {[460,490,520,550,580,610,640].map((y, i) => (
        <line key={i} x1="0" y1={y} x2="800" y2={y} stroke="#a8977a" strokeWidth="1.5" opacity="0.45"/>
      ))}
      {[0,80,160,240,320,400,480,560,640,720,800].map((x, i) => (
        <line key={i} x1={x} y1="440" x2={x} y2="680" stroke="#a8977a" strokeWidth="1.5" opacity="0.35"/>
      ))}

      {/* ── Large background shrub / hedge LEFT ── */}
      <ellipse cx="90" cy="360" rx="130" ry="115" fill="url(#foliage)" opacity="0.92"/>
      <ellipse cx="40" cy="330" rx="90" ry="80" fill="#1e5c30" opacity="0.85"/>
      <ellipse cx="160" cy="350" rx="90" ry="80" fill="#2d7a40" opacity="0.8"/>
      <ellipse cx="90" cy="310" rx="70" ry="60" fill="#3d8c4f" opacity="0.75"/>

      {/* Large shrub RIGHT */}
      <ellipse cx="700" cy="350" rx="140" ry="120" fill="url(#foliage)" opacity="0.9"/>
      <ellipse cx="760" cy="330" rx="90" ry="80" fill="#1e5c30" opacity="0.85"/>
      <ellipse cx="640" cy="340" rx="85" ry="75" fill="#2d7a40" opacity="0.8"/>
      <ellipse cx="700" cy="305" rx="70" ry="60" fill="#3d8c4f" opacity="0.75"/>

      {/* ── Tall flowering plants center-left ── */}
      <rect x="298" y="280" width="6" height="170" rx="3" fill="#5a8a50"/>
      <ellipse cx="301" cy="270" rx="22" ry="28" fill="#7ab570" opacity="0.85"/>
      <ellipse cx="295" cy="290" rx="16" ry="20" fill="#9acc8a" opacity="0.7"/>

      {/* Lavender/tall plant center ── */}
      <rect x="368" y="260" width="5" height="180" rx="3" fill="#6a7a5a"/>
      <ellipse cx="370" cy="250" rx="18" ry="24" fill="#8a96c8" opacity="0.7"/>
      <ellipse cx="363" cy="265" rx="12" ry="16" fill="#a8b4e0" opacity="0.6"/>
      <ellipse cx="377" cy="258" rx="11" ry="15" fill="#8a96c8" opacity="0.65"/>

      {/* Yellow flower accent */}
      <rect x="448" y="295" width="5" height="150" rx="3" fill="#5a8040"/>
      <ellipse cx="450" cy="285" rx="20" ry="18" fill="#e8c840" opacity="0.8"/>
      <ellipse cx="442" cy="300" rx="13" ry="12" fill="#f0d060" opacity="0.65"/>

      {/* Pot left */}
      <ellipse cx="210" cy="444" rx="32" ry="12" fill="#9a8070"/>
      <path d="M178 444 L188 480 Q210 490 232 480 L242 444Z" fill="#b89880"/>
      <ellipse cx="210" cy="444" rx="32" ry="12" fill="#c4a888" opacity="0.6"/>
      <ellipse cx="210" cy="432" rx="28" ry="18" fill="#3d8c4f" opacity="0.9"/>
      <ellipse cx="210" cy="424" rx="20" ry="14" fill="#4da85f" opacity="0.8"/>

      {/* Pot right */}
      <ellipse cx="590" cy="444" rx="32" ry="12" fill="#9a8070"/>
      <path d="M558 444 L568 482 Q590 492 612 482 L622 444Z" fill="#b89880"/>
      <ellipse cx="590" cy="444" rx="32" ry="12" fill="#c4a888" opacity="0.6"/>
      <ellipse cx="590" cy="432" rx="28" ry="18" fill="#2d6a40" opacity="0.9"/>
      <ellipse cx="590" cy="424" rx="22" ry="16" fill="#3d8c50" opacity="0.75"/>

      {/* ── Sofa / furniture silhouette ── */}
      {/* Sofa base */}
      <rect x="280" y="400" width="260" height="55" rx="10" fill="url(#cushion)"/>
      {/* Sofa back */}
      <rect x="275" y="350" width="270" height="55" rx="10" fill="url(#cushion)" opacity="0.95"/>
      {/* Sofa left arm */}
      <rect x="268" y="355" width="22" height="100" rx="8" fill="#ede5d4"/>
      {/* Sofa right arm */}
      <rect x="530" y="355" width="22" height="100" rx="8" fill="#ede5d4"/>
      {/* Seat cushion lines */}
      <line x1="400" y1="402" x2="400" y2="452" stroke="#d4c8b0" strokeWidth="1.5" opacity="0.5"/>
      <line x1="340" y1="352" x2="340" y2="402" stroke="#d4c8b0" strokeWidth="1.5" opacity="0.5"/>
      <line x1="460" y1="352" x2="460" y2="402" stroke="#d4c8b0" strokeWidth="1.5" opacity="0.5"/>
      {/* Cushions on back */}
      <rect x="286" y="355" width="76" height="50" rx="6" fill="#f0ebe0" opacity="0.9"/>
      <rect x="372" y="355" width="76" height="50" rx="6" fill="#e8e0d0" opacity="0.9"/>
      <rect x="458" y="355" width="76" height="50" rx="6" fill="#f0ebe0" opacity="0.9"/>
      {/* Throw / pillow */}
      <ellipse cx="330" cy="405" rx="28" ry="14" fill="#c8d4b8" opacity="0.8"/>
      <ellipse cx="470" cy="408" rx="26" ry="13" fill="#b8c8a8" opacity="0.75"/>

      {/* Coffee table */}
      <rect x="330" y="455" width="160" height="8" rx="4" fill="#2a2015" opacity="0.7"/>
      <rect x="345" y="463" width="4" height="30" rx="2" fill="#2a2015" opacity="0.65"/>
      <rect x="481" y="463" width="4" height="30" rx="2" fill="#2a2015" opacity="0.65"/>
      {/* Candle on table */}
      <rect x="398" y="440" width="10" height="18" rx="2" fill="#e8e0cc"/>
      <ellipse cx="403" cy="440" rx="5" ry="3" fill="#d4c8aa"/>
      <line x1="403" y1="437" x2="403" y2="432" stroke="#e8a020" strokeWidth="2" strokeLinecap="round" opacity="0.9"/>

      {/* ── Foreground gravel scatter ── */}
      {[
        [150,500],[180,520],[220,510],[250,535],[300,505],[350,515],[500,508],[540,525],[570,512],[620,530],[660,508],[700,520]
      ].map(([x,y], i) => (
        <ellipse key={i} cx={x} cy={y} rx={4+i%3} ry={3} fill="#a8977a" opacity="0.35"/>
      ))}

      {/* ── Subtle vignette overlay ── */}
      <defs>
        <radialGradient id="vignette" cx="50%" cy="50%" r="70%">
          <stop offset="0%" stopColor="transparent"/>
          <stop offset="100%" stopColor="#000" stopOpacity="0.15"/>
        </radialGradient>
      </defs>
      <rect width="800" height="680" fill="url(#vignette)"/>
    </svg>
  );
}

/* ─── Hero ───────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="w-full bg-white" style={{ borderBottom: '1px solid #e4e9e2' }}>
      <div
        className="max-w-[1440px] mx-auto flex overflow-hidden"
        style={{ minHeight: 580 }}
      >
        {/* ── LEFT: Editorial content ──────────────────────────────── */}
        <div
          className="w-full lg:w-[48%] flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-16"
          style={{ flexShrink: 0 }}
        >

          {/* Headline */}
          <h1
            className="font-display text-[56px] xl:text-[68px] leading-[1.06] tracking-[-0.025em] text-[#111827] mb-4"
          >
            Your space.<br />
            Your perfect{' '}
            <span style={{ color: '#256b28' }}>garden plan.</span>
          </h1>

          {/* Sub-heading */}
          <p className="text-[17px] font-semibold text-[#111827] mb-2 leading-snug">
            AI-powered garden plans using real UK products.
          </p>

          {/* Body */}
          <p className="text-[15px] text-[#4b5563] leading-relaxed mb-8 max-w-[440px]">
            Tell us about your space and get a personalised shopping plan that's beautiful, practical, and easy to achieve.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-9">
            <a
              href="#builder"
              className="inline-flex items-center gap-2 text-[14.5px] font-semibold px-7 py-3.5 rounded-xl text-white"
              style={{ background: '#14532d', boxShadow: '0 3px 14px rgba(20,83,45,0.32)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1a6b35')}
              onMouseLeave={e => (e.currentTarget.style.background = '#14532d')}
            >
              Create My Garden Plan
              <ArrowRight size={16} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 text-[14px] font-medium text-[#374151] px-5 py-3.5 rounded-xl border border-[#e4e9e2] bg-white hover:border-[#256b28]/30 hover:text-[#256b28] transition-all"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></svg>
              See Example Plans
            </a>
          </div>

          {/* Trust row */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {trustItems.map(({ label }) => (
              <span key={label} className="flex items-center gap-1.5 text-[13px] text-[#6b7280]">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/>
                </svg>
                {label}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Garden image panel ────────────────────────────── */}
        <div className="hidden lg:block relative flex-1 overflow-hidden">
          {/* White fade on the left edge (blends text → image) */}
          <div
            className="absolute top-0 left-0 bottom-0 z-10 pointer-events-none"
            style={{
              width: 100,
              background: 'linear-gradient(to right, white 0%, rgba(255,255,255,0) 100%)',
            }}
          />

          {/* Garden scene */}
          <GardenScene />

          {/* Floating UK credibility card — bottom right */}
          <div
            className="absolute bottom-8 right-8 z-20 bg-white rounded-2xl flex items-center gap-4 px-5 py-4"
            style={{ width: 268, boxShadow: '0 8px 32px rgba(0,0,0,0.16), 0 2px 8px rgba(0,0,0,0.1)' }}
          >
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: '#f0fdf4' }}
            >
              <span className="text-2xl">🇬🇧</span>
            </div>
            <div>
              <p className="text-[13.5px] font-semibold text-[#111827] leading-tight mb-0.5">Designed for UK gardens</p>
              <p className="text-[12px] text-[#6b7280] mb-1.5">Trusted by garden lovers</p>
              <StarRow />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
