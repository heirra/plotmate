import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import type { StyleConfig } from '../types';

interface Props {
  style: StyleConfig;
}

const rationaleItems = [
  {
    key: 'productFit' as const,
    label: 'Why this product combination fits your conditions',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
    ),
  },
  {
    key: 'spatialArrangement' as const,
    label: 'Why the spatial arrangement supports your goal',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
    ),
  },
  {
    key: 'maintenanceExplanation' as const,
    label: 'Why maintenance is rated this level',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
    ),
  },
  {
    key: 'installationExplanation' as const,
    label: 'Why installation is rated this level',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 20h20"/><path d="M17 20V8l-5-6-5 6v12"/><path d="M10 20v-5h4v5"/></svg>
    ),
  },
  {
    key: 'spatialExperience' as const,
    label: 'How the layout creates this spatial experience',
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
    ),
  },
];

export default function DesignRationale({ style }: Props) {
  const [allOpen, setAllOpen] = useState(false);

  return (
    <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#f0f0ee] flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] flex items-center justify-center text-[#166534]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
          </div>
          <div>
            <span className="text-[13px] font-semibold text-[#111827]">Design Rationale</span>
            <span className="text-[11px] text-[#9ca3af] ml-2">Why this kit works for your space</span>
          </div>
        </div>
        <button
          onClick={() => setAllOpen((v) => !v)}
          className="text-[12px] font-medium text-[#166534] hover:text-[#14532d] transition-colors"
        >
          {allOpen ? 'Collapse all' : 'Expand all'}
        </button>
      </div>

      <div className="p-4 space-y-2">
        {rationaleItems.map((item) => (
          <CollapsibleItem
            key={item.key}
            icon={item.icon}
            label={item.label}
            text={style.designRationale[item.key]}
            forceOpen={allOpen}
          />
        ))}
      </div>

      {/* Key insight */}
      <div className="mx-4 mb-4 bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl px-4 py-3">
        <p className="text-[10px] font-semibold text-[#166534] uppercase tracking-wide mb-1.5">Key insight</p>
        <p className="text-[12.5px] text-[#166534] leading-relaxed">{style.aiInsight}</p>
      </div>
    </div>
  );
}

function CollapsibleItem({
  icon,
  label,
  text,
  forceOpen,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  forceOpen: boolean;
}) {
  const [localOpen, setLocalOpen] = useState(false);
  const isOpen = forceOpen || localOpen;

  return (
    <div className={`border rounded-xl overflow-hidden transition-all ${isOpen ? 'border-[#d1e8d4]' : 'border-[#e4e9e2]'}`}>
      <button
        onClick={() => setLocalOpen((v) => !v)}
        className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-[#fafaf9] transition-colors"
      >
        <span className={`flex-shrink-0 transition-colors ${isOpen ? 'text-[#166534]' : 'text-[#9ca3af]'}`}>{icon}</span>
        <span className="flex-1 text-[12.5px] font-medium text-[#374151] leading-snug">{label}</span>
        <span className="text-[#9ca3af] flex-shrink-0">
          {isOpen ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 pt-1 border-t border-[#f0f0ee] bg-[#fafaf9]">
          <p className="text-[12.5px] text-[#374151] leading-relaxed">{text}</p>
        </div>
      )}
    </div>
  );
}
