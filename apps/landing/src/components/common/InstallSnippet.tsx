"use client";

import { useEffect, useState } from "react";
import { buildSnippet, resolveWidgetUrl } from "@/lib/widget-snippet";
import type { Lang } from "@/lib/i18n";
import { SnippetBlock } from "@/components/horrible/SnippetBlock";

interface Props {
  lang: Lang;
  copyLabel: string;
  copiedLabel: string;
  horrible?: boolean;
}

/**
 * Renders the install <script> snippet with the URL resolved at runtime
 * so it always points to the current origin in dev / preview / production
 * without the developer having to remember to set anything.
 */
export function InstallSnippet({
  lang,
  copyLabel,
  copiedLabel,
  horrible,
}: Props) {
  const [snippet, setSnippet] = useState(() =>
    buildSnippet({ scriptUrl: resolveWidgetUrl(), lang }),
  );

  useEffect(() => {
    const url = resolveWidgetUrl(window.location.origin);
    setSnippet(buildSnippet({ scriptUrl: url, lang }));
  }, [lang]);

  return (
    <SnippetBlock
      snippet={snippet}
      copyLabel={copyLabel}
      copiedLabel={copiedLabel}
      horrible={horrible}
    />
  );
}
