import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Shield, Zap, LayoutGrid, Layers, Merge, Radio, Boxes, LogOut, RefreshCcw, Download, Plane, PawPrint, Skull, Building } from 'lucide-react';
import { auth } from '../lib/firebase';
import { signOut } from 'firebase/auth';
import { usePWAInstall } from '../hooks/usePWAInstall';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (query: string) => void;
}

export default function SideMenu({ isOpen, onClose, onNavigate }: SideMenuProps) {
  const { isStandalone } = usePWAInstall();
  const handleReset = async () => {
    if (confirm('Are you sure you want to reset everything and log out?')) {
      await signOut(auth);
      localStorage.clear();
      window.location.reload();
    }
  };

  const menuItems = [
    { label: 'Autobot', icon: Shield, query: 'Autobot', color: 'text-secondary-blue' },
    { label: 'Decepticon', icon: Zap, query: 'Decepticon', color: 'text-primary-red' },
  ];

  const squadItems = [
    { label: 'Core Squad', icon: Layers, query: 'Elite Core' },
    { label: 'Combiner Squad', icon: Merge, query: 'Combiners' },
    { label: 'Bonded Squad', icon: Radio, query: 'Bonded Units' },
    { label: 'Titan Squad', icon: Building, query: 'Titans' },
    { label: 'Seeker Squad', icon: Plane, query: 'Seekers' },
    { label: 'Maximal Squad', icon: PawPrint, query: 'Maximals' },
    { label: 'Predacon Squad', icon: Skull, query: 'Predacons' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink-black/60 z-[100] backdrop-blur-sm"
          />

          {/* Menu Drawer */}
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 left-0 w-[280px] bg-white z-[101] shadow-2xl border-r-4 border-ink-black flex flex-col"
          >
            {/* Header */}
            <div className="bg-primary-red p-6 border-b-4 border-ink-black flex items-center justify-between">
              <h2 className="text-white font-headline-lg text-2xl uppercase italic tracking-tighter">
                COMMAND MENU
              </h2>
              <button 
                onClick={onClose}
                className="text-white hover:scale-110 transition-transform bg-ink-black/20 p-1 rounded"
              >
                <X size={24} />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-4 space-y-6">
              {/* Faction Section */}
              <div className="space-y-2">
                <p className="text-[10px] font-bold text-ink-black/40 uppercase tracking-widest px-2 mb-3">
                  Select Faction
                </p>
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.query);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg border-2 border-transparent hover:border-ink-black hover:bg-surface-container transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className={item.color} size={20} />
                      <span className="font-bold text-ink-black">{item.label}s</span>
                    </div>
                    <ChevronRight size={16} className="text-ink-black/20 group-hover:text-ink-black group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              {/* Squads Section */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 px-2 mb-3">
                  <Boxes size={14} className="text-tertiary-green" />
                  <p className="text-[10px] font-bold text-ink-black/40 uppercase tracking-widest">
                    Squad Specializations
                  </p>
                </div>
                {squadItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      onNavigate(item.query);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg border-2 border-transparent hover:border-ink-black hover:bg-surface-container transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="text-tertiary-green" size={18} />
                      <span className="font-bold text-ink-black">{item.label}</span>
                    </div>
                    <ChevronRight size={16} className="text-ink-black/20 group-hover:text-ink-black group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>

              {/* System Section */}
              <div className="space-y-2 pt-4 border-t-2 border-ink-black/5">
                <p className="text-[10px] font-bold text-ink-black/40 uppercase tracking-widest px-2 mb-3">
                  System Commands
                </p>
                {!isStandalone && (
                  <button
                    onClick={() => {
                      onNavigate('install');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-lg border-2 border-transparent hover:border-ink-black hover:bg-surface-container transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <Download className="text-secondary-blue" size={18} />
                      <span className="font-bold text-ink-black uppercase">Install App</span>
                    </div>
                    <ChevronRight size={16} className="text-ink-black/20 group-hover:text-ink-black group-hover:translate-x-1 transition-all" />
                  </button>
                )}
                <button
                  onClick={handleReset}
                  className="w-full flex items-center gap-3 p-3 rounded-lg border-2 border-transparent hover:border-primary-red hover:bg-red-50 text-primary-red transition-all font-bold"
                >
                  <RefreshCcw size={18} />
                  <span>SIGN OUT</span>
                </button>
              </div>
            </div>

            {/* Footer Tagline */}
            <div className="p-4 bg-surface-container border-t-2 border-ink-black/10">
              <p className="text-[9px] font-bold text-center text-ink-black/30 uppercase leading-tight">
                Cybertronian Archive Access // Hero Hub v1.1
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
