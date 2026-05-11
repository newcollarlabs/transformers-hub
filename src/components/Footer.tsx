import { motion } from 'motion/react';
import { Coffee, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-4 mb-24 px-6 md:px-12 flex flex-col items-center gap-4">
      <div className="w-full h-1 bg-ink-black/10 rounded-full" />
      
      <div className="flex flex-col items-center text-center gap-3">
        <p className="font-bold text-sm md:text-base text-ink-black flex flex-wrap justify-center items-center gap-1 leading-relaxed">
          <span>Made by</span>
          <a 
            href="https://www.linkedin.com/in/kiranvaidya/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-secondary-blue hover:underline decoration-2 underline-offset-2 transition-all"
          >
            Kiran Vaidya
          </a>
          <span>with</span>
          <Heart size={16} className="text-primary-red fill-primary-red" />
          <span>in 🇨🇦 for my kiddo,</span>
          <a 
            href="https://www.instagram.com/p/DYNcuDiyjKJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary-red hover:underline decoration-2 underline-offset-2 transition-all"
          >
            Ved
          </a>
        </p>

        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="https://www.buymeacoffee.com/kiranvaidya"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#FFDD00] text-black px-6 py-3 border-4 border-black font-headline-lg shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          <Coffee size={20} className="fill-black" />
          <span>BUY ME A COFFEE</span>
        </motion.a>
        
        <p className="text-[10px] font-black uppercase opacity-40">
          Transformers &copy; Hasbro. This is a fan-made project for education & fun.
        </p>
      </div>
    </footer>
  );
}
