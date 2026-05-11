import { useState, useMemo } from 'react';
import { SEED_BOTS } from '../constants';
import { Search, ChevronLeft, ChevronRight, Zap, Play, Pause, Square } from 'lucide-react';
import Fuse from 'fuse.js';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { useSpeechSync } from '../hooks/useSpeechSync';
import BotImage from './BotImage';

interface MissionHubProps {
  key?: string;
  initialSearch?: string;
  onSelectBot: (id: string) => void;
  onTagClick: (tag: string) => void;
  selectedVoiceURI: string | null;
  voiceSettings: { pitch: number; rate: number };
}

export default function MissionHub({ initialSearch = '', onSelectBot, onTagClick, selectedVoiceURI, voiceSettings }: MissionHubProps) {
  const [filterTag, setFilterTag] = useState(initialSearch);
  const [search, setSearch] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fuse = useMemo(() => new Fuse(SEED_BOTS, {
    keys: ['name', 'faction', 'category', 'identifier'],
    threshold: 0.3
  }), []);

  const getBotsForTagAndSearch = (tag: string, text: string) => {
    if (text) {
      // Prioritize explicit matches even in search text to feel sturdy
      const searchLower = text.toLowerCase();
      if (searchLower === 'autobot' || searchLower === 'autobots') {
        return SEED_BOTS.filter(b => b.faction === 'Autobot');
      }
      if (searchLower === 'decepticon' || searchLower === 'decepticons') {
        return SEED_BOTS.filter(b => b.faction === 'Decepticon');
      }
      if (['elite core', 'combiners', 'multi-changers', 'bonded units', 'titans'].includes(searchLower)) {
        return SEED_BOTS.filter(b => b.category.toLowerCase() === searchLower);
      }
      return fuse.search(text).map(r => r.item);
    }
    
    if (tag) {
      const tagLower = tag.toLowerCase();
      if (tagLower === 'autobot' || tagLower === 'autobots') {
        return SEED_BOTS.filter(b => b.faction === 'Autobot');
      }
      if (tagLower === 'decepticon' || tagLower === 'decepticons') {
        return SEED_BOTS.filter(b => b.faction === 'Decepticon');
      }
      if (['elite core', 'combiners', 'multi-changers', 'bonded units', 'titans'].includes(tagLower)) {
        return SEED_BOTS.filter(b => b.category.toLowerCase() === tagLower);
      }
      return SEED_BOTS.filter(b => b.faction.toLowerCase() === tagLower || b.category.toLowerCase() === tagLower || b.identifier.toLowerCase() === tagLower);
    }

    return SEED_BOTS;
  };

  const filteredBots = useMemo(() => getBotsForTagAndSearch(filterTag, search), [filterTag, search, fuse]);

  const currentBot = filteredBots[currentIndex % (filteredBots.length || 1)];

  const handleNav = (direction: 'left' | 'right') => {
    window.speechSynthesis.cancel();
    if (search) {
      // Clear search but maintain continuity in the underlying base list
      const baseBots = getBotsForTagAndSearch(filterTag, '');
      const prevIdx = baseBots.findIndex(b => b.id === currentBot?.id);
      const safeIdx = prevIdx >= 0 ? prevIdx : 0;
      setSearch('');
      if (direction === 'left') {
        setCurrentIndex((safeIdx - 1 + baseBots.length) % baseBots.length);
      } else {
        setCurrentIndex((safeIdx + 1) % baseBots.length);
      }
    } else {
      if (direction === 'left') {
        setCurrentIndex(prev => (prev - 1 + filteredBots.length) % filteredBots.length);
      } else {
        setCurrentIndex(prev => (prev + 1) % filteredBots.length);
      }
    }
  };

  const fullTextDesc = currentBot?.description?.join(' ') || '';
  const { isReading, isPaused, activeWordIndex, wordsWithIndices, handleSpeak, handleStop, jumpToWord } = useSpeechSync(
    fullTextDesc,
    selectedVoiceURI,
    voiceSettings
  );

  return (
    <div className="p-5 pt-8 flex flex-col gap-8 pb-32">
      <div className="halftone absolute inset-0 pointer-events-none -z-10"></div>
      
      {/* Search Tracker */}
      <div className="relative">
        <div className="relative">
          <input 
            type="text"
            value={search}
            onChange={(e) => { 
                setSearch(e.target.value); 
                setCurrentIndex(0); 
                window.speechSynthesis.cancel();
            }}
            placeholder="SEARCH TRANSFORMERS"
            className="w-full h-14 bg-white border-4 border-ink-black px-12 font-bold text-lg focus:ring-0 focus:border-primary-red shadow-hard"
          />
          <Search size={24} className="absolute left-4 top-4 text-ink-black/40" />
        </div>
      </div>

      {filteredBots.length > 0 ? (
        <div className="flex flex-col items-center gap-8">
          <div className="relative w-full">
            {/* Nav Arrows */}
            <button 
              onClick={() => handleNav('left')}
              className="absolute -left-2 md:-left-6 top-40 z-30 w-12 h-12 rounded-full bg-secondary-blue border-4 border-ink-black flex items-center justify-center text-white shadow-hard hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronLeft size={24} strokeWidth={3} />
            </button>
            <button 
              onClick={() => handleNav('right')}
              className="absolute -right-2 md:-right-6 top-40 z-30 w-12 h-12 rounded-full bg-secondary-blue border-4 border-ink-black flex items-center justify-center text-white shadow-hard hover:scale-110 active:scale-95 transition-all"
            >
              <ChevronRight size={24} strokeWidth={3} />
            </button>

            {/* Carousel Item */}
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentBot.id}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -50, opacity: 0 }}
                className="comic-panel rotate-1 overflow-hidden transition-transform w-full"
              >
                <div className="relative h-64 md:h-96 border-b-4 border-ink-black overflow-hidden bg-surface-dim">
                  <div className="halftone absolute inset-0"></div>
                  <BotImage 
                    botId={currentBot.id} 
                    initialUrl={currentBot.imageUrl} 
                    prompt={currentBot.identifier} 
                    alt={currentBot.name} 
                    className="w-full h-full object-cover object-top" 
                  />
                  <div className="absolute top-4 left-4 bg-primary-red text-white border-2 border-ink-black px-4 py-1 font-headline-lg text-2xl md:text-3xl -rotate-2 shadow-hard uppercase italic tracking-tighter">
                    {currentBot.name}
                  </div>
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
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
                      {isReading && !isPaused ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                    </button>
                  </div>
                </div>

                <div className="p-5 bg-white space-y-4">
                  <div className="flex flex-wrap gap-2">
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        window.speechSynthesis.cancel();
                        onTagClick(currentBot.faction); 
                      }}
                      className="bg-primary-red text-white px-3 py-1 border-2 border-ink-black font-black text-xs uppercase hover:bg-ink-black transition-colors"
                    >
                      {currentBot.faction}
                    </button>
                    <button 
                      onClick={(e) => { 
                        e.stopPropagation(); 
                        window.speechSynthesis.cancel();
                        onTagClick(currentBot.category); 
                      }}
                      className="bg-secondary-blue text-white px-3 py-1 border-2 border-ink-black font-black text-xs uppercase truncate max-w-[200px] hover:bg-ink-black transition-colors"
                    >
                      {currentBot.category}
                    </button>
                  </div>

                  <div className="relative bg-surface-container border-2 border-ink-black p-4 rounded-lg">
                    <div className="absolute -top-3 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-ink-black"></div>
                    
                    <div className="mt-2">
                      {(() => {
                        let wordOffset = 0;
                        return currentBot.description.map((paragraph, pIdx) => {
                          const paraWordsCount = Array.from(paragraph.matchAll(/\S+/g)).length;
                          const startIndex = wordOffset;
                          wordOffset += paraWordsCount;
                          
                          return (
                            <p key={pIdx} className="mb-8 w-full flex flex-wrap gap-x-1.5 gap-y-2 pr-14">
                              {wordsWithIndices.slice(startIndex, startIndex + paraWordsCount).map((w, idx) => {
                                const globalIdx = startIndex + idx;
                                return (
                                  <span 
                                    key={globalIdx}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      jumpToWord(globalIdx);
                                    }}
                                    className={clsx(
                                      "text-base md:text-lg font-medium italic transition-all rounded px-1 cursor-pointer hover:bg-yellow-200",
                                      globalIdx === activeWordIndex ? "bg-yellow-400 text-ink-black scale-110 shadow-sm" : "bg-transparent text-ink-black shrink-0"
                                    )}
                                  >
                                    {w.word}
                                  </span>
                                )
                              })}
                            </p>
                          );
                        });
                      })()}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex gap-3 flex-wrap justify-center">
            {filteredBots.map((_, i) => (
              <div 
                key={i} 
                className={`transition-all border-2 border-ink-black ${i === currentIndex % filteredBots.length ? 'w-10 h-3 bg-secondary-blue' : 'w-3 h-3 bg-surface-dim'}`} 
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="comic-panel p-10 text-center flex flex-col items-center gap-4">
          <Zap size={64} className="text-primary-red animate-bounce" />
          <p className="font-headline-lg text-2xl uppercase">NO HEROES FOUND AT THIS COORDS!</p>
          <button onClick={() => setSearch('')} className="comic-button bg-secondary-blue text-white">RESET SCANNER</button>
        </div>
      )}
    </div>
  );
}
