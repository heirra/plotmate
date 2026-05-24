import { useState, useMemo, useCallback } from 'react';
import type { AppState, ChatMessage, Product, GardenStyleId, MaintenanceLevel } from './types';
import { getStyleById, styleConfigs } from './data/styles';
import { getPostcodeInfo } from './data/postcodes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import ProjectSettings from './components/ProjectSettings';
import KitOverview from './components/KitOverview';
import DesignRationale from './components/DesignRationale';
import PlacementGuide from './components/PlacementGuide';
import PreviewPanel from './components/PreviewPanel';
import DesignSummary from './components/DesignSummary';
import ChatPanel from './components/ChatPanel';
import ShoppablePlan from './components/ShoppablePlan';
import StyleLibrary from './components/StyleLibrary';
import FinalCTA from './components/FinalCTA';

const defaultState: AppState = {
  postcodeArea: 'SW18 4QZ',
  spaceType: 'Back garden',
  gardenStyleId: 'cottage',
  maintenanceLevel: 'Moderate' as MaintenanceLevel,
  sunlight: 'Full sun',
  budget: 2500,
  mainGoal: 'Relaxing',
};

export default function App() {
  const [appState, setAppState] = useState<AppState>(defaultState);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');

  const currentStyle = useMemo(() => getStyleById(appState.gardenStyleId), [appState.gardenStyleId]);
  const postcodeInfo = useMemo(() => getPostcodeInfo(appState.postcodeArea), [appState.postcodeArea]);

  const effectiveProducts: Product[] = useMemo(() => {
    return currentStyle.products.map((p) => ({
      ...p,
      quantity: quantities[p.id] ?? p.quantity,
    }));
  }, [currentStyle.products, quantities]);

  const totalCost = useMemo(() => {
    return effectiveProducts.reduce((sum, p) => sum + p.unitPrice * p.quantity, 0);
  }, [effectiveProducts]);

  const budgetStatus = useMemo((): 'under' | 'near' | 'over' => {
    const ratio = totalCost / appState.budget;
    if (ratio < 0.8) return 'under';
    if (ratio <= 1.05) return 'near';
    return 'over';
  }, [totalCost, appState.budget]);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setQuantities((prev) => {
      const base = currentStyle.products.find((p) => p.id === id)?.quantity ?? 1;
      const current = prev[id] ?? base;
      const next = Math.max(0, current + delta);
      return { ...prev, [id]: next };
    });
  }, [currentStyle.products]);

  const updateState = useCallback((patch: Partial<AppState>) => {
    setAppState((prev) => ({ ...prev, ...patch }));
    if (patch.gardenStyleId) setQuantities({});
  }, []);

  const sendChatMessage = useCallback(() => {
    const text = chatInput.trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };

    const lower = text.toLowerCase();
    let patch: Partial<AppState> = {};
    let response = 'I updated the design direction based on your request.';

    if (lower.includes('bbq') || lower.includes('grill') || lower.includes('dining')) {
      patch.mainGoal = 'Outdoor Dining';
      response = "Updated your goal to Outdoor Dining. The family-friendly and Mediterranean styles both include defined dining zones with appropriate furniture and lighting kits.";
    } else if (lower.includes('low maintenance')) {
      patch.maintenanceLevel = 'Low';
      patch.gardenStyleId = 'low-maintenance';
      response = "Switched to Low-Maintenance Minimal. This kit replaces lawn with porcelain paving, uses weed membrane under all gravel, and selects plants that need one clip per year. Annual maintenance: approximately 4 hours.";
    } else if (lower.includes('zen')) {
      patch.gardenStyleId = 'korean-zen';
      response = "Switched to Korean Zen. The kit is built around raked white quartz gravel, a single off-centre Japanese maple, slate stepping stones, and a low timber bench. Restraint is the design language — the kit deliberately contains very few products.";
    } else if (lower.includes('shade')) {
      patch.sunlight = 'Mostly shade';
      response = "Updated sunlight to Mostly shade. The naturalistic style with native ferns, astrantia, and molinia grass works well in shadier UK gardens. Avoid the Mediterranean kit in low-light conditions — its drought-tolerant plants need high sun.";
    } else if (lower.includes('wildlife')) {
      patch.gardenStyleId = 'wildlife';
      patch.mainGoal = 'Wildlife Friendly';
      response = "Switched to Wildlife Garden. This kit prioritises habitat over aesthetics — hawthorn hedging, wildflower seed, a log pile, hedgehog house, bug hotel, and a bird bath. Installation is Easy and ongoing maintenance is Low once established.";
    } else if (lower.includes('privacy') || lower.includes('private')) {
      patch.mainGoal = 'Privacy';
      response = "Updated goal to Privacy. Look for trellis panels and bamboo screening in your kit — these are the structural elements that add height above standard 1.8m fencing. The Modern Courtyard and Cottage styles both include boundary screening products.";
    } else if (lower.includes('cottage')) {
      patch.gardenStyleId = 'cottage';
      response = "Switched to Cottage Garden. The kit includes lavender, hydrangeas, foxgloves, natural stone path flags, bark mulch, trellis panels, and a bistro set. Maintenance is High — this style requires seasonal deadheading and pruning.";
    } else if (lower.includes('modern')) {
      patch.gardenStyleId = 'modern-courtyard';
      response = "Switched to Modern Courtyard. Key products: large-format porcelain paving, black metal edging, boxwood spheres, silver gravel over weed membrane, bamboo screening. Installation is Difficult — paving requires professional laying.";
    } else if (lower.includes('mediterranean')) {
      patch.gardenStyleId = 'mediterranean';
      response = "Switched to Mediterranean Patio. Kit centres on sandstone flags, terracotta pot clusters, lavender, rosemary, an olive tree, and buff gravel over membrane. All plants are drought-tolerant — no irrigation needed after year one.";
    } else if (lower.includes('budget')) {
      response = `Current kit total: £${totalCost.toFixed(2)} against a £${appState.budget.toLocaleString()} budget. To reduce cost: lower quantities on furniture items first (highest unit price), or switch to Low-Maintenance Minimal which has fewer products overall.`;
    } else if (lower.includes('naturalistic') || lower.includes('natural')) {
      patch.gardenStyleId = 'naturalistic';
      response = "Switched to Naturalistic Garden. Kit includes ornamental grasses, astrantia, echinacea, native ferns, slate stepping stones, bark mulch, and a timber bench. Installation is Easy — no hard landscaping. Maintenance is Low after establishment.";
    } else if (lower.includes('family') || lower.includes('kids') || lower.includes('children')) {
      patch.gardenStyleId = 'family-friendly';
      response = "Switched to Family-Friendly Garden. Kit: hard-wearing rye lawn seed, composite decking, 6-seat dining set, cantilever umbrella, festoon lights, non-toxic lavender borders, weatherproof storage box. All plants are child and pet safe.";
    } else if (lower.includes('install') || lower.includes('difficult')) {
      response = `The ${currentStyle.name} is rated ${currentStyle.installationDifficulty} to install. ${currentStyle.designRationale.installationExplanation}`;
    } else if (lower.includes('maintain') || lower.includes('upkeep')) {
      response = `The ${currentStyle.name} is rated ${currentStyle.maintenanceDifficulty} maintenance. ${currentStyle.designRationale.maintenanceExplanation}`;
    }

    if (Object.keys(patch).length > 0) updateState(patch);

    const assistantMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      text: response,
      timestamp: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg, assistantMsg]);
    setChatInput('');
  }, [chatInput, appState.budget, totalCost, currentStyle, updateState]);

  const selectStyle = useCallback((id: GardenStyleId) => {
    updateState({ gardenStyleId: id });
  }, [updateState]);

  return (
    <div className="min-h-screen bg-[#f6f7f5] text-[#111827]">
      <Navbar />
      <Hero />
      <HowItWorks />

      {/* ── Builder section label ─────────────────────────────────── */}
      <div className="w-full max-w-[1440px] mx-auto px-8 pt-10 pb-3">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#14532d] flex items-center justify-center flex-shrink-0">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
          </div>
          <div>
            <h2 className="text-[16px] font-semibold text-[#111827] leading-none">Your Garden Plan Builder</h2>
            <p className="text-[12px] text-[#9ca3af] mt-0.5">Adjust settings on the left — your plan updates instantly</p>
          </div>
        </div>
      </div>

      <section id="builder" className="w-full max-w-[1440px] mx-auto px-8 pb-20">

        {/* ── Three-column workspace ───────────────────────────────── */}
        <div className="flex gap-6 items-start">

          {/* LEFT: Project settings */}
          <div className="w-[240px] flex-shrink-0 sticky top-[72px]">
            <ProjectSettings state={appState} onChange={updateState} />
          </div>

          {/* CENTER: Commerce & planning content (primary) */}
          <div className="flex-1 min-w-0 space-y-5">
            {/* 1 — Kit overview (cost, difficulties, composition) */}
            <KitOverview
              style={currentStyle}
              totalCost={totalCost}
              budget={appState.budget}
              budgetStatus={budgetStatus}
            />

            {/* 2 — Design rationale (5-point explanation) */}
            <DesignRationale style={currentStyle} />

            {/* 3 — Zone-by-zone placement guide */}
            <PlacementGuide
              style={currentStyle}
              products={effectiveProducts}
            />

            {/* 4 — Chat to refine */}
            <ChatPanel
              messages={chatMessages}
              input={chatInput}
              onInputChange={setChatInput}
              onSend={sendChatMessage}
            />

            {/* 5 — Style switcher */}
            <StyleLibrary
              styles={styleConfigs}
              activeId={appState.gardenStyleId}
              onSelect={selectStyle}
            />
          </div>

          {/* RIGHT: Design summary + region info (secondary context) */}
          <div className="w-[280px] flex-shrink-0 sticky top-[72px]">
            <DesignSummary
              style={currentStyle}
              postcodeInfo={postcodeInfo}
            />
          </div>
        </div>

        {/* ── Full-width: Complete shopping list ──────────────────── */}
        <div className="mt-5">
          <ShoppablePlan
            products={effectiveProducts}
            totalCost={totalCost}
            budget={appState.budget}
            budgetStatus={budgetStatus}
            onUpdateQuantity={updateQuantity}
          />
        </div>

        {/* ── Full-width: Visual previews (secondary) ─────────────── */}
        <div className="mt-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-px flex-1 bg-[#e4e9e2]" />
            <span className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wide px-3">
              Visual Preview (supporting reference)
            </span>
            <div className="h-px flex-1 bg-[#e4e9e2]" />
          </div>
          <PreviewPanel style={currentStyle} />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
