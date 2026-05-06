import { notFound } from "next/navigation";
import { getTranslations, isLang } from "@/lib/i18n";
import { PricingPageClient } from "@/components/pricing/PricingPageClient";

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang = rawLang;
  const t = getTranslations(lang).pricing;

  return <PricingPageClient lang={lang} t={t} />;
}
