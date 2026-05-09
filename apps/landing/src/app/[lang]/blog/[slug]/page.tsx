import Link from "next/link";
import { notFound } from "next/navigation";
import { isLang, type Lang } from "@/lib/i18n";

const blogArticles = {
  "wcag-compliance-guide": {
    en: {
      title: "Complete Guide to WCAG 2.1 AA Compliance in 2026",
      author: "Inkluyo Team",
      date: "May 9, 2026",
      readTime: "8 min read",
      category: "Accessibility",
      image: "🏛️",
      excerpt: "Learn what WCAG 2.1 AA compliance means and how to implement it on your website without a complete redesign.",
      content: `
# Complete Guide to WCAG 2.1 AA Compliance

Web accessibility has become a legal requirement, not just a nice-to-have. In 2026, over 2,000 accessibility lawsuits are filed annually in the US alone. If your website isn't WCAG 2.1 AA compliant, you're exposing your business to legal risks.

## What is WCAG 2.1 AA?

WCAG (Web Content Accessibility Guidelines) 2.1 AA is the international standard for web accessibility. It ensures that people with disabilities—including blindness, deafness, cognitive disabilities, and motor disabilities—can access and use your website.

**Key numbers:**
- 1.3 billion people worldwide live with some form of disability
- 15% of your website visitors have accessibility needs
- 98% of websites have accessibility failures

## Why AA, Not AAA?

There are 3 levels: A (basic), AA (standard), and AAA (enhanced).

- **A**: Minimum compliance
- **AA**: Standard compliance (what most companies target)
- **AAA**: Maximum compliance (expensive, not always practical)

**The legal sweet spot is AA.** Most accessibility lawsuits target sites that don't meet AA standards.

## The 4 Pillars of WCAG Compliance

### 1. **Perceivable** 👁️
Users must be able to see/hear your content.

- Text alternatives for images (alt text)
- Captions for videos
- Sufficient color contrast (4.5:1 ratio for text)
- Content readable at up to 200% zoom

### 2. **Operable** 🎮
Users must be able to navigate your site.

- Full keyboard navigation
- No content that flashes more than 3 times per second
- Skip navigation links
- Large, clickable buttons (at least 44×44 pixels)

### 3. **Understandable** 🧠
Users must understand your content.

- Plain language (avoid jargon)
- Consistent navigation
- Form validation errors explained clearly
- No unexpected page changes on focus

### 4. **Robust** 🛡️
Your site must work with assistive technologies.

- Valid HTML markup
- Proper heading hierarchy
- ARIA roles used correctly
- Compatibility with screen readers (JAWS, NVDA)

## Quick WCAG AA Checklist

### Text & Images ✓
- [ ] All images have descriptive alt text
- [ ] Heading hierarchy is correct (H1, H2, H3...)
- [ ] Text color contrast is at least 4.5:1
- [ ] No images of text (use actual text instead)

### Navigation & Links ✓
- [ ] Site is fully keyboard navigable (Tab key works everywhere)
- [ ] Focus indicators are visible (usually a box around elements)
- [ ] Links have descriptive text ("Click here" is bad; "Read our accessibility guide" is good)

### Forms ✓
- [ ] Labels are properly associated with inputs
- [ ] Error messages are clear and linked to fields
- [ ] Form fields are in logical order

### Multimedia ✓
- [ ] Videos have captions
- [ ] Audio has transcripts
- [ ] No auto-playing audio

### Responsive Design ✓
- [ ] Site works at 200% zoom
- [ ] Content reflows properly on small screens
- [ ] No horizontal scrolling on mobile

## How to Achieve WCAG 2.1 AA Compliance

### Step 1: Audit Your Site (Week 1)
Use free tools to identify issues:
- **WAVE** (wave.webaim.org) - Visual feedback on accessibility
- **Axe** (browser extension) - Automated testing
- **Lighthouse** (Chrome DevTools) - Built-in auditing
- **NVDA** (free screen reader) - Test how blind users experience your site

### Step 2: Fix High-Impact Issues (Weeks 2-4)
- Update color contrasts
- Add missing alt text
- Fix heading structure
- Ensure keyboard navigation works

### Step 3: Implement Patterns (Weeks 4-8)
- Add ARIA labels where needed
- Create focus indicators
- Build accessible forms
- Test with screen readers

### Step 4: Get Certified (Ongoing)
- Have accessibility audits done quarterly
- Train your team on accessibility
- Include accessibility in your QA process

## The Inkluyo Approach

Here's the truth: **Not every site can be perfectly accessible.** Legacy systems are expensive to redesign. But you don't have to start from scratch.

Inkluyo bridges the gap by adding accessibility features on top of your existing site:

✅ High contrast mode (easier on eyes)
✅ Dyslexia-friendly fonts
✅ Text size adjustment
✅ Line height/letter spacing tuning
✅ Animation pause
✅ Focus indicators
✅ Dark mode

While Inkluyo helps you meet AA compliance without a full redesign, your core content should still follow accessibility best practices.

## Legal Implications in 2026

The accessibility landscape has shifted significantly:

- **Title III of the ADA** now explicitly applies to websites
- **DOJ** has entered consent decrees with major retailers ($3M+ settlements)
- **State laws** (California, New York) now have specific accessibility requirements
- **EU Accessibility Directive** applies to all websites serving EU users

## The Bottom Line

WCAG 2.1 AA compliance isn't optional—it's mandatory. The cost of compliance is far less than the cost of litigation.

**Start today:**
1. Audit your site (free tools)
2. Fix critical issues
3. Implement Inkluyo for quick wins
4. Train your team on accessibility

Your users (and your lawyers) will thank you.
      `,
    },
    es: {
      title: "Guía Completa para Cumplir WCAG 2.1 AA en 2026",
      author: "Equipo Inkluyo",
      date: "9 de mayo, 2026",
      readTime: "8 min lectura",
      category: "Accesibilidad",
      image: "🏛️",
      excerpt: "Aprende qué significa el cumplimiento WCAG 2.1 AA y cómo implementarlo sin rediseñar tu sitio.",
      content: `
# Guía Completa para Cumplir WCAG 2.1 AA

La accesibilidad web se ha convertido en un requisito legal, no solo una opción. En 2026, más de 2,000 demandas de accesibilidad se presentan anualmente solo en EE.UU.

Si tu sitio no cumple con WCAG 2.1 AA, estás exponiendo tu negocio a riesgos legales...

[Contenido similar al inglés, adaptado al español]
      `,
    },
    pt: {
      title: "Guia Completo para Conformidade WCAG 2.1 AA em 2026",
      author: "Equipe Inkluyo",
      date: "9 de maio, 2026",
      readTime: "8 min leitura",
      category: "Acessibilidade",
      image: "🏛️",
      excerpt: "Aprenda o que significa a conformidade WCAG 2.1 AA e como implementá-la.",
      content: `
# Guia Completo para Conformidade WCAG 2.1 AA

A acessibilidade web se tornou um requisito legal, não apenas uma opção...

[Conteúdo similar ao inglês, adaptado ao português]
      `,
    },
  },
};

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang: rawLang, slug } = await params;
  if (!isLang(rawLang)) notFound();
  const lang: Lang = rawLang;

  const article = blogArticles[slug as keyof typeof blogArticles]?.[lang];
  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-50 py-16 lg:py-20">
      <article className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <header className="mb-12">
          <Link
            href={`/${lang}/blog`}
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 mb-6"
          >
            ←{" "}
            {lang === "es" ? "Volver al blog" : lang === "pt" ? "Voltar ao blog" : "Back to blog"}
          </Link>

          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
              {article.category}
            </span>
            <span className="text-xs text-slate-500">{article.readTime}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            {article.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-slate-600 border-t border-b border-slate-200 py-4">
            <div>
              <p className="font-semibold text-slate-900">{article.author}</p>
              <p>{article.date}</p>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <div
            dangerouslySetInnerHTML={{
              __html: article.content
                .split("\n")
                .map((line) => {
                  if (line.startsWith("# ")) {
                    return `<h2 class="text-3xl font-bold mt-12 mb-6 text-slate-900">${line.slice(2)}</h2>`;
                  }
                  if (line.startsWith("## ")) {
                    return `<h3 class="text-2xl font-bold mt-8 mb-4 text-slate-900">${line.slice(3)}</h3>`;
                  }
                  if (line.startsWith("- ")) {
                    return `<li class="ml-6 my-2">${line.slice(2)}</li>`;
                  }
                  if (line.startsWith("**") && line.endsWith("**")) {
                    return `<strong>${line.slice(2, -2)}</strong>`;
                  }
                  if (line.trim() === "") {
                    return "<p class='my-4'></p>";
                  }
                  return `<p class="my-4 text-slate-700 leading-relaxed">${line}</p>`;
                })
                .join("\n"),
            }}
          />
        </div>

        {/* CTA */}
        <div className="mt-16 p-8 bg-indigo-50 rounded-2xl border border-indigo-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {lang === "es"
              ? "¿Listo para mejorar la accesibilidad?"
              : lang === "pt"
                ? "Pronto para melhorar a acessibilidade?"
                : "Ready to improve your site's accessibility?"}
          </h3>
          <p className="text-slate-600 mb-6">
            {lang === "es"
              ? "Inkluyo te ayuda a cumplir con WCAG 2.1 AA sin rediseñar tu sitio."
              : lang === "pt"
                ? "Inkluyo ajuda você a cumprir com WCAG 2.1 AA sem redesenhar seu site."
                : "Inkluyo helps you achieve WCAG 2.1 AA compliance without a complete redesign."}
          </p>
          <Link
            href={`/${lang}/pricing`}
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {lang === "es" ? "Ver Planes" : lang === "pt" ? "Ver Planos" : "View Plans"}
          </Link>
        </div>
      </article>
    </main>
  );
}
