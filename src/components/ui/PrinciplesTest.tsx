import type { ReactNode } from "react";
import HudContainer from "@/components/ui/HudContainer";
import { commonPrinciples } from "@/content/definitions";

/**
 * THE TEST — five questions summarising the common principles of open
 * science, open tech & infrastructure, and open hardware & making.
 * Shown on the Definitions page and above the matrix.
 * To change the wording, edit `commonPrinciples` in src/content/definitions.ts
 */

export default function PrinciplesTest({ footer }: { footer?: ReactNode }) {
  return (
    <HudContainer title="THE TEST" className="bg-vegas-deep/55 p-5 sm:p-6">
      <p className="mb-4 font-monolith text-sm text-neutral-200/85">{commonPrinciples.testIntro}</p>
      <ol className="space-y-3">
        {commonPrinciples.test.map((t, i) => (
          <li key={t.name} className="flex gap-4 font-monolith text-sm leading-relaxed">
            <span className="w-6 shrink-0 font-mono text-xs leading-6 text-wallace-gold">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-neutral-200/85">
              <span className="font-semibold text-neutral-50">{t.name}.</span> {t.question}
            </span>
          </li>
        ))}
      </ol>
      {footer}
    </HudContainer>
  );
}

