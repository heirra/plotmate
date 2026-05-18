import { CheckCircle2, ShoppingBag, ExternalLink, Download } from 'lucide-react';
import type { StyleConfig, PostcodeInfo, Product } from '../types';

interface Props {
  style: StyleConfig;
  postcodeInfo: PostcodeInfo;
  products: Product[];
  totalCost: number;
  budget: number;
  budgetStatus: 'under' | 'near' | 'over';
  onUpdateQuantity: (id: string, delta: number) => void;
}

const budgetConfig = {
  under: { label: 'Under budget', bg: 'bg-[#ECFCCB]', text: 'text-[#064E3B]', border: 'border-[#BBF7D0]' },
  near: { label: 'Near budget', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  over: { label: 'Over budget', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
};

export default function DesignSummary({ style, postcodeInfo, products, totalCost, budget, budgetStatus, onUpdateQuantity }: Props) {
  const cfg = budgetConfig[budgetStatus];

  const summaryItems = [
    { label: 'Style summary', value: style.summary },
    { label: 'Planting strategy', value: style.plantingStrategy },
    { label: 'Materials', value: style.materialPalette },
    { label: 'Plant suitability', value: postcodeInfo.plantSuitability },
    { label: 'AI design insight', value: style.aiInsight },
  ];

  return (
    <div className="space-y-4">
      {/* Design Summary card */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-[#E5E7EB] flex items-center gap-2">
          <CheckCircle2 size={14} className="text-[#064E3B]" />
          <span className="text-[13px] font-semibold text-[#111827]">Design Summary</span>
        </div>
        <div className="p-4 space-y-3">
          {summaryItems.map((item) => (
            <div key={item.label} className="flex gap-2.5">
              <CheckCircle2 size={14} className="text-[#064E3B] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[12px] font-semibold text-[#111827]">{item.label}</p>
                <p className="text-[11px] text-[#6B7280] leading-relaxed mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shoppable Plan mini */}
      <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
        <div className="px-4 py-3 border-b border-[#E5E7EB] flex items-center gap-2">
          <ShoppingBag size={14} className="text-[#6B7280]" />
          <span className="text-[13px] font-semibold text-[#111827]">Shoppable Plan</span>
        </div>
        <div className="divide-y divide-[#F3F4F6]">
          {products.slice(0, 6).map((p) => (
            <div key={p.id} className="flex items-center gap-3 px-4 py-2.5">
              <span className="text-lg flex-shrink-0">{p.emoji}</span>
              <div className="flex-1 min-w-0">
                <p className="text-[12px] font-medium text-[#111827] truncate">{p.name}</p>
                <p className="text-[11px] text-[#9CA3AF]">{p.subtitle}</p>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <button
                  onClick={() => onUpdateQuantity(p.id, -1)}
                  className="w-5 h-5 rounded border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#064E3B] hover:text-[#064E3B] transition-colors text-[11px] font-bold"
                >
                  −
                </button>
                <span className="text-[12px] font-semibold text-[#111827] w-4 text-center">{p.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(p.id, 1)}
                  className="w-5 h-5 rounded border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#064E3B] hover:text-[#064E3B] transition-colors text-[11px] font-bold"
                >
                  +
                </button>
              </div>
              <span className="text-[12px] font-semibold text-[#111827] w-14 text-right flex-shrink-0">
                £{(p.unitPrice * p.quantity).toFixed(2)}
              </span>
            </div>
          ))}
        </div>

        <div className="px-4 py-3 border-t border-[#E5E7EB] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[12px] font-semibold text-[#111827]">Total estimated cost</span>
            <span className="text-[14px] font-bold text-[#111827]">£{totalCost.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
              {cfg.label}
            </span>
            <span className="text-[11px] text-[#9CA3AF]">Budget £{budget.toLocaleString()}.00</span>
          </div>
        </div>

        <div className="px-4 pb-4 space-y-2">
          <button
            className="w-full bg-[#064E3B] text-white text-[12px] font-semibold py-2.5 rounded-lg hover:bg-[#043D2E] transition-colors flex items-center justify-center gap-2"
            onClick={() => alert('Opening retail partners directory...')}
          >
            View retail partners
            <ExternalLink size={12} />
          </button>
          <button
            className="w-full bg-white border border-[#E5E7EB] text-[#6B7280] text-[12px] font-semibold py-2 rounded-lg hover:border-[#064E3B] hover:text-[#064E3B] transition-colors flex items-center justify-center gap-2"
            onClick={() => alert('Exporting shopping list as PDF...')}
          >
            Export shopping list
            <Download size={12} />
          </button>
        </div>
      </div>
    </div>
  );
}
