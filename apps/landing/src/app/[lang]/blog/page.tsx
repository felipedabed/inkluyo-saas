import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, getTranslations, type Lang } from "@/lib/i18n";

const blogPosts = {
  en: [
    {
      id: "wcag-compliance-guide",
      slug: "wcag-compliance-guide",
      title: "Complete Guide to WCAG 2.1 AA Compliance in 2026",
      excerpt: "Learn what WCAG 2.1 AA compliance means and how to implement it on your website without a complete redesign.",
      date: "May 9, 2026",
      readTime: "8 min read",
      category: "Accessibility",
      image: "🏛️",
    },
    {
      id: "accessibility-widget-benefits",
      slug: "accessibility-widget-benefits",
      title: "Why Your E-Commerce Site Needs an Accessibility Widget",
      excerpt: "Accessibility isn't just ethical—it's profitable. Discover how accessibility features reduce cart abandonment and increase conversions.",
      date: "May 8, 2026",
      readTime: "6 min read",
      category: "Business",
      image: "💰",
    },
    {
      id: "dyslexia-friendly-fonts",
      slug: "dyslexia-friendly-fonts",
      title: "Dyslexia-Friendly Fonts: Making Your Content Readable for Everyone",
      excerpt: "Over 700 million people worldwide have dyslexia. Learn which fonts work best and how to implement them.",
      date: "May 7, 2026",
      readTime: "7 min read",
      category: "Design",
      image: "🔤",
    },
    {
      id: "ada-compliance-requirements",
      slug: "ada-compliance-requirements",
      title: "ADA Compliance Requirements for Websites: What You Need to Know",
      excerpt: "The Americans with Disabilities Act applies to websites. Here's what you must do to avoid legal issues.",
      date: "May 6, 2026",
      readTime: "9 min read",
      category: "Legal",
      image: "⚖️",
    },
    {
      id: "contrast-ratios-wcag",
      slug: "contrast-ratios-wcag",
      title: "Color Contrast Ratios: The Complete WCAG Guide",
      excerpt: "Understand WCAG color contrast requirements and how to test your site for compliance.",
      date: "May 5, 2026",
      readTime: "6 min read",
      category: "Technical",
      image: "🎨",
    },
  ],
  es: [
    {
      id: "wcag-compliance-guide",
      slug: "wcag-compliance-guide",
      title: "Guía Completa para Cumplir WCAG 2.1 AA en 2026",
      excerpt: "Aprende qué significa el cumplimiento WCAG 2.1 AA y cómo implementarlo sin rediseñar tu sitio.",
      date: "9 de mayo, 2026",
      readTime: "8 min lectura",
      category: "Accesibilidad",
      image: "🏛️",
    },
    {
      id: "accessibility-widget-benefits",
      slug: "accessibility-widget-benefits",
      title: "Por Qué Tu Sitio de E-Commerce Necesita un Widget de Accesibilidad",
      excerpt: "La accesibilidad no es solo ética—es rentable. Descubre cómo aumentar conversiones con accesibilidad.",
      date: "8 de mayo, 2026",
      readTime: "6 min lectura",
      category: "Negocios",
      image: "💰",
    },
    {
      id: "dyslexia-friendly-fonts",
      slug: "dyslexia-friendly-fonts",
      title: "Tipografías Amigables para Dislexia: Haciendo tu Contenido Legible",
      excerpt: "Más de 700 millones de personas en el mundo tienen dislexia. Aprende cuáles son las mejores tipografías.",
      date: "7 de mayo, 2026",
      readTime: "7 min lectura",
      category: "Diseño",
      image: "🔤",
    },
  ],
  pt: [
    {
      id: "wcag-compliance-guide",
      slug: "wcag-compliance-guide",
      title: "Guia Completo para Conformidade WCAG 2.1 AA em 2026",
      excerpt: "Aprenda o que significa a conformidade WCAG 2.1 AA e como implementá-la.",
      date: "9 de maio, 2026",
      readTime: "8 min leitura",
      category: "Acessibilidade",
      image: "🏛️",
    },
    {
      id: "accessibility-widget-benefits",
      slug: "accessibility-widget-benefits",
      title: "Por Que Seu Site de E-Commerce Precisa de um Widget de Acessibilidade",
      excerpt: "Acessibilidade não é apenas ética—é lucrativa. Descubra como aumentar conversões.",
      date: "8 de maio, 2026",
      readTime: "6 min leitura",
      category: "Negócios",
      image: "💰",
    },
  ],
};

export default async function BlogPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang: rawLang } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;
  const t = getTranslations(lang);
  const posts = blogPosts[lang] || blogPosts.en;

  const titles = {
    en: {
      title: "Accessibility Blog",
      subtitle: "Expert guides on WCAG compliance, accessibility design, and inclusive web development.",
    },
    es: {
      title: "Blog de Accesibilidad",
      subtitle: "Guías expertas sobre cumplimiento WCAG, diseño accesible y desarrollo web inclusivo.",
    },
    pt: {
      title: "Blog de Acessibilidade",
      subtitle: "Guias especializadas sobre conformidade WCAG, design acessível e desenvolvimento web inclusivo.",
    },
  };

  const title = titles[lang];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white pb-20">
      {/* Hero Section */}
      <section className="px-6 py-16 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
            {title.title}
          </h1>
          <p className="text-xl text-slate-600">
            {title.subtitle}
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                href={`/${lang}/blog/${post.slug}`}
                className="group block bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 overflow-hidden"
              >
                <article className="p-6 flex gap-6">
                  <div className="text-5xl flex-shrink-0">{post.image}</div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                      <span className="text-xs text-slate-500">{post.readTime}</span>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-slate-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="text-sm text-slate-500">
                      {post.date}
                    </div>
                  </div>
                  <div className="flex-shrink-0 text-indigo-600 group-hover:translate-x-2 transition-transform">
                    →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mx-auto max-w-4xl px-6 lg:px-8 mt-20">
        <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-2xl p-8 sm:p-12 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">
            {lang === "es" ? "Suscríbete a nuestro Blog" : lang === "pt" ? "Inscreva-se em nosso Blog" : "Subscribe to Our Blog"}
          </h2>
          <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
            {lang === "es" ? "Recibe artículos sobre accesibilidad web directamente en tu correo." : lang === "pt" ? "Receba artigos sobre acessibilidade web diretamente em seu email." : "Get accessibility insights delivered to your inbox."}
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={lang === "es" ? "tu@email.com" : lang === "pt" ? "seu@email.com" : "your@email.com"}
              className="flex-1 px-4 py-2 rounded-lg text-slate-900 placeholder-slate-500"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition-colors"
            >
              {lang === "es" ? "Suscribir" : lang === "pt" ? "Inscrever" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
