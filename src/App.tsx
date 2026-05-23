/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { UserProfile, TransformerBot } from './types';
import { SEED_BOTS } from './constants';
import Onboarding from './components/Onboarding';
import Welcome from './components/Welcome';
import Lore from './components/Lore';
import MissionHub from './components/MissionHub';
import BotDetail from './components/BotDetail';
import BattleMode from './components/BattleMode';
import InstallApp from './components/InstallApp';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import { usePWAInstall } from './hooks/usePWAInstall';

type Screen = 'onboarding' | 'welcome' | 'lore' | 'bots' | 'detail' | 'battle' | 'settings' | 'install';

export default function App() {
  const { isStandalone } = usePWAInstall();
  const [profile, setProfile] = useState<UserProfile | null>(() => {
    const saved = localStorage.getItem('tf_profile');
    return saved ? JSON.parse(saved) : null;
  });
  
  const [selectedVoiceURI, setSelectedVoiceURI] = useState<string | null>(() => {
    return localStorage.getItem('tf_voice_uri');
  });

  const [voiceSettings, setVoiceSettings] = useState<{ pitch: number, rate: number }>(() => {
    const saved = localStorage.getItem('tf_voice_settings');
    return saved ? JSON.parse(saved) : { pitch: 1.0, rate: 0.9 };
  });

  const [currentScreen, setCurrentScreen] = useState<Screen>(profile ? 'welcome' : 'onboarding');
  const [selectedBotId, setSelectedBotId] = useState<string | null>(null);
  const [selectedBotFilter, setSelectedBotFilter] = useState<string | null>(null);
  const [battleOpponents, setBattleOpponents] = useState<{ a: string; b: string } | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [initialLoreId, setInitialLoreId] = useState<string | null>(null);
  const [initialMissionSearch, setInitialMissionSearch] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loreResetCounter, setLoreResetCounter] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentScreen, selectedBotId, initialLoreId, initialMissionSearch, battleOpponents]);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  useEffect(() => {
    if (profile) {
      localStorage.setItem('tf_profile', JSON.stringify(profile));
    }
  }, [profile]);

  useEffect(() => {
    if (selectedVoiceURI) {
      localStorage.setItem('tf_voice_uri', selectedVoiceURI);
    }
  }, [selectedVoiceURI]);

  useEffect(() => {
    localStorage.setItem('tf_voice_settings', JSON.stringify(voiceSettings));
  }, [voiceSettings]);

  const handleOnboard = (newProfile: UserProfile) => {
    setProfile(newProfile);
    setCurrentScreen('welcome');
  };

  const navigateToBot = (id: string) => {
    setSelectedBotId(id);
    setSelectedBotFilter(null);
    setCurrentScreen('detail');
  };

  const navigateToLore = (loreId?: string) => {
    setInitialLoreId(loreId || null);
    setCurrentScreen('lore');
  };

  const navigateToMissionHub = (searchQuery?: string) => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      
      // Specific handling for Factions and Squads to jump to detail with carousel
      const isAutobot = query === 'autobots' || query === 'autobot';
      const isDecepticon = query === 'decepticons' || query === 'decepticon';
      
      let targetBotId: string | null = null;
      
      if (isAutobot) {
        targetBotId = 'optimus-prime';
      } else if (isDecepticon) {
        targetBotId = 'megatron';
      } else {
        // Find first bot in category if it's a squad
        const firstInCategory = SEED_BOTS.find(b => b.category.toLowerCase().includes(query));
        if (firstInCategory) {
          targetBotId = firstInCategory.id;
        }
      }

      if (targetBotId) {
        setSelectedBotId(targetBotId);
        setSelectedBotFilter(searchQuery);
        setCurrentScreen('detail');
        return;
      }
    }
    setInitialMissionSearch(searchQuery || '');
    setCurrentScreen('bots');
  };

  const renderScreen = () => {
    if (!profile || currentScreen === 'onboarding') {
      return <Onboarding onComplete={handleOnboard} />;
    }

    switch (currentScreen) {
      case 'welcome':
        return <Welcome profile={profile} onStart={() => navigateToLore()} />;
      case 'lore':
        return <Lore
          key={`lore-${initialLoreId}-${loreResetCounter}`}
          initialLoreId={initialLoreId} 
          onDone={() => navigateToMissionHub()} 
          onViewBots={(query) => navigateToMissionHub(query)}
          selectedVoiceURI={selectedVoiceURI} 
          voiceSettings={voiceSettings} 
        />;
      case 'bots':
        return <MissionHub 
          key={`bots-${initialMissionSearch}`}
          initialSearch={initialMissionSearch}
          onSelectBot={navigateToBot} 
          onTagClick={(tag) => navigateToLore(tag)}
          selectedVoiceURI={selectedVoiceURI} 
          voiceSettings={voiceSettings} 
        />;
      case 'detail':
        return <BotDetail 
          botId={selectedBotId!} 
          initialFilter={selectedBotFilter || undefined}
          onBack={() => setCurrentScreen('bots')} 
          onBotChange={(id) => setSelectedBotId(id)}
          onFilterChange={(filter) => navigateToMissionHub(filter)}
          selectedVoiceURI={selectedVoiceURI}
          voiceSettings={voiceSettings}
          onCompare={(id) => {
            setBattleOpponents({ a: selectedBotId!, b: id });
            setCurrentScreen('battle');
          }} 
        />;
      case 'battle':
        return <BattleMode opponentA={battleOpponents?.a!} opponentB={battleOpponents?.b!} onBack={() => setCurrentScreen('bots')} />;
      case 'install':
        return <InstallApp />;
      case 'settings':
        return (
          <div className="p-8 flex flex-col gap-8 items-center min-h-[80vh] pb-10">
            <h2 className="text-3xl font-headline-lg text-primary-red transform -rotate-1">PARENTAL COMMAND CENTER</h2>
            
            {/* Voice Section — simplified, auto-picks best voice */}
            <div className="comic-panel p-6 w-full max-w-md bg-white">
              <h3 className="font-bold text-sm uppercase mb-4 text-secondary-blue">STORYBOOK NARRATOR</h3>
              <p className="text-xs mb-6 opacity-70 italic font-medium">
                The narrator automatically uses the clearest, most natural storytelling voice available on your device. Tap below to hear a sample!
              </p>

              <button 
                onClick={() => {
                  window.speechSynthesis.cancel();
                  const utt = new SpeechSynthesisUtterance("Welcome to the Transformers Hero Hub! I am your narrator. Let's read a story together about giant robots from outer space!");
                  const availableVoices = window.speechSynthesis.getVoices();
                  // Same auto-selection logic the reading engine uses
                  const checks: Array<(v: SpeechSynthesisVoice) => boolean> = [
                    v => v.name === 'Google UK English Female',
                    v => v.name === 'Google US English Female',
                    v => v.name.includes('Google') && v.name.includes('Female') && v.lang.startsWith('en'),
                    v => v.name.includes('Google') && v.lang.startsWith('en'),
                    v => v.name === 'Samantha',
                    v => v.lang === 'en-US',
                    v => v.lang.startsWith('en'),
                  ];
                  let voice: SpeechSynthesisVoice | null = null;
                  for (const c of checks) {
                    const m = availableVoices.find(c);
                    if (m) { voice = m; break; }
                  }
                  if (voice) utt.voice = voice;
                  utt.rate = 0.85;
                  utt.pitch = 1.05;
                  window.speechSynthesis.speak(utt);
                }}
                className="comic-button bg-tertiary-green text-white w-full text-sm"
              >
                TEST NARRATOR VOICE
              </button>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-md">
              {!isStandalone && (
                <button 
                  onClick={() => setCurrentScreen('install')}
                  className="comic-button bg-secondary-blue text-white w-full flex items-center justify-center gap-2"
                >
                  INSTALL APP
                </button>
              )}
              <button 
                onClick={() => { localStorage.clear(); window.location.reload(); }}
                className="comic-button bg-primary-red text-white w-full"
              >
                SIGN OUT
              </button>
            </div>
          </div>
        );
      default:
        return <Welcome profile={profile} onStart={() => setCurrentScreen('lore')} />;
    }
  };

  return (
    <div className="relative min-h-screen pb-20 overflow-x-hidden selection:bg-secondary-blue/30">
      {profile && (
        <>
          <TopBar 
            currentScreen={currentScreen} 
            onSearch={() => {
              window.speechSynthesis.cancel();
              setCurrentScreen('bots');
            }}
            onMenuClick={() => setIsMenuOpen(true)}
          />
          <SideMenu 
            isOpen={isMenuOpen} 
            onClose={() => setIsMenuOpen(false)} 
            onNavigate={(query) => {
              if (query === 'install') {
                setCurrentScreen('install');
              } else {
                navigateToMissionHub(query);
              }
            }}
          />
        </>
      )}
      
      <main className="relative z-10">
        {renderScreen()}
        {profile && currentScreen !== 'onboarding' && <Footer />}
      </main>

      {profile && (
        <Navigation 
          currentScreen={currentScreen} 
          onNavigate={(screen) => {
            window.speechSynthesis.cancel();
            
            // Always reset lore to root when clicked from anywhere
            if (screen === 'lore') {
              setInitialLoreId(null);
              setLoreResetCounter(c => c + 1);
              setCurrentScreen('lore');
              return;
            }

            if (screen === 'install') {
              setCurrentScreen('install');
              return;
            }

            if (currentScreen === screen || (screen === 'bots' && currentScreen === 'detail')) {
              // Reset sub-states for the active or related group
              if (screen === 'bots') {
                setSelectedBotId(null);
                setSelectedBotFilter(null);
                setInitialMissionSearch('');
                setCurrentScreen('bots');
                return;
              }
            }
            setCurrentScreen(screen as any);
          }} 
        />
      )}
    </div>
  );
}

