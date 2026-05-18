import { Leaf } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
      <div className="max-w-[1440px] mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#064E3B] rounded-md flex items-center justify-center">
            <Leaf size={15} className="text-white" />
          </div>
          <span className="font-semibold text-[#111827] text-[15px] tracking-tight">Plotmate</span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-7">
          {['My Projects', 'Inspiration', 'Plant Library', 'Retail Partners', 'Help'].map((item) => (
            <a
              key={item}
              href="#"
              className={`text-sm font-medium transition-colors ${
                item === 'My Projects'
                  ? 'text-[#064E3B] border-b-2 border-[#064E3B] pb-0.5'
                  : 'text-[#6B7280] hover:text-[#111827]'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-sm text-[#6B7280] cursor-pointer hover:text-[#111827] transition-colors">
            <span>🇬🇧</span>
            <span>UK</span>
            <span className="text-xs">▼</span>
          </div>
          <a
            href="#builder"
            className="bg-[#064E3B] text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-[#043D2E] transition-colors"
          >
            Create new design
          </a>
        </div>
      </div>
    </nav>
  );
}
