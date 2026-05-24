import type { StyleConfig } from '../types';

interface Props {
  style: StyleConfig;
  products: StyleConfig['products'];
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
                        <span className="text-lg flex-shrink-0 mt-0.5">{product.emoji}</span>
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
