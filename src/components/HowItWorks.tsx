/* ─────────────────────────────────────────────────────────────────
   HowItWorks — 4-step process + popular plans + what's included
   Matches reference image layout
───────────────────────────────────────────────────────────────── */

const steps = [
  {
    num: 1,
    svgD: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10',
    title: 'Tell us about your space',
    desc: 'Enter your postcode, space type, sunlight, budget, and style.',
  },
  {
    num: 2,
    svgD: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'AI creates your garden plan',
    desc: 'Get a personalised kit: product list, placement guide, and preview.',
  },
  {
    num: 3,
    svgD: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M16 10a4 4 0 0 1-8 0',
    title: 'Review your shopping list',
    desc: 'Browse every product, adjust quantities, check total cost.',
  },
  {
    num: 4,
    svgD: 'M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z M3 6h18 M9 12l2 2 4-4',
    title: 'Buy from trusted UK retailers',
    desc: 'Each product links to Crocus, Primrose, Thompson & Morgan and more.',
  },
];

const popularPlans = [
  { icon: '🏡', label: 'Small Patio' },
  { icon: '🌿', label: 'Rented Balcony' },
  { icon: '🌲', label: 'North-facing Garden' },
  { icon: '✂️', label: 'Low Maintenance' },
  { icon: '🦔', label: 'Wildlife Friendly' },
  { icon: '🌸', label: 'Cottage Style' },
];

const included = [
  { emoji: '📐', label: 'Custom garden layout & tips' },
  { emoji: '🌱', label: 'Plant & product recommendations' },
  { emoji: '📋', label: 'Easy step-by-step guide' },
  { emoji: '🛒', label: 'Shopping list with budget' },
  { emoji: '📅', label: 'Care guide for long-term success' },
];

const retailers = ['CROCUS', 'Thompson & Morgan', 'Primrose', 'Sarah Raven', 'amazon.co.uk'];

const valueProps = [
  {
    svgD: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z M9 12l2 2 4-4',
    title: 'Beginner friendly',
    desc: 'Simple plans that anyone can follow.',
  },
  {
    svgD: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
    title: 'Realistic & practical',
    desc: 'Plans that suit your space, time and budget.',
  },
  {
    svgD: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
    title: 'Beautiful & sustainable',
    desc: "Create a garden you'll love for years to come.",
  },
];

export default function HowItWorks() {
  return (
    <div id="how-it-works">

      {/* ── Section 1: How it works + Popular plans ───────────────── */}
      <div className="bg-white" style={{ borderBottom: '1px solid #e8ebe6' }}>
        <div className="max-w-[1440px] mx-auto px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px_280px] gap-8 items-start">

            {/* Steps */}
            <div>
              <h2 className="text-[20px] font-bold text-[#111827] mb-7">How it works</h2>
              <div className="grid grid-cols-2 gap-x-8 gap-y-7">
                {steps.map((step, i) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <div className="flex flex-col items-center gap-2 flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: '#f0f7f0', border: '1px solid #c8dfc8' }}
                      >
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          {step.svgD.split(' ').length > 0 && <path d={step.svgD}/>}
                        </svg>
                      </div>
                      <span
                        className="text-[10px] font-bold text-[#9ca3af] w-5 h-5 rounded-full border border-[#e4e9e2] flex items-center justify-center"
                      >
                        {step.num}
                      </span>
                    </div>
                    {/* Arrow connector (between steps 1→2 and 3→4) */}
                    {(i === 0 || i === 2) && (
                      <svg
                        className="absolute hidden"
                        width="24"
                        height="12"
                        viewBox="0 0 24 12"
                        fill="none"
                        style={{ position: 'static' }}
                      >
                        <path d="M0 6 H20 M16 2 L22 6 L16 10" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    )}
                    <div>
                      <p className="text-[14px] font-semibold text-[#111827] mb-1">{step.title}</p>
                      <p className="text-[13px] text-[#6b7280] leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular plans */}
            <div
              className="rounded-2xl p-5"
              style={{ background: '#f9fafb', border: '1px solid #e8ebe6' }}
            >
              <p className="text-[15px] font-bold text-[#111827] mb-4">Popular plans</p>
              <div className="grid grid-cols-2 gap-2">
                {popularPlans.map(({ icon, label }) => (
                  <a
                    key={label}
                    href="#builder"
                    className="flex items-center gap-2 text-[13px] font-medium text-[#374151] px-3 py-2.5 rounded-xl bg-white transition-all"
                    style={{ border: '1px solid #e8ebe6' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#256b28'; (e.currentTarget as HTMLElement).style.color = '#256b28'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#e8ebe6'; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
                  >
                    <span className="text-base">{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>

            {/* Featured plan card */}
            <div
              className="rounded-2xl overflow-hidden bg-white"
              style={{ border: '1px solid #e8ebe6', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
            >
              <div className="flex items-center gap-3 p-4">
                <div
                  className="w-20 h-20 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #1e5c30 0%, #3d8c50 100%)' }}
                >
                  <span className="text-3xl">🌿</span>
                </div>
                <div>
                  <p className="text-[13.5px] font-semibold text-[#111827] leading-snug mb-1">
                    Small North-facing<br />Patio Garden
                  </p>
                  <p className="text-[15px] font-bold text-[#256b28]">from £120</p>
                  <p className="text-[11px] text-[#9ca3af] mt-0.5">Low maintenance · Easy · Shade loving</p>
                </div>
              </div>
              <div className="px-4 pb-4">
                <a
                  href="#builder"
                  className="block w-full text-center text-[13px] font-semibold py-2.5 rounded-xl border-2 transition-all"
                  style={{ borderColor: '#256b28', color: '#256b28' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#256b28'; (e.currentTarget as HTMLElement).style.color = 'white'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = '#256b28'; }}
                >
                  View this plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: What's included + Retailers ──────────────── */}
      <div className="bg-white" style={{ borderBottom: '1px solid #e8ebe6' }}>
        <div className="max-w-[1440px] mx-auto px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">

            {/* What's included */}
            <div>
              <h2 className="text-[20px] font-bold text-[#111827] mb-6">
                What's <span style={{ color: '#256b28' }}>included</span> in your plan
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {included.map(({ emoji, label }) => (
                  <div key={label} className="flex flex-col items-center text-center gap-2 p-4 rounded-2xl" style={{ background: '#f9fafb', border: '1px solid #e8ebe6' }}>
                    <span className="text-2xl">{emoji}</span>
                    <span className="text-[12px] font-medium text-[#374151] leading-snug">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Retailers */}
            <div>
              <h2 className="text-[20px] font-bold text-[#111827] mb-6">
                Real products from <span style={{ color: '#256b28' }}>trusted UK retailers</span>
              </h2>
              <div className="flex flex-wrap gap-3 mb-5">
                {retailers.map((name) => (
                  <div
                    key={name}
                    className="px-4 py-2.5 rounded-xl text-[13.5px] font-semibold text-[#374151]"
                    style={{ background: '#f9fafb', border: '1px solid #e8ebe6' }}
                  >
                    {name}
                  </div>
                ))}
              </div>
              <p className="text-[13px] text-[#6b7280] leading-relaxed max-w-sm">
                Every product links directly to a trusted UK retailer. Compare prices, read reviews, and buy with confidence.
              </p>
            </div>
          </div>

          {/* Value props */}
          <div
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
            style={{ borderTop: '1px solid #f0f0ee' }}
          >
            {valueProps.map(({ svgD, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                  style={{ background: '#f0f7f0', border: '1px solid #c8dfc8' }}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d={svgD}/>
                  </svg>
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-[#111827] mb-0.5">{title}</p>
                  <p className="text-[13px] text-[#6b7280] leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
