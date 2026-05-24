import { useState } from 'react';
import { ExternalLink, Download, ChevronDown, ChevronUp } from 'lucide-react';
import type { Product, ProductCategory } from '../types';
import { t } from '../content/copy';

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

/* ── Category SVG icon paths (24×24 viewBox, lucide-style stroke icons) ── */
const CAT_ICON_PATH: Record<ProductCategory, string> = {
  'Plants':              'M12 22V12M12 12C12 12 7 9 7 5a5 5 0 0 1 10 0c0 4-5 7-5 7zM7 22h10',
  'Pots & Planters':     'M8 22h8M9 22V17M15 22V17M6 17h12M7 10h10l-1 7H8l-1-7zM9 10V7a3 3 0 0 1 6 0v3',
  'Paving & Edging':     'M3 3h8v8H3zM13 3h8v8h-8zM3 13h8v8H3zM13 13h8v8h-8z',
  'Soil & Ground Finish':'M2 20h20M6 20V10l6-6 6 6v10M10 20v-6h4v6',
  'Lighting':            'M9 18h6M10 22h4M12 2a7 7 0 0 1 7 7c0 2.5-1.3 4.7-3.2 6H8.2A7 7 0 0 1 5 9a7 7 0 0 1 7-7z',
  'Furniture':           'M4 19V9a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v10M4 19h16M4 19l-1 2M20 19l1 2M8 9V7a4 4 0 0 1 8 0v2',
  'Privacy & Structure': 'M3 3h4v18H3zM10 3h4v18h-4zM17 3h4v18h-4z',
  'Decor & Habitat':     'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z',
  'Tools & Care':        'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z',
};

function CategoryIcon({ category, size = 14, color = 'currentColor' }: { category: ProductCategory; size?: number; color?: string }) {
  const d = CAT_ICON_PATH[category] ?? 'M12 2l10 10-10 10L2 12z';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={d} />
    </svg>
  );
}

const budgetCfg = {
  under: { label: t.common.budgetStatus.under, bg: '#f0fdf4', color: '#166534', border: '#bbf7d0' },
  near:  { label: t.common.budgetStatus.near,  bg: '#fffbeb', color: '#92400e', border: '#fde68a' },
  over:  { label: t.common.budgetStatus.over,  bg: '#fef2f2', color: '#991b1b', border: '#fecaca' },
};

function ProductRow({ product, onUpdateQuantity }: { product: Product; onUpdateQuantity: (id: string, delta: number) => void }) {
  const [showDetail, setShowDetail] = useState(false);
  const [showRetailers, setShowRetailers] = useState(false);

  return (
    <div className={`border-b border-[#f0f0ee] last:border-0 transition-colors ${showDetail ? 'bg-[#fafaf9]' : 'bg-white hover:bg-[#fafaf9]'}`}>
      <div className="flex items-center gap-3 px-5 py-3.5">
        {/* Category icon */}
        <div className="w-9 h-9 bg-[#f0f7f0] border border-[#e4e9e2] rounded-xl flex items-center justify-center flex-shrink-0 text-[#256b28]">
          <CategoryIcon category={product.category} size={15} color="#256b28" />
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
            className="w-6 h-6 rounded-lg border border-[#e4e9e2] flex items-center justify-center text-[#6b7280] hover:border-[#256b28] hover:text-[#256b28] transition-colors font-bold text-sm"
          >
            −
          </button>
          <span className="text-[13px] font-semibold text-[#111827] w-5 text-center">{product.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(product.id, 1)}
            className="w-6 h-6 rounded-lg border border-[#e4e9e2] flex items-center justify-center text-[#6b7280] hover:border-[#256b28] hover:text-[#256b28] transition-colors font-bold text-sm"
          >
            +
          </button>
        </div>

        {/* Price */}
        <div className="text-right flex-shrink-0 w-20">
          <p className="text-[13px] font-bold text-[#111827]">£{(product.unitPrice * product.quantity).toFixed(2)}</p>
          <p className="text-[10px] text-[#9ca3af]">£{product.unitPrice.toFixed(2)} {t.shopping.each}</p>
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
            <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-1.5">{t.shopping.placementInstallation}</p>
            <p className="text-[12px] text-[#374151] leading-relaxed">{product.placementNote}</p>
          </div>

          <div>
            <button
              onClick={() => setShowRetailers((v) => !v)}
              className="text-[12px] font-semibold text-[#166534] hover:text-[#14532d] transition-colors flex items-center gap-1.5"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              {showRetailers ? t.shopping.hideRetailers : t.shopping.whereToBuy}
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
            <span className="text-[13px] font-semibold text-[#111827]">{t.shopping.title}</span>
            <span className="text-[11px] text-[#9ca3af] ml-2">{t.shopping.subtitle(products.length)}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="text-[12px] font-semibold px-4 py-2 rounded-xl text-white flex items-center gap-1.5 transition-all"
            style={{ background: '#256b28' }}
            onClick={() => alert('Opening retail partners directory...')}
            onMouseEnter={e => (e.currentTarget.style.background = '#1e5c23')}
            onMouseLeave={e => (e.currentTarget.style.background = '#256b28')}
          >
            {t.shopping.retailPartners} <ExternalLink size={11} />
          </button>
          <button
            className="bg-white border border-[#e4e9e2] text-[#6b7280] text-[12px] font-medium px-3 py-2 rounded-xl hover:border-[#256b28] hover:text-[#256b28] transition-colors flex items-center gap-1.5"
            onClick={() => alert('Exporting shopping list as PDF...')}
          >
            {t.shopping.export} <Download size={11} />
          </button>
        </div>
      </div>

      {/* Category filter */}
      <div className="px-5 py-3 border-b border-[#f0f0ee] flex gap-2 overflow-x-auto scrollbar-thin">
        <button
          onClick={() => setActiveCategory('All')}
          className={`text-[11.5px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap transition-colors flex-shrink-0 ${
            activeCategory === 'All' ? 'bg-[#256b28] text-white' : 'text-[#6b7280] bg-[#fafaf9] border border-[#e4e9e2] hover:border-[#256b28]/40 hover:text-[#256b28]'
          }`}
        >
          {t.shopping.allFilter(products.length)}
        </button>
        {presentCategories.map((cat) => {
          const count = products.filter((p) => p.category === cat).length;
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11.5px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap flex items-center gap-1.5 transition-colors flex-shrink-0 ${
                isActive ? 'bg-[#256b28] text-white' : 'text-[#6b7280] bg-[#fafaf9] border border-[#e4e9e2] hover:border-[#256b28]/40 hover:text-[#256b28]'
              }`}
            >
              <CategoryIcon category={cat} size={11} color={isActive ? 'white' : '#6b7280'} />
              {cat}
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20' : 'bg-[#e4e9e2] text-[#6b7280]'}`}>
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
            <p className="text-[11px] text-[#9ca3af] mb-0.5">{t.shopping.totalCost}</p>
            <p className="text-[24px] font-bold text-[#111827] leading-none">£{totalCost.toFixed(2)}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full border"
              style={{ background: cfg.bg, color: cfg.color, borderColor: cfg.border }}
            >
              {cfg.label}
            </span>
            <span className="text-[11px] text-[#9ca3af]">{t.shopping.budgetLabel(`${budget.toLocaleString()}.00`)}</span>
          </div>
        </div>
        <p className="text-[11px] text-[#9ca3af] max-w-[260px] text-right leading-relaxed">
          {t.shopping.disclaimer}
        </p>
      </div>
    </div>
  );
}
