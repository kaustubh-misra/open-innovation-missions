import type { Metadata } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import AtmosphereBackground from "@/components/ui/AtmosphereBackground";
import SiteNav from "@/components/ui/SiteNav";
import "./globals.css";

/* Display font  ->  used by the `font-monolith` class */
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

/* Data font  ->  used by the `font-mono` class (and the whole body) */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  // Page titles appear as e.g. "Analysis · Open Innovation"
  title: { default: "Open Innovation", template: "%s · Open Innovation" },
  description: "Where open science, open hardware and open infrastructure programs succeeded and failed.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full antialiased`}>
      <body className="min-h-full">
        {/* Shared on every page: orange atmosphere + tab bar */}
        <AtmosphereBackground>
          <SiteNav />
          {children}
        </AtmosphereBackground>
      </body>
    </html>
  );
}
