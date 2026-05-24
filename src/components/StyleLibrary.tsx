import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import type { StyleConfig, GardenStyleId } from '../types';
import { t } from '../content/copy';

interface Props {
  styles: StyleConfig[];
  activeId: GardenStyleId;
  onSelect: (id: GardenStyleId) => void;
}

function StyleCard({
  style,
  active,
  onSelect,
}: {
  style: StyleConfig;
  active: boolean;
  onSelect: () => void;
}) {
  const [broken, setBroken] = useState(false);

  return (
    <button
      onClick={onSelect}
      className={`flex-shrink-0 w-44 rounded-xl overflow-hidden border-2 transition-all text-left ${
        active
          ? 'border-[#14532d] shadow-md'
          : 'border-[#e4e9e2] hover:border-[#14532d]/40 hover:shadow-sm'
      }`}
      style={active ? { boxShadow: '0 4px 12px rgba(20,83,45,0.12)' } : undefined}
    >
      {/* Thumbnail */}
      <div className="relative h-28 bg-[#fafaf9]">
        {broken ? (
          <div className="w-full h-full flex flex-col items-center justify-center gap-1.5">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="m3 9 5-5 4 4 4-4 5 5"/>
            </svg>
            <span className="text-[9px] text-[#d1d5db] font-medium">{t.styleLibrary.noPreview}</span>
          </div>
        ) : (
          <img
            src={style.isoImage}
            alt={style.name}
            className="w-full h-full object-cover"
            onError={() => setBroken(true)}
          />
        )}
        {active && (
          <div className="absolute top-2 right-2 w-5 h-5 bg-[#14532d] rounded-full flex items-center justify-center shadow-sm">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        )}
        {/* Difficulty badge */}
        <div className={`absolute bottom-2 left-2 text-[9px] font-semibold px-1.5 py-0.5 rounded-full ${active ? 'bg-[#14532d] text-white' : 'bg-black/40 text-white'}`}>
          {style.installationDifficulty}
        </div>
      </div>

      {/* Label */}
      <div className={`px-3 py-2.5 ${active ? 'bg-[#f0fdf4]' : 'bg-white'}`}>
        <p className={`text-[12px] font-semibold leading-snug ${active ? 'text-[#14532d]' : 'text-[#111827]'}`}>
          {style.name}
        </p>
        <p className="text-[10px] text-[#9ca3af] mt-0.5">{t.styleLibrary.products(style.products.length)}</p>
      </div>
    </button>
  );
}

export default function StyleLibrary({ styles, activeId, onSelect }: Props) {
  return (
    <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      <div className="px-5 py-4 border-b border-[#f0f0ee] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#fafaf9] border border-[#e4e9e2] flex items-center justify-center">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
          <div>
            <span className="text-[13px] font-semibold text-[#111827]">{t.styleLibrary.title}</span>
            <span className="text-[11px] text-[#9ca3af] ml-2">{t.styleLibrary.subtitle}</span>
          </div>
        </div>
        <button className="text-[12px] font-medium text-[#166534] hover:text-[#14532d] transition-colors flex items-center gap-1">
          {t.styleLibrary.viewAll}
          <ArrowRight size={12} />
        </button>
      </div>
      <div className="px-5 py-4 flex gap-3 overflow-x-auto scrollbar-thin">
        {styles.map((style) => (
          <StyleCard
            key={style.id}
            style={style}
            active={style.id === activeId}
            onSelect={() => onSelect(style.id)}
          />
        ))}
      </div>
      <div className="px-5 pb-3">
        <p className="text-[11px] text-[#9ca3af]">{t.styleLibrary.switchNote}</p>
      </div>
    </div>
  );
}
