import { Search, Menu } from 'lucide-react';

interface TopBarProps {
  currentScreen: string;
  onSearch: () => void;
  onMenuClick: () => void;
}

export default function TopBar({ currentScreen, onSearch, onMenuClick }: TopBarProps) {
  return (
    <header className="sticky top-0 z-[60] bg-primary-red h-14 px-5 flex items-center justify-between border-b-4 border-ink-black shadow-hard">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="text-white hover:scale-110 transition-transform"
        >
          <Menu size={28} />
        </button>
        <h1 className="text-white font-headline-lg text-2xl uppercase italic tracking-tighter">
          TRANSFORMERS: HERO HUB
        </h1>
      </div>
      
      <button 
        onClick={onSearch}
        className="text-white hover:scale-110 transition-transform"
      >
        <Search size={24} />
      </button>
    </header>
  );
}
