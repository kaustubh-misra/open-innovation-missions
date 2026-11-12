"use client";

import { useRef, useState } from "react";

/**
 * AUDIO PLAYER
 * Native HTML5 <audio> with an "AUDIO: ON / OFF" text toggle.
 * Browsers block autoplay, so sound only starts after the user clicks.
 */

export default function AudioPlayer({ src }: { src: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      // File missing or playback blocked — stay OFF.
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        className="border-[0.5px] border-neutral-800 px-3 py-1.5 text-[10px] tracking-hud text-neutral-400 transition-colors duration-500 hover:border-wallace-amber hover:text-wallace-gold"
      >
        AUDIO: <span className={isPlaying ? "text-vegas-flare" : "text-neutral-600"}>{isPlaying ? "ON" : "OFF"}</span>
      </button>
    </>
  );
}
