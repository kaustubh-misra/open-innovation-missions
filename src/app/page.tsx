/**
 * HOME PAGE
 * To change the text, links or footnotes, edit:  src/content/home.ts
 * (The orange background and tab bar come from src/app/layout.tsx.)
 */

import { ArrowRight, ArrowUpRight } from "lucide-react";
import HudContainer from "@/components/ui/HudContainer";
import MonolithHeading from "@/components/ui/MonolithHeading";
import RichText from "@/components/ui/RichText";
import { footnotes, homeHero, homeSections } from "@/content/home";

// Text style for the body paragraphs
const BODY = "font-monolith text-base leading-[1.8] text-neutral-100/90 sm:text-[1.0625rem]";

// Paragraph-heading links (section 1) use a heading-sized link style
const HEADING_LINK =
  "text-neutral-50 underline decoration-wallace-gold/50 underline-offset-[5px] transition-colors hover:text-wallace-gold hover:decoration-wallace-gold";

export default function Home() {
  return (
    <main className="animate-fade-in px-4 sm:px-10">
      {/* ============ HERO ============ */}
      <section className="flex min-h-[72vh] flex-col items-center justify-center gap-12 py-20 text-center">
        <MonolithHeading>{homeHero.title}</MonolithHeading>

        {/* Jump links to the sections */}
        {/* Stacked vertically, left-aligned, centred under the title */}
        <nav aria-label="On this page" className="w-full max-w-xl">
          <ol className="flex flex-col border-t-[0.5px] border-white/20 text-left">
            {homeSections.map((s, i) => (
              <li key={s.id} className="border-b-[0.5px] border-white/20">
                <a
                  href={`#${s.id}`}
                  className="group flex items-baseline gap-4 px-2 py-4 text-xs uppercase leading-relaxed tracking-hud text-neutral-200/85 transition-colors duration-300 hover:bg-vegas-deep/40 hover:text-wallace-gold"
                >
                  <span className="shrink-0 text-wallace-gold">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">{s.heading}</span>
                  <ArrowRight
                    aria-hidden
                    className="h-3.5 w-3.5 shrink-0 translate-y-0.5 rotate-90 opacity-50 transition-all group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ol>
        </nav>
      </section>

      {/* ============ SECTIONS ============ */}
      <div className="mx-auto w-full max-w-[1200px] pb-24">
        {homeSections.map((section, i) => (
          <section
            key={section.id}
            id={section.id}
            aria-labelledby={`${section.id}-title`}
            className="grid scroll-mt-8 gap-8 border-t-[0.5px] border-white/15 py-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.2fr)] lg:gap-16"
          >
            {/* Left: section number + heading (stays in view while reading on desktop) */}
            <header className="lg:sticky lg:top-10 lg:self-start">
              <span className="block text-xs tracking-hud text-wallace-gold">{String(i + 1).padStart(2, "0")}</span>
              <h2
                id={`${section.id}-title`}
                className="mt-3 font-monolith text-2xl font-light uppercase leading-snug tracking-[0.12em] text-neutral-50 sm:text-3xl"
              >
                {section.heading}
              </h2>
            </header>

            {/* Right: the text */}
            <div className="max-w-[72ch] space-y-6">
              {section.paragraphs.map((p, j) => (
                <p key={j} className={BODY}>
                  <RichText text={p} />
                </p>
              ))}

              {/* Paragraphs with their own headings */}
              {section.items && (
                <div className="space-y-6 pt-4">
                  {section.items.map((item) => (
                    <HudContainer key={item.heading} className="bg-vegas-deep/55 p-6 sm:p-8">
                      <h3 className="mb-3 font-monolith text-xl font-medium leading-snug text-neutral-50">
                        <RichText text={item.heading} linkClassName={HEADING_LINK} />
                        {item.heading.includes("](") && (
                          <ArrowUpRight aria-hidden className="ml-1 inline h-4 w-4 align-baseline text-wallace-gold" />
                        )}
                      </h3>
                      <p className={BODY}>
                        <RichText text={item.text} />
                      </p>
                    </HudContainer>
                  ))}
                </div>
              )}
            </div>
          </section>
        ))}

        {/* ============ FOOTNOTES ============ */}
        <section aria-labelledby="notes-title" className="border-t-[0.5px] border-white/15 pt-10">
          <h2 id="notes-title" className="text-xs tracking-hud text-wallace-gold">
            NOTES
          </h2>
          <ol className="mt-5 max-w-[90ch] space-y-3">
            {Object.entries(footnotes).map(([n, text]) => (
              <li
                key={n}
                id={`fn-${n}`}
                className="flex scroll-mt-8 gap-3 font-monolith text-sm leading-relaxed text-neutral-200/80"
              >
                <span className="w-6 shrink-0 font-mono text-vegas-flare">{n}.</span>
                <span className="min-w-0 break-words">
                  <RichText text={text} />{" "}
                  <a
                    href={`#fnref-${n}`}
                    aria-label={`Back to reference ${n}`}
                    className="text-wallace-gold hover:text-neutral-50"
                  >
                    ↩
                  </a>
                </span>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
