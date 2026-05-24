import { useState } from 'react';
import { ExternalLink, Download, ChevronDown, ChevronUp } from 'lucide-react';
import type { Product, ProductCategory } from '../types';

interface Props {
  products: Product[];
  totalCost: number;
  budget: number;
  budgetStatus: 'under' | 'near' | 'over';
  onUpdateQuantity: (id: string, delta: number) => void;
}

const CATEGORIES: ProductCategory[] = [
  'Plants', 'Pots & Planters', 'Paving & Edging', 'Soil & Ground Finish',
  'Lighting', 'Furniture', 'Privacy & Structure', 'Decor & Habitat', 'Tools & Care',
];

const CAT_EMOJI: Record<ProductCategory, string> = {
  'Plants': '🌿', 'Pots & Planters': '🏺', 'Paving & Edging': '🪨',
  'Soil & Ground Finish': '🍂', 'Lighting': '💡', 'Furniture': '🪑',
  'Privacy & Structure': '🪵', 'Decor & Habitat': '🐦', 'Tools & Care': '✂️',
};

const budgetCfg = {
  under: { label: 'Under budget', bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  near:  { label: 'Near budget',  bg: '#fffbeb', color: '#92400e', border: '#fde68a' },
  over:  { label: 'Over budget',  bg: '#fef2f2', color: '#991b1b', border: '#fecaca' },
};

function ProductRow({ product, onUpdateQuantity }: { product: Product; onUpdateQuantity: (id: string, delta: number) => void }) {
  const [showDetail, setShowDetail] = useState(false);
  const [showRetailers, setShowRetailers] = useState(false);

  return (
    <div className={`border-b border-[#f0f0ee] last:border-0 transition-colors ${showDetail ? 'bg-[#fafaf9]' : 'bg-white hover:bg-[#fafaf9]'}`}>
      <div className="flex items-center gap-3 px-5 py-3.5">
        {/* Emoji icon */}
        <div className="w-9 h-9 bg-[#fafaf9] border border-[#e4e9e2] rounded-xl flex items-center justify-center flex-shrink-0 text-lg">
          {product.emoji}
        </div>

        {/* Product info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <p className="text-[13px] font-semibold text-[#111827]">{product.name}</p>
            <span className="text-[10px] font-medium text-[#9ca3af] bg-[#f0f0ee] px-2 py-0.5 rounded-full flex-shrink-0">
              {product.placementZone}
            </span>
          </div>
          <p className="text-[11px] text-[#9ca3af] mt-0.5">{product.subtitle}</p>
        </div>

        {/* Qty controls */}
        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={() => onUpdateQuantity(product.id, -1)}
            className="w-6 h-6 rounded-lg border border-[#e4e9e2] flex items-center justify-center text-[#6b7280] hover:border-[#14532d] hover:text-[#14532d] transition-colors font-bold text-sm"
          >
            −
          </button>
          <span className="text-[13px] font-semibold text-[#111827] w-5 text-center">{product.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.id, 1)}
            className="w-6 h-6 rounded-lg border border-[#e4e9e2] flex items-center justify-center text-[#6b7280] hover:border-[#14532d] hover:text-[#14532d] transition-colors font-bold text-sm"
          >
            +
          </button>
        </div>

        {/* Price */}
        <div className="text-right flex-shrink-0 w-20">
          <p className="text-[13px] font-bold text-[#111827]">£{(product.unitPrice * product.quantity).toFixed(2)}</p>
          <p className="text-[10px] text-[#9ca3af]">£{product.unitPrice.toFixed(2)} each</p>
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setShowDetail((v) => !v)}
          className="w-7 h-7 flex items-center justify-center text-[#9ca3af] hover:text-[#6b7280] rounded-lg hover:bg-[#f0f0ee] transition-all flex-shrink-0"
        >
          {showDetail ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </button>
      </div>

      {/* Expanded placement detail */}
      {showDetail && (
        <div className="px-5 pb-4 ml-12 space-y-3">
          <div className="bg-white border border-[#e4e9e2] rounded-xl p-3.5">
            <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-1.5">Placement & Installation</p>
            <p className="text-[12px] text-[#374151] leading-relaxed">{product.placementNote}</p>
          </div>

          <div>
            <button
              onClick={() => setShowRetailers((v) => !v)}
              className="text-[12px] font-semibold text-[#166534] hover:text-[#14532d] transition-colors flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {showRetailers ? 'Hide retailers' : 'Where to buy'}
            </button>
            {showRetailers && (
              <div className="mt-2 flex flex-wrap gap-2">
                {product.retailers.map((r) => (
                  <button
                    key={r}
                    onClick={() => alert(`Opening ${r}...`)}
                    className="text-[11px] font-medium text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-1 rounded-full hover:bg-[#dcfce7] transition-colors flex items-center gap-1"
                  >
                    <ExternalLink size={10} />
                    {r}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ShoppablePlan({ products, totalCost, budget, budgetStatus, onUpdateQuantity }: Props) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
  const cfg = budgetCfg[budgetStatus];

  const presentCategories = CATEGORIES.filter((c) => products.some((p) => p.category === c));
  const filtered = activeCategory === 'All' ? products : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#f0f0ee] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] flex items-center justify-center text-[#166534]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
          </div>
          <div>
            <span className="text-[13px] font-semibold text-[#111827]">Full Shopping List</span>
            <span className="text-[11px] text-[#9ca3af] ml-2">{products.length} items · click any row for placement & retailer info</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="text-[12px] font-semibold px-4 py-2 rounded-xl text-white flex items-center gap-1.5 transition-all"
            style={{ background: '#14532d' }}
            onClick={() => alert('Opening retail partners directory...')}
            onMouseEnter={e => (e.currentTarget.style.background = '#166534')}
            onMouseLeave={e => (e.currentTarget.style.background = '#14532d')}
          >
            Retail partners <ExternalLink size={11} />
          </button>
          <button
            className="bg-white border border-[#e4e9e2] text-[#6b7280] text-[12px] font-medium px-3 py-2 rounded-xl hover:border-[#14532d] hover:text-[#14532d] transition-colors flex items-center gap-1.5"
            onClick={() => alert('Exporting shopping list as PDF...')}
          >
            Export <Download size={11} />
          </button>
        </div>
      </div>

      {/* Category filter */}
      <div className="px-5 py-3 border-b border-[#f0f0ee] flex gap-2 overflow-x-auto scrollbar-thin">
        <button
          onClick={() => setActiveCategory('All')}
          className={`text-[11.5px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
            activeCategory === 'All' ? 'bg-[#14532d] text-white' : 'text-[#6b7280] bg-[#fafaf9] border border-[#e4e9e2] hover:border-[#14532d]/40 hover:text-[#14532d]'
          }`}
        >
          All ({products.length})
        </button>
        {presentCategories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11.5px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors flex-shrink-0 ${
                activeCategory === cat ? 'bg-[#14532d] text-white' : 'text-[#6b7280] bg-[#fafaf9] border border-[#e4e9e2] hover:border-[#14532d]/40 hover:text-[#14532d]'
              }`}
            >
              <span>{CAT_EMOJI[cat]}</span>
              {cat}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${activeCategory === cat ? 'bg-white/20' : 'bg-[#e4e9e2] text-[#6b7280]'}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Product rows */}
      <div>
        {filtered.map((product) => (
          <ProductRow key={product.id} product={product} onUpdateQuantity={onUpdateQuantity} />
        ))}
      </div>

      {/* Total footer */}
      <div className="px-5 py-4 border-t border-[#e4e9e2] bg-[#fafaf9] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-[11px] text-[#9ca3af] mb-0.5">Total estimated cost</p>
            <p className="text-[24px] font-bold text-[#111827] leading-none">£{totalCost.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
              style={{ background: cfg.bg, color: cfg.color, borderColor: cfg.border }}
            >
              {cfg.label}
            </span>
            <span className="text-[11px] text-[#9ca3af]">Budget £{budget.toLocaleString()}.00</span>
          </div>
        </div>
        <p className="text-[11px] text-[#9ca3af] max-w-[260px] text-right leading-relaxed">
          Prices are indicative. Actual costs vary by retailer and availability. Always get a quote before purchasing.
        </p>
      </div>
    </div>
  );
}
