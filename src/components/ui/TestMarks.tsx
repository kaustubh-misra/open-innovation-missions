import { cn } from "@/lib/utils";
import { PRINCIPLE_NAMES, testResults, type Mark } from "@/content/conditions";

/**
 * TEST MARKS — five small squares showing how a component scores
 * against the five conditions (Open, Fair, Documented, Interoperable,
 * Sustained). Results live in src/content/conditions.ts
 */

export const MARK_LABEL: Record<Mark, string> = { Y: "meets", P: "partly meets", N: "does not meet", "-": "not applicable" };

// Styles work on the solid green / amber / red tiles
export const MARK_STYLE: Record<Mark, string> = {
  Y: "bg-white text-black/85 border-white",
  P: "bg-white/30 text-white border-white/70",
  N: "bg-black/55 text-white border-white/80 line-through decoration-2",
  "-": "bg-transparent text-white/40 border-white/25 border-dashed",
};

export function MarkBox({ mark, letter, className }: { mark: Mark; letter: string; className?: string }) {
  return (
    <span
      className={cn(
        "flex h-5 w-5 items-center justify-center border-[1px] font-mono text-[10px] font-semibold",
        MARK_STYLE[mark],
        className,
      )}
    >
      {letter}
    </span>
  );
}

export default function TestMarks({ id }: { id: string }) {
  const result = testResults[id];
  if (!result) return null;
  return (
    <div className="mt-2 border-t-[0.5px] border-white/25 pt-2">
      <ul
        className="flex items-center gap-1"
        aria-label={result.marks.map((m, i) => `${PRINCIPLE_NAMES[i]}: ${MARK_LABEL[m]}`).join("; ")}
      >
        <li aria-hidden className="mr-1 text-[9px] tracking-hud text-white/70">
          TEST
        </li>
        {result.marks.map((m, i) => (
          <li key={i} aria-hidden title={`${PRINCIPLE_NAMES[i]}: ${MARK_LABEL[m]}`}>
            <MarkBox mark={m} letter={PRINCIPLE_NAMES[i][0]} />
          </li>
        ))}
      </ul>
      {result.note && <p className="mt-1.5 text-[11px] leading-snug text-white/75">{result.note}</p>}
    </div>
  );
}
