"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * TAB BAR — shown at the top of every page.
 * To add a tab: create the page in src/app/<name>/page.tsx,
 * then add { label, href } to TABS below.
 */
const TABS = [
  { label: "Home", href: "/" },
  { label: "Definitions", href: "/definitions" },
  { label: "Matrix", href: "/matrix" },
  { label: "Analysis", href: "/analysis" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <nav aria-label="Pages" className="px-4 pt-6 sm:px-10 sm:pt-8">
      <ul className="mx-auto flex w-full max-w-[1600px] gap-1 border-b-[0.5px] border-white/15">
        {TABS.map((tab) => {
          const active = tab.href === "/" ? pathname === "/" : pathname.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "-mb-px block border-b-2 px-4 py-3 text-xs uppercase tracking-hud transition-colors duration-300",
                  active
                    ? "border-wallace-gold text-wallace-gold"
                    : "border-transparent text-neutral-300/70 hover:border-white/30 hover:text-neutral-100",
                )}
              >
                {tab.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
