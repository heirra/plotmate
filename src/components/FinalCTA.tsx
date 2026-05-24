import { ArrowRight } from 'lucide-react';

const features = [
  '8 garden styles',
  'UK climate-matched plants',
  'Instant shopping list',
  'No signup required',
];

interface Props {
  onStart?: () => void;
}

export default function FinalCTA({ onStart }: Props) {
  return (
    <section className="w-full py-20 px-6" style={{ background: '#14532d' }}>
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white text-[12px] font-semibold px-3.5 py-1.5 rounded-full mb-6">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#86efac" stroke="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          Free to use · No account needed
        </div>

        {/* Headline */}
        <h2 className="font-display text-[38px] leading-[1.15] tracking-tight text-white mb-4">
          Your garden, designed<br />in minutes.
        </h2>

        <p className="text-[17px] leading-relaxed mb-8 max-w-xl mx-auto" style={{ color: 'rgba(187,247,208,0.9)' }}>
          Garden Vibe AI helps UK homeowners design beautiful outdoor spaces with confidence — without hiring a garden designer.
        </p>

        {/* CTAs */}
        <div className="flex items-center justify-center gap-4 mb-10">
          <button
            onClick={onStart}
            className="bg-white text-[#14532d] text-[14px] font-semibold px-6 py-3 rounded-xl hover:bg-[#f0fdf4] transition-colors flex items-center gap-2"
            style={{ border: 'none', cursor: 'pointer' }}
          >
            Start your free design
            <ArrowRight size={15} />
          </button>
          <button
            onClick={onStart}
            className="text-[14px] font-medium hover:opacity-100 transition-opacity flex items-center gap-1.5"
            style={{ color: 'rgba(187,247,208,0.8)', background: 'none', border: 'none', cursor: 'pointer' }}
          >
            See example gardens
            <ArrowRight size={13} />
          </button>
        </div>

        {/* Feature list */}
        <div className="flex items-center justify-center gap-6 flex-wrap">
          {features.map((item) => (
            <div key={item} className="flex items-center gap-1.5" style={{ color: 'rgba(187,247,208,0.85)' }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="#86efac" stroke="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01" fill="none" stroke="#86efac" strokeWidth="2.5" strokeLinecap="round"/></svg>
              <span className="text-[12.5px] font-medium">{item}</span>
            </div>
          ))}
        </div>

        {/* Retailer note */}
        <p className="mt-8 text-[11.5px]" style={{ color: 'rgba(187,247,208,0.55)' }}>
          Real UK products sourced from Crocus, Thompson & Morgan, Primrose, Sarah Raven and more.
        </p>
      </div>
    </section>
  );
}
