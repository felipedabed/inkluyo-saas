import { notFound } from "next/navigation";
import Script from "next/script";
import { isLang, type Lang, getTranslations } from "@/lib/i18n";
import { NavBar } from "@/components/common/NavBar";
import { WIDGET_VERSION } from "@/lib/widget-snippet";

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }, { lang: "pt" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const t = getTranslations(lang);

  return (
    <div data-lang={lang} className="min-h-screen">
      <NavBar lang={lang} t={t.nav} />
      {children}

      {/*
        Mount the Inkluyo widget on every page of the landing.
        We pass data-lang so the widget defaults to the page's language.
      */}
      <Script
        src={`/widget/widget.iife.js?v=${WIDGET_VERSION}`}
        data-inkluyo-widget=""
        data-lang={lang}
        data-site-id="demo-site"
        strategy="afterInteractive"
      />
    </div>
  );
}
