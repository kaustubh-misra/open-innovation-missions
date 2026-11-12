import type { MatrixRow } from "@/content/matrix";

export type Status = MatrixRow["status"];

/**
 * Outcome colours, shared by the Matrix and Analysis pages.
 * chip   = solid tile background + bright left edge
 * text   = status label colour
 * swatch = small legend square
 * (Class names are written out in full so Tailwind can find them.)
 */
export const STATUS_STYLE: Record<Status, { chip: string; text: string; swatch: string }> = {
  Success: { chip: "border-signal-ok bg-signal-ok-fill", text: "text-signal-ok", swatch: "bg-signal-ok-fill" },
  Mixed: { chip: "border-signal-mixed bg-signal-mixed-fill", text: "text-signal-mixed", swatch: "bg-signal-mixed-fill" },
  Failure: { chip: "border-signal-fail bg-signal-fail-fill", text: "text-signal-fail", swatch: "bg-signal-fail-fill" },
};

export const STATUSES: Status[] = ["Success", "Mixed", "Failure"];
