import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * MONOLITH HEADING
 * Huge, wide-tracked, uppercase display title.
 *
 * Usage:  <MonolithHeading>WALLACE INDUSTRIAL</MonolithHeading>
 */

type MonolithHeadingProps = {
  children: ReactNode;
  className?: string;
};

export default function MonolithHeading({ children, className }: MonolithHeadingProps) {
  return (
    <h1
      className={cn(
        // pl-[0.35em] balances the trailing letter-spacing so text looks centred
        "pl-[0.35em] font-monolith text-3xl font-light uppercase leading-[1.1] tracking-monolithic text-neutral-100 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl",
        "[text-shadow:0_0_40px_rgba(232,99,21,0.35)]",
        className,
      )}
    >
      {children}
    </h1>
  );
}
