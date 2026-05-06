import { notFound } from "next/navigation";
import { isLang, type Lang, getTranslations } from "@/lib/i18n";
import { LangLayoutClient } from "@/components/layout/LangLayoutClient";
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
    <LangLayoutClient lang={lang} t={t} widgetVersion={WIDGET_VERSION}>
      {children}
    </LangLayoutClient>
  );
}
