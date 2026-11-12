import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * HUD CONTAINER
 * A hairline-bordered panel with "+" registration marks on each corner.
 *
 * Usage:
 *   <HudContainer title="SYS.STATUS" code="REF 77-B">
 *     ...anything...
 *   </HudContainer>
 */

type HudContainerProps = {
  children: ReactNode;
  title?: string; // small label, top-left
  code?: string; // small reference code, top-right
  className?: string;
};

// Where each "+" crosshair sits (half outside the border).
const CORNERS = [
  "-left-[5px] -top-[9px]",
  "-right-[5px] -top-[9px]",
  "-left-[5px] -bottom-[9px]",
  "-right-[5px] -bottom-[9px]",
];

export default function HudContainer({ children, title, code, className }: HudContainerProps) {
  return (
    <section
      className={cn(
        "relative border-[0.5px] border-white/10 bg-black/50 p-6 backdrop-blur-sm sm:p-8",
        className,
      )}
    >
      {CORNERS.map((position) => (
        <span
          key={position}
          aria-hidden
          className={cn(
            "pointer-events-none absolute select-none font-mono text-sm leading-none text-wallace-gold",
            position,
          )}
        >
          +
        </span>
      ))}

      {(title || code) && (
        <header className="mb-6 flex items-center justify-between border-b-[0.5px] border-white/10 pb-3 text-[10px] tracking-hud text-neutral-300/70">
          <span className="text-wallace-gold">{title}</span>
          <span>{code}</span>
        </header>
      )}

      {children}
    </section>
  );
}
