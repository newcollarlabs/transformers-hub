import { useCachedImage } from '../hooks/useCachedImage';
import { SEED_BOTS } from '../constants';
import { Radio } from 'lucide-react';

interface BotImageProps {
  botId: string;
  initialUrl: string;
  prompt: string;
  alt: string;
  className?: string;
}

export default function BotImage({ botId, initialUrl, prompt, alt, className }: BotImageProps) {
  const { imageUrl } = useCachedImage(botId, initialUrl, prompt);

  // Identify core bot information to customize the Tactical Scanner state!
  const botInfo = SEED_BOTS.find(b => b.id === botId);
  const faction = botInfo?.faction || (botId.toLowerCase().includes('decepticon') ? 'Decepticon' : 'Autobot');
  const botName = botInfo?.name || alt || botId.toUpperCase();

  // Treat missing, empty or SVG fallback URLs as empty cache states to render our Premium holographic scanner
  const isFallback = !imageUrl || 
                     imageUrl.includes('image/svg+xml') || 
                     imageUrl.includes('PRE_EXISTING_FIRESTORE_IMAGE') ||
                     imageUrl === '';

  if (isFallback) {
    const isAutobot = faction === 'Autobot';
    return (
      <div 
        id={`hud-scanner-${botId}`}
        className={`${className} flex flex-col justify-between p-3 bg-[#0d1117] text-white relative overflow-hidden select-none border-4 border-ink-black shrink-0`}
        style={{ fontFamily: 'var(--font-mono, monospace)', minHeight: '96px' }}
      >
        {/* Tech Grid Background Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,24,38,0.4)_1px,transparent_1px),linear-gradient(90deg,rgba(18,24,38,0.4)_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none opacity-80" />

        {/* Pulsing Target Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <div className="w-16 h-16 rounded-full border border-white animate-ping" />
        </div>

        {/* Glowing Scan Ray */}
        <div className={isAutobot 
          ? "absolute left-0 w-full h-0.5 bg-secondary-blue/60 shadow-[0_0_8px_#3b82f6] animate-[bounce_4s_infinite]" 
          : "absolute left-0 w-full h-0.5 bg-primary-red/60 shadow-[0_0_8px_#ef4444] animate-[bounce_4s_infinite]"
        } />

        {/* Top Header of the Scanner HUD */}
        <div className="flex items-center justify-between text-[8px] tracking-widest shrink-0 relative z-10 font-bold">
          <span className={isAutobot ? "text-secondary-blue" : "text-primary-red"}>
            {isAutobot ? '▲ AUTOBOT_LINK' : '▼ DECEPT_LINK'}
          </span>
          <span className="animate-pulse bg-[#1f2937]/50 px-1 py-0.5 text-[7px] text-tertiary-green border border-tertiary-green/20">LIVE_SCAN</span>
        </div>

        {/* Center Scanner Logo & Bot Identifiers */}
        <div className="flex flex-col items-center justify-center grow py-1 relative z-10 overflow-hidden">
          <Radio size={16} className={isAutobot ? "text-secondary-blue/90 animate-pulse mb-0.5" : "text-primary-red/90 animate-pulse mb-0.5"} />
          <span className="text-[10px] font-black tracking-tight text-center uppercase truncate max-w-full">
            {botName}
          </span>
          <span className="text-[7.5px] text-white/40 uppercase tracking-widest leading-none mt-0.5">
            ACQUIRING CORES...
          </span>
        </div>

        {/* Bottom Tactical Coordinates Row */}
        <div className="flex justify-between items-center text-[7px] text-white/50 border-t border-white/10 pt-1 relative z-10 shrink-0 uppercase font-medium">
          <span>COORD: S-{botId.substring(0, 3).toUpperCase()}</span>
          <span className="text-[#34d399] font-black">ACTIVE_GRID</span>
        </div>
      </div>
    );
  }

  return (
    <img 
      src={imageUrl} 
      alt={alt} 
      className={className} 
      onError={(e) => {
        // Handle runtime connection drops gracefully
        (e.target as HTMLImageElement).style.display = 'none';
        const parent = (e.target as HTMLImageElement).parentElement;
        if (parent) {
          parent.classList.add('flex', 'items-center', 'justify-center', 'bg-[#0d1117]');
          parent.innerHTML = `
            <div class="text-[9px] font-mono font-bold text-center p-2 uppercase text-white/60">
              SYS_READ_FAIL
            </div>
          `;
        }
      }}
    />
  );
}
