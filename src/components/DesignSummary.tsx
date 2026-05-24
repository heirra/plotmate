import type { StyleConfig, PostcodeInfo, DifficultyLevel } from '../types';
import { t } from '../content/copy';

interface Props {
  style: StyleConfig;
  postcodeInfo: PostcodeInfo;
}

const diffCfg: Record<DifficultyLevel, { dot: string; bg: string; text: string }> = {
  Easy:     { dot: '#22c55e', bg: '#f0fdf4', text: '#166534' },
  Low:      { dot: '#22c55e', bg: '#f0fdf4', text: '#166534' },
  Moderate: { dot: '#f59e0b', bg: '#fffbeb', text: '#92400e' },
  Difficult:{ dot: '#ef4444', bg: '#fef2f2', text: '#991b1b' },
  High:     { dot: '#ef4444', bg: '#fef2f2', text: '#991b1b' },
};

function DiffRow({ label, level }: { label: string; level: DifficultyLevel }) {
  const cfg = diffCfg[level];
  return (
    <div className="rounded-xl px-3 py-2.5" style={{ background: cfg.bg }}>
      <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">{label}</p>
      <div className="flex items-center gap-1.5">
        <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: cfg.dot }} />
        <span className="text-[12.5px] font-semibold" style={{ color: cfg.text }}>{t.common.difficultyLabels[level] ?? level}</span>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-0.5">{label}</p>
      <p className="text-[12px] text-[#374151] leading-relaxed">{value}</p>
    </div>
  );
}

export default function DesignSummary({ style, postcodeInfo }: Props) {
  return (
    <div className="space-y-3">
      {/* Style + difficulty card */}
      <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div className="px-4 py-3.5 border-b border-[#f0f0ee] flex items-center gap-2">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          <span className="text-[13px] font-semibold text-[#111827]">{t.designSummary.title}</span>
        </div>
        <div className="p-4 space-y-3.5">
          <p className="text-[12px] text-[#374151] leading-relaxed">{style.summary}</p>

          {/* Difficulty */}
          <div className="grid grid-cols-2 gap-2 pt-1 border-t border-[#f0f0ee]">
            <DiffRow label={t.designSummary.installation} level={style.installationDifficulty} />
            <DiffRow label={t.designSummary.maintenance} level={style.maintenanceDifficulty} />
          </div>

          {/* Key facts */}
          <div className="space-y-2.5 pt-1 border-t border-[#f0f0ee]">
            <InfoRow label={t.designSummary.materials} value={style.materialPalette} />
            <InfoRow label={t.designSummary.pathType} value={style.pathType} />
            <InfoRow label={t.designSummary.focalElement} value={style.focalElement} />
          </div>
        </div>
      </div>

      {/* UK Region card */}
      <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
        <div className="px-4 py-3.5 border-b border-[#f0f0ee] flex items-center gap-2">
          <span className="text-base">🇬🇧</span>
          <span className="text-[13px] font-semibold text-[#111827]">{t.designSummary.regionTitle}</span>
        </div>
        <div className="p-4 space-y-3">
          <div>
            <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-0.5">{t.designSummary.region}</p>
            <p className="text-[12.5px] font-semibold text-[#111827]">{postcodeInfo.region}</p>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-wide mb-0.5">{t.designSummary.climate}</p>
            <p className="text-[12px] text-[#374151] leading-relaxed">{postcodeInfo.climate}</p>
          </div>
          <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-3">
            <p className="text-[10px] font-semibold text-[#166534] uppercase tracking-wide mb-1">{t.designSummary.plantSuitability}</p>
            <p className="text-[11.5px] text-[#166534] leading-relaxed">{postcodeInfo.plantSuitability}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
