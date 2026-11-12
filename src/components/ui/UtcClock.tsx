"use client";

import { useEffect, useState } from "react";

/** Live UTC clock (HH:MM:SS), updated every second. */
export default function UtcClock() {
  // Starts blank so server and browser render the same thing.
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () => setTime(new Date().toISOString().slice(11, 19));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <time className="tabular-nums text-neutral-300">{time}</time>;
}
