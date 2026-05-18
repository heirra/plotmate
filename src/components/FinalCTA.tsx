import { ArrowRight, Leaf, Star } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="w-full bg-[#064E3B] py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
          <Leaf size={12} />
          Free to use · No account needed
        </div>
        <h2 className="text-[36px] font-bold text-white leading-tight tracking-tight mb-4">
          Your garden, designed in minutes.
        </h2>
        <p className="text-green-200 text-[17px] leading-relaxed mb-8 max-w-xl mx-auto">
          Plotmate helps UK homeowners design beautiful outdoor spaces with confidence — without hiring a garden designer.
        </p>

        <div className="flex items-center justify-center gap-4 mb-10">
          <a
            href="#builder"
            className="bg-white text-[#064E3B] text-[14px] font-semibold px-6 py-3 rounded-lg hover:bg-[#ECFCCB] transition-colors flex items-center gap-2"
          >
            Start your free design
            <ArrowRight size={15} />
          </a>
          <a
            href="#builder"
            className="text-white/80 text-[14px] font-medium hover:text-white transition-colors"
          >
            See example gardens →
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-green-200 text-[13px]">
          {[
            '8 garden styles',
            'UK climate-matched plants',
            'Instant shopping list',
            'No signup required',
          ].map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <Star size={11} className="fill-green-300 text-green-300" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
