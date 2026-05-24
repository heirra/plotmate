import type { StyleConfig, DifficultyLevel } from '../types';
import { t } from '../content/copy';

interface Props {
  style: StyleConfig;
  totalCost: number;
  budget: number;
  budgetStatus: 'under' | 'near' | 'over';
}

const diffCfg: Record<DifficultyLevel, { dot: string; label: string; bg: string; text: string }> = {
  Easy:     { dot: '#22c55e', label: 'Easy',     bg: '#f0fdf4', text: '#166534' },
  Low:      { dot: '#22c55e', label: 'Low',      bg: '#f0fdf4', text: '#166534' },
  Moderate: { dot: '#f59e0b', label: 'Moderate', bg: '#fffbeb', text: '#92400e' },
  Difficult:{ dot: '#ef4444', label: 'Difficult',bg: '#fef2f2', text: '#991b1b' },
  High:     { dot: '#ef4444', label: 'High',     bg: '#fef2f2', text: '#991b1b' },
};

const budgetCfg = {
  under: { label: t.common.budgetStatus.under, dot: '#22c55e', bg: '#f0fdf4', text: '#166534', border: '#bbf7d0', barColor: '#16a34a' },
  near:  { label: t.common.budgetStatus.near,  dot: '#f59e0b', bg: '#fffbeb', text: '#92400e', border: '#fde68a', barColor: '#d97706' },
  over:  { label: t.common.budgetStatus.over,  dot: '#ef4444', bg: '#fef2f2', text: '#991b1b', border: '#fecaca', barColor: '#dc2626' },
};

function DifficultyPill({ level, label }: { level: DifficultyLevel; label: string }) {
  const cfg = diffCfg[level];
  return (
    <div className="flex-1 rounded-2xl px-4 py-3.5" style={{ background: cfg.bg }}>
      <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-1.5">{label}</p>
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: cfg.dot }} />
        <span className="text-[14px] font-bold" style={{ color: cfg.text }}>{t.common.difficultyLabels[level] ?? level}</span>
      </div>
    </div>
  );
}

export default function KitOverview({ style, totalCost, budget, budgetStatus }: Props) {
  const bcfg = budgetCfg[budgetStatus];
  const barPct = Math.min((totalCost / budget) * 100, 100);
  const remaining = budget - totalCost;

  const catMap = style.products.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + p.quantity;
    return acc;
  }, {});

  const plantCount = style.products.filter((p) => p.category === 'Plants').length;

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: '1px solid #e4e9e2', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
    >
      {/* Header band */}
      <div className="px-6 py-5 border-b border-[#f0f0ee]">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-[10.5px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-1.5">{t.kitOverview.selectedKit}</p>
            <h2 className="font-display text-[22px] font-semibold text-[#111827] leading-tight mb-1">{style.title}</h2>
            <p className="text-[13px] text-[#6b7280] leading-relaxed max-w-xl">{style.concept}</p>
          </div>
          <span className="text-[11px] font-semibold text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-3 py-1.5 rounded-full flex-shrink-0 whitespace-nowrap">
            {style.products.length} products
          </span>
        </div>
      </div>

      <div className="p-6 space-y-6">

        {/* ── Budget section ───────────────────────────────────────── */}
        <div>
          <div className="flex items-end justify-between mb-3">
            <div>
              <p className="text-[10.5px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-1">{t.kitOverview.estimatedCost}</p>
              <p className="text-[36px] font-bold text-[#111827] leading-none tracking-tight">
                £{totalCost.toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <span
                className="text-[11.5px] font-semibold px-3 py-1.5 rounded-full border"
                style={{ background: bcfg.bg, color: bcfg.text, borderColor: bcfg.border }}
              >
                ● {bcfg.label}
              </span>
              <span className="text-[11.5px] text-[#9ca3af]">{t.kitOverview.ofBudget(budget.toLocaleString())}</span>
            </div>
          </div>

          {/* Budget bar */}
          <div className="w-full h-2 bg-[#f0f0ee] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{ width: `${barPct}%`, background: bcfg.barColor }}
            />
          </div>

          {budgetStatus === 'under' && remaining > 0 && (
            <p className="text-[12px] text-[#166534] mt-2 font-medium">
              {t.kitOverview.remainingMsg(remaining.toFixed(2))}
            </p>
          )}
          {budgetStatus === 'over' && (
            <p className="text-[12px] text-[#dc2626] mt-2 font-medium">
              {t.kitOverview.overMsg(Math.abs(remaining).toFixed(2))}
            </p>
          )}
        </div>

        {/* ── Difficulty + Zones ───────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3">
          <DifficultyPill level={style.installationDifficulty} label={t.kitOverview.installation} />
          <DifficultyPill level={style.maintenanceDifficulty} label={t.kitOverview.maintenance} />
          <div className="flex-1 rounded-2xl px-4 py-3.5 bg-[#fafaf9] border border-[#e4e9e2]">
            <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-1.5">{t.kitOverview.zones}</p>
            <div className="flex items-center gap-1.5">
              <span className="text-[22px] font-bold text-[#111827]">{style.placementZones.length}</span>
              <span className="text-[12px] text-[#6b7280]">{t.kitOverview.areas}</span>
            </div>
          </div>
        </div>

        {/* ── Spatial experience ───────────────────────────────────── */}
        <div className="rounded-2xl bg-[#fafaf9] border border-[#e4e9e2] px-5 py-4">
          <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-1.5">{t.kitOverview.spatialExp}</p>
          <p className="text-[13.5px] font-medium text-[#374151] leading-relaxed">{style.spatialExperience}</p>
        </div>

        {/* ── Kit composition ─────────────────────────────────────── */}
        <div>
          <p className="text-[10px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-2.5">{t.kitOverview.whatsInKit}</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(catMap).map(([cat, qty]) => (
              <span
                key={cat}
                className="text-[12px] font-medium px-3 py-1.5 rounded-full border"
                style={{ background: '#f9fafb', color: '#374151', borderColor: '#e4e9e2' }}
              >
                {qty}× {cat}
              </span>
            ))}
          </div>
        </div>

        {/* ── Quick stats ─────────────────────────────────────────── */}
        <div className="pt-5 border-t border-[#f0f0ee] grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-[22px] font-bold text-[#14532d]">{style.products.length}</p>
            <p className="text-[10.5px] text-[#9ca3af] mt-0.5">{t.kitOverview.products}</p>
          </div>
          <div>
            <p className="text-[22px] font-bold text-[#14532d]">{plantCount}</p>
            <p className="text-[10.5px] text-[#9ca3af] mt-0.5">{t.kitOverview.plantSpecies}</p>
          </div>
          <div>
            <p className="text-[22px] font-bold text-[#14532d]">{style.placementZones.length}</p>
            <p className="text-[10.5px] text-[#9ca3af] mt-0.5">{t.kitOverview.layoutZones}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
