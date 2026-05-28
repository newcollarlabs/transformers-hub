import { SEED_BOTS } from '../constants';
import { Zap } from 'lucide-react';
import { motion } from 'motion/react';
import { clsx } from 'clsx';

interface BattleModeProps {
  opponentA: string;
  opponentB: string;
  onBack: () => void;
}

export default function BattleMode({ opponentA, opponentB, onBack }: BattleModeProps) {
  const botA = SEED_BOTS.find(b => b.id === opponentA)!;
  const botB = SEED_BOTS.find(b => b.id === opponentB)!;
  return (
    <div className="min-h-screen bg-surface-dim pb-32">
      <header className="sticky top-0 z-50 bg-primary-red h-14 px-5 flex items-center justify-center border-b-4 border-ink-black shadow-hard">
        <h1 className="text-white font-headline-lg text-2xl uppercase tracking-tighter italic text-center">BATTLE SIMULATOR</h1>
      </header>

      <div className="flex flex-col md:flex-row w-full gap-4 p-5">
        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="comic-panel -rotate-1 w-full aspect-square overflow-hidden">
            <img src={botA.imageUrl} alt={botA.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-secondary-blue text-white px-6 py-2 border-4 border-ink-black shadow-hard transform rotate-2">
             <h3 className="font-headline-lg text-2xl uppercase">{botA.name}</h3>
          </div>
        </div>

        <div className="flex items-center justify-center py-4 relative">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1.5 }}
            className="z-20 bg-primary-red border-4 border-ink-black shadow-hard rounded-full w-20 h-20 flex items-center justify-center"
          >
            <span className="font-display-hero text-4xl text-white italic drop-shadow-[2px_2px_0px_#000]">VS</span>
          </motion.div>
          <div className="absolute inset-x-0 h-1 bg-ink-black hidden md:block" />
        </div>

        <div className="flex-1 flex flex-col items-center gap-6">
          <div className="comic-panel rotate-1 w-full aspect-square overflow-hidden bg-ink-black">
            <img src={botB.imageUrl} alt={botB.name} className="w-full h-full object-cover" />
          </div>
          <div className="bg-ink-black text-white px-6 py-2 border-4 border-ink-black shadow-hard transform -rotate-2">
             <h3 className="font-headline-lg text-2xl uppercase text-primary-red">{botB.name}</h3>
          </div>
        </div>
      </div>

      <div className="mx-5 bg-white border-4 border-ink-black p-6 shadow-hard flex flex-col items-center gap-6 text-center">
        <h3 className="font-headline-lg text-3xl uppercase tracking-tighter">HERO MATCHUP ANALYSIS</h3>
        <p className="font-medium italic text-lg leading-tight">
          "A legendary meeting of two powerful Transformers. Each brings unique skills to the Squad. Who will you choose for your next mission?"
        </p>
        
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="w-full bg-tertiary-green text-white p-4 border-4 border-ink-black font-display-hero text-3xl italic uppercase shadow-hard"
        >
          {botA.name} & {botB.name}: TRANSFORM!
        </motion.div>
      </div>

      {/* Back button removed as requested */}
    </div>
  );
}
