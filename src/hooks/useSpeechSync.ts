import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

export function useSpeechSync(
  text: string, 
  voiceURI: string | null, 
  voiceSettings: { pitch: number, rate: number }
) {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeWordIndex, setActiveWordIndex] = useState<number | null>(null);
  
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const intervalRef = useRef<number | null>(null);

  const wordsWithIndices = useMemo(() => {
    return Array.from(text.matchAll(/\S+/g)).map(match => ({
      word: match[0],
      index: match.index ?? 0
    }));
  }, [text]);

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, []);

  const handleStop = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
    setActiveWordIndex(null);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const handleSpeak = useCallback((startIndex: number = 0) => {
    if (!('speechSynthesis' in window)) return;

    // If already reading and this is a simple play/pause toggle (startIndex === 0 or event object passed)
    const isToggle = typeof startIndex !== 'number' || startIndex === 0;
    
    if (isReading && isToggle && !window.speechSynthesis.speaking === false) {
      if (isPaused) {
        window.speechSynthesis.resume();
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        setIsPaused(true);
      }
      return;
    }

    // Stop current speech
    window.speechSynthesis.cancel();
    if (intervalRef.current) window.clearInterval(intervalRef.current);

    const actualStartIndex = typeof startIndex === 'number' ? startIndex : 0;
    const startOffset = wordsWithIndices[actualStartIndex]?.index ?? 0;
    const textToSpeak = text.substring(startOffset);
    
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utteranceRef.current = utterance;
    
    utterance.pitch = voiceSettings.pitch;
    utterance.rate = voiceSettings.rate;
    
    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(v => v.voiceURI === voiceURI) || 
                  voices.find(v => v.lang.startsWith('en-US')) || 
                  voices[0];
    if (voice) utterance.voice = voice;

    let hasProperBoundaries = false;

    utterance.onboundary = (event) => {
      if (event.name === 'word' || event.charIndex > 0) {
        hasProperBoundaries = true;
      }
      
      const absoluteCharIndex = event.charIndex + startOffset;
      
      let activeIdx = 0;
      for (let i = 0; i < wordsWithIndices.length; i++) {
        if (wordsWithIndices[i].index <= absoluteCharIndex) {
          activeIdx = i;
        } else {
          break;
        }
      }
      
      setActiveWordIndex(activeIdx);
    };

    utterance.onstart = () => {
      setIsReading(true);
      setIsPaused(false);
      setActiveWordIndex(actualStartIndex);

      // Average reading speed is ~16 characters per second at 1.0 rate.
      const expectedCps = 16 * voiceSettings.rate;
      let currentElapsedMs = 0;
      let lastTick = Date.now();

      intervalRef.current = window.setInterval(() => {
        const now = Date.now();
        const delta = now - lastTick;
        lastTick = now;

        if (!window.speechSynthesis.speaking) return;
        if (window.speechSynthesis.paused) return;
        
        currentElapsedMs += delta;

        // If the voice natively supports boundary events, let it handle the sync.
        if (hasProperBoundaries) return;

        // Fallback: Estimate the character index based on elapsed time.
        const estimatedCharIndex = (currentElapsedMs / 1000) * expectedCps;
        const absoluteCharIndex = estimatedCharIndex + startOffset;

        let activeIdx = 0;
        for (let i = 0; i < wordsWithIndices.length; i++) {
          if (wordsWithIndices[i].index <= absoluteCharIndex) {
            activeIdx = i;
          } else {
            break;
          }
        }

        setActiveWordIndex(activeIdx);
      }, 50);
    };

    utterance.onend = () => {
      setIsReading(false);
      setIsPaused(false);
      setActiveWordIndex(null);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };

    utterance.onerror = () => {
      setIsReading(false);
      setIsPaused(false);
      setActiveWordIndex(null);
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };

    window.speechSynthesis.speak(utterance);
    
    // Prevent GC
    (window as any)._speechUtterance = utterance;

  }, [isReading, isPaused, text, voiceURI, voiceSettings, wordsWithIndices]);

  const jumpToWord = useCallback((wordIndex: number) => {
    handleSpeak(wordIndex);
  }, [handleSpeak]);

  return { isReading, isPaused, activeWordIndex, wordsWithIndices, handleSpeak, handleStop, jumpToWord };
}
