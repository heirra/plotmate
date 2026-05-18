import { useState } from 'react';
import { Maximize2, RotateCcw, ImageOff, LayoutGrid, Box } from 'lucide-react';
import type { StyleConfig } from '../types';

interface Props {
  style: StyleConfig;
}

function ImageCard({
  src,
  label,
  icon,
  actionLabel,
  styleName,
  imageType,
}: {
  src: string;
  label: string;
  icon: React.ReactNode;
  actionLabel: string;
  styleName: string;
  imageType: 'plan' | 'iso';
}) {
  const [broken, setBroken] = useState(false);
  const [key, setKey] = useState(0);

  const expectedPath = imageType === 'plan'
    ? `public/styles/${styleName}/plan-2d.png`
    : `public/styles/${styleName}/preview-isometric.png`;

  return (
    <div className="flex-1 bg-[#F8FAFC] border border-[#E5E7EB] rounded-xl overflow-hidden">
      {/* Card header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#E5E7EB] bg-white">
        <div className="flex items-center gap-2 text-[12px] font-semibold text-[#6B7280]">
          {icon}
          {label}
        </div>
        <button
          onClick={() => { setKey((k) => k + 1); setBroken(false); }}
          className="text-[12px] font-medium text-[#6B7280] hover:text-[#064E3B] flex items-center gap-1.5 transition-colors"
        >
          {actionLabel}
          <Maximize2 size={12} />
        </button>
      </div>

      {/* Image area */}
      <div className="relative w-full h-[280px] flex items-center justify-center">
        {broken ? (
          <div className="flex flex-col items-center gap-3 text-center px-6">
            <ImageOff size={32} className="text-[#D1D5DB]" />
            <div>
              <p className="text-[13px] font-semibold text-[#6B7280]">Image asset missing</p>
              <p className="text-[11px] text-[#9CA3AF] mt-1 font-mono">Add file: {expectedPath}</p>
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
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-[#E5E7EB]">
        <div>
          <h2 className="text-[15px] font-semibold text-[#111827]">{style.title}</h2>
          <p className="text-[12px] text-[#6B7280] mt-0.5">{style.concept}</p>
        </div>
        <button className="flex items-center gap-1.5 text-[12px] text-[#6B7280] hover:text-[#064E3B] transition-colors">
          <RotateCcw size={12} />
          Regenerate
        </button>
      </div>

      <div className="p-4 flex gap-3">
        <ImageCard
          src={style.planImage}
          label="2D Sketch Plan"
          icon={<LayoutGrid size={13} />}
          actionLabel="View full size"
          styleName={style.id}
          imageType="plan"
        />
        <ImageCard
          src={style.isoImage}
          label="3D Isometric Preview"
          icon={<Box size={13} />}
          actionLabel="View 3D"
          styleName={style.id}
          imageType="iso"
        />
      </div>
    </div>
  );
}
