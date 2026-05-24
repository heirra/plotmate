import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/* ─── Star rating ─────────────────────────────────────────────── */
function Stars() {
  return (
    <div className="flex items-center gap-0.5 mt-1.5">
      {[1,2,3,4,5].map((i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i <= 4 ? '#f59e0b' : '#fcd34d'} stroke="none">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
      <span className="text-[13px] font-bold text-[#111827] ml-1.5">4.8/5</span>
    </div>
  );
}

/* ─── Right image panel ────────────────────────────────────────── */
function HeroImagePanel() {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <div className="hidden lg:block relative flex-1 overflow-hidden" style={{ minWidth: 0 }}>

      {/* ── Main image (or elegant placeholder) ── */}
      <div
        className="absolute inset-0"
        style={{
          /*
           * Primary: use the garden lifestyle photo you place at:
           *   public/images/hero-garden.jpg
           *
           * Fallback gradient: earthy garden tones (foliage → stone → soil)
           * This is NOT a cartoon – it uses natural photographic colour palette
           */
          backgroundImage: imgFailed
            ? 'linear-gradient(170deg, #6b8f71 0%, #8faa80 28%, #b8c8b0 48%, #c8c0aa 65%, #b8a888 100%)'
            : "url('/images/hero-garden.jpg'), linear-gradient(170deg, #6b8f71 0%, #8faa80 28%, #b8c8b0 48%, #c8c0aa 65%, #b8a888 100%)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Hidden img used only to detect 404 */}
        {!imgFailed && (
          <img
            src="/images/hero-garden.jpg"
            alt=""
            className="sr-only"
            onError={() => setImgFailed(true)}
          />
        )}

        {/* Placeholder label — only visible when image is missing */}
        {imgFailed && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3 text-center"
            style={{ zIndex: 5, maxWidth: 280 }}
          >
            <p className="text-[11px] font-semibold text-[#374151] mb-0.5">Garden photo placeholder</p>
            <p className="text-[10.5px] text-[#9ca3af] leading-snug font-mono">
              Add image to:<br />public/images/hero-garden.jpg
            </p>
          </div>
        )}
      </div>

      {/* ── White gradient fade — left edge blends into text ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(255,255,255,1) 0%, rgba(255,255,255,0.55) 18%, rgba(255,255,255,0.05) 40%, transparent 60%)',
          zIndex: 2,
        }}
      />

      {/* ── Floating UK credibility card ── */}
      <div
        className="absolute bg-white rounded-2xl flex items-center gap-4 px-5 py-4"
        style={{
          bottom: 36,
          right: 36,
          width: 280,
          zIndex: 10,
          boxShadow: '0 12px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.10)',
        }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: '#f0fdf4' }}
        >
          <span className="text-2xl leading-none">🇬🇧</span>
        </div>
        <div>
          <p className="text-[14px] font-bold text-[#111827] leading-tight">Designed for UK gardens</p>
          <p className="text-[12.5px] text-[#6b7280] mt-0.5">Trusted by garden lovers</p>
          <Stars />
        </div>
      </div>
    </div>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      className="w-full bg-white"
      style={{ borderBottom: '1px solid #e8ebe6' }}
    >
      <div
        className="max-w-[1440px] mx-auto flex"
        style={{ height: 580 }}
      >

        {/* ── LEFT: Editorial content ─────────────────────────────── */}
        <div
          className="flex flex-col justify-center px-10 lg:px-16 xl:px-20 py-10 flex-shrink-0"
          style={{ width: '46%' }}
        >

          {/* Headline — Playfair Display serif */}
          <h1
            className="font-display text-[#111827] mb-4"
            style={{
              fontSize: 'clamp(48px, 5vw, 70px)',
              fontWeight: 700,
              lineHeight: 1.02,
              letterSpacing: '-0.025em',
            }}
          >
            Your space.<br />
            Your perfect{' '}
            <span style={{ color: '#256b28' }}>garden plan.</span>
          </h1>

          {/* Sub-heading */}
          <p
            className="text-[#111827] mb-2"
            style={{ fontSize: 17, fontWeight: 700, lineHeight: 1.4 }}
          >
            AI-powered garden plans using real UK products.
          </p>

          {/* Body */}
          <p
            className="text-[#4b5563] mb-8"
            style={{ fontSize: 15, lineHeight: 1.65, maxWidth: 400 }}
          >
            Tell us about your space and get a personalised shopping plan that's beautiful, practical, and easy to achieve.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a
              href="#builder"
              className="inline-flex items-center gap-2 text-white font-semibold rounded-xl transition-colors"
              style={{
                fontSize: 14.5,
                padding: '13px 28px',
                background: '#14532d',
                boxShadow: '0 3px 16px rgba(20,83,45,0.30)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#1a6b35')}
              onMouseLeave={e => (e.currentTarget.style.background = '#14532d')}
            >
              Create My Garden Plan
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 font-medium rounded-xl transition-all"
              style={{
                fontSize: 14,
                padding: '13px 22px',
                color: '#374151',
                border: '1.5px solid #d4d8d2',
                background: 'white',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = '#256b28'; (e.currentTarget as HTMLElement).style.color = '#256b28'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = '#d4d8d2'; (e.currentTarget as HTMLElement).style.color = '#374151'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M10 8l6 4-6 4V8z" fill="currentColor"/></svg>
              See Example Plans
            </a>
          </div>

          {/* Trust row — horizontal with pipe separators */}
          <div className="flex flex-wrap items-center gap-0">
            {[
              'Real UK products',
              'Personalised for your space',
              'Easy to follow',
              'Beginner friendly',
            ].map((label, i, arr) => (
              <span key={label} className="flex items-center">
                <span className="flex items-center gap-1.5" style={{ color: '#6b7280', fontSize: 13 }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="2.5" strokeLinecap="round"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="10"/></svg>
                  {label}
                </span>
                {i < arr.length - 1 && (
                  <span style={{ color: '#d1d5db', margin: '0 14px', fontSize: 12 }}>|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Garden photo panel ───────────────────────────── */}
        <HeroImagePanel />
      </div>
    </section>
  );
}
