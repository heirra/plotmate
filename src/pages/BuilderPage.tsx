import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { AppState, ChatMessage, Product, GardenStyleId, StyleConfig, PostcodeInfo } from '../types';
import ProjectSettings from '../components/ProjectSettings';
import KitOverview from '../components/KitOverview';
import DesignRationale from '../components/DesignRationale';
import PlacementGuide from '../components/PlacementGuide';
import ShoppablePlan from '../components/ShoppablePlan';
import PreviewPanel from '../components/PreviewPanel';
import DesignSummary from '../components/DesignSummary';
import ChatPanel from '../components/ChatPanel';
import StyleLibrary from '../components/StyleLibrary';

type Tab = 'overview' | 'placement' | 'shopping' | 'preview';

interface Props {
  appState: AppState;
  onStateChange: (patch: Partial<AppState>) => void;
  currentStyle: StyleConfig;
  postcodeInfo: PostcodeInfo;
  products: Product[];
  totalCost: number;
  budgetStatus: 'under' | 'near' | 'over';
  chatMessages: ChatMessage[];
  chatInput: string;
  onChatInputChange: (val: string) => void;
  onChatSend: () => void;
  onUpdateQuantity: (id: string, delta: number) => void;
  allStyles: StyleConfig[];
  onSelectStyle: (id: GardenStyleId) => void;
  onBack: () => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'overview',  label: 'Overview' },
  { id: 'placement', label: 'Placement Guide' },
  { id: 'shopping',  label: 'Shopping List' },
  { id: 'preview',   label: 'Visual Preview' },
];

export default function BuilderPage({
  appState, onStateChange, currentStyle, postcodeInfo,
  products, totalCost, budgetStatus,
  chatMessages, chatInput, onChatInputChange, onChatSend,
  onUpdateQuantity, allStyles, onSelectStyle, onBack,
}: Props) {
  const [tab, setTab] = useState<Tab>('overview');

  return (
    <div className="min-h-screen bg-[#f6f7f5]">

      {/* ── Builder top bar ────────────────────────────────────────── */}
      <header
        className="w-full bg-white sticky top-0 z-50"
        style={{ borderBottom: '1px solid #e4e9e2', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}
      >
        <div className="max-w-[1440px] mx-auto px-8 flex items-center gap-4" style={{ height: 64 }}>
          {/* Back */}
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 text-[13px] font-medium text-[#6b7280] hover:text-[#111827] transition-colors mr-2"
          >
            <ArrowLeft size={15} />
            Back
          </button>

          <div className="w-px h-5 bg-[#e4e9e2] flex-shrink-0" />

          {/* Brand */}
          <div className="flex items-center gap-2">
            <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
              <path d="M10 23 C3 17 3 6 10 2 C8 8 7.5 16 10 23Z" fill="#256b28"/>
              <path d="M10 23 C17 17 17 6 10 2 C12 8 12.5 16 10 23Z" fill="#4caf50" opacity="0.68"/>
              <line x1="10" y1="2.5" x2="10" y2="22.5" stroke="white" strokeWidth="0.9" strokeLinecap="round" opacity="0.9"/>
            </svg>
            <span style={{ fontSize: 15, fontWeight: 700, color: '#111827', letterSpacing: '-0.015em' }}>
              Garden Vibe <span style={{ color: '#256b28' }}>AI</span>
            </span>
          </div>

          <div className="w-px h-5 bg-[#e4e9e2] flex-shrink-0 ml-1" />

          {/* Current style breadcrumb */}
          <span style={{ fontSize: 13, color: '#6b7280' }}>
            Plan builder
          </span>
          <span style={{ fontSize: 13, color: '#9ca3af' }}>→</span>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#111827' }}>
            {currentStyle.title}
          </span>

          <div className="flex-1" />

          {/* Tab switcher in header */}
          <div className="flex items-center gap-1 bg-[#f6f7f5] rounded-xl p-1" style={{ border: '1px solid #e4e9e2' }}>
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setTab(t.id)}
                className="rounded-lg transition-all"
                style={{
                  padding: '6px 14px',
                  fontSize: 13,
                  fontWeight: tab === t.id ? 600 : 400,
                  color: tab === t.id ? '#111827' : '#6b7280',
                  background: tab === t.id ? 'white' : 'transparent',
                  boxShadow: tab === t.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                }}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* ── Main layout: left settings + right content ─────────────── */}
      <div className="max-w-[1440px] mx-auto px-8 py-7 flex gap-6 items-start">

        {/* ── LEFT: settings sidebar ─────────────────────────────── */}
        <aside className="flex-shrink-0 sticky top-[72px]" style={{ width: 240 }}>
          <ProjectSettings state={appState} onChange={onStateChange} />
          <div className="mt-4">
            <DesignSummary style={currentStyle} postcodeInfo={postcodeInfo} />
          </div>
        </aside>

        {/* ── RIGHT: tabbed content ──────────────────────────────── */}
        <main className="flex-1 min-w-0">

          {/* ── TAB: Overview ─────────────────────────────────────── */}
          {tab === 'overview' && (
            <div className="space-y-5">
              <KitOverview
                style={currentStyle}
                totalCost={totalCost}
                budget={appState.budget}
                budgetStatus={budgetStatus}
              />
              <DesignRationale style={currentStyle} />
              <StyleLibrary
                styles={allStyles}
                activeId={appState.gardenStyleId}
                onSelect={onSelectStyle}
              />
              <ChatPanel
                messages={chatMessages}
                input={chatInput}
                onInputChange={onChatInputChange}
                onSend={onChatSend}
              />
            </div>
          )}

          {/* ── TAB: Placement Guide ──────────────────────────────── */}
          {tab === 'placement' && (
            <PlacementGuide style={currentStyle} products={products} />
          )}

          {/* ── TAB: Shopping List ────────────────────────────────── */}
          {tab === 'shopping' && (
            <ShoppablePlan
              products={products}
              totalCost={totalCost}
              budget={appState.budget}
              budgetStatus={budgetStatus}
              onUpdateQuantity={onUpdateQuantity}
            />
          )}

          {/* ── TAB: Visual Preview ───────────────────────────────── */}
          {tab === 'preview' && (
            <PreviewPanel style={currentStyle} />
          )}
        </main>
      </div>
    </div>
  );
}
