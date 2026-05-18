import { useState, useMemo, useCallback } from 'react';
import type { AppState, ChatMessage, Product, GardenStyleId, MaintenanceLevel } from './types';
import { getStyleById, styleConfigs } from './data/styles';
import { getPostcodeInfo } from './data/postcodes';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectSettings from './components/ProjectSettings';
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

  const budgetStatus = useMemo(() => {
    const ratio = totalCost / appState.budget;
    if (ratio < 0.8) return 'under' as const;
    if (ratio <= 1.05) return 'near' as const;
    return 'over' as const;
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
    if (patch.gardenStyleId) {
      setQuantities({});
    }
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
      response = "Great idea! I've set your main goal to Outdoor Dining and will prioritise a patio dining zone with entertaining features.";
    } else if (lower.includes('low maintenance')) {
      patch.maintenanceLevel = 'Low';
      patch.gardenStyleId = 'low-maintenance';
      response = "Switching to a Low-Maintenance Minimal style. I've reduced the maintenance level and updated your planting plan to evergreen, fuss-free choices.";
    } else if (lower.includes('zen')) {
      patch.gardenStyleId = 'korean-zen';
      response = "Lovely choice. I've switched to a Korean Zen garden style — raked gravel, a stone lantern, and a specimen Japanese maple are now featured.";
    } else if (lower.includes('shade')) {
      patch.sunlight = 'Mostly shade';
      response = "Noted — I've updated your sunlight to Mostly shade. Your planting plan now features ferns, hostas, and other shade-loving plants.";
    } else if (lower.includes('wildlife')) {
      patch.gardenStyleId = 'wildlife';
      patch.mainGoal = 'Wildlife Friendly';
      response = 'Brilliant! Switched to a Wildlife Garden style with native planting, a wildflower patch, and habitat features for pollinators and birds.';
    } else if (lower.includes('privacy') || lower.includes('more private') || lower.includes('private')) {
      patch.mainGoal = 'Privacy';
      response = 'Updated the plan with screening, taller planting, and a more sheltered seating zone.';
    } else if (lower.includes('cottage')) {
      patch.gardenStyleId = 'cottage';
      response = 'Switching to a Cottage Garden style — layered perennial borders, lavender, and a relaxed natural aesthetic.';
    } else if (lower.includes('modern')) {
      patch.gardenStyleId = 'modern-courtyard';
      response = 'Updated to a Modern Courtyard style — clean lines, architectural planting, and a contemporary material palette.';
    } else if (lower.includes('mediterranean')) {
      patch.gardenStyleId = 'mediterranean';
      response = 'Switched to a Mediterranean Patio — lavender, rosemary, terracotta pots, and warm-toned gravel. Perfect for sunny spots.';
    } else if (lower.includes('budget')) {
      response = `Your current estimated cost is £${totalCost.toFixed(2)} against a £${appState.budget.toLocaleString()} budget. Try reducing quantities or switching to the Low-Maintenance Minimal style to bring costs down.`;
    } else if (lower.includes('naturalistic') || lower.includes('natural')) {
      patch.gardenStyleId = 'naturalistic';
      response = 'Switched to a Naturalistic Garden style — flowing perennial borders, ornamental grasses, and all-season interest.';
    } else if (lower.includes('family') || lower.includes('kids') || lower.includes('children')) {
      patch.gardenStyleId = 'family-friendly';
      patch.mainGoal = 'Relaxing';
      response = 'Updated to a Family-Friendly Garden — durable lawn, a patio dining zone, safe planting borders, and outdoor storage.';
    }

    if (Object.keys(patch).length > 0) {
      updateState(patch);
    }

    const assistantMsg: ChatMessage = {
      id: (Date.now() + 1).toString(),
      role: 'assistant',
      text: response,
      timestamp: new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' }),
    };

    setChatMessages((prev) => [...prev, userMsg, assistantMsg]);
    setChatInput('');
  }, [chatInput, appState.budget, totalCost, updateState]);

  const selectStyle = useCallback((id: GardenStyleId) => {
    updateState({ gardenStyleId: id });
  }, [updateState]);

  return (
    <div className="min-h-screen bg-white text-[#111827]">
      <Navbar />
      <Hero />

      <section id="builder" className="w-full max-w-[1440px] mx-auto px-6 pb-20">
        <div className="flex gap-5 items-start">
          {/* Left sidebar */}
          <div className="w-[220px] flex-shrink-0 sticky top-4">
            <ProjectSettings
              state={appState}
              onChange={updateState}
            />
          </div>

          {/* Center column */}
          <div className="flex-1 min-w-0 space-y-4">
            <PreviewPanel style={currentStyle} />
            <ChatPanel
              messages={chatMessages}
              input={chatInput}
              onInputChange={setChatInput}
              onSend={sendChatMessage}
            />
            <StyleLibrary
              styles={styleConfigs}
              activeId={appState.gardenStyleId}
              onSelect={selectStyle}
            />
          </div>

          {/* Right sidebar */}
          <div className="w-[280px] flex-shrink-0 sticky top-4">
            <DesignSummary
              style={currentStyle}
              postcodeInfo={postcodeInfo}
              totalCost={totalCost}
              budget={appState.budget}
              budgetStatus={budgetStatus}
              products={effectiveProducts}
              onUpdateQuantity={updateQuantity}
            />
          </div>
        </div>

        <div className="mt-6">
          <ShoppablePlan
            products={effectiveProducts}
            totalCost={totalCost}
            budget={appState.budget}
            budgetStatus={budgetStatus}
            onUpdateQuantity={updateQuantity}
          />
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
