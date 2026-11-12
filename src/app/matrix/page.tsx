/**
 * MATRIX TAB — the Open Innovation Matrix
 * To change the matrix, edit:  src/content/matrix.ts and src/content/matrix-data.json
 * (The orange background and tab bar come from src/app/layout.tsx.)
 */

import type { Metadata } from "next";
import OpenInnovationMatrix from "@/components/matrix/OpenInnovationMatrix";

export const metadata: Metadata = { title: "Matrix" };

export default function MatrixPage() {
  return (
    <main className="min-h-screen animate-fade-in px-4 py-12 sm:px-10 sm:py-16">
      <OpenInnovationMatrix />
    </main>
  );
}
