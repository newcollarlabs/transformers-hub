import { useState, useMemo } from 'react';
import { SEED_BOTS } from '../constants';
import { Search, Zap } from 'lucide-react';
import { clsx } from 'clsx';
import BotImage from './BotImage';

interface MissionHubProps {
  key?: string;
  initialSearch?: string;
  onSelectBot: (id: string) => void;
  onTagClick?: (tag: string) => void;
  selectedVoiceURI?: string | null;
  voiceSettings?: { pitch: number; rate: number };
}

export default function MissionHub({ onSelectBot }: MissionHubProps) {
  const [search, setSearch] = useState('');
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const filteredBots = useMemo(() => {
    let list = [...SEED_BOTS];
    if (search) {
      const s = search.toLowerCase();
      list = list.filter(b => 
        b.name.toLowerCase().includes(s) || 
        b.faction.toLowerCase().includes(s) || 
        b.identifier.toLowerCase().includes(s)
      );
    }
    return list.sort((a, b) => a.name.localeCompare(b.name));
  }, [search]);

  const groupedBots = useMemo(() => {
    const groups: Record<string, typeof SEED_BOTS> = {};
    filteredBots.forEach(bot => {
      const firstLetter = bot.name[0].toUpperCase();
      if (!groups[firstLetter]) groups[firstLetter] = [];
      groups[firstLetter].push(bot);
    });
    return groups;
  }, [filteredBots]);

  const activeLetters = useMemo(() => Object.keys(groupedBots).sort(), [groupedBots]);

  const scrollToLetter = (letter: string) => {
    const element = document.getElementById(`section-${letter}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-surface-dim pt-6 px-4 pb-10 relative">
      <div className="fixed inset-0 halftone opacity-5 pointer-events-none z-0"></div>
      
      {/* Search Header */}
      <div className="relative z-10 mb-6">
        <div className="bg-primary-red text-white py-1 px-4 italic border-4 border-ink-black shadow-hard inline-block mb-4 transform -rotate-1">
          <h2 className="font-headline-lg text-2xl uppercase tracking-tighter italic">TRANSFORMER WIKI</h2>
        </div>
        
        <div className="relative">
          <input 
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="SEARCH TRANSFORMERS"
            className="w-full h-12 bg-white border-4 border-ink-black px-10 font-bold text-sm focus:ring-0 focus:border-secondary-blue shadow-hard"
          />
          <Search size={20} className="absolute left-3 top-3 text-ink-black/40" />
        </div>
      </div>

      {/* Alphabet Index */}
      <div className="sticky top-0 z-40 bg-surface-dim py-3 -mx-4 px-4 border-b-2 border-ink-black mb-8 shadow-sm">
        <div className="flex gap-1 justify-between max-w-full overflow-x-auto pb-1 scrollbar-hide">
          {alphabet.map(letter => {
            const hasBots = groupedBots[letter];
            return (
              <button
                key={letter}
                disabled={!hasBots}
                onClick={() => scrollToLetter(letter)}
                className={clsx(
                  "flex-1 min-w-[24px] h-8 flex items-center justify-center font-black text-[10px] border-2 border-ink-black transition-all",
                  hasBots 
                    ? "bg-white text-ink-black hover:bg-primary-red hover:text-white" 
                    : "bg-surface-container text-ink-black/10 cursor-not-allowed"
                )}
              >
                {letter}
              </button>
            )
          })}
        </div>
      </div>

      {/* Grouped List */}
      <div className="relative z-10 space-y-12">
        {activeLetters.length > 0 ? (
          activeLetters.map(letter => (
            <div key={letter} id={`section-${letter}`} className="scroll-mt-24">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-ink-black text-white flex items-center justify-center font-headline-lg text-2xl italic skew-x-[-10deg] shadow-hard shrink-0">
                  {letter}
                </div>
                <div className="h-1 grow bg-ink-black/10"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {groupedBots[letter].map(bot => (
                  <button
                    key={bot.id}
                    onClick={() => onSelectBot(bot.id)}
                    className="flex h-24 bg-white border-4 border-ink-black shadow-hard active:scale-98 transition-all overflow-hidden group text-left"
                  >
                    {/* Thumbnail */}
                    <div className="w-24 h-full border-r-4 border-ink-black overflow-hidden bg-surface-dim shrink-0 relative">
                      <BotImage 
                        botId={bot.id}
                        initialUrl={bot.imageUrl}
                        prompt={bot.identifier}
                        alt={bot.name}
                        className="w-full h-full object-cover scale-110 transition-all"
                      />
                    </div>
                    
                    {/* Info */}
                    <div className="p-3 flex flex-col justify-center grow overflow-hidden bg-white">
                      <div className="flex items-center justify-between gap-1 mb-1 pr-1">
                        <h3 className="font-headline-lg text-xl uppercase italic tracking-tighter truncate leading-none flex-1 pr-2">
                          {bot.name}
                        </h3>
                        <span className={clsx(
                          "px-2 py-0.5 text-[10px] font-black uppercase border-2 border-ink-black leading-none shrink-0 shadow-[1px_1px_0px_0px_rgba(0,0,0,1)]",
                          bot.faction === 'Autobot' ? "bg-secondary-blue text-white" : "bg-ink-black text-white"
                        )}>
                          {bot.faction === 'Autobot' ? 'A' : 'D'}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <div className="text-[10px] font-bold text-ink-black/60 uppercase truncate">
                          {(() => {
                            const mapping: Record<string, string> = {
                              'Elite Core': 'Core Squad',
                              'Combiners': 'Combiner Squad',
                              'Multi-Changers': 'Tri-Squad',
                              'Bonded Units': 'Bonded Squad',
                              'Titans': 'Titan Squad'
                            };
                            return mapping[bot.category] || bot.category;
                          })()}
                        </div>
                        <div className="text-[11px] font-black text-secondary-blue uppercase line-clamp-1 bg-secondary-blue/5 px-1 py-0.5 border border-secondary-blue/10 rounded">
                          {bot.identifier}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="comic-panel p-10 text-center flex flex-col items-center gap-4">
            <Zap size={64} className="text-primary-red animate-bounce" />
            <p className="font-headline-lg text-2xl uppercase">NO HEROES FOUND AT THIS COORDS!</p>
            <button onClick={() => setSearch('')} className="comic-button bg-secondary-blue text-white">RESET SCANNER</button>
          </div>
        )}
      </div>
    </div>
  );
}
