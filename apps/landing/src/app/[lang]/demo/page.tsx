import Link from "next/link";
import { isLang, getTranslations, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";
import { SufrimoMetro } from "@/components/horrible/SufrimoMetro";

import { EvolvingCTA } from "@/components/horrible/EvolvingCTA";
import { AchievementToast } from "@/components/horrible/AchievementToast";
import { ConsoleEasterEgg } from "@/components/horrible/ConsoleEasterEgg";
import { OpenWidgetButton } from "@/components/common/OpenWidgetButton";

/**
 * Renders the clarity sentence and styles every literal `<script>` occurrence
 * as inline code without resorting to dangerouslySetInnerHTML.
 */
function renderClarity(text: string): React.ReactNode {
  const token = "<script>";
  const parts = text.split(token);
  return parts.flatMap((part, i) => {
    if (i === 0) return [part];
    return [<code key={i}>{token}</code>, part];
  });
}

export default async function DemoPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const t = getTranslations(lang).landing;
  const tCommon = getTranslations(lang).common;

  return (
    <>
      <div style={{ background: '#f8d7da', color: '#721c24', padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
        🛑 ESTA ES UNA PÁGINA DE PRUEBA INTENCIONALMENTE INACCESIBLE. 
        <Link href={`/${lang}`} style={{ marginLeft: '1rem', textDecoration: 'underline', color: '#0056b3' }}>{tCommon.backHome}</Link>
      </div>
      <SufrimoMetro label={t.sufrimometro} lang={lang} />

      <main className="horrible">
        {/* ===================== HERO ===================== */}
        <section className="px-4 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto">
            <span className="eyebrow">{t.heroEyebrow}</span>
            <h1>{t.heroTitle}</h1>

            {/* Clarity island: clean, professional, anchors WHAT Inkluyo is. */}
            <p className="clarity-card">{renderClarity(t.heroClarity)}</p>

            <p className="subtitle">{t.heroSubtitle}</p>
            <p className="pointer">{t.heroPointer}</p>

            <div className="cta-row">
              <OpenWidgetButton
                label={t.ctaTryWidget}
                className="cta-shouting"
              />

            </div>
          </div>
        </section>







        {/* ===================== FINAL CTA ===================== */}
        <section className="px-4 py-12 text-center">
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              fontFamily: "Comic Sans MS, cursive",
              color: "#ff1493",
              fontWeight: 900,
              margin: 0,
              textShadow: "2px 2px 0 #ffd700",
            }}
          >
            {t.finalCta}
          </h2>
          <p
            style={{
              fontSize: 11,
              color: "#999",
              fontStyle: "italic",
              maxWidth: 520,
              margin: "0.75rem auto 1.25rem",
              lineHeight: 1.4,
            }}
          >
            {t.finalCtaSubtitle}
          </p>
          <EvolvingCTA
            lang={lang}
            initial={t.finalCtaButton}
            shouting={t.ctaInstallShouting}
            understood={t.ctaUnderstood}
            finalText={t.ctaGetIt}
          />
        </section>

        {/* ===================== FOOTER ===================== */}
        <footer className="footer">
          <div>{t.footer.copy}</div>
          <div className="micro">{t.footer.microSecret}</div>
        </footer>
      </main>


      <AchievementToast t={t.achievement} />
      <ConsoleEasterEgg lang={lang} />
    </>
  );
}
