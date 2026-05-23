import { useState, useRef, useEffect, useCallback, useMemo } from 'react';

// ─── Sentence splitter ────────────────────────────────────────────────────────
function splitIntoSentences(text: string): string[] {
  const raw = text.split(/(?<=[.!?…])\s+|(?:\n\n)/);
  return raw.map(s => s.trim()).filter(s => s.length > 0);
}

// ─── Best-voice auto-selector ─────────────────────────────────────────────────
function getBestStorytimeVoice(voices: SpeechSynthesisVoice[]): SpeechSynthesisVoice | null {
  const checks: Array<(v: SpeechSynthesisVoice) => boolean> = [
    v => v.name === 'Google UK English Female',
    v => v.name === 'Google US English Female',
    v => v.name.includes('Google') && v.name.includes('Female') && v.lang.startsWith('en'),
    v => v.name.includes('Google') && v.lang.startsWith('en'),
    v => v.name === 'Samantha',
    v => v.name === 'Karen',
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

// ─── Constants ────────────────────────────────────────────────────────────────
const STORY_RATE  = 0.85;   // slightly slower for kids
const STORY_PITCH = 1.05;   // slightly brighter/warmer
const HIGHLIGHT_WORDS = 3;  // how many words glow yellow at once
const CPS_AT_1X = 14;       // estimated characters-per-second at rate 1.0

// ─── The hook ─────────────────────────────────────────────────────────────────
export function useSpeechSync(
  text: string,
  _voiceURI?: string | null,
  _voiceSettings?: { pitch: number; rate: number }
) {
  const [isReading, setIsReading] = useState(false);
  const [isPaused, setIsPaused]   = useState(false);
  const [activeWordIdx, setActiveWordIdx] = useState<number | null>(null);

  const stoppedRef      = useRef(false);
  const pausedRef       = useRef(false);
  const speakFnRef      = useRef<((i: number) => void) | null>(null);
  const intervalRef     = useRef<number | null>(null);
  const hasBoundaryRef  = useRef(false);
  const startTimeRef    = useRef(0);

  // ── Derived data ──────────────────────────────────────────────────────────
  const sentences = useMemo(() => splitIntoSentences(text), [text]);

  const wordsWithIndices = useMemo(() => {
    return Array.from(text.matchAll(/\S+/g)).map(m => ({
      word: m[0],
      index: m.index ?? 0,
    }));
  }, [text]);

  // Map each sentence → { start, end } word-index range
  const sentenceWordRanges = useMemo(() => {
    const ranges: Array<{ start: number; end: number }> = [];
    let searchFrom = 0;
    for (const sent of sentences) {
      const sStart = text.indexOf(sent, searchFrom);
      const sEnd   = sStart + sent.length;
      searchFrom   = sEnd;
      let first = -1, last = -1;
      for (let i = 0; i < wordsWithIndices.length; i++) {
        const wi = wordsWithIndices[i];
        if (wi.index >= sStart && wi.index < sEnd) {
          if (first === -1) first = i;
          last = i;
        }
      }
      ranges.push({ start: Math.max(0, first), end: Math.max(0, last) });
    }
    return ranges;
  }, [sentences, text, wordsWithIndices]);

  // For a sentence, build cumulative ms timestamps per word (weighted by length)
  const buildWordTimings = useCallback((sentIdx: number): number[] => {
    const r = sentenceWordRanges[sentIdx];
    if (!r) return [];
    const words = wordsWithIndices.slice(r.start, r.end + 1);
    // total "weight" = sum of each word's char count + 1 for space
    const totalW = words.reduce((s, w) => s + w.word.length + 1, 0);
    const durationMs = (totalW / (CPS_AT_1X * STORY_RATE)) * 1000;
    const timings: number[] = [];
    let cum = 0;
    for (const w of words) {
      cum += ((w.word.length + 1) / totalW) * durationMs;
      timings.push(cum);
    }
    return timings;
  }, [sentenceWordRanges, wordsWithIndices]);

  // ── Highlight range: a sliding 3-word window around the active word ──────
  const activeSentenceRange = useMemo(() => {
    if (activeWordIdx === null) return null;
    return {
      start: activeWordIdx,
      end:   Math.min(activeWordIdx + HIGHLIGHT_WORDS - 1, wordsWithIndices.length - 1),
    };
  }, [activeWordIdx, wordsWithIndices.length]);

  const activeWordIndex = activeWordIdx; // backward compat

  // ── Timer cleanup helper ────────────────────────────────────────────────
  const clearTimer = useCallback(() => {
    if (intervalRef.current != null) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // ── Cleanup on unmount ──────────────────────────────────────────────────
  useEffect(() => () => {
    stoppedRef.current = true;
    window.speechSynthesis.cancel();
    clearTimer();
  }, [clearTimer]);

  // ── Stop ────────────────────────────────────────────────────────────────
  const handleStop = useCallback(() => {
    stoppedRef.current = true;
    pausedRef.current  = false;
    window.speechSynthesis.cancel();
    clearTimer();
    setIsReading(false);
    setIsPaused(false);
    setActiveWordIdx(null);
  }, [clearTimer]);

  // ── Speak one sentence ──────────────────────────────────────────────────
  const speakSentence = useCallback((sentIdx: number) => {
    if (stoppedRef.current || sentIdx >= sentences.length) {
      clearTimer();
      setIsReading(false);
      setIsPaused(false);
      setActiveWordIdx(null);
      return;
    }

    clearTimer();
    hasBoundaryRef.current = false;

    const range       = sentenceWordRanges[sentIdx];
    const wordTimings = buildWordTimings(sentIdx);

    const utt   = new SpeechSynthesisUtterance(sentences[sentIdx]);
    const voice = getBestStorytimeVoice(window.speechSynthesis.getVoices());
    if (voice) utt.voice = voice;
    utt.rate  = STORY_RATE;
    utt.pitch = STORY_PITCH;

    // ── Native word-boundary events (Chrome desktop / Android) ──────────
    utt.onboundary = (ev) => {
      if (ev.name !== 'word' || stoppedRef.current) return;
      hasBoundaryRef.current = true;

      // Map the utterance's charIndex → word offset within sentence
      const sentWords = Array.from(sentences[sentIdx].matchAll(/\S+/g));
      let wIdx = 0;
      for (let i = 0; i < sentWords.length; i++) {
        if ((sentWords[i].index ?? 0) <= ev.charIndex) wIdx = i;
        else break;
      }
      setActiveWordIdx(range.start + wIdx);
    };

    // ── Start: kick off the timer fallback ──────────────────────────────
    utt.onstart = () => {
      if (stoppedRef.current) return;
      startTimeRef.current = Date.now();
      setActiveWordIdx(range.start);

      intervalRef.current = window.setInterval(() => {
        if (stoppedRef.current) return;
        if (!window.speechSynthesis.speaking || window.speechSynthesis.paused) return;
        if (hasBoundaryRef.current) return; // native events are handling it

        const elapsed = Date.now() - startTimeRef.current;
        let wIdx = 0;
        for (let i = 0; i < wordTimings.length; i++) {
          if (elapsed < wordTimings[i]) { wIdx = i; break; }
          wIdx = i;
        }
        setActiveWordIdx(range.start + wIdx);
      }, 80);
    };

    // ── End: advance to next sentence ───────────────────────────────────
    utt.onend = () => {
      clearTimer();
      if (!stoppedRef.current) speakFnRef.current?.(sentIdx + 1);
    };

    utt.onerror = (e) => {
      clearTimer();
      if (e.error === 'interrupted' || e.error === 'canceled') return;
      if (!stoppedRef.current) speakFnRef.current?.(sentIdx + 1);
    };

    window.speechSynthesis.speak(utt);
    (window as any)._speechUtterance = utt;
  }, [sentences, sentenceWordRanges, buildWordTimings, clearTimer]);

  // Keep ref in sync for recursive onend calls
  useEffect(() => { speakFnRef.current = speakSentence; }, [speakSentence]);

  // ── Play / Pause toggle ─────────────────────────────────────────────────
  const handleSpeak = useCallback(() => {
    if (!('speechSynthesis' in window)) return;

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

    stoppedRef.current = false;
    pausedRef.current  = false;
    window.speechSynthesis.cancel();
    clearTimer();
    setIsReading(true);
    setIsPaused(false);

    setTimeout(() => {
      if (!stoppedRef.current) speakSentence(0);
    }, 60);
  }, [isReading, speakSentence, clearTimer]);

  // ── Tap-to-jump ─────────────────────────────────────────────────────────
  const jumpToWord = useCallback((wordIndex: number) => {
    let targetSent = 0;
    for (let i = 0; i < sentenceWordRanges.length; i++) {
      const r = sentenceWordRanges[i];
      if (wordIndex >= r.start && wordIndex <= r.end) { targetSent = i; break; }
      if (wordIndex < r.start) break;
      targetSent = i;
    }

    stoppedRef.current = false;
    pausedRef.current  = false;
    window.speechSynthesis.cancel();
    clearTimer();
    setIsReading(true);
    setIsPaused(false);

    setTimeout(() => {
      if (!stoppedRef.current) speakSentence(targetSent);
    }, 60);
  }, [sentenceWordRanges, speakSentence, clearTimer]);

  return {
    isReading,
    isPaused,
    activeWordIndex,
    activeSentenceRange,   // 3-word sliding window — rendering uses this name
    wordsWithIndices,
    handleSpeak,
    handleStop,
    jumpToWord,
  };
}
