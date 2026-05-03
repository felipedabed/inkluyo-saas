module.exports = [
"[project]/apps/landing/src/lib/i18n.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_LANG",
    ()=>DEFAULT_LANG,
    "SUPPORTED_LANGS",
    ()=>SUPPORTED_LANGS,
    "getTranslations",
    ()=>getTranslations,
    "isLang",
    ()=>isLang
]);
const SUPPORTED_LANGS = [
    "en",
    "es",
    "pt"
];
const DEFAULT_LANG = "es";
function isLang(value) {
    return value === "en" || value === "es" || value === "pt";
}
const en = {
    nav: {
        home: "Home",
        pricing: "Pricing",
        getStarted: "Get started",
        playground: "Playground",
        dashboard: "Dashboard",
        install: "Install",
        languageSwitchAria: "Switch language"
    },
    home: {
        heroTitle: "Make your website accessible to everyone, effortlessly.",
        heroSubtitle: "Inkluyo is the 1-line accessibility widget (or zero-config plugin) that adapts your site to your users' needs. Professional, lightweight, and seamlessly playful.",
        ctaPrimary: "View Pricing",
        ctaDemo: "Try Interactive Demo",
        featuresTitle: "Accessibility that actually works",
        features: [
            {
                title: "Dyslexia Friendly",
                desc: "Instantly swap your fonts to dyslexic-friendly typefaces."
            },
            {
                title: "High Contrast",
                desc: "Smart inversion of colors so text is always readable."
            },
            {
                title: "Calm Mode",
                desc: "Pause all animations and transitions with one click."
            }
        ],
        demoTeaserTitle: "Want to see how we fix a truly broken site?",
        demoTeaserDesc: "We built the worst, most inaccessible webpage imaginable just to prove a point. See how the Inkluyo widget fixes it in real time.",
        demoTeaserCta: "Go to the Horrible Playground"
    },
    landing: {
        sufrimometro: "You have tolerated this page for",
        heroEyebrow: "INKLUYO · ACCESSIBILITY WIDGET · 1 LINE OF CODE",
        heroTitle: "This page sucks. ON PURPOSE.",
        heroClarity: "Inkluyo is a widget you install with one line of <script>. It lets your visitors adapt your site to their needs — dyslexia, low vision, reduced mobility and more — without you touching a single component.",
        heroSubtitle: "We built this page terribly so you can feel what 1 in 4 web users feels every day. The little floating button on the right? That's the widget. Click it. Watch this nightmare turn human.",
        heroPointer: "Yes, that one. → Try it.",
        ctaTryWidget: "Try the widget on this page →",
        ctaSeePricing: "See pricing",
        ctaInstall: "Install Inkluyo",
        ctaInstallShouting: "Felt that? Imagine your customers.",
        ctaGetIt: "Now you get it. Let's talk.",
        ctaUnderstood: "I'm convinced — show me pricing",
        howItWorksHeadline: "How it works",
        howItWorksSteps: [
            {
                title: "1. Paste 1 line in your <head>",
                body: "Copy the <script> tag we generate for you and drop it in your site. No build step, no SDK, no framework lock-in."
            },
            {
                title: "2. A floating button appears",
                body: "On every page of your site, your visitors get an unobtrusive accessibility button — bottom right by default, color and side configurable."
            },
            {
                title: "3. Visitors adapt your site",
                body: "Each visitor turns on the features they need: dyslexia font, larger text, high contrast, stop animations, big cursor, highlighted links. Their preferences persist."
            }
        ],
        statsHeadline: "The cost of bad accessibility",
        statsSubhead: "These numbers are real. Your site is probably part of them.",
        stats: [
            {
                value: "98%",
                label: "of websites have at least one WCAG failure"
            },
            {
                value: "$13B",
                label: "in global accessibility lawsuits since 2018"
            },
            {
                value: "1.3B",
                label: "people worldwide live with a disability"
            },
            {
                value: "30s",
                label: "average time to install Inkluyo"
            }
        ],
        featuresHeadline: "What this thing actually does",
        features: [
            {
                title: "Dyslexia mode",
                body: "Switches to a typeface designed for dyslexic readers. Your visitors can finally read your headlines."
            },
            {
                title: "Larger text",
                body: "Bumps base font size. Suddenly your terms-and-conditions are not a CAPTCHA."
            },
            {
                title: "High contrast",
                body: "Inverts the page so text is legible. No more pale-gray-on-paler-gray theater."
            },
            {
                title: "Stop animations",
                body: "Pauses every transition and motion. Vestibular disorders thank you."
            },
            {
                title: "Big cursor",
                body: "Multiplies the cursor size. Older folks will find their pointer again."
            },
            {
                title: "Highlight links",
                body: "Outlines every <a>. They stop disappearing into your minimalist soul."
            },
            {
                title: "Reading mask (ADHD)",
                body: "Dims everything except a horizontal strip that follows the cursor. One line of focus at a time — accessiBe sells this as their ADHD profile."
            },
            {
                title: "Monochrome",
                body: "Strips all color from the page. For colorblind users (~8% of men) and anyone with sensory overload or migraine."
            }
        ],
        sectionRecursive: "How does your site look without Inkluyo?",
        recursiveBefore: "Without Inkluyo",
        recursiveAfter: "With Inkluyo (try it on this very page)",
        quoteHeadline: "What customers say",
        quotes: [
            {
                author: "Jenna T.",
                role: "Head of UX, FinTech Co.",
                body: "Installed in 4 minutes. Dropped legal exposure overnight. ⚡️"
            },
            {
                author: "Diego R.",
                role: "CTO, Health Startup",
                body: "Our LCP didn't even move. The widget is shockingly light."
            },
            {
                author: "Priya S.",
                role: "Marketing Lead, eCommerce",
                body: "Conversion +6% after install. Accessible == bigger TAM. 🎯"
            }
        ],
        snippetHeadline: "Install in one line or via Plugin",
        snippetSubtitle: "Drop this in your <head>. Done. Want custom colors? See pricing.",
        snippetCopy: "Copy snippet",
        snippetCopied: "Copied ✓",
        finalCta: "OK, I'm ready. Make my site accessible.",
        finalCtaSubtitle: "30-second install. Cancel anytime. Free tier forever, no card.",
        finalCtaButton: "Get Inkluyo",
        achievement: {
            title: "Achievement",
            first: "First win — your site just got readable",
            stopChaos: "You stopped the chaos",
            readable: "Now this is readable",
            master: "Inclusive Master · all 6 features active"
        },
        popup: {
            headline: "Get our newsletter!!!",
            body: "12 emails per week. We promise.",
            cta: "Subscribe",
            placeholder: "your-email@example.com",
            annoyance: "(closing this is futile — that's the point of intrusive popups)"
        },
        cookies: {
            body: "We use cookies to track you across the internet, sell your data, and pretend it's all about \"better experiences\". By staying you agree to ALL of it (yes, really).",
            accept: "Accept all (default)",
            configure: "Configure (we hid it on purpose)"
        },
        sale: "🎉 50% OFF SALE!!!",
        saleSub: "Tap me",
        footer: {
            copy: "© Inkluyo · Built by people who actually care about accessibility.",
            microSecret: "If you read this without help, hire a designer. 🫡"
        }
    },
    pricing: {
        eyebrow: "Pricing",
        title: "Honest pricing for honest accessibility",
        subtitle: "No tricks. No usage caps. The widget is the product, not a teaser.",
        monthly: "Monthly",
        yearly: "Yearly",
        yearlyHint: "Save 2 months",
        perMonth: "/mo",
        priceCustom: "Custom",
        priceCustomHint: "Tailored to your org",
        cta: "Start free trial",
        ctaContact: "Contact sales",
        ctaCurrent: "Current plan",
        badgePopular: "Most popular",
        tiers: [
            {
                id: "pro",
                name: "Pro",
                tagline: "For real businesses",
                priceMonthly: 49,
                features: [
                    "All 6 accessibility features",
                    "Auto language detection (es/en)",
                    "Mobile + desktop",
                    "Custom colors & position",
                    "Remove badge",
                    "Multi-language (10+ langs)",
                    "WCAG compliance statement",
                    "Email support"
                ]
            },
            {
                id: "business",
                name: "Business",
                tagline: "For teams that scale",
                priceMonthly: 99,
                features: [
                    "Everything in Pro",
                    "White-label widget",
                    "Custom CSS overrides",
                    "Multi-domain (up to 25)",
                    "Usage analytics dashboard",
                    "Auto WCAG audit reports",
                    "Priority support"
                ]
            },
            {
                id: "enterprise",
                name: "Enterprise",
                tagline: "For organizations that have to comply",
                priceMonthly: null,
                features: [
                    "Everything in Business",
                    "Unlimited domains",
                    "SSO + audit logs",
                    "Dedicated account manager",
                    "Audit + remediation services",
                    "99.99% SLA"
                ]
            }
        ],
        faqHeadline: "Frequently asked",
        faqs: [
            {
                q: "Will the widget hurt my page speed?",
                a: "No. The bundle is ~7 KB gzipped and loads with `defer`. Lighthouse scores barely move."
            },
            {
                q: "Does this make me ADA / WCAG compliant?",
                a: "It significantly reduces risk and covers many criteria. Full compliance still requires accessible markup — we ship Audit Reports on Business+ to identify what's left."
            },
            {
                q: "Does it work with my framework?",
                a: "Anywhere a <script> tag works: WordPress, Shopify, Webflow, React, Vue, plain HTML, you name it."
            },
            {
                q: "Can I cancel anytime?",
                a: "Yes. No contracts on Free/Pro/Business. Enterprise is custom."
            }
        ]
    },
    getStarted: {
        title: "Generate your install snippet",
        subtitle: "Configure your widget. We'll build the exact <script> tag for you to paste in your <head>.",
        field: {
            domain: "Your website",
            domainPlaceholder: "yourdomain.com",
            email: "Email (we send install confirmation)",
            emailPlaceholder: "you@yourdomain.com",
            color: "Primary color",
            position: "Position",
            positionRight: "Bottom right",
            positionLeft: "Bottom left",
            lang: "Default language",
            hideBadge: "Hide “Powered by Inkluyo” badge",
            hideBadgeHint: "Pro plan and above"
        },
        snippetTitle: "Your install snippet",
        snippetCopy: "Copy",
        snippetCopied: "Copied ✓",
        snippetHelp: "Paste this just before </head>. The widget appears within seconds.",
        successTitle: "You're ready",
        successBody: "After pasting the snippet, the floating button will appear on every page of your site. No further setup."
    },
    playground: {
        title: "Widget playground",
        subtitle: "Tweak everything. The widget on this page reflects your config in real time.",
        columns: {
            config: "Configuration",
            preview: "Live preview"
        },
        config: {
            color: "Primary color",
            position: "Position",
            lang: "Default language",
            features: "Features shown",
            hideBadge: "Hide badge",
            reset: "Reset to defaults"
        },
        preview: {
            tip: "The widget is mounted on this page. Open it bottom-right to see your config live."
        },
        exportTitle: "Export this configuration",
        exportHelp: "Drop this <script> tag in your site's <head>. Done.",
        saveAndContinue: "Save config & get install snippet"
    },
    dashboard: {
        title: "Your accessibility dashboard",
        subtitle: "Real-time analytics on how your visitors use Inkluyo. (Mockup — coming in our beta)",
        mockBanner: "🛠 Preview — these numbers are illustrative and update on every page load.",
        metrics: {
            activations: "Widget activations",
            uniqueUsers: "Unique users helped",
            mostUsed: "Most-used feature",
            complianceScore: "WCAG compliance"
        },
        recent: {
            headline: "Recent activations",
            columns: [
                "Time",
                "Page",
                "Feature",
                "Country"
            ]
        },
        cta: "Upgrade to unlock the real dashboard →"
    },
    common: {
        backHome: "← Back home"
    }
};
const es = {
    nav: {
        home: "Inicio",
        pricing: "Precios",
        getStarted: "Empezar",
        playground: "Playground",
        dashboard: "Dashboard",
        install: "Instalar",
        languageSwitchAria: "Cambiar idioma"
    },
    home: {
        heroTitle: "Haz tu sitio web accesible para todos, sin esfuerzo.",
        heroSubtitle: "Inkluyo es el widget de 1 línea de código (o plugin auto-instalable) que adapta tu web a las necesidades de tus usuarios. Profesional, liviano y con un toque amigable.",
        ctaPrimary: "Ver Precios",
        ctaDemo: "Probar Demo Interactiva",
        featuresTitle: "Accesibilidad que realmente funciona",
        features: [
            {
                title: "Modo Dislexia",
                desc: "Cambia instantáneamente tus fuentes a tipografías aptas para dislexia."
            },
            {
                title: "Alto Contraste",
                desc: "Inversión inteligente de colores para que el texto siempre sea legible."
            },
            {
                title: "Modo Calma",
                desc: "Pausa todas las animaciones y transiciones con un solo clic."
            }
        ],
        demoTeaserTitle: "¿Quieres ver cómo arreglamos un sitio roto de verdad?",
        demoTeaserDesc: "Construimos la peor y más inaccesible página web imaginable solo para probar un punto. Mira cómo el widget de Inkluyo la arregla en tiempo real.",
        demoTeaserCta: "Ir al Playground Horrible"
    },
    landing: {
        sufrimometro: "Has soportado esta página por",
        heroEyebrow: "INKLUYO · WIDGET DE ACCESIBILIDAD · 1 LÍNEA DE CÓDIGO",
        heroTitle: "Esta página apesta. A PROPÓSITO.",
        heroClarity: "Inkluyo es un widget que se instala con una línea de <script>. Permite a tus visitantes adaptar tu sitio a sus necesidades — dislexia, baja visión, motricidad reducida y más — sin que toques un solo componente.",
        heroSubtitle: "Hicimos esta página terrible para que sientas lo que 1 de cada 4 usuarios web siente cada día. ¿El botón flotante de la derecha? Ese es el widget. Hazle click. Mira cómo este desastre se vuelve humano.",
        heroPointer: "Sí, ese mismo. → Pruébalo.",
        ctaTryWidget: "Probar el widget en esta página →",
        ctaSeePricing: "Ver precios",
        ctaInstall: "Instalar Inkluyo",
        ctaInstallShouting: "¿Lo sentiste? Imagina a tus clientes.",
        ctaGetIt: "Ahora entiendes. Hablemos.",
        ctaUnderstood: "Convencido — muéstrame los precios",
        howItWorksHeadline: "Cómo funciona",
        howItWorksSteps: [
            {
                title: "1. Pega 1 línea en tu <head>",
                body: "Copia la etiqueta <script> que te generamos y pégala en tu sitio. Sin build step, sin SDK, sin atarte a un framework."
            },
            {
                title: "2. Aparece un botón flotante",
                body: "En cada página de tu sitio, tus visitantes ven un botón discreto de accesibilidad — abajo a la derecha por defecto, con color y posición configurables."
            },
            {
                title: "3. Tus visitantes adaptan tu sitio",
                body: "Cada visitante activa las features que necesita: fuente para dislexia, texto grande, alto contraste, detener animaciones, cursor grande, resaltar enlaces. Sus preferencias persisten."
            }
        ],
        statsHeadline: "El costo de la mala accesibilidad",
        statsSubhead: "Son cifras reales. Probablemente tu sitio sea parte de ellas.",
        stats: [
            {
                value: "98%",
                label: "de los sitios web tienen al menos una falla WCAG"
            },
            {
                value: "$13B",
                label: "en demandas globales de accesibilidad desde 2018"
            },
            {
                value: "1.3B",
                label: "personas en el mundo viven con alguna discapacidad"
            },
            {
                value: "30s",
                label: "promedio para instalar Inkluyo"
            }
        ],
        featuresHeadline: "Lo que esta cosa hace en realidad",
        features: [
            {
                title: "Modo dislexia",
                body: "Cambia a una fuente diseñada para lectores con dislexia. Tus titulares por fin se leen."
            },
            {
                title: "Texto grande",
                body: "Aumenta el tamaño base. De pronto tus términos y condiciones dejan de ser un CAPTCHA."
            },
            {
                title: "Alto contraste",
                body: "Invierte la página para que el texto sea legible. Adiós al gris-claro-sobre-gris-clarísimo."
            },
            {
                title: "Detener animaciones",
                body: "Pausa transiciones y movimiento. Quienes tienen vértigo te lo agradecen."
            },
            {
                title: "Cursor grande",
                body: "Multiplica el cursor por 3. Los abuelos vuelven a encontrar el puntero."
            },
            {
                title: "Resaltar enlaces",
                body: "Marca cada <a> con un borde claro. Dejan de desaparecer en tu alma minimalista."
            },
            {
                title: "Máscara de lectura (TDAH)",
                body: "Atenúa toda la página excepto una franja horizontal que sigue al cursor. Una línea de foco a la vez — accessiBe vende esto como su perfil TDAH."
            },
            {
                title: "Monocromo",
                body: "Quita todo el color de la página. Para usuarios con daltonismo (~8% de los hombres) y para cualquiera con sobrecarga sensorial o migraña."
            }
        ],
        sectionRecursive: "¿Cómo se ve tu sitio sin Inkluyo?",
        recursiveBefore: "Sin Inkluyo",
        recursiveAfter: "Con Inkluyo (pruébalo en esta misma página)",
        quoteHeadline: "Lo que dicen los clientes",
        quotes: [
            {
                author: "Jenna T.",
                role: "Head of UX, FinTech Co.",
                body: "Lo instalé en 4 minutos. Bajó la exposición legal de un día para otro. ⚡️"
            },
            {
                author: "Diego R.",
                role: "CTO, Health Startup",
                body: "Nuestro LCP ni se movió. El widget pesa ridículamente poco."
            },
            {
                author: "Priya S.",
                role: "Marketing Lead, eCommerce",
                body: "+6% en conversión tras instalarlo. Accesible == más mercado. 🎯"
            }
        ],
        snippetHeadline: "Instala en una línea o vía Plugin",
        snippetSubtitle: "Pega esto en tu <head>. Listo. ¿Quieres colores custom? Mira los precios.",
        snippetCopy: "Copiar snippet",
        snippetCopied: "Copiado ✓",
        finalCta: "OK, listo. Hagan mi sitio accesible.",
        finalCtaSubtitle: "Instalación en 30 segundos. Cancela cuando quieras. Plan free para siempre, sin tarjeta.",
        finalCtaButton: "Obtener Inkluyo",
        achievement: {
            title: "Logro",
            first: "Primera victoria — tu sitio ya se lee",
            stopChaos: "Detuviste el caos",
            readable: "Ahora sí se entiende",
            master: "Maestro Inclusivo · las 6 features activas"
        },
        popup: {
            headline: "¡¡Suscríbete a nuestro newsletter!!",
            body: "12 emails por semana. Lo prometemos.",
            cta: "Suscribirme",
            placeholder: "tu-email@ejemplo.com",
            annoyance: "(cerrar esto es inútil — esa es la idea de los popups intrusivos)"
        },
        cookies: {
            body: "Usamos cookies para rastrearte por todo internet, vender tus datos, y fingir que es \"para mejorar tu experiencia\". Si te quedas, aceptas TODO (sí, en serio).",
            accept: "Aceptar todo (default)",
            configure: "Configurar (lo escondimos a propósito)"
        },
        sale: "🎉 ¡¡50% OFF!!",
        saleSub: "Hazme click",
        footer: {
            copy: "© Inkluyo · Hecho por gente que sí se preocupa por la accesibilidad.",
            microSecret: "Si leíste esto sin ayuda del widget, contrata diseñadores. 🫡"
        }
    },
    pricing: {
        eyebrow: "Precios",
        title: "Precios honestos para accesibilidad honesta",
        subtitle: "Sin trampas. Sin límites de uso. El widget es el producto, no un anzuelo.",
        monthly: "Mensual",
        yearly: "Anual",
        yearlyHint: "Ahorra 2 meses",
        perMonth: "/mes",
        priceCustom: "A medida",
        priceCustomHint: "Cotización según tu organización",
        cta: "Empezar prueba gratis",
        ctaContact: "Contactar ventas",
        ctaCurrent: "Plan actual",
        badgePopular: "Más popular",
        tiers: [
            {
                id: "pro",
                name: "Pro",
                tagline: "Para negocios reales",
                priceMonthly: 49,
                features: [
                    "Las 6 features de accesibilidad",
                    "Detección automática de idioma (es/en)",
                    "Móvil + escritorio",
                    "Colores y posición personalizados",
                    "Sin badge",
                    "Multi-idioma (10+ idiomas)",
                    "Declaración de cumplimiento WCAG",
                    "Soporte por email"
                ]
            },
            {
                id: "business",
                name: "Business",
                tagline: "Para equipos que escalan",
                priceMonthly: 99,
                features: [
                    "Todo lo de Pro",
                    "Widget white-label",
                    "Overrides de CSS custom",
                    "Multi-dominio (hasta 25)",
                    "Dashboard de analytics",
                    "Reportes WCAG automáticos",
                    "Soporte prioritario"
                ]
            },
            {
                id: "enterprise",
                name: "Enterprise",
                tagline: "Para organizaciones que deben cumplir",
                priceMonthly: null,
                features: [
                    "Todo lo de Business",
                    "Dominios ilimitados",
                    "SSO + audit logs",
                    "Account manager dedicado",
                    "Servicios de auditoría + remediación",
                    "SLA 99.99%"
                ]
            }
        ],
        faqHeadline: "Preguntas frecuentes",
        faqs: [
            {
                q: "¿El widget me hace lento el sitio?",
                a: "No. El bundle pesa ~7 KB gzipped y carga con `defer`. Lighthouse apenas se mueve."
            },
            {
                q: "¿Esto me hace ADA / WCAG compliant?",
                a: "Reduce significativamente el riesgo y cubre muchos criterios. El cumplimiento total requiere markup accesible — en Business+ enviamos reportes que identifican lo que falta."
            },
            {
                q: "¿Funciona con mi framework?",
                a: "Donde funcione un <script>: WordPress, Shopify, Webflow, React, Vue, HTML plano, lo que sea."
            },
            {
                q: "¿Puedo cancelar cuando quiera?",
                a: "Sí. Sin contratos en Free/Pro/Business. Enterprise es custom."
            }
        ]
    },
    getStarted: {
        title: "Genera tu snippet de instalación",
        subtitle: "Configura tu widget. Te armamos el <script> exacto para que lo pegues en tu <head>.",
        field: {
            domain: "Tu sitio web",
            domainPlaceholder: "tudominio.com",
            email: "Email (te enviamos confirmación)",
            emailPlaceholder: "tu@tudominio.com",
            color: "Color primario",
            position: "Posición",
            positionRight: "Inferior derecha",
            positionLeft: "Inferior izquierda",
            lang: "Idioma por defecto",
            hideBadge: "Ocultar badge “Powered by Inkluyo”",
            hideBadgeHint: "Plan Pro o superior"
        },
        snippetTitle: "Tu snippet de instalación",
        snippetCopy: "Copiar",
        snippetCopied: "Copiado ✓",
        snippetHelp: "Pega esto justo antes de </head>. El widget aparece en segundos.",
        successTitle: "Listo",
        successBody: "Después de pegar el snippet, el botón flotante aparece en cada página de tu sitio. Sin más configuración."
    },
    playground: {
        title: "Playground del widget",
        subtitle: "Toca todo. El widget de esta página refleja tu config en tiempo real.",
        columns: {
            config: "Configuración",
            preview: "Vista previa"
        },
        config: {
            color: "Color primario",
            position: "Posición",
            lang: "Idioma por defecto",
            features: "Features visibles",
            hideBadge: "Ocultar badge",
            reset: "Restablecer defaults"
        },
        preview: {
            tip: "El widget está montado en esta página. Ábrelo abajo a la derecha para ver tu config en vivo."
        },
        exportTitle: "Exportar esta configuración",
        exportHelp: "Pega este <script> en el <head> de tu sitio. Listo.",
        saveAndContinue: "Guardar config y obtener snippet"
    },
    dashboard: {
        title: "Tu dashboard de accesibilidad",
        subtitle: "Analytics en tiempo real de cómo tus visitantes usan Inkluyo. (Mockup — viene en nuestra beta)",
        mockBanner: "🛠 Vista previa — los números son ilustrativos y se regeneran en cada carga.",
        metrics: {
            activations: "Activaciones del widget",
            uniqueUsers: "Usuarios únicos ayudados",
            mostUsed: "Feature más usada",
            complianceScore: "Cumplimiento WCAG"
        },
        recent: {
            headline: "Activaciones recientes",
            columns: [
                "Hora",
                "Página",
                "Feature",
                "País"
            ]
        },
        cta: "Sube de plan para desbloquear el dashboard real →"
    },
    common: {
        backHome: "← Volver al inicio"
    }
};
const pt = {
    nav: {
        home: "Início",
        pricing: "Preços",
        getStarted: "Começar",
        playground: "Playground",
        dashboard: "Dashboard",
        install: "Instalar",
        languageSwitchAria: "Mudar idioma"
    },
    home: {
        heroTitle: "Torne seu site acessível para todos, sem esforço.",
        heroSubtitle: "Inkluyo é o widget de acessibilidade de 1 linha (ou plugin sem código) que adapta seu site às necessidades dos usuários. Profissional, leve e dinâmico.",
        ctaPrimary: "Ver Preços",
        ctaDemo: "Testar Demo Interativa",
        featuresTitle: "Acessibilidade que realmente funciona",
        features: [
            {
                title: "Amigável para Dislexia",
                desc: "Troque fontes instantaneamente por tipografias para dislexia."
            },
            {
                title: "Alto Contraste",
                desc: "Inversão inteligente de cores para leitura sempre clara."
            },
            {
                title: "Modo Calma",
                desc: "Pause todas as animações e transições com um clique."
            }
        ],
        demoTeaserTitle: "Quer ver como consertamos um site realmente quebrado?",
        demoTeaserDesc: "Construímos a pior página web imaginável só para provar um ponto. Veja como o widget Inkluyo a conserta em tempo real.",
        demoTeaserCta: "Ir para o Playground Horrível"
    },
    landing: {
        sufrimometro: "Você aguentou esta página por",
        heroEyebrow: "INKLUYO · WIDGET DE ACESSIBILIDADE · 1 LINHA DE CÓDIGO",
        heroTitle: "Esta página é horrível. DE PROPÓSITO.",
        heroClarity: "Inkluyo é um widget que você instala com uma linha de <script> ou um plugin. Ele permite que seus visitantes adaptem seu site às necessidades deles — dislexia, baixa visão, mobilidade reduzida e mais — sem você tocar em um único componente.",
        heroSubtitle: "Fizemos esta página terrível para que você sinta o que 1 em cada 4 usuários web sente todos os dias. O pequeno botão flutuante à direita? Esse é o widget. Clique nele. Veja este pesadelo se tornar humano.",
        heroPointer: "Sim, esse mesmo. → Teste agora.",
        ctaTryWidget: "Testar o widget nesta página →",
        ctaSeePricing: "Ver preços",
        ctaInstall: "Instalar Inkluyo",
        ctaInstallShouting: "Sentiu isso? Imagine seus clientes.",
        ctaGetIt: "Agora você entende. Vamos conversar.",
        ctaUnderstood: "Estou convencido — mostre-me os preços",
        howItWorksHeadline: "Como funciona",
        howItWorksSteps: [
            {
                title: "1. Cole 1 linha no seu <head>",
                body: "Copie a tag <script> que geramos para você e coloque no seu site. Sem etapa de build, sem SDK, sem bloqueio de framework."
            },
            {
                title: "2. Um botão flutuante aparece",
                body: "Em cada página do seu site, seus visitantes recebem um botão de acessibilidade discreto — no canto inferior direito por padrão, cor e lado configuráveis."
            },
            {
                title: "3. Visitantes adaptam seu site",
                body: "Cada visitante ativa os recursos de que precisa: fonte para dislexia, texto maior, alto contraste, parar animações, cursor grande, links destacados. As preferências persistem."
            }
        ],
        statsHeadline: "O custo da má acessibilidade",
        statsSubhead: "Estes números são reais. Seu site provavelmente faz parte deles.",
        stats: [
            {
                value: "98%",
                label: "dos sites têm pelo menos uma falha WCAG"
            },
            {
                value: "$13B",
                label: "em processos globais de acessibilidade desde 2018"
            },
            {
                value: "1.3B",
                label: "pessoas no mundo vivem com uma deficiência"
            },
            {
                value: "30s",
                label: "tempo médio para instalar o Inkluyo"
            }
        ],
        featuresHeadline: "O que esta coisa realmente faz",
        features: [
            {
                title: "Modo dislexia",
                body: "Muda para uma fonte projetada para leitores com dislexia. Seus títulos finalmente podem ser lidos."
            },
            {
                title: "Texto maior",
                body: "Aumenta o tamanho da fonte base. De repente, seus termos e condições não são mais um CAPTCHA."
            },
            {
                title: "Alto contraste",
                body: "Inverte a página para que o texto seja legível. Chega de cinza-claro sobre cinza-claríssimo."
            },
            {
                title: "Parar animações",
                body: "Pausa todas as transições e movimentos. Distúrbios vestibulares agradecem."
            },
            {
                title: "Cursor grande",
                body: "Multiplica o tamanho do cursor. Pessoas idosas encontrarão seu ponteiro novamente."
            },
            {
                title: "Destacar links",
                body: "Marca cada <a>. Eles param de desaparecer na sua alma minimalista."
            },
            {
                title: "Máscara de leitura (TDAH)",
                body: "Escurece tudo, exceto uma faixa horizontal que segue o cursor. Uma linha de foco por vez."
            },
            {
                title: "Monocromático",
                body: "Remove todas as cores da página. Para usuários daltônicos (~8% dos homens) e qualquer pessoa com enxaqueca."
            }
        ],
        sectionRecursive: "Como seu site ficaria sem o Inkluyo?",
        recursiveBefore: "Sem Inkluyo",
        recursiveAfter: "Com Inkluyo (teste nesta mesma página)",
        quoteHeadline: "O que os clientes dizem",
        quotes: [
            {
                author: "Jenna T.",
                role: "Head of UX, FinTech Co.",
                body: "Instalado em 4 minutos. Reduziu a exposição legal da noite para o dia. ⚡️"
            },
            {
                author: "Diego R.",
                role: "CTO, Health Startup",
                body: "Nosso LCP nem se moveu. O widget é incrivelmente leve."
            },
            {
                author: "Priya S.",
                role: "Marketing Lead, eCommerce",
                body: "Conversão +6% após a instalação. Acessível == mercado maior. 🎯"
            }
        ],
        snippetHeadline: "Instale em uma linha ou via Plugin",
        snippetSubtitle: "Cole isso no seu <head>. Pronto. Quer cores personalizadas? Veja os preços.",
        snippetCopy: "Copiar snippet",
        snippetCopied: "Copiado ✓",
        finalCta: "OK, estou pronto. Torne meu site acessível.",
        finalCtaSubtitle: "Instalação em 30 segundos. Cancele a qualquer momento. Plano grátis para sempre.",
        finalCtaButton: "Obter Inkluyo",
        achievement: {
            title: "Conquista",
            first: "Primeira vitória — seu site agora é legível",
            stopChaos: "Você parou o caos",
            readable: "Agora sim está legível",
            master: "Mestre Inclusivo · todos os 6 recursos ativos"
        },
        popup: {
            headline: "Receba nossa newsletter!!!",
            body: "12 e-mails por semana. Prometemos.",
            cta: "Inscrever-se",
            placeholder: "seu-email@exemplo.com",
            annoyance: "(fechar isso é inútil — essa é a ideia de popups intrusivos)"
        },
        cookies: {
            body: "Usamos cookies para rastrear você, vender seus dados e fingir que é para \"melhores experiências\".",
            accept: "Aceitar todos (padrão)",
            configure: "Configurar (escondemos de propósito)"
        },
        sale: "🎉 50% OFF SALE!!!",
        saleSub: "Toque em mim",
        footer: {
            copy: "© Inkluyo · Construído por pessoas que realmente se importam com acessibilidade.",
            microSecret: "Se você leu isso sem ajuda, contrate um designer. 🫡"
        }
    },
    pricing: {
        eyebrow: "Preços",
        title: "Preços honestos para acessibilidade honesta",
        subtitle: "Sem truques. Sem limites de uso. O widget é o produto, não uma isca.",
        monthly: "Mensal",
        yearly: "Anual",
        yearlyHint: "Economize 2 meses",
        perMonth: "/mês",
        priceCustom: "Personalizado",
        priceCustomHint: "Sob medida para sua org",
        cta: "Começar teste grátis",
        ctaContact: "Contatar vendas",
        ctaCurrent: "Plano atual",
        badgePopular: "Mais popular",
        tiers: [
            {
                id: "pro",
                name: "Pro",
                tagline: "Para negócios reais",
                priceMonthly: 49,
                features: [
                    "Todos os 6 recursos de acessibilidade",
                    "Detecção automática de idioma (pt/es/en)",
                    "Mobile + desktop",
                    "Cores e posição personalizadas",
                    "Remover selo",
                    "Multi-idioma (10+ idiomas)",
                    "Declaração de conformidade WCAG",
                    "Suporte por e-mail"
                ]
            },
            {
                id: "business",
                name: "Business",
                tagline: "Para equipes que escalam",
                priceMonthly: 99,
                features: [
                    "Tudo no Pro",
                    "Widget white-label",
                    "Substituições de CSS personalizadas",
                    "Multi-domínio (até 25)",
                    "Dashboard de análise de uso",
                    "Relatórios de auditoria WCAG automáticos",
                    "Suporte prioritário"
                ]
            },
            {
                id: "enterprise",
                name: "Enterprise",
                tagline: "Para organizações que precisam cumprir",
                priceMonthly: null,
                features: [
                    "Tudo no Business",
                    "Domínios ilimitados",
                    "SSO + logs de auditoria",
                    "Gerente de conta dedicado",
                    "Serviços de auditoria + remediação",
                    "99.99% SLA"
                ]
            }
        ],
        faqHeadline: "Perguntas frequentes",
        faqs: [
            {
                q: "O widget prejudicará a velocidade da minha página?",
                a: "Não. O pacote tem ~7 KB gzipped e carrega com `defer`. O Lighthouse mal se move."
            },
            {
                q: "Isso me torna compatível com ADA / WCAG?",
                a: "Reduz significativamente o risco. A conformidade total ainda requer marcação acessível."
            },
            {
                q: "Funciona com o meu framework?",
                a: "Qualquer lugar que aceite uma tag <script>: WordPress, Shopify, Webflow, React, etc."
            },
            {
                q: "Posso cancelar a qualquer momento?",
                a: "Sim. Sem contratos nos planos Free/Pro/Business."
            }
        ]
    },
    getStarted: {
        title: "Gere seu snippet de instalação",
        subtitle: "Configure seu widget. Criaremos a tag <script> exata para você colar no seu <head>.",
        field: {
            domain: "Seu site",
            domainPlaceholder: "seudominio.com",
            email: "E-mail (enviamos confirmação)",
            emailPlaceholder: "voce@seudominio.com",
            color: "Cor primária",
            position: "Posição",
            positionRight: "Inferior direita",
            positionLeft: "Inferior esquerda",
            lang: "Idioma padrão",
            hideBadge: "Ocultar selo “Powered by Inkluyo”",
            hideBadgeHint: "Plano Pro e superior"
        },
        snippetTitle: "Seu snippet de instalação",
        snippetCopy: "Copiar",
        snippetCopied: "Copiado ✓",
        snippetHelp: "Cole isso logo antes de </head>. O widget aparecerá em segundos.",
        successTitle: "Você está pronto",
        successBody: "Após colar o snippet, o botão aparecerá em todas as páginas do seu site."
    },
    playground: {
        title: "Playground do widget",
        subtitle: "Ajuste tudo. O widget nesta página reflete sua config em tempo real.",
        columns: {
            config: "Configuração",
            preview: "Prévia ao vivo"
        },
        config: {
            color: "Cor primária",
            position: "Posição",
            lang: "Idioma padrão",
            features: "Recursos exibidos",
            hideBadge: "Ocultar selo",
            reset: "Redefinir padrões"
        },
        preview: {
            tip: "O widget está montado nesta página. Abra-o para ver sua config ao vivo."
        },
        exportTitle: "Exportar esta configuração",
        exportHelp: "Coloque esta tag <script> no <head> do seu site. Pronto.",
        saveAndContinue: "Salvar config e obter snippet"
    },
    dashboard: {
        title: "Seu dashboard de acessibilidade",
        subtitle: "Análise em tempo real de como seus visitantes usam o Inkluyo.",
        mockBanner: "🛠 Prévia — estes números são ilustrativos.",
        metrics: {
            activations: "Ativações do widget",
            uniqueUsers: "Usuários únicos ajudados",
            mostUsed: "Recurso mais usado",
            complianceScore: "Conformidade WCAG"
        },
        recent: {
            headline: "Ativações recentes",
            columns: [
                "Hora",
                "Página",
                "Recurso",
                "País"
            ]
        },
        cta: "Atualize para desbloquear o dashboard real →"
    },
    common: {
        backHome: "← Voltar ao início"
    }
};
const DICTS = {
    en,
    es,
    pt
};
function getTranslations(lang) {
    return DICTS[lang] ?? DICTS[DEFAULT_LANG];
}
}),
"[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangSwitcher",
    ()=>LangSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/landing/src/lib/i18n.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function LangSwitcher({ lang, ariaLabel }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    function switchTo(next) {
        if (next === lang || pending) return;
        const segments = pathname.split("/").filter(Boolean);
        segments[0] = next;
        const target = "/" + segments.join("/");
        startTransition(()=>router.push(target));
        // Also update the widget's language at runtime, so the floating panel
        // matches the page right away (without waiting for a hard reload).
        if ("undefined" !== "undefined" && window.Inkluyo?.setLang) //TURBOPACK unreachable
        ;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": ariaLabel,
        className: "inline-flex bg-[var(--color-surface)] rounded-full p-[3px] gap-[2px]",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SUPPORTED_LANGS"].map((l)=>{
            const active = l === lang;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>switchTo(l),
                "aria-pressed": active,
                disabled: pending,
                className: "text-[11px] font-bold tracking-wider px-2.5 py-1 rounded-full transition " + (active ? "bg-[var(--color-brand)] text-white" : "text-[var(--color-text-muted)] hover:text-[var(--color-text)]"),
                children: l.toUpperCase()
            }, l, false, {
                fileName: "[project]/apps/landing/src/components/common/LangSwitcher.tsx",
                lineNumber: 45,
                columnNumber: 11
            }, this);
        })
    }, void 0, false, {
        fileName: "[project]/apps/landing/src/components/common/LangSwitcher.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_landing_src_79a1c981._.js.map