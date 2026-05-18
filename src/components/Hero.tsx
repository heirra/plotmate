import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full bg-white py-12 px-6 border-b border-[#E5E7EB]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-8">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#ECFCCB] text-[#064E3B] text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
            <Sparkles size={12} />
            AI-powered garden planning for UK homes
          </div>
          <h1 className="text-[42px] font-bold text-[#111827] leading-tight tracking-tight mb-3">
            Design your UK garden.<br />
            Preview it. Shop the list.
          </h1>
          <p className="text-[#6B7280] text-lg leading-relaxed mb-6">
            Enter your outdoor space conditions and style preferences. Plotmate creates a complete garden plan with a 2D sketch, 3D preview, and a shoppable product list — tailored to UK climates.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#builder"
              className="bg-[#064E3B] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#043D2E] transition-colors flex items-center gap-2"
            >
              Start designing
              <ArrowRight size={15} />
            </a>
            <a
              href="#builder"
              className="text-sm font-medium text-[#6B7280] hover:text-[#111827] transition-colors"
            >
              See example gardens →
            </a>
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
          {[
            { label: 'Garden styles', value: '8' },
            { label: 'UK regions', value: '6' },
            { label: 'Products', value: '60+' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl px-6 py-4">
              <div className="text-2xl font-bold text-[#064E3B]">{stat.value}</div>
              <div className="text-xs text-[#6B7280] mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
