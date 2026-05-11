import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { LORE_DETAILS } from '../constants';
import { Shield, Skull, ChevronRight, Play, Pause, Square, Users } from 'lucide-react';
import { LoreDetail } from '../types';
import { clsx } from 'clsx';
import { useSpeechSync } from '../hooks/useSpeechSync';
import BotImage from './BotImage';

interface LoreProps {
  key?: string;
  initialLoreId?: string | null;
  onDone: () => void;
  onViewBots: (query?: string) => void;
  selectedVoiceURI: string | null;
  voiceSettings: { pitch: number; rate: number };
}

export default function Lore({ initialLoreId, onDone, onViewBots, selectedVoiceURI, voiceSettings }: LoreProps) {
  const [selectedId, setSelectedId] = useState<string | null>(initialLoreId || null);

  const selectedLore = LORE_DETAILS.find(l => l.id === selectedId);

  if (selectedLore) {
    return (
      <LoreDetailView 
        lore={selectedLore} 
        onBack={() => setSelectedId(null)} 
        onViewBots={() => onViewBots(selectedLore.id)}
        selectedVoiceURI={selectedVoiceURI} 
        voiceSettings={voiceSettings} 
      />
    );
  }

  if (selectedId === 'squads') {
    return (
      <SquadsListView 
        onBack={() => setSelectedId(null)} 
        onSelectSquad={(id) => setSelectedId(id)} 
      />
    );
  }

  return (
    <div className="p-5 flex flex-col gap-12 pb-32">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none -z-10"></div>

      <section>
        <div className="comic-panel p-6 -rotate-1 relative mb-12">
          <div className="bg-primary-red text-white px-4 py-1 border-2 border-ink-black -mt-10 mb-6 inline-block transform -rotate-2 shadow-hard">
            <h2 className="font-headline-lg text-2xl uppercase">THE GREAT STORY</h2>
          </div>
          
          <div className="bg-white border-4 border-ink-black rounded-2xl p-4 mb-10 relative shadow-hard">
            <p className="text-xl font-bold leading-tight uppercase">
              WHOA! Welcome to the Hero Hub! Ready to learn about the giant metal warriors from outer space? Each Transformer belongs to the faction of an Autobot or Decepticons. Further both Autobots and Decepticons can belong to one of the 5 Squads. Tap a Transformers Category to learn their secrets!
            </p>
            <div className="absolute -bottom-6 left-10 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-t-[25px] border-t-ink-black"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Autobots */}
            <button 
              onClick={() => setSelectedId('Autobot')}
              className="bg-secondary-blue text-white border-4 border-ink-black p-5 shadow-hard-lg rotate-1 text-left active:scale-95 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield size={40} fill="white" />
                <h3 className="font-headline-lg text-3xl italic">AUTOBOTS</h3>
              </div>
              <p className="font-bold text-sm mb-4 uppercase">THE GOOD GUYS! They protect the Earth from bullies!</p>
              <div className="mt-4 aspect-video border-2 border-ink-black overflow-hidden shadow-hard">
                <BotImage 
                  botId="lore-autobot" 
                  initialUrl={LORE_DETAILS.find(l => l.id === 'Autobot')?.imageUrl || ''} 
                  prompt="Transformers Optimus Prime, heroic autobot leader" 
                  alt="Autobot" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </button>

            {/* Decepticons */}
            <button 
              onClick={() => setSelectedId('Decepticon')}
              className="bg-ink-black text-white border-4 border-ink-black p-5 shadow-hard-lg -rotate-1 text-left active:scale-95 transition-transform"
            >
              <div className="flex items-center gap-3 mb-4">
                <Skull size={40} fill="white" />
                <h3 className="font-headline-lg text-3xl italic text-primary-red">DECEPTICONS</h3>
              </div>
              <p className="font-bold text-sm mb-4 uppercase">THE BAD GUYS! They want to take over everything!</p>
              <div className="mt-4 aspect-video border-2 border-white overflow-hidden shadow-hard">
                <BotImage 
                  botId="lore-decepticon" 
                  initialUrl={LORE_DETAILS.find(l => l.id === 'Decepticon')?.imageUrl || ''} 
                  prompt="Transformers Megatron, menacing decepticon leader" 
                  alt="Decepticon" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </button>

            {/* Bot Squads */}
            <button 
              onClick={() => setSelectedId('squads')}
              className="bg-tertiary-green text-white border-4 border-ink-black p-5 shadow-hard-lg rotate-1 text-left active:scale-95 transition-transform flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <Users size={40} fill="white" />
                <h3 className="font-headline-lg text-3xl italic">BOT SQUADS</h3>
              </div>
              <p className="font-bold text-sm mb-4 uppercase">SPECIALIZED TEAMS! United together, they combine their unique skills to conquer any mission!</p>
              <div className="mt-auto aspect-video border-2 border-ink-black overflow-hidden shadow-hard">
                <img src={LORE_DETAILS.find(l => l.id === 'Combiners')?.imageUrl} alt="Bot Squads" className="w-full h-full object-cover" />
              </div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function SquadsListView({ onBack, onSelectSquad }: { onBack: () => void, onSelectSquad: (id: string) => void }) {
  const squads = LORE_DETAILS.filter(l => !['Autobot', 'Decepticon'].includes(l.id));

  return (
    <div className="p-5 flex flex-col gap-12 pb-32 min-h-screen">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none -z-10"></div>
      
      <div className="flex items-center gap-4 mt-4">
        <div className="bg-tertiary-green text-white px-4 py-2 border-4 border-ink-black inline-block transform rotate-1 shadow-hard">
          <h2 className="font-headline-lg text-2xl md:text-3xl uppercase italic">BOT SQUADS</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {squads.map((squad, index) => {
          const isEven = index % 2 === 0;
          return (
            <button 
              key={squad.id}
              onClick={() => onSelectSquad(squad.id)}
              className={clsx(
                "text-white border-4 border-ink-black p-5 shadow-hard-lg text-left active:scale-95 transition-transform flex flex-col h-full",
                squad.accentColor,
                isEven ? "rotate-1" : "-rotate-1"
              )}
            >
              <h3 className="font-headline-lg text-3xl italic mb-2 tracking-tighter">{squad.title}</h3>
              <p className="font-bold text-xs mb-3 uppercase tracking-widest opacity-90">{squad.subtitle}</p>
              <p className="font-medium text-sm mb-4 leading-tight grow">{squad.paragraphs[0]}</p>
              <div className="mt-auto aspect-video border-2 border-ink-black overflow-hidden shadow-hard bg-surface-dim">
                <BotImage 
                  botId={squad.id} 
                  initialUrl={squad.imageUrl} 
                  prompt={squad.title} 
                  alt={squad.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function LoreDetailView({ lore, onBack, onViewBots, selectedVoiceURI, voiceSettings }: { 
  lore: LoreDetail, 
  onBack: () => void,
  onViewBots: () => void,
  selectedVoiceURI: string | null,
  voiceSettings: { pitch: number, rate: number }
}) {
  const fullText = lore.paragraphs.join(' ');
  const { isReading, isPaused, activeWordIndex, wordsWithIndices, handleSpeak, handleStop, jumpToWord } = useSpeechSync(
    fullText,
    selectedVoiceURI,
    voiceSettings
  );

  return (
    <div className="min-h-screen bg-surface-dim pt-4 pb-32 flex flex-col">
      {/* Back button removed as requested */}
      <article className="mx-5 grow flex flex-col">
        <div className={clsx("comic-panel p-6 border-b-8 border-r-8 relative overflow-hidden", lore.accentColor)}>
          <div className="relative z-10 text-white">
            <h2 className="font-headline-lg text-4xl uppercase italic leading-none mb-1">{lore.title}</h2>
            <p className="font-bold text-xs uppercase tracking-widest opacity-80">{lore.subtitle}</p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-full bg-white opacity-10 transform skew-x-12 translate-x-12"></div>
        </div>

        <div className="mt-8 comic-panel p-0 overflow-hidden relative border-4">
          <BotImage 
            botId={lore.id} 
            initialUrl={lore.imageUrl} 
            prompt={lore.title} 
            alt={lore.title} 
            className="w-full aspect-[4/3] object-cover" 
          />
          <div className="absolute bottom-4 right-4 flex items-center gap-2 z-20">
            {isReading && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleStop();
                }}
                className="w-16 h-16 rounded-full border-4 border-ink-black shadow-hard flex items-center justify-center transition-all bg-white text-ink-black hover:bg-gray-100"
              >
                <Square size={26} fill="currentColor" />
              </button>
            )}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleSpeak();
              }}
              className={clsx(
                "w-16 h-16 rounded-full border-4 border-ink-black shadow-hard flex items-center justify-center transition-all",
                isReading && !isPaused ? "bg-primary-red text-white animate-pulse" : "bg-white text-primary-red hover:bg-red-50"
              )}
            >
              {isReading && !isPaused ? <Pause size={32} fill="currentColor" /> : <Play size={32} fill="currentColor" className="ml-1" />}
            </button>
          </div>
        </div>

        <div className="mt-8 comic-panel p-6 bg-white space-y-6">
          <div className="flex flex-wrap gap-x-1.5 gap-y-1">
            {wordsWithIndices.map((w, idx) => (
              <span 
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  jumpToWord(idx);
                }}
                className={clsx(
                  "text-lg font-bold transition-all px-0.5 rounded cursor-pointer hover:bg-yellow-200",
                  idx === activeWordIndex ? "bg-yellow-400 text-ink-black scale-110 shadow-sm" : "text-ink-black"
                )}
              >
                {w.word}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-8">
            <button 
              onClick={() => {
                window.speechSynthesis.cancel();
                onViewBots();
              }}
              className="comic-button w-full bg-secondary-blue text-white h-20 text-2xl italic shadow-hard-lg"
            >
              {lore.id === 'Autobot' ? 'VIEW AUTOBOTS' : lore.id === 'Decepticon' ? 'VIEW DECEPTICONS' : 'VIEW SQUAD BOTS'} <ChevronRight size={32} />
            </button>
        </div>
      </article>
    </div>
  );
}
