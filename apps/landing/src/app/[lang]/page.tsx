import Link from "next/link";
import { isLang, getTranslations, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

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

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900 pb-20">
      {/* ===================== HERO SECTION ===================== */}
      <section className="relative px-6 py-24 sm:py-32 lg:px-8 overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
        </div>
        
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-7xl mb-8 leading-tight">
            {t.heroTitle}
          </h1>
          <p className="mt-6 text-xl leading-8 text-slate-600 max-w-2xl mx-auto mb-10">
            {t.heroSubtitle}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link 
              href={`/${lang}/pricing`} 
              className="rounded-full bg-indigo-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-200 hover:bg-indigo-500 hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full sm:w-auto"
            >
              {t.ctaPrimary}
            </Link>
            <Link 
              href={`/${lang}/demo`} 
              className="group text-base font-semibold leading-6 text-slate-900 hover:text-rose-500 transition-all flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-full shadow-sm hover:shadow-md border border-slate-100 hover:-translate-y-1 duration-300 w-full sm:w-auto"
            >
              {t.ctaDemo} 
              <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== STATS SECTION ===================== */}
      <section className="py-16 sm:py-24 bg-indigo-50/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              {tLanding.statsHeadline}
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              {tLanding.statsSubhead}
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
            {tLanding.stats.map((s, i) => (
              <div key={i} className="flex flex-col gap-y-3 border-l border-indigo-200 pl-6">
                <dt className="text-sm leading-6 text-slate-600">{s.label}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===================== FEATURES GRID ===================== */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{t.featuresTitle}</h2>
          </div>
          <div className="mx-auto mt-16 max-w-5xl sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {t.features.map((feature, i) => (
                <div key={i} className="relative bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-indigo-100/50 hover:-translate-y-2 transition-all duration-300">
                  <dt className="text-lg font-bold leading-7 text-slate-900">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                       {i === 0 && <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>}
                       {i === 1 && <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" /></svg>}
                       {i === 2 && <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9v6m-4.5 0V9M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-4 text-base leading-7 text-slate-600">{feature.desc}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ===================== PLAYGROUND TEASER SECTION ===================== */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mt-10">
        <div className="relative isolate overflow-hidden bg-indigo-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-indigo-700 -z-10"></div>
          
          {/* Decorative circles */}
          <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stopColor="#f43f5e" />
                <stop offset="1" stopColor="#6366f1" />
              </radialGradient>
            </defs>
          </svg>

          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t.demoTeaserTitle}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-100">
            {t.demoTeaserDesc}
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link 
              href={`/${lang}/demo`} 
              className="rounded-full bg-rose-500 px-8 py-4 text-base font-bold text-white shadow-lg shadow-rose-500/30 hover:bg-rose-400 hover:scale-105 hover:-translate-y-1 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-400"
            >
              {t.demoTeaserCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
