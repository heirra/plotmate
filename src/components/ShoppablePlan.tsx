import { useState } from 'react';
import { ShoppingCart, ExternalLink, Download, Filter } from 'lucide-react';
import type { Product, ProductCategory } from '../types';

interface Props {
  products: Product[];
  totalCost: number;
  budget: number;
  budgetStatus: 'under' | 'near' | 'over';
  onUpdateQuantity: (id: string, delta: number) => void;
}

const categories: ProductCategory[] = [
  'Plants', 'Pots & Planters', 'Soil & Ground Finish', 'Lighting',
  'Furniture', 'Privacy & Structure', 'Decor', 'Tools & Care',
];

const categoryEmoji: Record<ProductCategory, string> = {
  'Plants': '🌿',
  'Pots & Planters': '🏺',
  'Soil & Ground Finish': '🪨',
  'Lighting': '💡',
  'Furniture': '🪑',
  'Privacy & Structure': '🪵',
  'Decor': '🎨',
  'Tools & Care': '✂️',
};

const budgetConfig = {
  under: { label: 'Under budget', bg: 'bg-[#ECFCCB]', text: 'text-[#064E3B]', border: 'border-[#BBF7D0]' },
  near: { label: 'Near budget', bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  over: { label: 'Over budget', bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
};

export default function ShoppablePlan({ products, totalCost, budget, budgetStatus, onUpdateQuantity }: Props) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'All'>('All');
  const cfg = budgetConfig[budgetStatus];

  const filtered = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  const presentCategories = categories.filter((c) => products.some((p) => p.category === c));

  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      {/* Header */}
      <div className="px-5 py-3.5 border-b border-[#E5E7EB] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ShoppingCart size={15} className="text-[#064E3B]" />
          <span className="text-[14px] font-semibold text-[#111827]">Shoppable Plan</span>
          <span className="text-[11px] text-[#9CA3AF] bg-[#F8FAFC] border border-[#E5E7EB] px-2 py-0.5 rounded-full">
            {products.length} items
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Filter size={13} className="text-[#9CA3AF]" />
          <span className="text-[12px] text-[#9CA3AF]">Filter by category</span>
        </div>
      </div>

      {/* Category tabs */}
      <div className="px-5 py-2.5 border-b border-[#F3F4F6] flex gap-2 overflow-x-auto scrollbar-thin">
        <button
          onClick={() => setActiveCategory('All')}
          className={`text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
            activeCategory === 'All'
              ? 'bg-[#064E3B] text-white'
              : 'text-[#6B7280] bg-[#F8FAFC] hover:bg-[#F1F5F9]'
          }`}
        >
          All
        </button>
        {presentCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-[12px] font-medium px-3 py-1 rounded-full whitespace-nowrap transition-colors flex items-center gap-1.5 ${
              activeCategory === cat
                ? 'bg-[#064E3B] text-white'
                : 'text-[#6B7280] bg-[#F8FAFC] hover:bg-[#F1F5F9]'
            }`}
          >
            <span>{categoryEmoji[cat]}</span>
            {cat}
          </button>
        ))}
      </div>

      {/* Product grid */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} onUpdateQuantity={onUpdateQuantity} />
        ))}
      </div>

      {/* Footer totals */}
      <div className="px-5 py-4 border-t border-[#E5E7EB] bg-[#F8FAFC] flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <div>
            <p className="text-[12px] text-[#6B7280]">Total estimated cost</p>
            <p className="text-[20px] font-bold text-[#111827]">£{totalCost.toFixed(2)}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`text-[12px] font-semibold px-2.5 py-1 rounded-full border ${cfg.bg} ${cfg.text} ${cfg.border}`}>
              {cfg.label}
            </span>
            <span className="text-[12px] text-[#9CA3AF]">Budget £{budget.toLocaleString()}.00</span>
          </div>
        </div>
        <div className="flex gap-3">
          <button
            className="bg-[#064E3B] text-white text-[13px] font-semibold px-5 py-2.5 rounded-lg hover:bg-[#043D2E] transition-colors flex items-center gap-2"
            onClick={() => alert('Opening retail partners directory...')}
          >
            View retail partners
            <ExternalLink size={13} />
          </button>
          <button
            className="bg-white border border-[#E5E7EB] text-[#6B7280] text-[13px] font-semibold px-4 py-2 rounded-lg hover:border-[#064E3B] hover:text-[#064E3B] transition-colors flex items-center gap-2"
            onClick={() => alert('Exporting shopping list as PDF...')}
          >
            Export shopping list
            <Download size={13} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onUpdateQuantity }: { product: Product; onUpdateQuantity: (id: string, delta: number) => void }) {
  const [showRetailers, setShowRetailers] = useState(false);

  return (
    <div className="border border-[#E5E7EB] rounded-xl overflow-hidden bg-white hover:border-[#064E3B]/30 hover:shadow-sm transition-all">
      {/* Product image area */}
      <div className="h-20 bg-[#F8FAFC] flex items-center justify-center border-b border-[#F3F4F6]">
        <span className="text-4xl">{product.emoji}</span>
      </div>

      <div className="p-3">
        <div className="mb-1">
          <p className="text-[13px] font-semibold text-[#111827] leading-tight">{product.name}</p>
          <p className="text-[11px] text-[#9CA3AF]">{product.subtitle}</p>
        </div>

        <span className="inline-block text-[10px] font-medium text-[#6B7280] bg-[#F8FAFC] border border-[#E5E7EB] px-1.5 py-0.5 rounded-full mb-2">
          {product.category}
        </span>

        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onUpdateQuantity(product.id, -1)}
              className="w-6 h-6 rounded border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#064E3B] hover:text-[#064E3B] transition-colors text-sm font-bold"
            >
              −
            </button>
            <span className="text-[13px] font-semibold text-[#111827] w-5 text-center">{product.quantity}</span>
            <button
              onClick={() => onUpdateQuantity(product.id, 1)}
              className="w-6 h-6 rounded border border-[#E5E7EB] flex items-center justify-center text-[#6B7280] hover:border-[#064E3B] hover:text-[#064E3B] transition-colors text-sm font-bold"
            >
              +
            </button>
          </div>
          <div className="text-right">
            <p className="text-[14px] font-bold text-[#111827]">£{(product.unitPrice * product.quantity).toFixed(2)}</p>
            <p className="text-[10px] text-[#9CA3AF]">£{product.unitPrice.toFixed(2)} each</p>
          </div>
        </div>

        <button
          onClick={() => setShowRetailers((v) => !v)}
          className="w-full text-[11px] text-[#064E3B] hover:text-[#043D2E] font-medium transition-colors text-left"
        >
          {showRetailers ? '▲ Hide' : '▼ Where to buy'}
        </button>

        {showRetailers && (
          <div className="mt-2 space-y-1">
            {product.retailers.map((r) => (
              <button
                key={r}
                className="w-full text-left text-[11px] text-[#6B7280] hover:text-[#064E3B] bg-[#F8FAFC] px-2 py-1 rounded-md transition-colors"
                onClick={() => alert(`Opening ${r}...`)}
              >
                → {r}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
