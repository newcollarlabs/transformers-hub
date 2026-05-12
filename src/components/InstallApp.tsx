import { motion } from 'motion/react';
import { Download, Star, ShieldCheck, Zap, Info } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export default function InstallApp() {
  const { isInstallable, install } = usePWAInstall();

  return (
    <div className="p-6 md:p-10 flex flex-col items-center min-h-[80vh] pb-32">
      <div className="absolute inset-0 halftone opacity-5 pointer-events-none -z-10"></div>
      
      {/* App Store Card Header */}
      <div className="w-full max-w-md bg-white border-4 border-ink-black shadow-hard-lg rounded-3xl overflow-hidden mb-8">
        <div className="p-6 flex gap-5 items-start">
          {/* App Icon */}
          <div className="w-24 h-24 bg-white border-4 border-ink-black rounded-[22%] flex items-center justify-center shrink-0 shadow-hard transform -rotate-3 overflow-hidden">
             <img 
              src="https://image.pollinations.ai/prompt/Transformers%20robot%20face%20kids%20app%20icon%20vibrant%20red%20blue%20bold%20comic%20book%20vector%20white%20background?width=200&height=200&nologo=true" 
              alt="Transformers 4 Kids Icon" 
              className="w-20 h-20 object-contain"
            />
          </div>
          
          <div className="flex flex-col grow pt-1">
            <h2 className="font-headline-lg text-2xl uppercase italic leading-tight text-ink-black">TRANSFORMERS 4 KIDS</h2>
            <p className="text-secondary-blue font-bold text-xs uppercase tracking-wider mb-2">The Heroic Guide</p>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={12} className="fill-[#FFDD00] text-[#FFDD00]" />
              ))}
              <span className="text-[10px] font-black ml-1 opacity-50 uppercase">Kid Approved</span>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="px-6 py-4 border-t-2 border-ink-black/5 flex items-center justify-between bg-surface-container/30">
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase opacity-40">Version</span>
            <span className="font-bold text-sm">1.1.0</span>
          </div>
          <div className="w-px h-8 bg-ink-black/10"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase opacity-40">Size</span>
            <span className="font-bold text-sm">2.4 MB</span>
          </div>
          <div className="w-px h-8 bg-ink-black/10"></div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black uppercase opacity-40">Age</span>
            <span className="font-bold text-sm">5+</span>
          </div>
        </div>

        {/* Install Section */}
        <div className="p-6 bg-white border-t-4 border-ink-black">
          <p className="text-sm font-bold text-ink-black/70 mb-6 leading-relaxed">
            Get the full Transformers experience! Install the app to your home screen for instant access to the Hero Hub, offline reading, and a full-screen comic experience for your little hero!
          </p>

          {!isInstallable ? (
            <div className="bg-surface-container p-4 rounded-xl border-2 border-dashed border-ink-black/20 flex gap-3">
              <Info className="text-secondary-blue shrink-0" size={20} />
              <div className="flex flex-col gap-1">
                <p className="text-sm font-black text-ink-black uppercase mb-1">How to Install</p>
                <p className="text-xs font-bold text-ink-black/70 leading-relaxed">
                  Tap your browser's <span className="underline decoration-2 decoration-secondary-blue underline-offset-2">Menu</span> or <span className="underline decoration-2 decoration-secondary-blue underline-offset-2">Share</span> icon, then select <span className="bg-secondary-blue text-white px-1.5 py-0.5 rounded italic">"Add to Home Screen"</span>.
                </p>
              </div>
            </div>
          ) : (
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={install}
              className="w-full bg-secondary-blue text-white font-headline-lg text-xl py-4 border-4 border-ink-black shadow-hard hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              <Download size={24} />
              INSTALL NOW
            </motion.button>
          )}
        </div>
      </div>

      {/* Feature Highlights */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4">
        <div className="comic-panel p-4 bg-white flex flex-col gap-2">
          <ShieldCheck className="text-tertiary-green" size={24} />
          <h4 className="font-bold text-xs uppercase">Safe & Private</h4>
          <p className="text-[10px] font-medium opacity-60">Locked safe for kids, no ads, no trackers.</p>
        </div>
        <div className="comic-panel p-4 bg-white flex flex-col gap-2">
          <Zap className="text-[#FFDD00]" size={24} />
          <h4 className="font-bold text-xs uppercase">Instant Play</h4>
          <p className="text-[10px] font-medium opacity-60">Super fast loading from your home screen.</p>
        </div>
      </div>
      
      <p className="mt-12 text-[10px] font-black uppercase text-ink-black/30 tracking-widest text-center">
        Powered by PWA Technology // Optimus Prime Approved
      </p>
    </div>
  );
}
