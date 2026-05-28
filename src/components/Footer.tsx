import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full mt-4 mb-24 px-6 md:px-12 flex flex-col items-center gap-4">
      <div className="w-full h-1 bg-ink-black/10 rounded-full" />
      
      <div className="flex flex-col items-center text-center gap-3">
        <p className="font-bold text-sm md:text-base text-ink-black flex flex-wrap justify-center items-center gap-1 leading-relaxed">
          <span>Made with</span>
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
        
        <p className="text-[10px] font-black uppercase opacity-40">
          Transformers &copy; Hasbro. This is a fan-made project for education & fun.
        </p>
      </div>
    </footer>
  );
}
