import { useState } from 'react';
import { RotateCcw } from 'lucide-react';
import type { StyleConfig } from '../types';

interface Props {
  style: StyleConfig;
}

function ImageCard({
  src,
  label,
  icon,
  styleName,
  imageType,
}: {
  src: string;
  label: string;
  icon: React.ReactNode;
  styleName: string;
  imageType: 'plan' | 'iso';
}) {
  const [broken, setBroken] = useState(false);
  const [key, setKey] = useState(0);

  const expectedPath = imageType === 'plan'
    ? `public/styles/${styleName}/plan-2d.png`
    : `public/styles/${styleName}/preview-isometric.png`;

  return (
    <div className="flex-1 bg-[#fafaf9] border border-[#e4e9e2] rounded-xl overflow-hidden">
      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#f0f0ee] bg-white">
        <div className="flex items-center gap-2 text-[12px] font-medium text-[#6b7280]">
          {icon}
          {label}
        </div>
        <button
          onClick={() => { setKey((k) => k + 1); setBroken(false); }}
          className="text-[11px] font-medium text-[#9ca3af] hover:text-[#166534] flex items-center gap-1 transition-colors"
        >
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/></svg>
          View full size
        </button>
      </div>

      {/* Image area */}
      <div className="relative w-full h-[260px] flex items-center justify-center">
        {broken ? (
          <div className="flex flex-col items-center gap-3 text-center px-6">
            {/* Placeholder illustration */}
            <div className="w-16 h-16 rounded-2xl bg-[#f0f0ee] flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#d1d5db" strokeWidth="1.5" strokeLinecap="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="m3 9 5-5 4 4 4-4 5 5"/>
                <circle cx="8.5" cy="8.5" r="1.5" fill="#d1d5db" stroke="none"/>
              </svg>
            </div>
            <div>
              <p className="text-[12.5px] font-semibold text-[#6b7280]">Preview image not added yet</p>
              <p className="text-[11px] text-[#9ca3af] mt-1 font-mono leading-relaxed">{expectedPath}</p>
            </div>
          </div>
        ) : (
          <img
            key={key}
            src={src}
            alt={label}
            className="w-full h-full object-cover"
            onError={() => setBroken(true)}
          />
        )}
      </div>
    </div>
  );
}

export default function PreviewPanel({ style }: Props) {
  return (
    <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0ee]">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#fafaf9] border border-[#e4e9e2] flex items-center justify-center text-[#9ca3af]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="m3 9 5-5 4 4 4-4 5 5"/></svg>
          </div>
          <div>
            <span className="text-[13px] font-semibold text-[#111827]">Visual Preview</span>
            <span className="text-[11px] text-[#9ca3af] ml-2">Supporting reference — layout is the primary guide</span>
          </div>
        </div>
        <button className="flex items-center gap-1.5 text-[12px] font-medium text-[#9ca3af] hover:text-[#6b7280] transition-colors">
          <RotateCcw size={12} />
          Regenerate
        </button>
      </div>

      <div className="p-4 flex gap-3">
        <ImageCard
          src={style.planImage}
          label="2D Sketch Plan"
          icon={
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
          }
          styleName={style.id}
          imageType="plan"
        />
        <ImageCard
          src={style.isoImage}
          label="3D Isometric Preview"
          icon={
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
          }
          styleName={style.id}
          imageType="iso"
        />
      </div>

      {/* Disclaimer */}
      <div className="mx-4 mb-4 px-3 py-2 rounded-lg bg-[#fafaf9] border border-[#f0f0ee]">
        <p className="text-[11px] text-[#9ca3af] leading-relaxed">
          These visuals are illustrative references only. Refer to the Placement Guide above for exact product positions and installation instructions.
        </p>
      </div>
    </div>
  );
}
