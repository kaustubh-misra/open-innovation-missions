/**
 * ANALYSIS TAB
 * Common points of failure across the layers of openness.
 *
 * To change the text or which theme a component belongs to, edit:
 *   src/content/analysis.ts
 * The tables are calculated from src/content/matrix-data.json.
 */

import type { Metadata } from "next";
import HudContainer from "@/components/ui/HudContainer";
import { MarkBox, MARK_LABEL } from "@/components/ui/TestMarks";
import {
  PRINCIPLE_NAMES,
  passesAll,
  testResults,
  type Mark,
} from "@/content/conditions";
import { analysisText, keyFindings, THEMES, themeOf } from "@/content/analysis";
import { matrixLayers, matrixRows, type MatrixRow } from "@/content/matrix";
import { STATUSES, STATUS_STYLE, type Status } from "@/lib/status";
import { cn } from "@/lib/utils";

export const metadata: Metadata = { title: "Analysis" };

/* ---------- Helpers ---------- */

const LAYER_NAMES = matrixLayers.map((l) => l.name);

function countByStatus(rows: MatrixRow[]) {
  const counts: Record<Status, number> = { Success: 0, Mixed: 0, Failure: 0 };
  rows.forEach((r) => counts[r.status]++);
  return counts;
}

// Order within a cell: failures first, then mixed, then successes.
const STATUS_ORDER: Record<Status, number> = {
  Failure: 0,
  Mixed: 1,
  Success: 2,
};
const byStatus = (a: MatrixRow, b: MatrixRow) =>
  STATUS_ORDER[a.status] - STATUS_ORDER[b.status];

const rowsForTheme = (key: string) =>
  matrixRows.filter((r) => themeOf[r.id] === key);

/* Small reusable bits */

const TH =
  "border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 text-left align-top font-normal";
const TD = "border-b-[0.5px] border-r-[0.5px] border-white/10 p-3 align-top";
const STICKY_BG = "bg-[#2A1206]";

function SectionHeading({
  id,
  title,
  note,
}: {
  id: string;
  title: string;
  note?: string;
}) {
  return (
    <div className="mb-6 space-y-2">
      <h2
        id={id}
        className="font-monolith text-lg font-light uppercase tracking-monolithic text-neutral-100 sm:text-2xl"
      >
        {title}
      </h2>
      {note && (
        <p className="max-w-[75ch] font-monolith text-sm leading-relaxed text-neutral-200/80">
          {note}
        </p>
      )}
    </div>
  );
}

/* ---------- Page ---------- */

export default function AnalysisPage() {
  const struggle = THEMES.filter((t) => t.band === "struggle");

  return (
    <main className="min-h-screen animate-fade-in px-4 py-12 sm:px-10 sm:py-16">
      <div className="mx-auto w-full max-w-[1600px] space-y-20">
        {/* ============ HEADING ============ */}
        <header>
          <h1 className="font-monolith text-2xl font-light uppercase leading-tight tracking-monolithic text-neutral-100 sm:text-4xl">
            {analysisText.title}
          </h1>
        </header>

        {/* ============ KEY FINDINGS ============ */}
        <section aria-labelledby="findings">
          <SectionHeading id="findings" title="Key findings" />
          {/* One tile per row, aligned to the left */}
          <div className="flex max-w-[90ch] flex-col gap-4">
            {keyFindings.map((f, i) => (
              <HudContainer
                key={f.title}
                className="bg-vegas-deep/55 p-5 sm:p-6"
              >
                <div className="flex gap-5">
                  <span className="w-6 shrink-0 pt-0.5 font-mono text-xs text-wallace-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-monolith text-base font-medium leading-snug text-neutral-100">
                      {f.title}
                    </h3>
                    <p className="mt-2 font-monolith text-sm leading-relaxed text-neutral-200/80">
                      {f.text}
                    </p>
                  </div>
                </div>
              </HudContainer>
            ))}
          </div>
        </section>

        {/* ============ OUTCOMES BY LAYER ============ */}
        <section aria-labelledby="by-layer">
          <SectionHeading id="by-layer" title="Outcomes by layer" />
          <HudContainer className="bg-vegas-deep/55 p-3 sm:p-4">
            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-0 text-sm">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className={cn(
                        TH,
                        STICKY_BG,
                        "text-[10px] tracking-hud text-wallace-gold",
                      )}
                    >
                      LAYER
                    </th>
                    {STATUSES.map((s) => (
                      <th
                        key={s}
                        scope="col"
                        className={cn(
                          TH,
                          STICKY_BG,
                          "text-[10px] tracking-hud",
                          STATUS_STYLE[s].text,
                        )}
                      >
                        {s.toUpperCase()}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className={cn(
                        TH,
                        STICKY_BG,
                        "text-[10px] tracking-hud text-neutral-300/70",
                      )}
                    >
                      TOTAL
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {LAYER_NAMES.map((layer) => {
                    const rows = matrixRows.filter((r) => r.layer === layer);
                    const c = countByStatus(rows);
                    return (
                      <tr key={layer}>
                        <th
                          scope="row"
                          className={cn(
                            TH,
                            "font-monolith font-medium text-neutral-100",
                          )}
                        >
                          {layer}
                        </th>
                        {STATUSES.map((s) => (
                          <td
                            key={s}
                            className={cn(TD, "tabular-nums text-neutral-100")}
                          >
                            {c[s]}
                            <span className="ml-2 text-[11px] text-neutral-300/60">
                              {rows.length
                                ? Math.round((c[s] / rows.length) * 100)
                                : 0}
                              %
                            </span>
                          </td>
                        ))}
                        <td className={cn(TD, "tabular-nums text-neutral-300")}>
                          {rows.length}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </HudContainer>
        </section>

        {/* ============ RESULTS AGAINST THE TEST ============ */}
        <section aria-labelledby="test-results">
          <SectionHeading
            id="test-results"
            title="Results against the test"
            note="How many components meet each of the five conditions, by layer. Per-component marks are shown on each tile in the matrix; the bottom rows show how many meet all five, split by outcome."
          />
          <HudContainer className="bg-vegas-deep/55 p-3 sm:p-4">
            <div className="overflow-x-auto border-[0.5px] border-white/10">
              <table className="w-full min-w-[860px] border-separate border-spacing-0 text-sm">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className={cn(
                        TH,
                        STICKY_BG,
                        "text-[10px] tracking-hud text-wallace-gold",
                      )}
                    >
                      CONDITION
                    </th>
                    {[...LAYER_NAMES, "All layers"].map((l) => (
                      <th
                        key={l}
                        scope="col"
                        className={cn(
                          TH,
                          STICKY_BG,
                          "font-monolith text-sm font-medium text-neutral-100",
                        )}
                      >
                        {l}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PRINCIPLE_NAMES.map((name, i) => (
                    <tr key={name}>
                      <th
                        scope="row"
                        className={cn(
                          TH,
                          "w-44 font-monolith font-medium text-neutral-100",
                        )}
                      >
                        <span className="mr-2 font-mono text-xs text-wallace-gold">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {name}
                      </th>
                      {[...LAYER_NAMES, null].map((layer) => (
                        <td
                          key={layer ?? "all"}
                          className={cn(TD, "bg-vegas-deep/35")}
                        >
                          <MarkCounts
                            rows={matrixRows.filter(
                              (r) => !layer || r.layer === layer,
                            )}
                            index={i}
                          />
                        </td>
                      ))}
                    </tr>
                  ))}
                  <tr>
                    <th
                      scope="row"
                      className={cn(
                        TH,
                        "font-monolith font-medium text-wallace-gold",
                      )}
                    >
                      Meets all five
                    </th>
                    {[...LAYER_NAMES, null].map((layer) => {
                      const rows = matrixRows.filter(
                        (r) => !layer || r.layer === layer,
                      );
                      return (
                        <td
                          key={layer ?? "all"}
                          className={cn(
                            TD,
                            "bg-vegas-deep/35 tabular-nums text-neutral-100",
                          )}
                        >
                          {rows.filter((r) => passesAll(r.id)).length}
                          <span className="text-neutral-300/60">
                            {" "}
                            of {rows.length}
                          </span>
                        </td>
                      );
                    })}
                  </tr>
                  <tr>
                    <th
                      scope="row"
                      className={cn(
                        TH,
                        "font-monolith font-medium text-wallace-gold",
                      )}
                    >
                      Meets all five, by outcome
                    </th>
                    <td
                      colSpan={LAYER_NAMES.length + 1}
                      className={cn(TD, "bg-vegas-deep/35")}
                    >
                      <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[12px]">
                        {STATUSES.map((st) => {
                          const rows = matrixRows.filter(
                            (r) => r.status === st,
                          );
                          return (
                            <li key={st} className="flex items-center gap-2">
                              <span
                                aria-hidden
                                className={cn(
                                  "h-2.5 w-2.5",
                                  STATUS_STYLE[st].swatch,
                                )}
                              />
                              <span className="text-neutral-100 tabular-nums">
                                {rows.filter((r) => passesAll(r.id)).length}
                              </span>
                              <span className="text-neutral-300/70">
                                of {rows.length} {st.toLowerCase()}
                                {st === "Mixed"
                                  ? " results"
                                  : st === "Success"
                                    ? "es"
                                    : "s"}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </HudContainer>
        </section>

        {/* ============ FAILURE POINTS ============ */}
        <section aria-labelledby="failure-points">
          <SectionHeading
            id="failure-points"
            title="Common points of failure"
            note="For each theme with failures or mixed results: how it goes wrong, which components show it, and what worked instead."
          />
          <HudContainer className="bg-vegas-deep/55 p-3 sm:p-4">
            <div className="overflow-x-auto border-[0.5px] border-white/10">
              <table className="min-w-[960px] border-separate border-spacing-0">
                <thead>
                  <tr>
                    {[
                      "THEME",
                      "HOW IT FAILS",
                      "AFFECTED COMPONENTS",
                      "WHAT WORKED INSTEAD",
                      "LESSON",
                    ].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className={cn(
                          TH,
                          STICKY_BG,
                          "text-[10px] tracking-hud text-wallace-gold",
                        )}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {struggle.map((t) => {
                    const affected = rowsForTheme(t.key)
                      .filter((r) => r.status !== "Success")
                      .sort(byStatus);
                    return (
                      <tr key={t.key}>
                        <th
                          scope="row"
                          className={cn(
                            TH,
                            "w-48 font-monolith text-sm font-medium text-neutral-100",
                          )}
                        >
                          {t.name}
                        </th>
                        <td
                          className={cn(
                            TD,
                            "w-[28%] font-monolith text-xs leading-relaxed text-neutral-200/85",
                          )}
                        >
                          {t.pattern}
                        </td>
                        <td className={cn(TD, "w-64")}>
                          <ul className="space-y-1.5">
                            {affected.map((r) => (
                              <li
                                key={r.id}
                                className="flex gap-2 text-[11px] leading-snug text-neutral-200"
                              >
                                <span
                                  aria-hidden
                                  className={cn(
                                    "mt-1 h-2 w-2 shrink-0",
                                    STATUS_STYLE[r.status].swatch,
                                  )}
                                />
                                <span>
                                  <span className="font-monolith text-xs text-neutral-100">
                                    {r.component}
                                  </span>
                                  <span
                                    className={cn(
                                      "ml-1",
                                      STATUS_STYLE[r.status].text,
                                    )}
                                  >
                                    ({r.status.toLowerCase()})
                                  </span>
                                  <span className="block text-[10px] text-neutral-300/65">
                                    {r.program}
                                  </span>
                                </span>
                              </li>
                            ))}
                          </ul>
                        </td>
                        <td
                          className={cn(
                            TD,
                            "w-[24%] bg-signal-ok-fill/20 font-monolith text-xs leading-relaxed text-neutral-100",
                          )}
                        >
                          {t.worked}
                        </td>
                        <td
                          className={cn(
                            TD,
                            "font-monolith text-sm font-medium leading-snug text-wallace-gold",
                          )}
                        >
                          {t.lesson}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </HudContainer>
        </section>

        {/* ============ CAVEATS ============ */}
        {/* Click the heading to open or close */}
        <details
          id="caveats"
          className="group max-w-[75ch] border-[0.5px] border-white/10 bg-vegas-deep/50 p-5"
        >
          <summary className="cursor-pointer list-none text-xs tracking-hud text-wallace-gold">
            <span
              aria-hidden
              className="inline-block w-4 transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>
            CAVEATS
          </summary>
          <ul className="mt-3 space-y-2">
            {analysisText.caveats.map((c) => (
              <li
                key={c}
                className="flex gap-2 font-monolith text-sm leading-relaxed text-neutral-300/85"
              >
                <span aria-hidden className="text-wallace-amber">
                  +
                </span>
                {c}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </main>
  );
}

/* ---------- Test result counts ---------- */

function MarkCounts({ rows, index }: { rows: MatrixRow[]; index: number }) {
  const count = (m: Mark) =>
    rows.filter((r) => testResults[r.id]?.marks[index] === m).length;
  return (
    <ul className="space-y-1 text-[11px] tracking-wide">
      {(["Y", "P", "N", "-"] as Mark[]).map((m) => (
        <li
          key={m}
          className={cn(
            "flex items-center gap-2",
            count(m) === 0 && "opacity-35",
          )}
        >
          <MarkBox
            mark={m}
            letter={PRINCIPLE_NAMES[index][0]}
            className="h-4 w-4 text-[9px]"
          />
          <span className="w-4 tabular-nums text-neutral-100">{count(m)}</span>
          <span className="text-neutral-300/70">{MARK_LABEL[m]}</span>
        </li>
      ))}
    </ul>
  );
}
