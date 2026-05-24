import type { AppState, SpaceType, MaintenanceLevel, Sunlight, MainGoal } from '../types';

interface Props {
  state: AppState;
  onChange: (patch: Partial<AppState>) => void;
}

const spaceTypes: SpaceType[] = ['Back garden', 'Front garden', 'Patio', 'Courtyard', 'Balcony', 'Side return'];
const maintenanceLevels: MaintenanceLevel[] = ['Low', 'Moderate', 'High'];
const sunlightOptions: Sunlight[] = ['Full sun', 'Part shade', 'Mostly shade'];
const mainGoals: MainGoal[] = ['Relaxing', 'Outdoor Dining', 'Low Maintenance', 'Curb Appeal', 'Pet Friendly', 'Wildlife Friendly', 'Privacy'];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[10.5px] font-semibold text-[#9ca3af] uppercase tracking-widest mb-1.5">
      {children}
    </p>
  );
}

const fieldCls = "w-full text-[13px] border border-[#e4e9e2] rounded-xl px-3.5 py-2.5 bg-white text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#166534]/20 focus:border-[#166534] transition-all placeholder-[#9ca3af]";

export default function ProjectSettings({ state, onChange }: Props) {
  return (
    <div
      className="bg-white rounded-2xl overflow-hidden"
      style={{ border: '1px solid #e4e9e2', boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
    >
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#f0f0ee] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] border border-[#bbf7d0] flex items-center justify-center text-[#166534] flex-shrink-0">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.07 4.93l-1.41 1.41M4.93 4.93l1.41 1.41M12 2v2M12 20v2M20 12h2M2 12h2M19.07 19.07l-1.41-1.41M4.93 19.07l1.41-1.41"/>
          </svg>
        </div>
        <div>
          <p className="text-[12.5px] font-semibold text-[#111827] leading-none">Garden settings</p>
          <p className="text-[10.5px] text-[#9ca3af] mt-0.5">Your plan updates live</p>
        </div>
      </div>

      <div className="p-5 space-y-5">
        {/* Postcode */}
        <div>
          <Label>Postcode area</Label>
          <input
            type="text"
            value={state.postcodeArea}
            onChange={(e) => onChange({ postcodeArea: e.target.value })}
            placeholder="SW1A, BN1, M1…"
            className={fieldCls}
          />
          <p className="text-[11px] text-[#9ca3af] mt-1.5 flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>
            Personalises plant picks for your region
          </p>
        </div>

        {/* Space Type */}
        <div>
          <Label>Space type</Label>
          <select value={state.spaceType} onChange={(e) => onChange({ spaceType: e.target.value as SpaceType })} className={fieldCls}>
            {spaceTypes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Garden Style */}
        <div>
          <Label>Garden style</Label>
          <select
            value={state.gardenStyleId}
            onChange={(e) => onChange({ gardenStyleId: e.target.value as AppState['gardenStyleId'] })}
            className={fieldCls}
          >
            <option value="cottage">Cottage Garden</option>
            <option value="modern-courtyard">Modern Courtyard</option>
            <option value="wildlife">Wildlife Garden</option>
            <option value="mediterranean">Mediterranean Patio</option>
            <option value="low-maintenance">Low-Maintenance Minimal</option>
            <option value="naturalistic">Naturalistic Garden</option>
            <option value="korean-zen">Korean Zen</option>
            <option value="family-friendly">Family-Friendly Garden</option>
          </select>
        </div>

        {/* Maintenance */}
        <div>
          <Label>Maintenance level</Label>
          <div className="grid grid-cols-3 gap-1.5">
            {maintenanceLevels.map((m) => (
              <button
                key={m}
                onClick={() => onChange({ maintenanceLevel: m })}
                className={`text-[12px] font-semibold py-2.5 rounded-xl border transition-all ${
                  state.maintenanceLevel === m
                    ? 'bg-[#14532d] text-white border-[#14532d]'
                    : 'bg-white text-[#6b7280] border-[#e4e9e2] hover:border-[#bbf7d0] hover:text-[#14532d]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Sunlight */}
        <div>
          <Label>Sunlight</Label>
          <select value={state.sunlight} onChange={(e) => onChange({ sunlight: e.target.value as Sunlight })} className={fieldCls}>
            {sunlightOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
          <p className="text-[11px] text-[#9ca3af] mt-1.5">
            {state.sunlight === 'Full sun' ? '6+ hours direct sun' : state.sunlight === 'Part shade' ? '3–6 hours direct sun' : 'Under 3 hours direct sun'}
          </p>
        </div>

        {/* Budget */}
        <div>
          <Label>Budget</Label>
          <div className="flex items-center justify-between mb-2.5">
            <span className="text-[22px] font-bold text-[#111827] leading-none">
              £{state.budget >= 1000 ? `${(state.budget / 1000).toFixed(1)}k` : state.budget}
            </span>
            <span className="text-[11px] text-[#9ca3af]">£500 – £10,000+</span>
          </div>
          <input
            type="range"
            min={500}
            max={10000}
            step={100}
            value={state.budget}
            onChange={(e) => onChange({ budget: Number(e.target.value) })}
            className="w-full"
          />
          <div className="flex justify-between mt-1.5">
            <span className="text-[10.5px] text-[#9ca3af]">£500</span>
            <span className="text-[10.5px] text-[#9ca3af]">£10,000+</span>
          </div>
        </div>

        {/* Main Goal */}
        <div>
          <Label>Main goal</Label>
          <select value={state.mainGoal} onChange={(e) => onChange({ mainGoal: e.target.value as MainGoal })} className={fieldCls}>
            {mainGoals.map((g) => <option key={g}>{g}</option>)}
          </select>
        </div>

        {/* Update CTA */}
        <button
          className="w-full text-[13px] font-semibold py-3 rounded-xl text-white transition-all flex items-center justify-center gap-2"
          style={{ background: '#14532d', boxShadow: '0 2px 8px rgba(20,83,45,0.25)' }}
          onMouseEnter={e => (e.currentTarget.style.background = '#166534')}
          onMouseLeave={e => (e.currentTarget.style.background = '#14532d')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/></svg>
          Update design
        </button>
        <p className="text-center text-[11px] text-[#9ca3af]">Your plan updates live as you change settings</p>
      </div>
    </div>
  );
}
