/**
 * DEFINITIONS TAB
 * Competing definitions of the three layers of openness.
 * To change the text or the table, edit:  src/content/definitions.ts
 * (The orange background and tab bar come from src/app/layout.tsx.)
 */

import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import HudContainer from "@/components/ui/HudContainer";
import RichText from "@/components/ui/RichText";
import {
  commonPrinciples,
  definitionColumns,
  definitionDomains,
  definitionNotes,
  definitionsText,
} from "@/content/definitions";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Definitions" };

/* Same table styles as the Analysis page */
const TH = "border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 text-left align-top font-normal";
const TD = "border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 align-top";
const STICKY_BG = "bg-[#2A1206]";

export default function DefinitionsPage() {
  return (
    <main className="min-h-screen animate-fade-in px-4 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto w-full max-w-[1600px] space-y-14">
        {/* ============ HEADING ============ */}
        <header className="space-y-5">
          <h1 className="font-monolith text-2xl font-light uppercase leading-tight tracking-monolithic text-neutral-100 sm:text-4xl">
            {definitionsText.title}
          </h1>
          {definitionsText.intro.map((p) => (
            <p key={p} className="max-w-[75ch] font-monolith text-sm leading-relaxed text-neutral-200/85 sm:text-base">
              <RichText text={p} />
            </p>
          ))}
        </header>

        {/* ============ TABLE ============ */}
        <section aria-label="Definitions by domain">
          <HudContainer className="bg-vegas-deep/55 p-3 sm:p-4">
            <div className="overflow-x-auto border-[0.5px] border-white/10">
              <table className="min-w-[960px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    {definitionColumns.map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className={cn(TH, STICKY_BG, "text-[10px] tracking-hud text-wallace-gold")}
                      >
                        {h.toUpperCase()}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {definitionDomains.map((d) => (
                    <DomainBand key={d.domain} domain={d.domain} rows={d.rows} />
                  ))}
                </tbody>
              </table>
            </div>
          </HudContainer>
        </section>

        {/* ============ NOTES ============ */}
        {/* Click the heading to open or close */}
        <details id="notes" className="group max-w-[75ch] border-[0.5px] border-white/10 bg-vegas-deep/50 p-5">
          <summary className="cursor-pointer list-none text-xs tracking-hud text-wallace-gold">
            <span aria-hidden className="inline-block w-4 transition-transform duration-300 group-open:rotate-45">
              +
            </span>
            NOTES
          </summary>
          <ul className="mt-3 space-y-2">
            {definitionNotes.map((n) => (
              <li key={n} className="flex gap-2 font-monolith text-sm leading-relaxed text-neutral-300/85">
                <span aria-hidden className="text-wallace-amber">
                  +
                </span>
                <span>
                  <RichText text={n} />
                </span>
              </li>
            ))}
          </ul>
        </details>

        {/* ============ COMMON PRINCIPLES ============ */}
        <section aria-labelledby="common" className="max-w-[90ch] space-y-6">
          <h2
            id="common"
            className="font-monolith text-lg font-light uppercase tracking-monolithic text-neutral-100 sm:text-2xl"
          >
            {commonPrinciples.heading}
          </h2>
          <p className="font-monolith text-sm leading-relaxed text-neutral-200/85 sm:text-base">
            {commonPrinciples.summaryIntro}
          </p>
          <ol className="space-y-3">
            {commonPrinciples.principles.map((pr, i) => (
              <li key={pr.name} className="flex gap-4 font-monolith text-sm leading-relaxed sm:text-base">
                <span className="w-6 shrink-0 font-mono text-xs leading-7 text-wallace-gold">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-neutral-200/85">
                  <span className="font-semibold text-neutral-50">{pr.name}:</span> {pr.text}
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}

/* ---------- One domain: a band heading, then its frameworks ---------- */

function DomainBand({ domain, rows }: (typeof definitionDomains)[number]) {
  return (
    <>
      <tr>
        <th
          scope="colgroup"
          colSpan={definitionColumns.length}
          className="border-b-[0.5px] border-white/10 bg-black/25 px-3 py-2 text-left text-[10px] font-normal tracking-hud text-wallace-gold"
        >
          {domain.toUpperCase()}
        </th>
      </tr>
      {rows.map((r) => (
        <tr key={r.framework}>
          <th scope="row" className={cn(TH, "w-56 font-monolith text-sm font-medium leading-snug text-neutral-100")}>
            <RichText text={r.framework} />
            <ArrowUpRight aria-hidden className="ml-1 inline h-3.5 w-3.5 align-baseline text-wallace-gold" />
          </th>
          <td className={cn(TD, "w-48 bg-vegas-deep/35 text-[11px] leading-snug text-neutral-300/80")}>{r.status}</td>
          <td className={cn(TD, "w-[26%] bg-vegas-deep/35 font-monolith text-xs leading-relaxed text-neutral-200/85")}>
            {r.definition}
          </td>
          <td className={cn(TD, "bg-vegas-deep/35 font-monolith text-xs leading-relaxed text-neutral-200/85")}>
            <div className="space-y-2">
              {r.values.map((v) => (
                <p key={v}>
                  <RichText text={v} />
                </p>
              ))}
            </div>
          </td>
        </tr>
      ))}
    </>
  );
}
