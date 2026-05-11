import { Home, BookOpen, Library, Download, Settings } from 'lucide-react';
import { clsx } from 'clsx';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface NavigationProps {
  currentScreen: string;
  onNavigate: (screen: string) => void;
}

export default function Navigation({ currentScreen, onNavigate }: NavigationProps) {
  const { isStandalone } = usePWAInstall();
  const items = [
    { id: 'welcome', label: 'HOME', icon: Home },
    { id: 'lore', label: 'LORE', icon: BookOpen },
    { id: 'bots', label: 'WIKI', icon: Library },
    { id: 'install', label: 'INSTALL', icon: Download },
    { id: 'settings', label: 'SETTINGS', icon: Settings },
  ].filter(item => !(item.id === 'install' && isStandalone));

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 h-20 bg-white border-t-4 border-ink-black flex justify-around items-center px-2 pb-2 shadow-[0px_-4px_0px_0px_#1b1b1c]">
      {items.map(({ id, label, icon: Icon }) => {
        const isActive = currentScreen === id || (id === 'bots' && currentScreen === 'detail');
        return (
          <button
            key={id}
            onClick={() => onNavigate(id)}
            className={clsx(
              "flex flex-col items-center justify-center transition-all px-4 py-1",
              isActive 
                ? "bg-secondary-blue text-white rounded-full border-2 border-ink-black translate-y-1 shadow-none" 
                : "text-ink-black/60 hover:text-ink-black"
            )}
          >
            <Icon size={isActive ? 28 : 24} strokeWidth={isActive ? 2.5 : 2} />
            <span className="text-[10px] font-bold mt-1 tracking-widest">{label}</span>
          </button>
        );
      })}
    </nav>
  );
}
