import { Fragment, type ReactNode } from "react";

const STRONG_TAG = /<strong(?:\s+(?:class|className)=["']([^"']*)["'])?>(.*?)<\/strong>/g;

/**
 * Strips the "\n" and <strong> markup used by renderRichText, for plain-text
 * contexts like <meta> descriptions where the raw markup shouldn't leak through.
 */
export function stripRichText(text: string) {
  return text.replace(/\n/g, " ").replace(/<\/?strong[^>]*>/g, "");
}

function parseLine(line: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  STRONG_TAG.lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = STRONG_TAG.exec(line)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(<Fragment key={key++}>{line.slice(lastIndex, match.index)}</Fragment>);
    }
    const [, className, content] = match;
    nodes.push(
      <strong key={key++} className={className || "font-semibold"}>
        {content}
      </strong>,
    );
    lastIndex = STRONG_TAG.lastIndex;
  }
  if (lastIndex < line.length) {
    nodes.push(<Fragment key={key++}>{line.slice(lastIndex)}</Fragment>);
  }
  return nodes;
}

/**
 * Renders plain-text content that may contain "\n" line breaks and
 * <strong>...</strong> or <strong class="...">...</strong> markup, since
 * this data lives in site-data.ts as plain strings (React escapes raw HTML
 * tags rendered as {text}).
 */
export function renderRichText(text: string) {
  return text.split("\n").map((line, lineIndex) => (
    <Fragment key={lineIndex}>
      {lineIndex > 0 && <br />}
      {parseLine(line)}
    </Fragment>
  ));
}
