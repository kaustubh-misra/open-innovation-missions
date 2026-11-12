"use client";

/**
 * OPEN INNOVATION MATRIX
 * Programs (columns) x layers of openness (rows), with filters.
 *
 * You should not need to edit this file to change content:
 *   - findings  ->  src/content/matrix-data.json
 *   - all other text  ->  src/content/matrix.ts
 */

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import HudContainer from "@/components/ui/HudContainer";
import RichText from "@/components/ui/RichText";
import PrinciplesTest from "@/components/ui/PrinciplesTest";
import TestMarks, { MarkBox, MARK_LABEL } from "@/components/ui/TestMarks";
import { PRINCIPLE_NAMES, passesAll, type Mark } from "@/content/conditions";
import { STATUS_STYLE, type Status } from "@/lib/status";
import { cn } from "@/lib/utils";
import {
  matrixLayers,
  matrixNotes,
  matrixRows,
  matrixText,
  programWebsites,
  type MatrixRow,
} from "@/content/matrix";

/* Filter dropdown options: [value, label] */
const FILTERS = {
  status: {
    label: "OUTCOME",
    options: [
      ["", "All outcomes"],
      ["Success", "Success"],
      ["Mixed", "Mixed"],
      ["Failure", "Failure"],
    ],
  },
  lead: {
    label: "LED BY",
    options: [
      ["", "All programs"],
      ["ngo", "NGO-led only"],
      ["other", "Not NGO-led"],
    ],
  },
  ev: {
    label: "EVIDENCE",
    options: [
      ["", "All sources"],
      ["External", "External only"],
      ["Self-reported", "Self-reported only"],
    ],
  },
  test: {
    label: "TEST",
    options: [
      ["", "All results"],
      ["pass", "Meets all five"],
      ["short", "Falls short"],
    ],
  },
} as const;

type FilterKey = keyof typeof FILTERS;

const isNgo = (row: MatrixRow) => row.lead === "NGO-led";

// Opaque background for sticky cells so scrolled content hides beneath them.
const STICKY_BG = "bg-[#2A1206]";

export default function OpenInnovationMatrix() {
  const [filters, setFilters] = useState<Record<FilterKey, string>>({
    status: "",
    lead: "",
    ev: "",
    test: "",
  });

  // One entry per program (first row found), in display order, filtered by "led by".
  const programs = useMemo(() => {
    const byName = new Map<string, MatrixRow>();
    matrixRows.forEach((r) => {
      if (!byName.has(r.program)) byName.set(r.program, r);
    });
    return [...byName.values()]
      .sort((a, b) => a.order - b.order)
      .filter(
        (p) => !filters.lead || (filters.lead === "ngo" ? isNgo(p) : !isNgo(p)),
      );
  }, [filters.lead]);

  const passes = (r: MatrixRow) =>
    (!filters.status || r.status === filters.status) &&
    (!filters.ev || r.evidence === filters.ev) &&
    (!filters.test || (filters.test === "pass") === passesAll(r.id));

  const programNames = new Set(programs.map((p) => p.program));
  const shownCount = matrixRows.filter(
    (r) => programNames.has(r.program) && passes(r),
  ).length;

  return (
    <section
      aria-labelledby="matrix-title"
      className="mx-auto w-full max-w-[1600px]"
    >
      {/* ============ SECTION HEADING ============ */}
      <div className="mb-10 space-y-5">
        <h2
          id="matrix-title"
          className="font-monolith text-2xl font-light uppercase leading-tight tracking-monolithic text-neutral-100 sm:text-4xl"
        >
          {matrixText.title}
          <span className="mt-2 block text-sm tracking-hud text-wallace-gold sm:text-base">
            {matrixText.subtitle}
          </span>
        </h2>
      </div>

      {/* ============ THE TEST (from the Definitions page) ============ */}
      <div className="mb-10 max-w-[90ch]">
        <PrinciplesTest
          footer={
            <Link
              href="/definitions#common"
              className="group mt-5 inline-flex items-center gap-2 text-[10px] tracking-hud text-wallace-gold transition-colors hover:text-neutral-50"
            >
              WHERE THIS TEST COMES FROM
              <ArrowRight
                aria-hidden
                className="h-3 w-3 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          }
        />
      </div>

      {/* ============ LEGEND + FILTERS ============ */}
      <div className="mb-6 flex flex-wrap items-end justify-between gap-6">
        <div className="space-y-3">
          <ul
            aria-label="Colour key"
            className="flex flex-wrap gap-5 text-[10px] tracking-hud text-neutral-200 sm:text-xs"
          >
            {(Object.keys(matrixText.legend) as Status[]).map((s) => (
              <li key={s} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className={cn(
                    "h-3 w-3 border-l-2",
                    STATUS_STYLE[s].swatch,
                    STATUS_STYLE[s].chip,
                  )}
                />
                {matrixText.legend[s].toUpperCase()}
              </li>
            ))}
          </ul>

          {/* Key for the test marks on each tile */}
          <ul
            aria-label="Test key"
            className="flex flex-wrap items-center gap-4 text-[10px] tracking-hud text-neutral-200"
          >
            <li className="text-neutral-300/70">
              TEST: {PRINCIPLE_NAMES.map((n) => n[0]).join(" ")} ={" "}
              {PRINCIPLE_NAMES.map((n) => n.toUpperCase()).join(", ")}
            </li>
            {(["Y", "P", "N", "-"] as Mark[]).map((m) => (
              <li key={m} className="flex items-center gap-1.5">
                <MarkBox mark={m} letter="O" className="h-4 w-4 text-[9px]" />
                {MARK_LABEL[m].toUpperCase()}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-3">
          {(Object.keys(FILTERS) as FilterKey[]).map((key) => (
            <label
              key={key}
              className="flex flex-col gap-1.5 text-[10px] tracking-hud text-neutral-300/80"
            >
              {FILTERS[key].label}
              <select
                value={filters[key]}
                onChange={(e) =>
                  setFilters((f) => ({ ...f, [key]: e.target.value }))
                }
                className="cursor-pointer border-[0.5px] border-white/25 bg-[#2A1206] px-3 py-2 font-mono text-xs text-neutral-200 outline-none transition-colors duration-300 hover:border-wallace-amber focus-visible:border-wallace-gold"
              >
                {FILTERS[key].options.map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>
          ))}
        </div>
      </div>

      {/* ============ THE MATRIX ============ */}
      <HudContainer
        title={`${programs.length} PROGRAMS`}
        code={`${shownCount} / ${matrixRows.length} COMPONENTS`}
        className="bg-vegas-deep/50 p-3 sm:p-4"
      >
        <div className="max-h-[80vh] overflow-auto border-[0.5px] border-white/10">
          <table className="min-w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th
                  scope="col"
                  className={cn(
                    "sticky left-0 top-0 z-30 w-60 min-w-60 border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 align-top text-[10px] font-normal tracking-hud text-wallace-gold",
                    STICKY_BG,
                  )}
                >
                  LAYER
                </th>
                {programs.map((p) => (
                  <th
                    key={p.program}
                    scope="col"
                    className={cn(
                      "sticky top-0 z-20 min-w-60 border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 align-top font-normal",
                      isNgo(p) ? "bg-[#3D1B08]" : STICKY_BG,
                    )}
                  >
                    {programWebsites[p.program] ? (
                      /* Program name links to its website */
                      <a
                        href={programWebsites[p.program].url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link block font-monolith text-sm font-medium text-neutral-100 transition-colors hover:text-wallace-gold"
                      >
                        {p.program}
                        <span className="mt-1 flex items-center gap-1 font-mono text-[11px] font-normal text-wallace-gold underline decoration-wallace-gold/40 underline-offset-2 group-hover/link:decoration-wallace-gold">
                          {programWebsites[p.program].label}
                          <ArrowUpRight
                            aria-hidden
                            className="h-3 w-3 shrink-0"
                          />
                        </span>
                      </a>
                    ) : (
                      <span className="block font-monolith text-sm font-medium text-neutral-100">
                        {p.program}
                      </span>
                    )}
                    <span className="mt-1 block text-[11px] text-neutral-300/70">
                      {p.where}
                    </span>
                    <span className="block text-[11px] text-neutral-300/70">
                      {p.sectors}
                    </span>
                    <span
                      className={cn(
                        "mt-2 inline-block border-[0.5px] px-1.5 py-0.5 text-[10px] tracking-wide",
                        isNgo(p)
                          ? "border-wallace-gold text-wallace-gold"
                          : "border-white/25 text-neutral-300/70",
                      )}
                    >
                      {p.lead}
                    </span>
                    {p.ngoTest && (
                      <span className="mt-2 block text-[11px] leading-snug text-neutral-300/70">
                        <span className="text-neutral-200">NGO TEST:</span>{" "}
                        {p.ngoTest}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {matrixLayers.map((layer) => (
                <tr key={layer.name}>
                  {/* Row header: layer name + qualifiers */}
                  <th
                    scope="row"
                    className={cn(
                      "sticky left-0 z-10 w-60 min-w-60 border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 align-top font-normal",
                      STICKY_BG,
                    )}
                  >
                    <span className="mb-2 block font-monolith text-base font-medium uppercase tracking-wide text-neutral-100">
                      {layer.name}
                    </span>
                    <span className="mb-1 block text-[10px] tracking-hud text-neutral-300/60">
                      QUALIFIES WHEN
                    </span>
                    <ul className="mb-2 list-none space-y-1.5 text-[11px] leading-snug text-neutral-300/85">
                      {/* Numbered to match the five principles on the Definitions page */}
                      {layer.quals.map((q, i) => (
                        <li key={q.principle} className="flex gap-2">
                          <span
                            aria-hidden
                            className="w-4 shrink-0 font-mono text-[10px] leading-[1.4rem] text-wallace-gold"
                          >
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>
                            <span className="font-medium text-neutral-50">
                              {q.principle}:
                            </span>{" "}
                            {q.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    {layer.sources.map((s) => (
                      <a
                        key={s.url}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-1 block text-[11px] text-neutral-300/70 underline decoration-white/30 underline-offset-2 transition-colors hover:text-wallace-gold"
                      >
                        {s.label}
                      </a>
                    ))}
                  </th>

                  {/* One cell per program */}
                  {programs.map((p) => {
                    const items = matrixRows.filter(
                      (r) => r.program === p.program && r.layer === layer.name,
                    );
                    const shown = items.filter(passes);
                    return (
                      <td
                        key={p.program}
                        className="border-b-[0.5px] border-r-[0.5px] border-white/10 bg-vegas-deep/35 p-3 align-top"
                      >
                        <div className="flex flex-col gap-2">
                          {items.length === 0 && (
                            <span className="text-[10px] tracking-hud text-white/25">
                              NOT A COMPONENT
                            </span>
                          )}
                          {items.length > 0 && shown.length === 0 && (
                            <span className="text-[10px] tracking-hud text-white/40">
                              HIDDEN BY FILTER
                            </span>
                          )}
                          {shown.map((r) => (
                            <article
                              key={r.id}
                              className={cn(
                                "border-l-[3px] px-3 py-2.5 shadow-[0_4px_16px_rgba(0,0,0,0.25)]",
                                STATUS_STYLE[r.status].chip,
                              )}
                            >
                              <div className="mb-1 flex flex-wrap gap-2 text-[10px] tracking-hud">
                                <span
                                  className={cn(
                                    "font-medium",
                                    STATUS_STYLE[r.status].text,
                                  )}
                                >
                                  {r.status.toUpperCase()}
                                </span>
                                <span className="text-white/60">
                                  {r.evidence.toUpperCase()}
                                </span>
                              </div>
                              <h3 className="mb-1 font-monolith text-sm font-medium leading-snug text-white">
                                {r.component}
                              </h3>
                              <p className="mb-1.5 font-monolith text-xs leading-relaxed text-white/85">
                                {r.finding}
                              </p>
                              <a
                                href={r.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[11px] text-white/65 underline decoration-white/30 underline-offset-2 transition-colors hover:text-white"
                              >
                                {r.sourceLabel}
                              </a>
                              <TestMarks id={r.id} />
                            </article>
                          ))}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </HudContainer>

      {/* ============ HOW TO READ ============ */}
      <details className="group mt-8 max-w-[75ch] border-[0.5px] border-white/10 bg-vegas-deep/50 p-4">
        <summary className="cursor-pointer list-none text-xs tracking-hud text-wallace-gold">
          <span className="inline-block w-4 transition-transform duration-300 group-open:rotate-45">
            +
          </span>
          HOW TO READ THIS MATRIX
        </summary>
        <dl className="mt-4 space-y-3">
          {matrixNotes.map((n) => (
            <div key={n.term}>
              <dt className="text-[11px] tracking-hud text-neutral-300">
                {n.term.toUpperCase()}
              </dt>
              <dd className="mt-1 font-monolith text-sm leading-relaxed text-neutral-300/80">
                {n.text}
              </dd>
            </div>
          ))}
        </dl>
      </details>

      {/* ============ RESULTS ============ */}
      <div className="mt-14 max-w-[75ch] space-y-4 border-t-[0.5px] border-white/15 pt-10">
        <h3 className="font-monolith text-lg font-light uppercase tracking-monolithic text-neutral-100 sm:text-2xl">
          {matrixText.resultsHeading}
        </h3>
        {matrixText.results.map((p) => (
          <p key={p} className="font-monolith text-sm leading-relaxed text-neutral-200/85 sm:text-base">
            <RichText text={p} />
          </p>
        ))}
      </div>
    </section>
  );
}
