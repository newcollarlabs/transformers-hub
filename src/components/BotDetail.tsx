import { useState, useEffect } from 'react';
import { SEED_BOTS } from '../constants';
import { Sword, Play, Pause, Square } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';
import { useSpeechSync } from '../hooks/useSpeechSync';
import { useCachedImage } from '../hooks/useCachedImage';

interface BotDetailProps {
  botId: string;
  onBack: () => void;
  onCompare: (id: string) => void;
  selectedVoiceURI: string | null;
  voiceSettings: { pitch: number; rate: number };
}

export default function BotDetail({ botId, onBack, onCompare, selectedVoiceURI, voiceSettings }: BotDetailProps) {
  const bot = SEED_BOTS.find(b => b.id === botId);

  if (!bot) return null;

  const { imageUrl } = useCachedImage(bot.id, bot.imageUrl, bot.identifier);

  const fullText = bot.description.join('\n\n');
  const { isReading, isPaused, activeWordIndex, wordsWithIndices, handleSpeak, handleStop, jumpToWord } = useSpeechSync(
    fullText,
    selectedVoiceURI,
    voiceSettings
  );

  let wordOffset = 0;

  return (
    <div className="p-5 pt-10 pb-32 flex flex-col gap-8 w-full">
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
      </section>

      <div className="flex flex-wrap gap-3">
        <span className={clsx(
          "px-6 py-2 border-2 border-ink-black font-headline-lg text-xl shadow-hard uppercase",
          bot.faction === 'Autobot' ? "bg-secondary-blue text-white" : "bg-ink-black text-primary-red"
        )}>
          {bot.faction}
        </span>
        <span className="bg-white border-2 border-ink-black px-4 py-2 font-bold text-xs shadow-hard uppercase flex items-center">
          {bot.category}
        </span>
      </div>

      <div className="comic-panel bg-surface-dim p-4 -rotate-1">
        <p className="text-lg font-bold">
          <span className="text-primary-red uppercase">UNIQUE TRAIT:</span> {bot.identifier}
        </p>
      </div>

      <article className="comic-panel p-6 rotate-1 bg-white relative w-full">
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
