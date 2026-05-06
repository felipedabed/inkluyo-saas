import { isLang, getTranslations, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { HomePageClient } from "@/components/home/HomePageClient";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const t = getTranslations(lang).home;
  const tLanding = getTranslations(lang).landing;

  return <HomePageClient lang={lang} t={t} tLanding={tLanding} />;
}
