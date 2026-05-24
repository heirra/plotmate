import { useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import type { ChatMessage } from '../types';

interface Props {
  messages: ChatMessage[];
  input: string;
  onInputChange: (val: string) => void;
  onSend: () => void;
}

const suggestions = [
  'How difficult is this to install?',
  'I want something low maintenance',
  'I have a shady garden',
  'Make it more private',
  'I want a dining area',
  'Explain the maintenance level',
];

export default function ChatPanel({ messages, input, onInputChange, onSend }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="bg-white border border-[#e4e9e2] rounded-2xl overflow-hidden" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-[#f0f0ee] flex items-center gap-2.5">
        <div className="w-7 h-7 rounded-lg bg-[#f0fdf4] flex items-center justify-center text-[#166534]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <div>
          <span className="text-[13px] font-semibold text-[#111827]">Refine your garden plan</span>
          <span className="text-[11px] text-[#9ca3af] ml-2">Ask about any product, placement, or style</span>
        </div>
      </div>

      {/* Messages */}
      <div className="px-5 py-4 min-h-[100px] max-h-[220px] overflow-y-auto scrollbar-thin space-y-3">
        {messages.length === 0 && (
          <div className="flex items-center gap-2 text-[12px] text-[#9ca3af]">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#166534" strokeWidth="2" strokeLinecap="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Ask about installation difficulty, maintenance, product placement, or switch styles.
          </div>
        )}
        {messages.map((msg) => (
          <div key={msg.id} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 bg-[#14532d] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#86efac" stroke="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
            )}
            <div
              className={`max-w-[75%] rounded-2xl px-4 py-2.5 ${
                msg.role === 'user'
                  ? 'bg-[#14532d] text-white'
                  : 'bg-[#fafaf9] border border-[#e4e9e2] text-[#111827]'
              }`}
            >
              <p className="text-[12.5px] leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-green-300' : 'text-[#9ca3af]'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Suggestion chips */}
      {messages.length === 0 && (
        <div className="px-5 pb-3 flex gap-2 flex-wrap">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => onInputChange(s)}
              className="text-[11px] font-medium text-[#166534] bg-[#f0fdf4] border border-[#bbf7d0] px-2.5 py-1 rounded-full hover:bg-[#dcfce7] transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 border border-[#e4e9e2] rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-[#166634]/20 focus-within:border-[#166534] transition-all">
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask about installation, maintenance, products, or switch styles..."
            className="flex-1 text-[12.5px] px-4 py-3 focus:outline-none text-[#111827] placeholder-[#9ca3af] bg-white"
          />
          <button
            onClick={onSend}
            disabled={!input.trim()}
            className="w-10 h-10 bg-[#14532d] flex items-center justify-center hover:bg-[#166534] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0 rounded-lg mr-1"
          >
            <Send size={13} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
