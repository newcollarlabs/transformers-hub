import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

// ─── Sentence splitter ────────────────────────────────────────────────────────
// Splits text into individual sentences so we can speak one at a time.
// Each sentence = one SpeechSynthesisUtterance = rock-solid onend callback.
function splitIntoSentences(text: string): string[] {
  // Match sentences ending with . ! ? … or double-newline (paragraph breaks)
  const raw = text.split(/(?<=[.!?…])\s+|(?:\n\n)/);
  return raw.map(s => s.trim()).filter(s => s.length > 0);
}

// ─── Best-voice auto-selector ─────────────────────────────────────────────────
// Picks the clearest, most natural English voice for children's storytime.
// Priority: Google en voices > Samantha (iOS) > any en-US > any en > fallback.
function getBestStorytimeVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const checks: Array<(v: SpeechSynthesisVoice) => boolean> = [
    v => v.name === 'Google UK English Female',
    v => v.name === 'Google US English Female',  
    v => v.name.includes('Google') && v.name.includes('Female') && v.lang.startsWith('en'),
    v => v.name.includes('Google') && v.lang.startsWith('en'),
    v => v.name === 'Samantha',                  // best iOS voice
    v => v.name === 'Karen',                     // good macOS/iOS voice
    v => v.name.includes('Female') && v.lang.startsWith('en-US'),
    v => v.name.includes('Female') && v.lang.startsWith('en'),
    v => v.lang === 'en-US',
    v => v.lang === 'en-GB',
    v => v.lang.startsWith('en'),
  ];

  for (const check of checks) {
    const match = voices.find(check);
    if (match) return match;
  }
  return voices[0] ?? null;
}

// ─── Hardcoded storytelling settings ──────────────────────────────────────────
const STORY_RATE = 0.85;   // slightly slower for kids to follow along
const STORY_PITCH = 1.05;  // just slightly brighter/warmer

// ─── The hook ─────────────────────────────────────────────────────────────────
export function useSpeechSync(
  text: string,
  _voiceURI?: string | null,      // kept for API compat – ignored, we auto-pick
  _voiceSettings?: { pitch: number; rate: number }  // kept for API compat – ignored
) {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [activeSentenceIdx, setActiveSentenceIdx] = useState<number | null>(null);

  // Refs survive across renders and let callbacks see latest state
  const stoppedRef = useRef(false);
  const pausedRef = useRef(false);
  const sentenceIdxRef = useRef(0);
  const speakFnRef = useRef<((idx: number) => void) | null>(null);

  // ── Derived data ──────────────────────────────────────────────────────────
  const sentences = useMemo(() => splitIntoSentences(text), [text]);

  // Word-level array for the rendering layer (each word + char position)
  const wordsWithIndices = useMemo(() => {
    return Array.from(text.matchAll(/\S+/g)).map(match => ({
      word: match[0],
      index: match.index ?? 0
    }));
  }, [text]);

  // For each sentence, pre-compute the [startWordIdx, endWordIdx] in wordsWithIndices.
  // This lets the UI highlight the full sentence range instantly.
  const sentenceWordRanges = useMemo(() => {
    const ranges: Array<{ start: number; end: number }> = [];
    let searchFrom = 0;

    for (const sentence of sentences) {
      // Find where this sentence starts in the original text
      const sentStart = text.indexOf(sentence, searchFrom);
      const sentEnd = sentStart + sentence.length;
      searchFrom = sentEnd;

      // Find first and last word indices that fall inside this sentence
      let first = -1;
      let last = -1;
      for (let i = 0; i < wordsWithIndices.length; i++) {
        const wi = wordsWithIndices[i];
        if (wi.index >= sentStart && wi.index < sentEnd) {
          if (first === -1) first = i;
          last = i;
        }
      }
      ranges.push({ start: Math.max(0, first), end: Math.max(0, last) });
    }
    return ranges;
  }, [sentences, text, wordsWithIndices]);

  // The range of word indices currently highlighted (entire sentence)
  const activeSentenceRange = useMemo(() => {
    if (activeSentenceIdx === null || activeSentenceIdx >= sentenceWordRanges.length) return null;
    return sentenceWordRanges[activeSentenceIdx];
  }, [activeSentenceIdx, sentenceWordRanges]);

  // For backward compat: activeWordIndex points to the first word of the active sentence
  const activeWordIndex = activeSentenceRange?.start ?? null;

  // ── Cleanup ───────────────────────────────────────────────────────────────
  useEffect(() => {
    return () => {
      stoppedRef.current = true;
      window.speechSynthesis.cancel();
    };
  }, []);

  // ── Stop ───────────────────────────────────────────────────────────────────
  const handleStop = useCallback(() => {
    stoppedRef.current = true;
    pausedRef.current = false;
    window.speechSynthesis.cancel();
    setIsReading(false);
    setIsPaused(false);
    setActiveSentenceIdx(null);
  }, []);

  // ── Speak one sentence (called recursively via onend) ─────────────────────
  const speakSentence = useCallback((idx: number) => {
    if (stoppedRef.current || idx >= sentences.length) {
      setIsReading(false);
      setIsPaused(false);
      setActiveSentenceIdx(null);
      return;
    }

    sentenceIdxRef.current = idx;
    setActiveSentenceIdx(idx);

    const utt = new SpeechSynthesisUtterance(sentences[idx]);
    const voices = window.speechSynthesis.getVoices();
    const voice = getBestStorytimeVoice(voices);
    if (voice) utt.voice = voice;
    utt.rate = STORY_RATE;
    utt.pitch = STORY_PITCH;

    utt.onend = () => {
      if (stoppedRef.current) return;
      // Automatically advance to next sentence
      speakFnRef.current?.(idx + 1);
    };

    utt.onerror = (e) => {
      // 'interrupted' and 'canceled' are normal (stop/navigate)
      if (e.error === 'interrupted' || e.error === 'canceled') return;
      if (!stoppedRef.current) speakFnRef.current?.(idx + 1);
    };

    window.speechSynthesis.speak(utt);
    // Keep reference to prevent garbage collection on some browsers
    (window as any)._speechUtterance = utt;
  }, [sentences]);

  // Store latest speakSentence in ref so onend can call next without stale closure
  useEffect(() => {
    speakFnRef.current = speakSentence;
  }, [speakSentence]);

  // ── Main play / pause / resume handler ────────────────────────────────────
  const handleSpeak = useCallback(() => {
    if (!('speechSynthesis' in window)) return;

    // If currently reading: toggle pause / resume
    if (isReading) {
      if (pausedRef.current) {
        window.speechSynthesis.resume();
        pausedRef.current = false;
        setIsPaused(false);
      } else {
        window.speechSynthesis.pause();
        pausedRef.current = true;
        setIsPaused(true);
      }
      return;
    }

    // Fresh start from sentence 0
    stoppedRef.current = false;
    pausedRef.current = false;
    window.speechSynthesis.cancel();

    setIsReading(true);
    setIsPaused(false);

    // Tiny delay so cancel() fully clears the queue
    setTimeout(() => {
      if (!stoppedRef.current) speakSentence(0);
    }, 60);
  }, [isReading, speakSentence]);

  // ── Jump to a word (tap-to-read-from-here) ────────────────────────────────
  const jumpToWord = useCallback((wordIndex: number) => {
    // Find which sentence this word belongs to
    let targetSent = 0;
    for (let i = 0; i < sentenceWordRanges.length; i++) {
      const r = sentenceWordRanges[i];
      if (wordIndex >= r.start && wordIndex <= r.end) {
        targetSent = i;
        break;
      }
      if (wordIndex < r.start) break;
      targetSent = i;
    }

    stoppedRef.current = false;
    pausedRef.current = false;
    window.speechSynthesis.cancel();

    setIsReading(true);
    setIsPaused(false);

    setTimeout(() => {
      if (!stoppedRef.current) speakSentence(targetSent);
    }, 60);
  }, [sentenceWordRanges, speakSentence]);

  return {
    isReading,
    isPaused,
    activeWordIndex,        // first word of active sentence (backward compat)
    activeSentenceRange,    // { start, end } — word indices to highlight
    wordsWithIndices,       // array of { word, index }
    handleSpeak,
    handleStop,
    jumpToWord,
  };
}
