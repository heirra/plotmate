/* ─────────────────────────────────────────────────────────────────
   HowItWorks — matches reference image layout:
   • Horizontal 4-step process with arrows
   • Popular plan chips + featured plan card on right
   • What's included icon grid
   • Typographic retailer brand row (not button chips)
   • 3 value proposition callouts
───────────────────────────────────────────────────────────────── */

/* ── Step icons (outline circle with inner SVG path) ─────────── */
const steps = [
  {
    n: 1,
    d: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
    title: 'Tell us about your space',
  },
  {
    n: 2,
    d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'AI creates your garden plan',
  },
  {
    n: 3,
    d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0',
    title: 'Review your shopping list',
  },
  {
    n: 4,
    d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M9 12l2 2 4-4',
    title: 'Buy from trusted UK retailers',
  },
];

const popularPlans = [
  'Small Patio', 'Rented Balcony', 'North-facing Garden',
  'Low Maintenance', 'Wildlife Friendly', 'Cottage Style',
];

/* Included items — SVG line icons + short labels */
const included = [
  {
    d: 'M3 3h18v18H3zM9 3v18M3 9h18M3 15h18',
    label: 'Custom garden layout & tips',
  },
  {
    d: 'M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7zM7 22h10',
    label: 'Plant & product recommendations',
  },
  {
    d: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 1 4 0M9 5h6M9 12l2 2 4-4',
    label: 'Easy step-by-step guide',
  },
  {
    d: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0',
    label: 'Shopping list with budget',
  },
  {
    d: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
    label: 'Care guide for long-term success',
  },
];

/* Retailers — typographic brand treatment, NOT buttons */
const retailers = [
  { name: 'Crocus',             style: { fontSize: 18, fontWeight: 800, color: '#5b21b6', letterSpacing: '-0.02em' } },
  { name: 'Thompson & Morgan',  style: { fontSize: 14, fontWeight: 700, color: '#166534', letterSpacing: '-0.01em' } },
  { name: 'Primrose',           style: { fontSize: 18, fontWeight: 800, color: '#b91c1c', letterSpacing: '-0.02em' } },
  { name: 'Sarah Raven',        style: { fontSize: 14, fontWeight: 800, color: '#7c2d12', letterSpacing: '0.04em', textTransform: 'uppercase' as const } },
  { name: 'amazon.co.uk',       style: { fontSize: 17, fontWeight: 800, color: '#1a1a1a', letterSpacing: '-0.02em' } },
];

/* Arrow connector between steps */
function Arrow() {
  return (
    <svg width="32" height="16" viewBox="0 0 32 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M1 8 H28 M24 3 L30 8 L24 13" stroke="#c8ccc6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-white" style={{ borderBottom: '1px solid #e8ebe6' }}>

      {/* ══ SECTION 1: How it works + Popular plans ════════════════ */}
      <div className="max-w-[1440px] mx-auto px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px_260px] gap-8 items-start">

          {/* ── 4-step horizontal process ── */}
          <div>
            <h2 className="text-[20px] font-bold text-[#111827] mb-8">How it works</h2>
            <div className="flex items-start gap-3">
              {steps.map((step, i) => (
                <div key={step.n} className="flex items-start gap-3">
                  {/* Step block */}
                  <div className="flex flex-col items-center text-center" style={{ width: 100 }}>
                    {/* Circle icon */}
                    <div
                      className="relative flex items-center justify-center rounded-full mb-3"
                      style={{
                        width: 60,
                        height: 60,
                        background: '#f0f7f0',
                        border: '1.5px solid #c0d8c0',
                      }}
                    >
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d={step.d}/>
                      </svg>
                      {/* Step number badge */}
                      <span
                        className="absolute flex items-center justify-center rounded-full text-white font-bold"
                        style={{
                          width: 18,
                          height: 18,
                          fontSize: 9,
                          background: '#256b28',
                          top: -4,
                          right: -4,
                        }}
                      >
                        {step.n}
                      </span>
                    </div>
                    <p style={{ fontSize: 13, fontWeight: 500, color: '#374151', lineHeight: 1.45 }}>
                      {step.title}
                    </p>
                  </div>
                  {/* Arrow between steps */}
                  {i < steps.length - 1 && (
                    <div style={{ paddingTop: 22 }}>
                      <Arrow />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── Popular plans — rounded chips ── */}
          <div
            className="rounded-2xl p-5"
            style={{ background: '#f9fafb', border: '1px solid #e8ebe6' }}
          >
            <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 14 }}>
              Popular plans
            </p>
            <div className="flex flex-wrap gap-2">
              {popularPlans.map((plan) => (
                <a
                  key={plan}
                  href="#builder"
                  className="transition-all"
                  style={{
                    fontSize: 12.5,
                    fontWeight: 500,
                    color: '#374151',
                    padding: '6px 14px',
                    borderRadius: 999,
                    background: 'white',
                    border: '1px solid #e0e4df',
                    display: 'inline-flex',
                    alignItems: 'center',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#256b28';
                    (e.currentTarget as HTMLElement).style.color = '#256b28';
                    (e.currentTarget as HTMLElement).style.background = '#f0f7f0';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = '#e0e4df';
                    (e.currentTarget as HTMLElement).style.color = '#374151';
                    (e.currentTarget as HTMLElement).style.background = 'white';
                  }}
                >
                  {plan}
                </a>
              ))}
            </div>
          </div>

          {/* ── Featured plan card ── */}
          <div
            className="rounded-2xl overflow-hidden bg-white"
            style={{ border: '1px solid #e4e9e2', boxShadow: '0 2px 14px rgba(0,0,0,0.08)' }}
          >
            <div className="flex items-start gap-3 p-4">
              <div
                className="rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  width: 72,
                  height: 72,
                  background: 'linear-gradient(135deg, #1e5c30 0%, #3d8c50 100%)',
                }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7zM7 22h10"/>
                </svg>
              </div>
              <div>
                <p style={{ fontSize: 13.5, fontWeight: 700, color: '#111827', lineHeight: 1.35, marginBottom: 4 }}>
                  Small North-facing<br />Patio Garden
                </p>
                <p style={{ fontSize: 16, fontWeight: 800, color: '#256b28' }}>from £120</p>
                <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 3 }}>
                  Low maintenance · Easy · Shade loving
                </p>
              </div>
            </div>
            <div style={{ padding: '0 16px 16px' }}>
              <a
                href="#builder"
                className="block w-full text-center font-semibold rounded-xl transition-all"
                style={{
                  padding: '10px 0',
                  fontSize: 13,
                  border: '2px solid #256b28',
                  color: '#256b28',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#256b28'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#256b28'; }}
              >
                View this plan
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SECTION 2: What's included + Retailers ════════════════ */}
      <div style={{ borderTop: '1px solid #f0f0ee' }}>
        <div className="max-w-[1440px] mx-auto px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 mb-12">

            {/* What's included — icon circles + short labels */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>
                What's <span style={{ color: '#256b28' }}>included</span> in your plan
              </h2>
              <div className="flex gap-6 flex-wrap">
                {included.map(({ d, label }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center text-center"
                    style={{ width: 88 }}
                  >
                    <div
                      className="flex items-center justify-center rounded-full mb-2.5"
                      style={{
                        width: 56,
                        height: 56,
                        background: '#f0f7f0',
                        border: '1.5px solid #c8dfc8',
                      }}
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                        <path d={d} />
                      </svg>
                    </div>
                    <p style={{ fontSize: 11.5, fontWeight: 500, color: '#374151', lineHeight: 1.4 }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Retailers — typographic brand treatment */}
            <div>
              <h2 style={{ fontSize: 20, fontWeight: 700, color: '#111827', marginBottom: 24 }}>
                Real products from <span style={{ color: '#256b28' }}>trusted UK retailers</span>
              </h2>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                {retailers.map(({ name, style }) => (
                  <span key={name} style={style}>{name}</span>
                ))}
              </div>
              <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 16, lineHeight: 1.6, maxWidth: 380 }}>
                Every product links directly to a trusted UK retailer. Buy with confidence from Crocus, Primrose, Thompson & Morgan, Sarah Raven and amazon.co.uk.
              </p>
            </div>
          </div>

          {/* 3 value propositions */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-10"
            style={{ borderTop: '1px solid #f0f0ee' }}
          >
            {[
              {
                d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
                title: 'Beginner friendly',
                desc: 'Simple plans that anyone can follow.',
              },
              {
                d: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
                title: 'Realistic & practical',
                desc: 'Plans that suit your space, time and budget.',
              },
              {
                d: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
                title: 'Beautiful & sustainable',
                desc: "Create a garden you'll love for years to come.",
              },
            ].map(({ d, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div
                  className="flex items-center justify-center rounded-2xl flex-shrink-0"
                  style={{
                    width: 52,
                    height: 52,
                    background: '#f0f7f0',
                    border: '1.5px solid #c0d8c0',
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={d}/>
                  </svg>
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 700, color: '#111827', marginBottom: 2 }}>{title}</p>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
