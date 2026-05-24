import type { StyleConfig, ProductCategory } from '../types';

interface Props {
  style: StyleConfig;
  products: StyleConfig['products'];
}

/* ── Category icon paths (same set as ShoppablePlan) ── */
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

function CategoryIcon({ category, size = 14 }: { category: ProductCategory; size?: number }) {
  const d = CAT_ICON_PATH[category] ?? 'M12 2l10 10-10 10L2 12z';
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#256b28" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}

export default function PlacementGuide({ style, products }: Props) {
  return (
    <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#f0f0ee] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] flex items-center justify-center text-[#166534]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
        </div>
        <div>
          <span className="text-[13px] font-semibold text-[#111827]">Placement Guide</span>
          <span className="text-[11px] text-[#9ca3af] ml-2">Where each product goes and why</span>
        </div>
        <span className="ml-auto text-[11px] font-medium text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-0.5 rounded-full">
          {style.placementZones.length} zones
        </span>
      </div>

      <div className="divide-y divide-[#f0f0ee]">
        {style.placementZones.map((zone, idx) => {
          const zoneProducts = products.filter((p) => zone.productIds.includes(p.id));

          return (
            <div key={zone.id} className="p-5">
              {/* Zone header */}
              <div className="flex items-start gap-3 mb-3.5">
                <div className="w-6 h-6 rounded-full bg-[#14532d] text-white text-[11px] font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-[13px] font-semibold text-[#111827]">{zone.label}</h3>
                  <p className="text-[11.5px] text-[#6b7280] mt-0.5">
                    <span className="font-medium text-[#166534]">Position: </span>
                    {zone.position}
                  </p>
                  <p className="text-[12px] text-[#374151] leading-relaxed mt-1.5">{zone.purpose}</p>
                </div>
              </div>

              {/* Products in this zone */}
              {zoneProducts.length > 0 && (
                <div className="ml-9 space-y-2">
                  {zoneProducts.map((product) => (
                    <div key={product.id} className="bg-[#fafaf9] border border-[#e4e9e2] rounded-xl px-3.5 py-3">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#f0f7f0] border border-[#e4e9e2] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CategoryIcon category={product.category} size={14} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-0.5">
                            <p className="text-[12.5px] font-semibold text-[#111827]">{product.name}</p>
                            <span className="text-[11px] font-semibold text-[#166534] flex-shrink-0">
                              {product.quantity}× · £{(product.unitPrice * product.quantity).toFixed(2)}
                            </span>
                          </div>
                          <p className="text-[11px] text-[#9ca3af] mb-1.5">{product.subtitle}</p>
                          <div className="flex items-start gap-1.5">
                            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" className="mt-0.5 flex-shrink-0"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
                            <p className="text-[11px] text-[#6b7280] leading-relaxed">{product.placementNote}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
