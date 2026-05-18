import { MapPin, Home, Palette, Wrench, Sun, PoundSterling, Target, Sparkles } from 'lucide-react';
import type { AppState, SpaceType, MaintenanceLevel, Sunlight, MainGoal } from '../types';

interface Props {
  state: AppState;
  onChange: (patch: Partial<AppState>) => void;
}

const spaceTypes: SpaceType[] = ['Back garden', 'Front garden', 'Patio', 'Courtyard', 'Balcony', 'Side return'];
const maintenanceLevels: MaintenanceLevel[] = ['Low', 'Moderate', 'High'];
const sunlightOptions: Sunlight[] = ['Full sun', 'Part shade', 'Mostly shade'];
const mainGoals: MainGoal[] = ['Relaxing', 'Outdoor Dining', 'Low Maintenance', 'Curb Appeal', 'Pet Friendly', 'Wildlife Friendly', 'Privacy'];

function Label({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#6B7280] uppercase tracking-wide mb-1.5">
      {icon}
      {text}
    </div>
  );
}

export default function ProjectSettings({ state, onChange }: Props) {
  return (
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#E5E7EB] flex items-center gap-2">
        <Wrench size={13} className="text-[#6B7280]" />
        <span className="text-[13px] font-semibold text-[#111827]">Project settings</span>
      </div>

      <div className="p-4 space-y-4">
        {/* Postcode */}
        <div>
          <Label icon={<MapPin size={11} />} text="Postcode Area" />
          <input
            type="text"
            value={state.postcodeArea}
            onChange={(e) => onChange({ postcodeArea: e.target.value })}
            placeholder="e.g. SW1A, BN1, M1..."
            className="w-full text-[13px] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] bg-white text-[#111827] placeholder-[#9CA3AF]"
          />
          <p className="text-[11px] text-[#9CA3AF] mt-1">Helps us personalise climate & plant picks</p>
        </div>

        {/* Space Type */}
        <div>
          <Label icon={<Home size={11} />} text="Space Type" />
          <select
            value={state.spaceType}
            onChange={(e) => onChange({ spaceType: e.target.value as SpaceType })}
            className="w-full text-[13px] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] bg-white text-[#111827] appearance-none cursor-pointer"
          >
            {spaceTypes.map((s) => <option key={s}>{s}</option>)}
          </select>
        </div>

        {/* Garden Style */}
        <div>
          <Label icon={<Palette size={11} />} text="Garden Style" />
          <select
            value={state.gardenStyleId}
            onChange={(e) => onChange({ gardenStyleId: e.target.value as AppState['gardenStyleId'] })}
            className="w-full text-[13px] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] bg-white text-[#111827] appearance-none cursor-pointer"
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
          <Label icon={<Wrench size={11} />} text="Maintenance Level" />
          <div className="flex gap-1.5">
            {maintenanceLevels.map((m) => (
              <button
                key={m}
                onClick={() => onChange({ maintenanceLevel: m })}
                className={`flex-1 text-[11px] font-medium py-1.5 rounded-md border transition-colors ${
                  state.maintenanceLevel === m
                    ? 'bg-[#064E3B] text-white border-[#064E3B]'
                    : 'bg-white text-[#6B7280] border-[#E5E7EB] hover:border-[#064E3B] hover:text-[#064E3B]'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
        </div>

        {/* Sunlight */}
        <div>
          <Label icon={<Sun size={11} />} text="Sunlight" />
          <select
            value={state.sunlight}
            onChange={(e) => onChange({ sunlight: e.target.value as Sunlight })}
            className="w-full text-[13px] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] bg-white text-[#111827] appearance-none cursor-pointer"
          >
            {sunlightOptions.map((s) => <option key={s}>{s}</option>)}
          </select>
          <p className="text-[11px] text-[#9CA3AF] mt-1">
            {state.sunlight === 'Full sun' ? '6+ hours of direct sun' : state.sunlight === 'Part shade' ? '3–6 hours of direct sun' : 'Under 3 hours of direct sun'}
          </p>
        </div>

        {/* Budget */}
        <div>
          <Label icon={<PoundSterling size={11} />} text="Budget" />
          <div className="flex justify-between text-[12px] font-medium text-[#111827] mb-2">
            <span>£{(state.budget / 1000).toFixed(1)}k</span>
            <span className="text-[#9CA3AF] text-[11px]">£500 – £10,000+</span>
          </div>
          <input
            type="range"
            min={500}
            max={10000}
            step={100}
            value={state.budget}
            onChange={(e) => onChange({ budget: Number(e.target.value) })}
            className="w-full accent-[#064E3B] cursor-pointer"
          />
          <div className="flex justify-between text-[10px] text-[#9CA3AF] mt-1">
            <span>£500</span>
            <span>£5,000+</span>
          </div>
        </div>

        {/* Main Goal */}
        <div>
          <Label icon={<Target size={11} />} text="Main Goal" />
          <select
            value={state.mainGoal}
            onChange={(e) => onChange({ mainGoal: e.target.value as MainGoal })}
            className="w-full text-[13px] border border-[#E5E7EB] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#064E3B]/20 focus:border-[#064E3B] bg-white text-[#111827] appearance-none cursor-pointer"
          >
            {mainGoals.map((g) => <option key={g}>{g}</option>)}
          </select>
        </div>

        {/* Update button */}
        <button className="w-full bg-[#064E3B] text-white text-[13px] font-semibold py-2.5 rounded-lg hover:bg-[#043D2E] transition-colors flex items-center justify-center gap-2">
          <Sparkles size={14} />
          Update design
        </button>
        <p className="text-center text-[11px] text-[#9CA3AF]">↺ Last updated: Just now</p>
      </div>
    </div>
  );
}
