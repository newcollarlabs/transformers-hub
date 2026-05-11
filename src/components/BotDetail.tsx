import { useState, useEffect, useMemo } from 'react';
import { SEED_BOTS } from '../constants';
import { Sword, Play, Pause, Square, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { useSpeechSync } from '../hooks/useSpeechSync';
import { useCachedImage } from '../hooks/useCachedImage';

interface BotDetailProps {
  botId: string;
  initialFilter?: string; // e.g., 'Autobots', 'Decepticons', or Category
  onBack: () => void;
  onBotChange?: (id: string) => void;
  onFilterChange?: (filter: string) => void;
  onCompare: (id: string) => void;
  selectedVoiceURI: string | null;
  voiceSettings: { pitch: number; rate: number };
}

export default function BotDetail({ botId: initialBotId, initialFilter, onBack, onBotChange, onFilterChange, onCompare, selectedVoiceURI, voiceSettings }: BotDetailProps) {
  const [currentBotId, setCurrentBotId] = useState(initialBotId);

  // Re-sync if initialBotId changes from parent
  useEffect(() => {
    setCurrentBotId(initialBotId);
  }, [initialBotId]);

  const filteredBots = useMemo(() => {
    if (!initialFilter) return SEED_BOTS;
    const query = initialFilter.toLowerCase();
    
    // Check if it's a faction
    const isAutobot = query === 'autobots' || query === 'autobot';
    const isDecepticon = query === 'decepticons' || query === 'decepticon';
    
    if (isAutobot) return SEED_BOTS.filter(b => b.faction === 'Autobot');
    if (isDecepticon) return SEED_BOTS.filter(b => b.faction === 'Decepticon');
    
    // Check if it matches category
    return SEED_BOTS.filter(b => b.category.toLowerCase().includes(query) || b.faction.toLowerCase().includes(query));
  }, [initialFilter]);

  const currentIndex = filteredBots.findIndex(b => b.id === currentBotId);
  const bot = filteredBots[currentIndex >= 0 ? currentIndex : 0];

  if (!bot) return null;

  const handleNav = (dir: 'next' | 'prev') => {
    window.speechSynthesis.cancel();
    const newIdx = dir === 'next' 
      ? (currentIndex + 1) % filteredBots.length 
      : (currentIndex - 1 + filteredBots.length) % filteredBots.length;
    const nextId = filteredBots[newIdx].id;
    setCurrentBotId(nextId);
    onBotChange?.(nextId);
  };

  const { imageUrl } = useCachedImage(bot.id, bot.imageUrl, bot.identifier);

  const fullText = bot.description.join('\n\n');
  const { isReading, isPaused, activeWordIndex, wordsWithIndices, handleSpeak, handleStop, jumpToWord } = useSpeechSync(
    fullText,
    selectedVoiceURI,
    voiceSettings
  );

  let wordOffset = 0;

  return (
    <div className="p-5 pt-10 pb-10 flex flex-col gap-8 w-full">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none -z-10"></div>

      <header className="flex items-center gap-4">
        <div className="bg-primary-red text-white py-1 px-4 italic border-4 border-ink-black shadow-hard transform -rotate-1">
          <h2 className="font-headline-lg text-2xl uppercase tracking-tighter italic">INTEL DOSSIER</h2>
        </div>
      </header>

      <section className="relative w-full">
        <div className="absolute -top-6 -left-2 z-10 bg-primary-red border-2 border-ink-black px-4 py-1 shadow-hard -rotate-2">
          <h1 className="text-white font-headline-lg text-4xl uppercase leading-none tracking-tight">
            {bot.name}
          </h1>
        </div>
        <div className="comic-panel shadow-hard-lg overflow-hidden relative w-full">
          <div className="halftone absolute inset-0 opacity-10 pointer-events-none"></div>
          <img src={imageUrl} alt={bot.name} className="w-full h-80 md:h-[50vh] object-cover object-top" />
          
          {/* Navigation Arrows */}
          {filteredBots.length > 1 && (
            <>
              <button 
                onClick={() => handleNav('prev')}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border-4 border-ink-black flex items-center justify-center text-ink-black shadow-hard hover:bg-gray-100 transition-all"
              >
                <ChevronLeft size={24} />
              </button>
              <button 
                onClick={() => handleNav('next')}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white border-4 border-ink-black flex items-center justify-center text-ink-black shadow-hard hover:bg-gray-100 transition-all"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <button 
          onClick={() => onFilterChange?.(bot.faction)}
          className={clsx(
            "px-6 py-2 border-2 border-ink-black font-headline-lg text-xl shadow-hard uppercase hover:scale-105 active:scale-95 transition-all text-left",
            bot.faction === 'Autobot' ? "bg-secondary-blue text-white" : "bg-ink-black text-primary-red"
          )}
        >
          {bot.faction}
        </button>
        <button 
          onClick={() => onFilterChange?.(bot.category)}
          className="bg-white border-2 border-ink-black px-4 py-2 font-bold text-xs shadow-hard uppercase flex items-center hover:bg-gray-50 active:scale-95 transition-all"
        >
          {bot.category}
        </button>
      </div>

      <article className="comic-panel p-6 rotate-1 bg-white relative w-full">
        <div className="absolute top-4 right-4 flex items-center gap-2 z-20">
          {isReading && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleStop();
              }}
              className="w-12 h-12 rounded-full border-2 border-ink-black shadow-hard flex items-center justify-center transition-all bg-white text-ink-black hover:bg-gray-100"
            >
              <Square size={20} fill="currentColor" />
            </button>
          )}
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleSpeak();
            }}
            className={clsx(
              "w-12 h-12 rounded-full border-2 border-ink-black shadow-hard flex items-center justify-center transition-all",
              isReading && !isPaused ? "bg-primary-red text-white animate-pulse" : "bg-white text-primary-red hover:bg-red-50"
            )}
          >
            {isReading && !isPaused ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-0.5" />}
          </button>
        </div>
        <div className="mt-4">
          {bot.description.map((paragraph, pIdx) => {
            const paraWordsCount = Array.from(paragraph.matchAll(/\S+/g)).length;
            const startIndex = wordOffset;
            wordOffset += paraWordsCount;
            
            return (
              <p key={pIdx} className="mb-10 w-full flex flex-wrap gap-x-1.5 gap-y-2 text-2xl font-medium leading-relaxed">
                {wordsWithIndices.slice(startIndex, startIndex + paraWordsCount).map((w, idx) => {
                  const globalIdx = startIndex + idx;
                  return (
                    <span 
                      key={globalIdx}
                      onClick={() => jumpToWord(globalIdx)}
                      className={clsx(
                        "transition-all px-1 rounded block cursor-pointer hover:bg-yellow-200",
                        globalIdx === activeWordIndex ? "bg-yellow-400 text-ink-black scale-110 shadow-sm" : "bg-transparent text-ink-black shrink-0"
                      )}
                    >
                      {w.word}
                    </span>
                  )
                })}
              </p>
            );
          })}
        </div>
      </article>

      <div className="comic-panel p-6 -rotate-1 bg-surface-dim">
        <h3 className="font-headline-lg text-2xl uppercase mb-4 text-center">BATTLE STATS</h3>
        <div className="space-y-4">
          {[
            { label: 'POWER', value: bot.stats.power, color: 'bg-primary-red' },
            { label: 'SPEED', value: bot.stats.speed, color: 'bg-secondary-blue' },
            { label: 'BRAVERY', value: bot.stats.bravery, color: 'bg-tertiary-green' },
          ].map((stat) => (
            <div key={stat.label} className="relative">
              <div className="flex justify-between font-bold text-sm mb-1 uppercase">
                <span>{stat.label}</span>
                <span>{stat.value}/100</span>
              </div>
              <div className="h-6 w-full bg-white border-2 border-ink-black overflow-hidden relative">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${stat.value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, type: "spring" }}
                  className={`h-full ${stat.color} border-r-2 border-ink-black`}
                />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4yKSIvPjwvc3ZnPg==')] opacity-50" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
