import { UserProfile } from '../types';
import { Play } from 'lucide-react';
import { motion } from 'motion/react';

interface WelcomeProps {
  profile: UserProfile;
  onStart: () => void;
}

export default function Welcome({ profile, onStart }: WelcomeProps) {
  return (
    <div className="flex flex-col items-center pt-8 px-5 pb-10">
      <div className="absolute inset-0 action-lines pointer-events-none -z-10"></div>
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none -z-10"></div>

      <motion.div 
        initial={{ rotate: -5, scale: 0.9 }}
        animate={{ rotate: -1, scale: 1 }}
        className="relative w-full max-w-sm aspect-[4/3] border-4 border-ink-black bg-white shadow-hard-lg overflow-hidden mb-12"
      >
        <img 
          src="https://image.pollinations.ai/prompt/Transformers%20cartoon%20suitable%20for%206%20to%209%20year%20old%20kids.%20Vibrant%20colors,%20YouTube%20Kids%20cartoon%20style,%20Optimus%20Prime%20and%20Megatron%20standing%20next%20to%20each%20other.%20Nano%20banana%202%20style.?width=1280&height=720&nologo=true&seed=115"
          alt="Optimus and Megatron"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center transform -rotate-2 relative mb-12"
      >
        <div className="bg-white border-4 border-ink-black p-6 shadow-hard-lg">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-l-4 border-t-4 border-ink-black rotate-45"></div>
          <h2 className="font-display-hero text-5xl italic leading-none tracking-tighter text-primary-red">
            WELCOME, HERO <span className="text-secondary-blue uppercase">{profile.kidName}!</span>
          </h2>
          <p className="font-bold text-lg mt-3 uppercase tracking-[0.2em]">
            MISSION: LEARNING ABOUT TRANSFORMERS
          </p>
        </div>
      </motion.div>

      <button 
        onClick={onStart}
        className="comic-button bg-primary-red text-white h-20 w-full max-w-sm text-3xl italic shadow-hard-lg"
      >
        START THE ADVENTURE <Play size={32} fill="white" />
      </button>
    </div>
  );
}
