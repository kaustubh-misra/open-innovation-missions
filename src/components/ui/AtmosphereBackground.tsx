import type { ReactNode } from "react";

/**
 * ATMOSPHERE BACKGROUND
 * Amber fog + film grain + ground flare, using only CSS (no WebGL).
 * Wrap the page in it; the page content sits on top.
 */

// Tiny SVG noise texture (feTurbulence), encoded as base64.
const GRAIN =
  "url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNDAiIGhlaWdodD0iMjQwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC44NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjxmZUNvbG9yTWF0cml4IHR5cGU9InNhdHVyYXRlIiB2YWx1ZXM9IjAiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWx0ZXI9InVybCgjbikiLz48L3N2Zz4=\")";

export default function AtmosphereBackground({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-void">
      {/* 1. FOG — glowing Las Vegas orange centre, burnt-brown edges */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(ellipse_at_50%_45%,#D2600F_0%,#A8460A_30%,#6B2A06_60%,#2E1203_100%)]"
      />

      {/* 1b. HAZE — slightly deeper sky at the top, hotter fog near the ground */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 bg-gradient-to-b from-vegas-deep/50 via-transparent to-vegas-flare/25"
      />

      {/* 2. GROUND FLARE — huge blurred glow at the bottom */}
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-40 left-1/2 h-96 w-[120vw] -translate-x-1/2 bg-vegas-flare/60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none fixed -bottom-24 left-1/2 h-48 w-[60vw] -translate-x-1/2 bg-wallace-gold/40 blur-3xl"
      />

      {/* 3. GRAIN — SVG noise blended over everything */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-20 mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      {/* PAGE CONTENT */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
