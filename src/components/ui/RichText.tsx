import { Fragment, type ReactNode } from "react";

/**
 * RICH TEXT
 * Turns simple text markup into links, footnote markers and italics:
 *   [words](https://url)  ->  link (opens in a new tab)
 *   [^3]                  ->  superscript footnote marker linking to #fn-3
 *   _words_               ->  italics
 *   **words**             ->  bold
 */

const TOKEN = /\[\^(\d+)\]|\[([^\]]+)\]\(([^)\s]+)\)|_([^_]+)_|\*\*([^*]+)\*\*/g;

const LINK_CLASS =
  "text-wallace-gold underline decoration-wallace-gold/40 underline-offset-[3px] transition-colors hover:text-neutral-50 hover:decoration-neutral-50";

export default function RichText({ text, linkClassName = LINK_CLASS }: { text: string; linkClassName?: string }) {
  const parts: ReactNode[] = [];
  let last = 0;

  for (const m of text.matchAll(TOKEN)) {
    const i = m.index ?? 0;
    if (i > last) parts.push(text.slice(last, i));
    const [, footnote, linkText, url, italic, bold] = m;

    if (footnote) {
      parts.push(
        <sup key={i} id={`fnref-${footnote}`} className="ml-0.5 font-mono text-[0.7em]">
          <a
            href={`#fn-${footnote}`}
            aria-label={`Footnote ${footnote}`}
            className="text-vegas-flare hover:text-neutral-50"
          >
            [{footnote}]
          </a>
        </sup>,
      );
    } else if (linkText) {
      parts.push(
        <a key={i} href={url} target="_blank" rel="noopener noreferrer" className={linkClassName}>
          {linkText}
        </a>,
      );
    } else if (italic) {
      parts.push(<em key={i}>{italic}</em>);
    } else if (bold) {
      parts.push(
        <strong key={i} className="font-semibold text-neutral-50">
          {bold}
        </strong>,
      );
    }
    last = i + m[0].length;
  }
  if (last < text.length) parts.push(text.slice(last));

  return <Fragment>{parts}</Fragment>;
}
