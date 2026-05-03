(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/landing/src/lib/i18n.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    var _DICTS_lang;
    return (_DICTS_lang = DICTS[lang]) !== null && _DICTS_lang !== void 0 ? _DICTS_lang : DICTS[DEFAULT_LANG];
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangSwitcher",
    ()=>LangSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/landing/src/lib/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LangSwitcher(param) {
    let { lang, ariaLabel } = param;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [pending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    function switchTo(next) {
        var _window_Inkluyo;
        if (next === lang || pending) return;
        const segments = pathname.split("/").filter(Boolean);
        segments[0] = next;
        const target = "/" + segments.join("/");
        startTransition(()=>router.push(target));
        // Also update the widget's language at runtime, so the floating panel
        // matches the page right away (without waiting for a hard reload).
        if ("object" !== "undefined" && ((_window_Inkluyo = window.Inkluyo) === null || _window_Inkluyo === void 0 ? void 0 : _window_Inkluyo.setLang)) {
            try {
                window.Inkluyo.setLang(next);
            } catch (e) {
            /* no-op */ }
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": ariaLabel,
        className: "inline-flex bg-[var(--color-surface)] rounded-full p-[3px] gap-[2px]",
        children: __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SUPPORTED_LANGS"].map((l)=>{
            const active = l === lang;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(LangSwitcher, "l+1HP5P5xk7ihplyXm+F0CfJBQ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = LangSwitcher;
var _c;
__turbopack_context__.k.register(_c, "LangSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}),
"[project]/node_modules/next/dist/client/script.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _setattributesfromprops = __turbopack_context__.r("[project]/node_modules/next/dist/client/set-attributes-from-props.js [app-client] (ecmascript)");
const _requestidlecallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/request-idle-callback.js [app-client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    let { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    // if a nonce is explicitly passed to the script tag, favor that over the automatic handling
    nonce = restProps.nonce || nonce;
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps,
                    nonce
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript({
                ...props,
                nonce
            });
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target) {
    for(var _len = arguments.length, searchParamsList = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        searchParamsList[_key - 1] = arguments[_key];
    }
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
} //# sourceMappingURL=querystring.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/querystring.js [app-client] (ecmascript)"));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? "[" + hostname + "]" : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && "?" + query || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return "" + protocol + host + pathname + search + hash;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time truthy", 1) {
        if (url !== null && typeof url === 'object') {
            Object.keys(url).forEach((key)=>{
                if (!urlObjectKeys.includes(key)) {
                    console.warn("Unknown key passed via urlObject into url.format: " + key);
                }
            });
        }
    }
    return formatUrl(url);
} //# sourceMappingURL=format-url.js.map
}),
"[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (e.g. via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ':' + port : '');
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? "?" + urlParts.slice(1).join('?') : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time truthy", 1) {
        var _App_prototype;
        if ((_App_prototype = App.prototype) == null ? void 0 : _App_prototype.getInitialProps) {
            const message = '"' + getDisplayName(App) + '.getInitialProps()" is defined as an instance method - visit https://nextjs.org/docs/messages/get-initial-props-as-an-instance-method for more information.';
            throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false,
                configurable: true
            });
        }
    }
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = '"' + getDisplayName(App) + '.getInitialProps()" should resolve to an object. But found "' + props + '" instead.';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (Object.keys(props).length === 0 && !ctx.ctx) {
            console.warn("" + getDisplayName(App) + " returned an empty object from `getInitialProps`. This de-optimizes and prevents automatic static optimization. https://nextjs.org/docs/messages/empty-object-getInitialProps");
        }
    }
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = "Cannot find module for page: " + page;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = "Failed to load static file for page: " + page + " " + message;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = "Cannot find the middleware module";
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
} //# sourceMappingURL=utils.js.map
}),
"[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
} //# sourceMappingURL=is-local-url.js.map
}),
"[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time truthy", 1) {
    const errors = new Set();
    errorOnce = (msg)=>{
        if (!errors.has(msg)) {
            console.error(msg);
        }
        errors.add(msg);
    };
} //# sourceMappingURL=error-once.js.map
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _formaturl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/format-url.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _usemergedref = __turbopack_context__.r("[project]/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
const _utils = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_context__.r("[project]/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _links = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/links.js [app-client] (ecmascript)");
const _islocalurl = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [app-client] (ecmascript)");
const _approuterinstance = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/app-router-instance.js [app-client] (ecmascript)");
const _erroronce = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/utils/error-once.js [app-client] (ecmascript)");
const _segmentcache = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/segment-cache.js [app-client] (ecmascript)");
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate) {
    const { nodeName } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === 'A';
    if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
        // ignore click for browser’s default behavior
        return;
    }
    if (!(0, _islocalurl.isLocalURL)(href)) {
        if (replace) {
            // browser default behavior does not replace the history state
            // so we need to do it manually
            e.preventDefault();
            location.replace(href);
        }
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    if (onNavigate) {
        let isDefaultPrevented = false;
        onNavigate({
            preventDefault: ()=>{
                isDefaultPrevented = true;
            }
        });
        if (isDefaultPrevented) {
            return;
        }
    }
    _react.default.startTransition(()=>{
        (0, _approuterinstance.dispatchNavigateAction)(as || href, replace ? 'replace' : 'push', scroll != null ? scroll : true, linkInstanceRef.current);
    });
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _segmentcache.FetchStrategy.PPR;
    if ("TURBOPACK compile-time truthy", 1) {
        function createPropError(args) {
            return Object.defineProperty(new Error("Failed prop type: The prop `" + args.key + "` expects a " + args.expected + " in `<Link>`, but got `" + args.actual + "` instead." + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
        // TypeScript trick for type-guarding:
        const requiredPropsGuard = {
            href: true
        };
        const requiredProps = Object.keys(requiredPropsGuard);
        requiredProps.forEach((key)=>{
            if (key === 'href') {
                if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: props[key] === null ? 'null' : typeof props[key]
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
        // TypeScript trick for type-guarding:
        const optionalPropsGuard = {
            as: true,
            replace: true,
            scroll: true,
            shallow: true,
            passHref: true,
            prefetch: true,
            unstable_dynamicOnHover: true,
            onClick: true,
            onMouseEnter: true,
            onTouchStart: true,
            legacyBehavior: true,
            onNavigate: true
        };
        const optionalProps = Object.keys(optionalPropsGuard);
        optionalProps.forEach((key)=>{
            const valType = typeof props[key];
            if (key === 'as') {
                if (props[key] && valType !== 'string' && valType !== 'object') {
                    throw createPropError({
                        key,
                        expected: '`string` or `object`',
                        actual: valType
                    });
                }
            } else if (key === 'onClick' || key === 'onMouseEnter' || key === 'onTouchStart' || key === 'onNavigate') {
                if (props[key] && valType !== 'function') {
                    throw createPropError({
                        key,
                        expected: '`function`',
                        actual: valType
                    });
                }
            } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'legacyBehavior' || key === 'unstable_dynamicOnHover') {
                if (props[key] != null && valType !== 'boolean') {
                    throw createPropError({
                        key,
                        expected: '`boolean`',
                        actual: valType
                    });
                }
            } else if (key === 'prefetch') {
                if (props[key] != null && valType !== 'boolean' && props[key] !== 'auto' && props[key] !== 'unstable_forceStale') {
                    throw createPropError({
                        key,
                        expected: '`boolean | "auto" | "unstable_forceStale"`',
                        actual: valType
                    });
                }
            } else {
                // TypeScript trick for type-guarding:
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                const _ = key;
            }
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        if (props.locale) {
            (0, _warnonce.warnOnce)('The `locale` prop is not supported in `next/link` while using the `app` router. Read more about app router internalization: https://nextjs.org/docs/app/building-your-application/routing/internationalization');
        }
        if (!asProp) {
            let href;
            if (typeof hrefProp === 'string') {
                href = hrefProp;
            } else if (typeof hrefProp === 'object' && typeof hrefProp.pathname === 'string') {
                href = hrefProp.pathname;
            }
            if (href) {
                const hasDynamicSegment = href.split('/').some((segment)=>segment.startsWith('[') && segment.endsWith(']'));
                if (hasDynamicSegment) {
                    throw Object.defineProperty(new Error("Dynamic href `" + href + "` found in <Link> while using the `/app` router, this is not supported. Read more: https://nextjs.org/docs/messages/app-dir-dynamic-href"), "__NEXT_ERROR_CODE", {
                        value: "E267",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const { href, as } = _react.default.useMemo({
        "LinkComponent.useMemo": ()=>{
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
    }["LinkComponent.useMemo"], [
        hrefProp,
        asProp
    ]);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            if (onClick) {
                console.warn('"onClick" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onClick be set on the child of next/link');
            }
            if (onMouseEnterProp) {
                console.warn('"onMouseEnter" was passed to <Link> with `href` of `' + hrefProp + '` but "legacyBehavior" was set. The legacy behavior requires onMouseEnter be set on the child of next/link');
            }
            try {
                child = _react.default.Children.only(children);
            } catch (err) {
                if (!children) {
                    throw Object.defineProperty(new Error("No children were passed to <Link> with `href` of `" + hrefProp + "` but one child is required https://nextjs.org/docs/messages/link-no-children"), "__NEXT_ERROR_CODE", {
                        value: "E320",
                        enumerable: false,
                        configurable: true
                    });
                }
                throw Object.defineProperty(new Error("Multiple children were passed to <Link> with `href` of `" + hrefProp + "` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children" + (typeof window !== 'undefined' ? " \nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                    value: "E266",
                    enumerable: false,
                    configurable: true
                });
            }
        } else //TURBOPACK unreachable
        ;
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ((children == null ? void 0 : children.type) === 'a') {
                throw Object.defineProperty(new Error('Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.\nLearn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor'), "__NEXT_ERROR_CODE", {
                    value: "E209",
                    enumerable: false,
                    configurable: true
                });
            }
        }
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback({
        "LinkComponent.useCallback[observeLinkVisibilityOnMount]": (element)=>{
            if (router !== null) {
                linkInstanceRef.current = (0, _links.mountLinkInstance)(element, href, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
            }
            return ({
                "LinkComponent.useCallback[observeLinkVisibilityOnMount]": ()=>{
                    if (linkInstanceRef.current) {
                        (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                        linkInstanceRef.current = null;
                    }
                    (0, _links.unmountPrefetchableInstance)(element);
                }
            })["LinkComponent.useCallback[observeLinkVisibilityOnMount]"];
        }
    }["LinkComponent.useCallback[observeLinkVisibilityOnMount]"], [
        prefetchEnabled,
        href,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time truthy", 1) {
                if (!e) {
                    throw Object.defineProperty(new Error('Component rendered inside next/link has to pass click event to "onClick" prop.'), "__NEXT_ERROR_CODE", {
                        value: "E312",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, href, as, linkInstanceRef, replace, scroll, onNavigate);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if ("TURBOPACK compile-time truthy", 1) {
                return;
            }
            //TURBOPACK unreachable
            ;
            const upgradeToDynamicPrefetch = undefined;
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user.
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(as)) {
        childProps.href = as;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(as);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _erroronce.errorOnce)('`legacyBehavior` is deprecated and will be removed in a future ' + 'release. A codemod is available to upgrade your components:\n\n' + 'npx @next/codemod@latest new-link .\n\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/upgrading/codemods#remove-a-tags-from-link-components');
        }
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _segmentcache.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _segmentcache.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_52fa32d5._.js.map