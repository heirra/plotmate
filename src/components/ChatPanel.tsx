import { useRef, useEffect } from 'react';
import { Send, MessageSquare, Leaf } from 'lucide-react';
import type { ChatMessage } from '../types';

interface Props {
  messages: ChatMessage[];
  input: string;
  onInputChange: (val: string) => void;
  onSend: () => void;
}

const suggestions = [
  'Make it more private',
  'I want a bbq area',
  'Low maintenance please',
  'Add more wildlife',
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
    <div className="bg-white border border-[#E5E7EB] rounded-xl overflow-hidden">
      <div className="px-5 py-3 border-b border-[#E5E7EB] flex items-center gap-2">
        <MessageSquare size={14} className="text-[#6B7280]" />
        <span className="text-[13px] font-semibold text-[#111827]">Conversational Design Edit</span>
        <span className="ml-auto text-[11px] text-[#9CA3AF]">Ask Plotmate to adjust your design</span>
      </div>

      {/* Messages */}
      <div className="px-5 py-4 min-h-[140px] max-h-[240px] overflow-y-auto scrollbar-thin space-y-3">
        {messages.length === 0 && (
          <div className="flex flex-col items-center justify-center h-20 gap-2">
            <p className="text-[13px] text-[#9CA3AF]">Try a quick suggestion below or type your own</p>
          </div>
        )}
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 bg-[#064E3B] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Leaf size={12} className="text-white" />
              </div>
            )}
            <div
              className={`max-w-[70%] rounded-xl px-3.5 py-2.5 ${
                msg.role === 'user'
                  ? 'bg-[#064E3B] text-white'
                  : 'bg-[#F8FAFC] border border-[#E5E7EB] text-[#111827]'
              }`}
            >
              <p className="text-[13px] leading-relaxed">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.role === 'user' ? 'text-green-200' : 'text-[#9CA3AF]'}`}>
                {msg.timestamp}
              </p>
            </div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Quick suggestions */}
      {messages.length === 0 && (
        <div className="px-5 pb-3 flex gap-2 flex-wrap">
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => { onInputChange(s); }}
              className="text-[12px] text-[#064E3B] bg-[#ECFCCB] border border-[#BBF7D0] px-3 py-1 rounded-full hover:bg-[#D9F99D] transition-colors"
            >
              {s}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-[#064E3B]/20 focus-within:border-[#064E3B]">
          <input
            type="text"
            value={input}
            onChange={(e) => onInputChange(e.target.value)}
            onKeyDown={handleKey}
            placeholder="Ask Plotmate to adjust your design..."
            className="flex-1 text-[13px] px-4 py-2.5 focus:outline-none text-[#111827] placeholder-[#9CA3AF] bg-white"
          />
          <button
            onClick={onSend}
            disabled={!input.trim()}
            className="w-10 h-10 bg-[#064E3B] flex items-center justify-center hover:bg-[#043D2E] disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <Send size={14} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
