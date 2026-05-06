"use client";

import Script from "next/script";
import { useState } from "react";
import { NavBar } from "@/components/common/NavBar";
import { ContactModal } from "@/components/common/ContactModal";
import type { Lang, Translations } from "@/lib/i18n";

interface Props {
  lang: Lang;
  t: Translations;
  children: React.ReactNode;
  widgetVersion: string;
}

export function LangLayoutClient({ lang, t, children, widgetVersion }: Props) {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div data-lang={lang} className="min-h-screen">
      <NavBar
        lang={lang}
        t={t.nav}
        onAnalyzeClick={() => setShowContactModal(true)}
      />
      {children}

      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
        lang={lang}
      />

      <Script
        src={`/widget/widget.iife.js?v=${widgetVersion}`}
        data-inkluyo-widget=""
        data-lang={lang}
        data-site-id="demo-site"
        strategy="afterInteractive"
      />
    </div>
  );
}
