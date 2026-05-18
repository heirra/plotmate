import { useState } from 'react';
import { CheckCircle2, ArrowRight, ImageOff } from 'lucide-react';
import type { StyleConfig, GardenStyleId } from '../types';

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
          ? 'border-[#064E3B] shadow-md shadow-[#064E3B]/10'
          : 'border-[#E5E7EB] hover:border-[#064E3B]/40 hover:shadow-sm'
      }`}
    >
      <div className="relative h-28 bg-[#F8FAFC]">
        {broken ? (
          <div className="w-full h-full flex items-center justify-center">
            <ImageOff size={20} className="text-[#D1D5DB]" />
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
          <div className="absolute top-2 right-2 w-5 h-5 bg-[#064E3B] rounded-full flex items-center justify-center">
            <CheckCircle2 size={12} className="text-white" />
          </div>
        )}
      </div>
      <div className={`px-3 py-2 ${active ? 'bg-[#064E3B]/5' : 'bg-white'}`}>
        <p className={`text-[12px] font-semibold ${active ? 'text-[#064E3B]' : 'text-[#111827]'}`}>
          {style.name}
        </p>
      </div>
    </button>
  );
}

export default function StyleLibrary({ styles, activeId, onSelect }: Props) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-[#E5E7EB] flex items-center justify-between">
        <div>
          <span className="text-[13px] font-semibold text-[#111827]">Style library</span>
          <span className="text-[12px] text-[#9CA3AF] ml-2">Explore popular garden styles. You can switch anytime.</span>
        </div>
        <button className="text-[12px] font-medium text-[#064E3B] hover:text-[#043D2E] transition-colors flex items-center gap-1">
          View all styles
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
    </div>
  );
}
