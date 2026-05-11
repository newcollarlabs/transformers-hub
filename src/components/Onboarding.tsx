import { useState, FormEvent } from 'react';
import { UserProfile } from '../types';
import { Bolt, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface OnboardingProps {
  onComplete: (profile: UserProfile) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [name, setName] = useState('');
  const [age, setAge] = useState<number>(6);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (name && agreed) {
      onComplete({ kidName: name, age, onboarded: true });
    }
  };

  return (
    <div className="min-h-screen p-5 pt-10 flex flex-col items-center relative overflow-hidden">
      <div className="absolute inset-0 halftone pointer-events-none -z-10"></div>
      <div className="absolute inset-0 action-lines pointer-events-none -z-10"></div>
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="comic-panel bg-secondary-blue p-6 mb-10 -rotate-1 w-full max-w-md"
      >
        <h2 className="text-white font-headline-lg text-4xl uppercase leading-tight tracking-tight">
          PARENTS, HELP GET THE MISSION STARTED!
        </h2>
        <div className="mt-4 bg-white border-4 border-ink-black p-3 relative shadow-hard">
          <div className="absolute -top-3 left-10 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-ink-black"></div>
          <p className="font-bold text-xs uppercase tracking-wider">
            SET UP YOUR RECRUIT'S PROFILE TO START THE MISSION!
          </p>
        </div>
      </motion.div>

      <div className="w-full max-w-md space-y-8">
        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="comic-panel p-6 rotate-1">
            <div className="bg-primary-red px-4 py-1 border-2 border-ink-black -mt-10 mb-4 inline-block shadow-hard">
              <span className="text-white font-headline-lg text-xl uppercase">KID'S NAME</span>
            </div>
            <input 
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ENTER NAME HERE..."
              className="w-full h-14 border-4 border-ink-black px-4 font-bold text-lg focus:ring-0 focus:border-secondary-blue focus:border-[6px] transition-all"
            />
          </div>

          <div className="comic-panel p-6 -rotate-1">
            <div className="bg-tertiary-green px-4 py-1 border-2 border-ink-black -mt-10 mb-4 inline-block shadow-hard">
              <span className="text-white font-headline-lg text-xl uppercase">AGE</span>
            </div>
            <input 
              type="number"
              min={4}
              max={12}
              value={age}
              onChange={(e) => setAge(parseInt(e.target.value))}
              className="w-full h-14 border-4 border-ink-black px-4 font-bold text-lg focus:ring-0 focus:border-secondary-blue focus:border-[6px] transition-all"
            />
          </div>

          <div className="comic-panel p-6 bg-surface-container flex flex-col gap-6">
            <label className="flex items-center gap-4 cursor-pointer group">
              <input 
                type="checkbox"
                required
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="w-10 h-10 border-4 border-ink-black rounded-sm checked:bg-tertiary-green appearance-none relative checked:after:content-['✓'] checked:after:absolute checked:after:inset-0 checked:after:flex checked:after:items-center checked:after:justify-center checked:after:text-2xl checked:after:font-bold shadow-hard transition-all cursor-pointer"
              />
              <span className="font-bold text-xs uppercase leading-tight">
                I AGREE TO LET MY CHILD EXPLORE THE TRANSFORMERS UNIVERSE.
              </span>
            </label>

            <button 
              type="submit"
              disabled={!name || !agreed}
              className="comic-button bg-primary-red text-white h-20 text-3xl italic disabled:opacity-50 disabled:grayscale"
            >
              LET'S ROLL! <Bolt size={32} />
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 bg-white border-2 border-ink-black p-3 rounded-xl shadow-hard">
            <ShieldCheck size={24} className="text-tertiary-green" />
            <p className="font-bold text-[10px] uppercase">YOUR DATA IS SECURE IN THE AUTOBOT VAULT.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
