/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { UserProfile, TransformerBot } from './types';
import Onboarding from './components/Onboarding';
import Welcome from './components/Welcome';
import Lore from './components/Lore';
import MissionHub from './components/MissionHub';
import BotDetail from './components/BotDetail';
import BattleMode from './components/BattleMode';
import Navigation from './components/Navigation';
import TopBar from './components/TopBar';
import SideMenu from './components/SideMenu';

type Screen = 'onboarding' | 'welcome' | 'lore' | 'bots' | 'detail' | 'battle' | 'settings';

export default function App() {
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
  const [battleOpponents, setBattleOpponents] = useState<{ a: string; b: string } | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [initialLoreId, setInitialLoreId] = useState<string | null>(null);
  const [initialMissionSearch, setInitialMissionSearch] = useState<string>('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    setCurrentScreen('detail');
  };

  const navigateToLore = (loreId?: string) => {
    setInitialLoreId(loreId || null);
    setCurrentScreen('lore');
  };

  const navigateToMissionHub = (searchQuery?: string) => {
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
          key={`lore-${initialLoreId}`}
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
          onBack={() => setCurrentScreen('bots')} 
          selectedVoiceURI={selectedVoiceURI}
          voiceSettings={voiceSettings}
          onCompare={(id) => {
            setBattleOpponents({ a: selectedBotId!, b: id });
            setCurrentScreen('battle');
          }} 
        />;
      case 'battle':
        return <BattleMode opponentA={battleOpponents?.a!} opponentB={battleOpponents?.b!} onBack={() => setCurrentScreen('bots')} />;
      case 'settings':
        return (
          <div className="p-8 flex flex-col gap-8 items-center min-h-[80vh] pb-32">
            <h2 className="text-3xl font-headline-lg text-primary-red transform -rotate-1">PARENTAL COMMAND CENTER</h2>
            
            {/* Voice Choosing Section */}
            <div className="comic-panel p-6 w-full max-w-md bg-white">
              <h3 className="font-bold text-sm uppercase mb-4 text-secondary-blue">STORYBOOK NARRATOR TUNER</h3>
              <p className="text-xs mb-4 opacity-70 italic font-medium">Find the perfect voice for your child's story!</p>
              
              <div className="space-y-6 mb-6">
                <div>
                    <label className="text-[10px] font-bold uppercase mb-1 block">Pick a Voice</label>
                  <select 
                    value={selectedVoiceURI || ''}
                    onChange={(e) => setSelectedVoiceURI(e.target.value)}
                    className="w-full h-11 border-2 border-ink-black px-2 font-bold focus:ring-0 text-sm bg-surface-container"
                  >
                    <option value="">System Default</option>
                    {voices
                      .filter(v => v.lang.includes('en'))
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map(v => (
                        <option key={v.voiceURI} value={v.voiceURI}>
                          {v.name.replace('Google ', '')}
                        </option>
                      ))}
                  </select>
                  <p className="text-[9px] mt-1 font-bold text-secondary-blue uppercase opacity-70">
                    Pro Tip: In Chrome, "Google" voices sound the most like real people!
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-bold uppercase mb-1 block">Pitch (High/Low)</label>
                    <input 
                      type="range" min="0.5" max="2" step="0.1"
                      value={voiceSettings.pitch}
                      onChange={(e) => setVoiceSettings(s => ({ ...s, pitch: parseFloat(e.target.value) }))}
                      className="w-full accent-primary-red"
                    />
                    <div className="flex justify-between text-[8px] font-bold opacity-50">
                      <span>DEEP HERO</span>
                      <span>BRIGHT STORY</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-bold uppercase mb-1 block">Read Speed</label>
                    <input 
                      type="range" min="0.5" max="1.5" step="0.1"
                      value={voiceSettings.rate}
                      onChange={(e) => setVoiceSettings(s => ({ ...s, rate: parseFloat(e.target.value) }))}
                      className="w-full accent-secondary-blue"
                    />
                    <div className="flex justify-between text-[8px] font-bold opacity-50">
                      <span>SLOW</span>
                      <span>FAST</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setVoiceSettings({ pitch: 0.7, rate: 0.75 })}
                    className="flex-1 text-[10px] bg-ink-black text-white p-2 border border-ink-black hover:bg-primary-red transition-colors font-bold uppercase"
                  >
                    PRESET: HERO
                  </button>
                  <button 
                    onClick={() => setVoiceSettings({ pitch: 1.1, rate: 0.85 })}
                    className="flex-1 text-[10px] bg-ink-black text-white p-2 border border-ink-black hover:bg-secondary-blue transition-colors font-bold uppercase"
                  >
                    PRESET: STORYBOOK
                  </button>
                </div>
              </div>

              <button 
                onClick={() => {
                  window.speechSynthesis.cancel();
                  const utterance = new SpeechSynthesisUtterance("Welcome to the Transformers Hero Hub. I am your narrator! Let's read a story together.");
                  const voice = voices.find(v => v.voiceURI === selectedVoiceURI);
                  if (voice) utterance.voice = voice;
                  utterance.pitch = voiceSettings.pitch;
                  utterance.rate = voiceSettings.rate;
                  window.speechSynthesis.speak(utterance);
                }}
                className="comic-button bg-tertiary-green text-white w-full text-sm"
              >
                TEST THIS VOICE
              </button>
            </div>

            <div className="flex flex-col gap-4 w-full max-w-md">
              <button 
                onClick={() => { localStorage.clear(); window.location.reload(); }}
                className="comic-button bg-primary-red text-white w-full"
              >
                WIPE BOT ARCHIVES
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
            onNavigate={(query) => navigateToMissionHub(query)}
          />
        </>
      )}
      
      <main className="relative z-10">
        {renderScreen()}
      </main>

      {profile && (
        <Navigation 
          currentScreen={currentScreen} 
    onNavigate={(screen) => {
      window.speechSynthesis.cancel();
      if (currentScreen === screen || (screen === 'bots' && currentScreen === 'detail')) {
        // Reset sub-states for the active or related group
        if (screen === 'lore') setInitialLoreId(null);
        if (screen === 'bots') {
          setSelectedBotId(null);
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

