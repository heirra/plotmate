import { useState, useMemo, useCallback } from 'react';
import type { AppState, ChatMessage, Product, GardenStyleId, MaintenanceLevel } from './types';
import { getStyleById, styleConfigs } from './data/styles';
import { getPostcodeInfo } from './data/postcodes';
import LandingPage from './pages/LandingPage';
import BuilderPage from './pages/BuilderPage';

export type AppView = 'landing' | 'builder';

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
  /* ── View routing ─────────────────────────────────────────────── */
  const [view, setView] = useState<AppView>('landing');

  /* ── Garden planning state ────────────────────────────────────── */
  const [appState, setAppState] = useState<AppState>(defaultState);
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [chatInput, setChatInput] = useState('');

  /* ── Derived values ───────────────────────────────────────────── */
  const currentStyle = useMemo(() => getStyleById(appState.gardenStyleId), [appState.gardenStyleId]);
  const postcodeInfo  = useMemo(() => getPostcodeInfo(appState.postcodeArea), [appState.postcodeArea]);

  const effectiveProducts: Product[] = useMemo(() =>
    currentStyle.products.map((p) => ({
      ...p,
      quantity: quantities[p.id] ?? p.quantity,
    })),
    [currentStyle.products, quantities]
  );

  const totalCost = useMemo(() =>
    effectiveProducts.reduce((sum, p) => sum + p.unitPrice * p.quantity, 0),
    [effectiveProducts]
  );

  const budgetStatus = useMemo((): 'under' | 'near' | 'over' => {
    const r = totalCost / appState.budget;
    if (r < 0.8)   return 'under';
    if (r <= 1.05) return 'near';
    return 'over';
  }, [totalCost, appState.budget]);

  /* ── Callbacks ────────────────────────────────────────────────── */
  const updateQuantity = useCallback((id: string, delta: number) => {
    setQuantities((prev) => {
      const base    = currentStyle.products.find((p) => p.id === id)?.quantity ?? 1;
      const current = prev[id] ?? base;
      return { ...prev, [id]: Math.max(0, current + delta) };
    });
  }, [currentStyle.products]);

  const updateState = useCallback((patch: Partial<AppState>) => {
    setAppState((prev) => ({ ...prev, ...patch }));
    if (patch.gardenStyleId) setQuantities({});
  }, []);

  const selectStyle = useCallback((id: GardenStyleId) => updateState({ gardenStyleId: id }), [updateState]);

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
      response = 'Updated goal to Outdoor Dining. Family-friendly and Mediterranean styles both include defined dining zones with appropriate furniture and lighting kits.';
    } else if (lower.includes('low maintenance')) {
      patch.maintenanceLevel = 'Low';
      patch.gardenStyleId = 'low-maintenance';
      response = 'Switched to Low-Maintenance Minimal. Kit replaces lawn with porcelain paving, uses weed membrane under gravel, and selects plants needing one clip per year.';
    } else if (lower.includes('zen')) {
      patch.gardenStyleId = 'korean-zen';
      response = 'Switched to Korean Zen — raked white quartz gravel, off-centre Japanese maple, slate stepping stones, low timber bench.';
    } else if (lower.includes('shade')) {
      patch.sunlight = 'Mostly shade';
      response = 'Updated to Mostly shade. The Naturalistic style with native ferns, astrantia, and molinia grass works well in shadier UK gardens.';
    } else if (lower.includes('wildlife')) {
      patch.gardenStyleId = 'wildlife';
      patch.mainGoal = 'Wildlife Friendly';
      response = 'Switched to Wildlife Garden — hawthorn hedging, wildflower seed, log pile, hedgehog house, bug hotel, bird bath.';
    } else if (lower.includes('privacy') || lower.includes('private')) {
      patch.mainGoal = 'Privacy';
      response = 'Updated goal to Privacy. Trellis panels and bamboo screening add height above standard 1.8m fencing.';
    } else if (lower.includes('cottage')) {
      patch.gardenStyleId = 'cottage';
      response = 'Switched to Cottage Garden — lavender, hydrangeas, foxgloves, stone path flags, bark mulch, trellis panels, bistro set.';
    } else if (lower.includes('modern')) {
      patch.gardenStyleId = 'modern-courtyard';
      response = 'Switched to Modern Courtyard — large-format porcelain paving, black metal edging, boxwood spheres, bamboo screening.';
    } else if (lower.includes('mediterranean')) {
      patch.gardenStyleId = 'mediterranean';
      response = 'Switched to Mediterranean Patio — sandstone flags, terracotta pots, lavender, rosemary, olive tree, buff gravel.';
    } else if (lower.includes('budget')) {
      response = `Current kit total: £${totalCost.toFixed(2)} against a £${appState.budget.toLocaleString()} budget. To reduce cost: lower quantities on furniture items first.`;
    } else if (lower.includes('naturalistic') || lower.includes('natural')) {
      patch.gardenStyleId = 'naturalistic';
      response = 'Switched to Naturalistic Garden — ornamental grasses, astrantia, echinacea, native ferns, slate stepping stones, timber bench.';
    } else if (lower.includes('family') || lower.includes('kids')) {
      patch.gardenStyleId = 'family-friendly';
      response = 'Switched to Family-Friendly Garden — rye lawn seed, composite decking, 6-seat dining set, cantilever umbrella, festoon lights.';
    } else if (lower.includes('install') || lower.includes('difficult')) {
      response = `${currentStyle.name} is rated ${currentStyle.installationDifficulty} to install. ${currentStyle.designRationale.installationExplanation}`;
    } else if (lower.includes('maintain') || lower.includes('upkeep')) {
      response = `${currentStyle.name} is rated ${currentStyle.maintenanceDifficulty} maintenance. ${currentStyle.designRationale.maintenanceExplanation}`;
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

  /* ── Render ───────────────────────────────────────────────────── */
  if (view === 'landing') {
    return <LandingPage onStart={() => setView('builder')} />;
  }

  return (
    <BuilderPage
      appState={appState}
      onStateChange={updateState}
      currentStyle={currentStyle}
      postcodeInfo={postcodeInfo}
      products={effectiveProducts}
      totalCost={totalCost}
      budgetStatus={budgetStatus}
      chatMessages={chatMessages}
      chatInput={chatInput}
      onChatInputChange={setChatInput}
      onChatSend={sendChatMessage}
      onUpdateQuantity={updateQuantity}
      allStyles={styleConfigs}
      onSelectStyle={selectStyle}
      onBack={() => setView('landing')}
    />
  );
}
