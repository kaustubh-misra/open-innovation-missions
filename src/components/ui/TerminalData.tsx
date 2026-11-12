/**
 * TERMINAL DATA ROW
 * LABEL .................... VALUE
 *
 * Usage:  <TerminalData label="MODEL SERIES" value="NEXUS-9" />
 */

type TerminalDataProps = {
  label: string;
  value: string;
};

export default function TerminalData({ label, value }: TerminalDataProps) {
  return (
    <div className="flex items-baseline gap-3 py-1.5 font-mono text-xs tracking-hud sm:text-sm">
      <span className="shrink-0 text-neutral-500">{label}</span>
      {/* dotted leader line between label and value */}
      <span aria-hidden className="min-w-4 flex-1 border-b border-dotted border-neutral-700" />
      <span className="shrink-0 tabular-nums text-wallace-gold">{value}</span>
    </div>
  );
}
