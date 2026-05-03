module.exports = [
"[project]/apps/landing/src/lib/i18n.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LangSwitcher",
    ()=>LangSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LangSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LangSwitcher() from the server but LangSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/landing/src/components/common/LangSwitcher.tsx <module evaluation>", "LangSwitcher");
}),
"[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "LangSwitcher",
    ()=>LangSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const LangSwitcher = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call LangSwitcher() from the server but LangSwitcher is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/apps/landing/src/components/common/LangSwitcher.tsx", "LangSwitcher");
}),
"[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$LangSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$LangSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$LangSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/apps/landing/src/components/common/NavBar.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavBar",
    ()=>NavBar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$LangSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/landing/src/components/common/LangSwitcher.tsx [app-rsc] (ecmascript)");
;
;
;
function NavBar({ lang, t }) {
    const links = [
        {
            href: `/${lang}`,
            label: t.home
        },
        {
            href: `/${lang}/pricing`,
            label: t.pricing
        },
        {
            href: `/${lang}/dashboard`,
            label: t.dashboard
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "Main",
        className: "sticky top-0 z-40 backdrop-blur-md bg-white/85 border-b border-[var(--color-border)]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 h-14 flex items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: `/${lang}`,
                    className: "flex items-center gap-2 font-extrabold tracking-tight text-[15px] text-[var(--color-text)]",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": "true",
                            className: "inline-flex h-7 w-7 items-center justify-center rounded-full text-white",
                            style: {
                                background: "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)"
                            },
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                viewBox: "0 0 24 24",
                                width: "16",
                                height: "16",
                                fill: "none",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "12",
                                        r: "10",
                                        stroke: "currentColor",
                                        strokeWidth: "2"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "12",
                                        cy: "6.5",
                                        r: "1.6",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                                        lineNumber: 43,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M7 9.5h10M12 9.5v4M9 18l3-4.5L15 18M10.5 13.5h3",
                                        stroke: "currentColor",
                                        strokeWidth: "2",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                                        lineNumber: 44,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                                lineNumber: 35,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                            lineNumber: 27,
                            columnNumber: 11
                        }, this),
                        "Inkluyo"
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "hidden md:flex items-center gap-5 text-sm text-[var(--color-text-muted)]",
                    children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: l.href,
                                className: "hover:text-[var(--color-text)] transition-colors",
                                children: l.label
                            }, void 0, false, {
                                fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                                lineNumber: 59,
                                columnNumber: 15
                            }, this)
                        }, l.href, false, {
                            fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                            lineNumber: 58,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                    lineNumber: 56,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$LangSwitcher$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["LangSwitcher"], {
                            lang: lang,
                            ariaLabel: t.languageSwitchAria
                        }, void 0, false, {
                            fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: `/${lang}/get-started`,
                            className: "hidden sm:inline-flex items-center text-sm font-semibold px-3 py-1.5 rounded-lg text-white shadow-sm hover:opacity-95 transition",
                            style: {
                                background: "linear-gradient(135deg, var(--color-brand) 0%, var(--color-brand-dark) 100%)"
                            },
                            children: t.install
                        }, void 0, false, {
                            fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                            lineNumber: 71,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/apps/landing/src/components/common/NavBar.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/landing/src/lib/widget-snippet.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WIDGET_BUNDLE_PATH",
    ()=>WIDGET_BUNDLE_PATH,
    "WIDGET_VERSION",
    ()=>WIDGET_VERSION,
    "buildSnippet",
    ()=>buildSnippet,
    "resolveWidgetUrl",
    ()=>resolveWidgetUrl
]);
const WIDGET_VERSION = "0.4.0";
const WIDGET_BUNDLE_PATH = `/widget/widget.iife.js?v=${WIDGET_VERSION}`;
function resolveWidgetUrl(clientOrigin) {
    const override = process.env.NEXT_PUBLIC_WIDGET_URL;
    if (override) return override;
    const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
    if (vercel) return `https://${vercel}${WIDGET_BUNDLE_PATH}`;
    if (clientOrigin) return `${clientOrigin}${WIDGET_BUNDLE_PATH}`;
    return `https://YOUR-DOMAIN.com${WIDGET_BUNDLE_PATH}`;
}
function buildSnippet(cfg) {
    const attrs = [
        `data-inkluyo-widget`,
        `src="${cfg.scriptUrl}"`,
        `defer`
    ];
    if (cfg.lang) attrs.push(`data-lang="${cfg.lang}"`);
    if (cfg.position) attrs.push(`data-position="${cfg.position}"`);
    if (cfg.primaryColor) attrs.push(`data-primary-color="${cfg.primaryColor}"`);
    if (cfg.hideBadge) attrs.push(`data-hide-badge="true"`);
    if (cfg.siteId) attrs.push(`data-site-id="${cfg.siteId}"`);
    if (cfg.features && cfg.features.length > 0) {
        attrs.push(`data-features="${cfg.features.join(",")}"`);
    }
    return `<script ${attrs.join(" ")}></script>`;
}
}),
"[project]/apps/landing/src/app/[lang]/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LangLayout,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/script.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/landing/src/lib/i18n.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$NavBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/landing/src/components/common/NavBar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$widget$2d$snippet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/apps/landing/src/lib/widget-snippet.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
async function generateStaticParams() {
    return [
        {
            lang: "en"
        },
        {
            lang: "es"
        },
        {
            lang: "pt"
        }
    ];
}
async function LangLayout({ children, params }) {
    const { lang: rawLang } = await params;
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["isLang"])(rawLang)) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    const lang = rawLang;
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$i18n$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTranslations"])(lang);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-lang": lang,
        className: "min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$components$2f$common$2f$NavBar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NavBar"], {
                lang: lang,
                t: t.nav
            }, void 0, false, {
                fileName: "[project]/apps/landing/src/app/[lang]/layout.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this),
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                src: `/widget/widget.iife.js?v=${__TURBOPACK__imported__module__$5b$project$5d2f$apps$2f$landing$2f$src$2f$lib$2f$widget$2d$snippet$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["WIDGET_VERSION"]}`,
                "data-inkluyo-widget": "",
                "data-lang": lang,
                "data-site-id": "demo-site",
                strategy: "afterInteractive"
            }, void 0, false, {
                fileName: "[project]/apps/landing/src/app/[lang]/layout.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/landing/src/app/[lang]/layout.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}),
"[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}),
"[project]/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _redirectstatuscode = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-status-code.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const actionAsyncStorage = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)").actionAsyncStorage : "TURBOPACK unreachable";
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    var _actionAsyncStorage_getStore;
    type != null ? type : type = (actionAsyncStorage == null ? void 0 : (_actionAsyncStorage_getStore = actionAsyncStorage.getStore()) == null ? void 0 : _actionAsyncStorage_getStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false,
            configurable: true
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}),
"[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}),
"[project]/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}),
"[project]/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}),
"[project]/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false,
            configurable: true
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}),
"[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    isHangingPromiseRejectionError: null,
    makeDevtoolsIOAwarePromise: null,
    makeHangingPromise: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    isHangingPromiseRejectionError: function() {
        return isHangingPromiseRejectionError;
    },
    makeDevtoolsIOAwarePromise: function() {
        return makeDevtoolsIOAwarePromise;
    },
    makeHangingPromise: function() {
        return makeHangingPromise;
    }
});
function isHangingPromiseRejectionError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === HANGING_PROMISE_REJECTION;
}
const HANGING_PROMISE_REJECTION = 'HANGING_PROMISE_REJECTION';
class HangingPromiseRejectionError extends Error {
    constructor(route, expression){
        super(`During prerendering, ${expression} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${expression} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${route}".`), this.route = route, this.expression = expression, this.digest = HANGING_PROMISE_REJECTION;
    }
}
const abortListenersBySignal = new WeakMap();
function makeHangingPromise(signal, route, expression) {
    if (signal.aborted) {
        return Promise.reject(new HangingPromiseRejectionError(route, expression));
    } else {
        const hangingPromise = new Promise((_, reject)=>{
            const boundRejection = reject.bind(null, new HangingPromiseRejectionError(route, expression));
            let currentListeners = abortListenersBySignal.get(signal);
            if (currentListeners) {
                currentListeners.push(boundRejection);
            } else {
                const listeners = [
                    boundRejection
                ];
                abortListenersBySignal.set(signal, listeners);
                signal.addEventListener('abort', ()=>{
                    for(let i = 0; i < listeners.length; i++){
                        listeners[i]();
                    }
                }, {
                    once: true
                });
            }
        });
        // We are fine if no one actually awaits this promise. We shouldn't consider this an unhandled rejection so
        // we attach a noop catch handler here to suppress this warning. If you actually await somewhere or construct
        // your own promise out of it you'll need to ensure you handle the error when it rejects.
        hangingPromise.catch(ignoreReject);
        return hangingPromise;
    }
}
function ignoreReject() {}
function makeDevtoolsIOAwarePromise(underlying) {
    // in React DevTools if we resolve in a setTimeout we will observe
    // the promise resolution as something that can suspend a boundary or root.
    return new Promise((resolve)=>{
        // Must use setTimeout to be considered IO React DevTools. setImmediate will not work.
        setTimeout(()=>{
            resolve(underlying);
        }, 0);
    });
} //# sourceMappingURL=dynamic-rendering-utils.js.map
}),
"[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isPostpone", {
    enumerable: true,
    get: function() {
        return isPostpone;
    }
});
const REACT_POSTPONE_TYPE = Symbol.for('react.postpone');
function isPostpone(error) {
    return typeof error === 'object' && error !== null && error.$$typeof === REACT_POSTPONE_TYPE;
} //# sourceMappingURL=is-postpone.js.map
}),
"[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This has to be a shared module which is shared between client component error boundary and dynamic component
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BailoutToCSRError: null,
    isBailoutToCSRError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BailoutToCSRError: function() {
        return BailoutToCSRError;
    },
    isBailoutToCSRError: function() {
        return isBailoutToCSRError;
    }
});
const BAILOUT_TO_CSR = 'BAILOUT_TO_CLIENT_SIDE_RENDERING';
class BailoutToCSRError extends Error {
    constructor(reason){
        super("Bail out to client-side rendering: " + reason), this.reason = reason, this.digest = BAILOUT_TO_CSR;
    }
}
function isBailoutToCSRError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err)) {
        return false;
    }
    return err.digest === BAILOUT_TO_CSR;
} //# sourceMappingURL=bailout-to-csr.js.map
}),
"[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}),
"[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}),
"[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}),
"[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    METADATA_BOUNDARY_NAME: null,
    OUTLET_BOUNDARY_NAME: null,
    ROOT_LAYOUT_BOUNDARY_NAME: null,
    VIEWPORT_BOUNDARY_NAME: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    METADATA_BOUNDARY_NAME: function() {
        return METADATA_BOUNDARY_NAME;
    },
    OUTLET_BOUNDARY_NAME: function() {
        return OUTLET_BOUNDARY_NAME;
    },
    ROOT_LAYOUT_BOUNDARY_NAME: function() {
        return ROOT_LAYOUT_BOUNDARY_NAME;
    },
    VIEWPORT_BOUNDARY_NAME: function() {
        return VIEWPORT_BOUNDARY_NAME;
    }
});
const METADATA_BOUNDARY_NAME = '__next_metadata_boundary__';
const VIEWPORT_BOUNDARY_NAME = '__next_viewport_boundary__';
const OUTLET_BOUNDARY_NAME = '__next_outlet_boundary__';
const ROOT_LAYOUT_BOUNDARY_NAME = '__next_root_layout_boundary__'; //# sourceMappingURL=boundary-constants.js.map
}),
"[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    atLeastOneTask: null,
    scheduleImmediate: null,
    scheduleOnNextTick: null,
    waitAtLeastOneReactRenderTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    atLeastOneTask: function() {
        return atLeastOneTask;
    },
    scheduleImmediate: function() {
        return scheduleImmediate;
    },
    scheduleOnNextTick: function() {
        return scheduleOnNextTick;
    },
    waitAtLeastOneReactRenderTask: function() {
        return waitAtLeastOneReactRenderTask;
    }
});
const scheduleOnNextTick = (cb)=>{
    // We use Promise.resolve().then() here so that the operation is scheduled at
    // the end of the promise job queue, we then add it to the next process tick
    // to ensure it's evaluated afterwards.
    //
    // This was inspired by the implementation of the DataLoader interface: https://github.com/graphql/dataloader/blob/d336bd15282664e0be4b4a657cb796f09bafbc6b/src/index.js#L213-L255
    //
    Promise.resolve().then(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            process.nextTick(cb);
        }
    });
};
const scheduleImmediate = (cb)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        setImmediate(cb);
    }
};
function atLeastOneTask() {
    return new Promise((resolve)=>scheduleImmediate(resolve));
}
function waitAtLeastOneReactRenderTask() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return new Promise((r)=>setImmediate(r));
    }
} //# sourceMappingURL=scheduler.js.map
}),
"[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InvariantError", {
    enumerable: true,
    get: function() {
        return InvariantError;
    }
});
class InvariantError extends Error {
    constructor(message, options){
        super("Invariant: " + (message.endsWith('.') ? message : message + '.') + " This is a bug in Next.js.", options);
        this.name = 'InvariantError';
    }
} //# sourceMappingURL=invariant-error.js.map
}),
"[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * The functions provided by this module are used to communicate certain properties
 * about the currently running code so that Next.js can make decisions on how to handle
 * the current execution in different rendering modes such as pre-rendering, resuming, and SSR.
 *
 * Today Next.js treats all code as potentially static. Certain APIs may only make sense when dynamically rendering.
 * Traditionally this meant deopting the entire render to dynamic however with PPR we can now deopt parts
 * of a React tree as dynamic while still keeping other parts static. There are really two different kinds of
 * Dynamic indications.
 *
 * The first is simply an intention to be dynamic. unstable_noStore is an example of this where
 * the currently executing code simply declares that the current scope is dynamic but if you use it
 * inside unstable_cache it can still be cached. This type of indication can be removed if we ever
 * make the default dynamic to begin with because the only way you would ever be static is inside
 * a cache scope which this indication does not affect.
 *
 * The second is an indication that a dynamic data source was read. This is a stronger form of dynamic
 * because it means that it is inappropriate to cache this at all. using a dynamic data source inside
 * unstable_cache should error. If you want to use some dynamic data inside unstable_cache you should
 * read that data outside the cache and pass it in as an argument to the cached function.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Postpone: null,
    PreludeState: null,
    abortAndThrowOnSynchronousRequestDataAccess: null,
    abortOnSynchronousPlatformIOAccess: null,
    accessedDynamicData: null,
    annotateDynamicAccess: null,
    consumeDynamicAccess: null,
    createDynamicTrackingState: null,
    createDynamicValidationState: null,
    createHangingInputAbortSignal: null,
    createRenderInBrowserAbortSignal: null,
    delayUntilRuntimeStage: null,
    formatDynamicAPIAccesses: null,
    getFirstDynamicReason: null,
    isDynamicPostpone: null,
    isPrerenderInterruptedError: null,
    logDisallowedDynamicError: null,
    markCurrentScopeAsDynamic: null,
    postponeWithTracking: null,
    throwIfDisallowedDynamic: null,
    throwToInterruptStaticGeneration: null,
    trackAllowedDynamicAccess: null,
    trackDynamicDataInDynamicRender: null,
    trackSynchronousPlatformIOAccessInDev: null,
    trackSynchronousRequestDataAccessInDev: null,
    useDynamicRouteParams: null,
    warnOnSyncDynamicError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Postpone: function() {
        return Postpone;
    },
    PreludeState: function() {
        return PreludeState;
    },
    abortAndThrowOnSynchronousRequestDataAccess: function() {
        return abortAndThrowOnSynchronousRequestDataAccess;
    },
    abortOnSynchronousPlatformIOAccess: function() {
        return abortOnSynchronousPlatformIOAccess;
    },
    accessedDynamicData: function() {
        return accessedDynamicData;
    },
    annotateDynamicAccess: function() {
        return annotateDynamicAccess;
    },
    consumeDynamicAccess: function() {
        return consumeDynamicAccess;
    },
    createDynamicTrackingState: function() {
        return createDynamicTrackingState;
    },
    createDynamicValidationState: function() {
        return createDynamicValidationState;
    },
    createHangingInputAbortSignal: function() {
        return createHangingInputAbortSignal;
    },
    createRenderInBrowserAbortSignal: function() {
        return createRenderInBrowserAbortSignal;
    },
    delayUntilRuntimeStage: function() {
        return delayUntilRuntimeStage;
    },
    formatDynamicAPIAccesses: function() {
        return formatDynamicAPIAccesses;
    },
    getFirstDynamicReason: function() {
        return getFirstDynamicReason;
    },
    isDynamicPostpone: function() {
        return isDynamicPostpone;
    },
    isPrerenderInterruptedError: function() {
        return isPrerenderInterruptedError;
    },
    logDisallowedDynamicError: function() {
        return logDisallowedDynamicError;
    },
    markCurrentScopeAsDynamic: function() {
        return markCurrentScopeAsDynamic;
    },
    postponeWithTracking: function() {
        return postponeWithTracking;
    },
    throwIfDisallowedDynamic: function() {
        return throwIfDisallowedDynamic;
    },
    throwToInterruptStaticGeneration: function() {
        return throwToInterruptStaticGeneration;
    },
    trackAllowedDynamicAccess: function() {
        return trackAllowedDynamicAccess;
    },
    trackDynamicDataInDynamicRender: function() {
        return trackDynamicDataInDynamicRender;
    },
    trackSynchronousPlatformIOAccessInDev: function() {
        return trackSynchronousPlatformIOAccessInDev;
    },
    trackSynchronousRequestDataAccessInDev: function() {
        return trackSynchronousRequestDataAccessInDev;
    },
    useDynamicRouteParams: function() {
        return useDynamicRouteParams;
    },
    warnOnSyncDynamicError: function() {
        return warnOnSyncDynamicError;
    }
});
const _react = /*#__PURE__*/ _interop_require_default(__turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)"));
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
const _staticgenerationbailout = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/static-generation-bailout.js [app-rsc] (ecmascript)");
const _workunitasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)");
const _workasyncstorageexternal = __turbopack_context__.r("[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)");
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _boundaryconstants = __turbopack_context__.r("[project]/node_modules/next/dist/lib/framework/boundary-constants.js [app-rsc] (ecmascript)");
const _scheduler = __turbopack_context__.r("[project]/node_modules/next/dist/lib/scheduler.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _invarianterror = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/invariant-error.js [app-rsc] (ecmascript)");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const hasPostpone = typeof _react.default.unstable_postpone === 'function';
function createDynamicTrackingState(isDebugDynamicAccesses) {
    return {
        isDebugDynamicAccesses,
        dynamicAccesses: [],
        syncDynamicErrorWithStack: null
    };
}
function createDynamicValidationState() {
    return {
        hasSuspenseAboveBody: false,
        hasDynamicMetadata: false,
        hasDynamicViewport: false,
        hasAllowedDynamic: false,
        dynamicErrors: []
    };
}
function getFirstDynamicReason(trackingState) {
    var _trackingState_dynamicAccesses_;
    return (_trackingState_dynamicAccesses_ = trackingState.dynamicAccesses[0]) == null ? void 0 : _trackingState_dynamicAccesses_.expression;
}
function markCurrentScopeAsDynamic(store, workUnitStore, expression) {
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'cache':
            case 'unstable-cache':
                // Inside cache scopes, marking a scope as dynamic has no effect,
                // because the outer cache scope creates a cache boundary. This is
                // subtly different from reading a dynamic data source, which is
                // forbidden inside a cache scope.
                return;
            case 'private-cache':
                // A private cache scope is already dynamic by definition.
                return;
            case 'prerender-legacy':
            case 'prerender-ppr':
            case 'request':
                break;
            default:
                workUnitStore;
        }
    }
    // If we're forcing dynamic rendering or we're forcing static rendering, we
    // don't need to do anything here because the entire page is already dynamic
    // or it's static and it should not throw or postpone here.
    if (store.forceDynamic || store.forceStatic) return;
    if (store.dynamicShouldError) {
        throw Object.defineProperty(new _staticgenerationbailout.StaticGenBailoutError(`Route ${store.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`), "__NEXT_ERROR_CODE", {
            value: "E553",
            enumerable: false,
            configurable: true
        });
    }
    if (workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-ppr':
                return postponeWithTracking(store.route, expression, workUnitStore.dynamicTracking);
            case 'prerender-legacy':
                workUnitStore.revalidate = 0;
                // We aren't prerendering, but we are generating a static page. We need
                // to bail out of static generation.
                const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used ${expression}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
                    value: "E550",
                    enumerable: false,
                    configurable: true
                });
                store.dynamicUsageDescription = expression;
                store.dynamicUsageStack = err.stack;
                throw err;
            case 'request':
                if ("TURBOPACK compile-time truthy", 1) {
                    workUnitStore.usedDynamic = true;
                }
                break;
            default:
                workUnitStore;
        }
    }
}
function throwToInterruptStaticGeneration(expression, store, prerenderStore) {
    // We aren't prerendering but we are generating a static page. We need to bail out of static generation
    const err = Object.defineProperty(new _hooksservercontext.DynamicServerError(`Route ${store.route} couldn't be rendered statically because it used \`${expression}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`), "__NEXT_ERROR_CODE", {
        value: "E558",
        enumerable: false,
        configurable: true
    });
    prerenderStore.revalidate = 0;
    store.dynamicUsageDescription = expression;
    store.dynamicUsageStack = err.stack;
    throw err;
}
function trackDynamicDataInDynamicRender(workUnitStore) {
    switch(workUnitStore.type){
        case 'cache':
        case 'unstable-cache':
            // Inside cache scopes, marking a scope as dynamic has no effect,
            // because the outer cache scope creates a cache boundary. This is
            // subtly different from reading a dynamic data source, which is
            // forbidden inside a cache scope.
            return;
        case 'private-cache':
            // A private cache scope is already dynamic by definition.
            return;
        case 'prerender':
        case 'prerender-runtime':
        case 'prerender-legacy':
        case 'prerender-ppr':
        case 'prerender-client':
            break;
        case 'request':
            if ("TURBOPACK compile-time truthy", 1) {
                workUnitStore.usedDynamic = true;
            }
            break;
        default:
            workUnitStore;
    }
}
function abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore) {
    const reason = `Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`;
    const error = createPrerenderInterruptedError(reason);
    prerenderStore.controller.abort(error);
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function abortOnSynchronousPlatformIOAccess(route, expression, errorWithStack, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
    // It is important that we set this tracking value after aborting. Aborts are executed
    // synchronously except for the case where you abort during render itself. By setting this
    // value late we can use it to determine if any of the aborted tasks are the task that
    // called the sync IO expression in the first place.
    if (dynamicTracking) {
        if (dynamicTracking.syncDynamicErrorWithStack === null) {
            dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
        }
    }
}
function trackSynchronousPlatformIOAccessInDev(requestStore) {
    // We don't actually have a controller to abort but we do the semantic equivalent by
    // advancing the request store out of prerender mode
    requestStore.prerenderPhase = false;
}
function abortAndThrowOnSynchronousRequestDataAccess(route, expression, errorWithStack, prerenderStore) {
    const prerenderSignal = prerenderStore.controller.signal;
    if (prerenderSignal.aborted === false) {
        // TODO it would be better to move this aborted check into the callsite so we can avoid making
        // the error object when it isn't relevant to the aborting of the prerender however
        // since we need the throw semantics regardless of whether we abort it is easier to land
        // this way. See how this was handled with `abortOnSynchronousPlatformIOAccess` for a closer
        // to ideal implementation
        abortOnSynchronousDynamicDataAccess(route, expression, prerenderStore);
        // It is important that we set this tracking value after aborting. Aborts are executed
        // synchronously except for the case where you abort during render itself. By setting this
        // value late we can use it to determine if any of the aborted tasks are the task that
        // called the sync IO expression in the first place.
        const dynamicTracking = prerenderStore.dynamicTracking;
        if (dynamicTracking) {
            if (dynamicTracking.syncDynamicErrorWithStack === null) {
                dynamicTracking.syncDynamicErrorWithStack = errorWithStack;
            }
        }
    }
    throw createPrerenderInterruptedError(`Route ${route} needs to bail out of prerendering at this point because it used ${expression}.`);
}
function warnOnSyncDynamicError(dynamicTracking) {
    if (dynamicTracking.syncDynamicErrorWithStack) {
        // the server did something sync dynamic, likely
        // leading to an early termination of the prerender.
        console.error(dynamicTracking.syncDynamicErrorWithStack);
    }
}
const trackSynchronousRequestDataAccessInDev = trackSynchronousPlatformIOAccessInDev;
function Postpone({ reason, route }) {
    const prerenderStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    const dynamicTracking = prerenderStore && prerenderStore.type === 'prerender-ppr' ? prerenderStore.dynamicTracking : null;
    postponeWithTracking(route, reason, dynamicTracking);
}
function postponeWithTracking(route, expression, dynamicTracking) {
    assertPostpone();
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            // When we aren't debugging, we don't need to create another error for the
            // stack trace.
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
    _react.default.unstable_postpone(createPostponeReason(route, expression));
}
function createPostponeReason(route, expression) {
    return `Route ${route} needs to bail out of prerendering at this point because it used ${expression}. ` + `React throws this special object to indicate where. It should not be caught by ` + `your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`;
}
function isDynamicPostpone(err) {
    if (typeof err === 'object' && err !== null && typeof err.message === 'string') {
        return isDynamicPostponeReason(err.message);
    }
    return false;
}
function isDynamicPostponeReason(reason) {
    return reason.includes('needs to bail out of prerendering at this point because it used') && reason.includes('Learn more: https://nextjs.org/docs/messages/ppr-caught-error');
}
if (isDynamicPostponeReason(createPostponeReason('%%%', '^^^')) === false) {
    throw Object.defineProperty(new Error('Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js'), "__NEXT_ERROR_CODE", {
        value: "E296",
        enumerable: false,
        configurable: true
    });
}
const NEXT_PRERENDER_INTERRUPTED = 'NEXT_PRERENDER_INTERRUPTED';
function createPrerenderInterruptedError(message) {
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.digest = NEXT_PRERENDER_INTERRUPTED;
    return error;
}
function isPrerenderInterruptedError(error) {
    return typeof error === 'object' && error !== null && error.digest === NEXT_PRERENDER_INTERRUPTED && 'name' in error && 'message' in error && error instanceof Error;
}
function accessedDynamicData(dynamicAccesses) {
    return dynamicAccesses.length > 0;
}
function consumeDynamicAccess(serverDynamic, clientDynamic) {
    // We mutate because we only call this once we are no longer writing
    // to the dynamicTrackingState and it's more efficient than creating a new
    // array.
    serverDynamic.dynamicAccesses.push(...clientDynamic.dynamicAccesses);
    return serverDynamic.dynamicAccesses;
}
function formatDynamicAPIAccesses(dynamicAccesses) {
    return dynamicAccesses.filter((access)=>typeof access.stack === 'string' && access.stack.length > 0).map(({ expression, stack })=>{
        stack = stack.split('\n') // Remove the "Error: " prefix from the first line of the stack trace as
        // well as the first 4 lines of the stack trace which is the distance
        // from the user code and the `new Error().stack` call.
        .slice(4).filter((line)=>{
            // Exclude Next.js internals from the stack trace.
            if (line.includes('node_modules/next/')) {
                return false;
            }
            // Exclude anonymous functions from the stack trace.
            if (line.includes(' (<anonymous>)')) {
                return false;
            }
            // Exclude Node.js internals from the stack trace.
            if (line.includes(' (node:')) {
                return false;
            }
            return true;
        }).join('\n');
        return `Dynamic API Usage Debug - ${expression}:\n${stack}`;
    });
}
function assertPostpone() {
    if (!hasPostpone) {
        throw Object.defineProperty(new Error(`Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js`), "__NEXT_ERROR_CODE", {
            value: "E224",
            enumerable: false,
            configurable: true
        });
    }
}
function createRenderInBrowserAbortSignal() {
    const controller = new AbortController();
    controller.abort(Object.defineProperty(new _bailouttocsr.BailoutToCSRError('Render in Browser'), "__NEXT_ERROR_CODE", {
        value: "E721",
        enumerable: false,
        configurable: true
    }));
    return controller.signal;
}
function createHangingInputAbortSignal(workUnitStore) {
    switch(workUnitStore.type){
        case 'prerender':
        case 'prerender-runtime':
            const controller = new AbortController();
            if (workUnitStore.cacheSignal) {
                // If we have a cacheSignal it means we're in a prospective render. If
                // the input we're waiting on is coming from another cache, we do want
                // to wait for it so that we can resolve this cache entry too.
                workUnitStore.cacheSignal.inputReady().then(()=>{
                    controller.abort();
                });
            } else {
                // Otherwise we're in the final render and we should already have all
                // our caches filled.
                // If the prerender uses stages, we have wait until the runtime stage,
                // at which point all runtime inputs will be resolved.
                // (otherwise, a runtime prerender might consider `cookies()` hanging
                //  even though they'd resolve in the next task.)
                //
                // We might still be waiting on some microtasks so we
                // wait one tick before giving up. When we give up, we still want to
                // render the content of this cache as deeply as we can so that we can
                // suspend as deeply as possible in the tree or not at all if we don't
                // end up waiting for the input.
                const runtimeStagePromise = (0, _workunitasyncstorageexternal.getRuntimeStagePromise)(workUnitStore);
                if (runtimeStagePromise) {
                    runtimeStagePromise.then(()=>(0, _scheduler.scheduleOnNextTick)(()=>controller.abort()));
                } else {
                    (0, _scheduler.scheduleOnNextTick)(()=>controller.abort());
                }
            }
            return controller.signal;
        case 'prerender-client':
        case 'prerender-ppr':
        case 'prerender-legacy':
        case 'request':
        case 'cache':
        case 'private-cache':
        case 'unstable-cache':
            return undefined;
        default:
            workUnitStore;
    }
}
function annotateDynamicAccess(expression, prerenderStore) {
    const dynamicTracking = prerenderStore.dynamicTracking;
    if (dynamicTracking) {
        dynamicTracking.dynamicAccesses.push({
            stack: dynamicTracking.isDebugDynamicAccesses ? new Error().stack : undefined,
            expression
        });
    }
}
function useDynamicRouteParams(expression) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    const workUnitStore = _workunitasyncstorageexternal.workUnitAsyncStorage.getStore();
    if (workStore && workUnitStore) {
        switch(workUnitStore.type){
            case 'prerender-client':
            case 'prerender':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        // We are in a prerender with cacheComponents semantics. We are going to
                        // hang here and never resolve. This will cause the currently
                        // rendering component to effectively be a dynamic hole.
                        _react.default.use((0, _dynamicrenderingutils.makeHangingPromise)(workUnitStore.renderSignal, workStore.route, expression));
                    }
                    break;
                }
            case 'prerender-ppr':
                {
                    const fallbackParams = workUnitStore.fallbackRouteParams;
                    if (fallbackParams && fallbackParams.size > 0) {
                        return postponeWithTracking(workStore.route, expression, workUnitStore.dynamicTracking);
                    }
                    break;
                }
            case 'prerender-runtime':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called during a runtime prerender. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E771",
                    enumerable: false,
                    configurable: true
                });
            case 'cache':
            case 'private-cache':
                throw Object.defineProperty(new _invarianterror.InvariantError(`\`${expression}\` was called inside a cache scope. Next.js should be preventing ${expression} from being included in server components statically, but did not in this case.`), "__NEXT_ERROR_CODE", {
                    value: "E745",
                    enumerable: false,
                    configurable: true
                });
            case 'prerender-legacy':
            case 'request':
            case 'unstable-cache':
                break;
            default:
                workUnitStore;
        }
    }
}
const hasSuspenseRegex = /\n\s+at Suspense \(<anonymous>\)/;
// Common implicit body tags that React will treat as body when placed directly in html
const bodyAndImplicitTags = 'body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6';
// Detects when RootLayoutBoundary (our framework marker component) appears
// after Suspense in the component stack, indicating the root layout is wrapped
// within a Suspense boundary. Ensures no body/html/implicit-body components are in between.
//
// Example matches:
//   at Suspense (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
//
// Or with other components in between (but not body/html/implicit-body):
//   at Suspense (<anonymous>)
//   at SomeComponent (<anonymous>)
//   at __next_root_layout_boundary__ (<anonymous>)
const hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex = new RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:${bodyAndImplicitTags}) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${_boundaryconstants.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`);
const hasMetadataRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.METADATA_BOUNDARY_NAME}[\\n\\s]`);
const hasViewportRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`);
const hasOutletRegex = new RegExp(`\\n\\s+at ${_boundaryconstants.OUTLET_BOUNDARY_NAME}[\\n\\s]`);
function trackAllowedDynamicAccess(workStore, componentStack, dynamicValidation, clientDynamic) {
    if (hasOutletRegex.test(componentStack)) {
        // We don't need to track that this is dynamic. It is only so when something else is also dynamic.
        return;
    } else if (hasMetadataRegex.test(componentStack)) {
        dynamicValidation.hasDynamicMetadata = true;
        return;
    } else if (hasViewportRegex.test(componentStack)) {
        dynamicValidation.hasDynamicViewport = true;
        return;
    } else if (hasSuspenseBeforeRootLayoutWithoutBodyOrImplicitBodyRegex.test(componentStack)) {
        // For Suspense within body, the prelude wouldn't be empty so it wouldn't violate the empty static shells rule.
        // But if you have Suspense above body, the prelude is empty but we allow that because having Suspense
        // is an explicit signal from the user that they acknowledge the empty shell and want dynamic rendering.
        dynamicValidation.hasAllowedDynamic = true;
        dynamicValidation.hasSuspenseAboveBody = true;
        return;
    } else if (hasSuspenseRegex.test(componentStack)) {
        // this error had a Suspense boundary above it so we don't need to report it as a source
        // of disallowed
        dynamicValidation.hasAllowedDynamic = true;
        return;
    } else if (clientDynamic.syncDynamicErrorWithStack) {
        // This task was the task that called the sync error.
        dynamicValidation.dynamicErrors.push(clientDynamic.syncDynamicErrorWithStack);
        return;
    } else {
        const message = `Route "${workStore.route}": A component accessed data, headers, params, searchParams, or a short-lived cache without a Suspense boundary nor a "use cache" above it. See more info: https://nextjs.org/docs/messages/next-prerender-missing-suspense`;
        const error = createErrorWithComponentOrOwnerStack(message, componentStack);
        dynamicValidation.dynamicErrors.push(error);
        return;
    }
}
/**
 * In dev mode, we prefer using the owner stack, otherwise the provided
 * component stack is used.
 */ function createErrorWithComponentOrOwnerStack(message, componentStack) {
    const ownerStack = ("TURBOPACK compile-time value", "development") !== 'production' && _react.default.captureOwnerStack ? _react.default.captureOwnerStack() : null;
    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false,
        configurable: true
    });
    error.stack = error.name + ': ' + message + (ownerStack ?? componentStack);
    return error;
}
var PreludeState = /*#__PURE__*/ function(PreludeState) {
    PreludeState[PreludeState["Full"] = 0] = "Full";
    PreludeState[PreludeState["Empty"] = 1] = "Empty";
    PreludeState[PreludeState["Errored"] = 2] = "Errored";
    return PreludeState;
}({});
function logDisallowedDynamicError(workStore, error) {
    console.error(error);
    if (!workStore.dev) {
        if (workStore.hasReadableErrorStacks) {
            console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.`);
        } else {
            console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${workStore.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`);
        }
    }
}
function throwIfDisallowedDynamic(workStore, prelude, dynamicValidation, serverDynamic) {
    if (prelude !== 0) {
        if (dynamicValidation.hasSuspenseAboveBody) {
            // This route has opted into allowing fully dynamic rendering
            // by including a Suspense boundary above the body. In this case
            // a lack of a shell is not considered disallowed so we simply return
            return;
        }
        if (serverDynamic.syncDynamicErrorWithStack) {
            // There is no shell and the server did something sync dynamic likely
            // leading to an early termination of the prerender before the shell
            // could be completed. We terminate the build/validating render.
            logDisallowedDynamicError(workStore, serverDynamic.syncDynamicErrorWithStack);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // We didn't have any sync bailouts but there may be user code which
        // blocked the root. We would have captured these during the prerender
        // and can log them here and then terminate the build/validating render
        const dynamicErrors = dynamicValidation.dynamicErrors;
        if (dynamicErrors.length > 0) {
            for(let i = 0; i < dynamicErrors.length; i++){
                logDisallowedDynamicError(workStore, dynamicErrors[i]);
            }
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        // If we got this far then the only other thing that could be blocking
        // the root is dynamic Viewport. If this is dynamic then
        // you need to opt into that by adding a Suspense boundary above the body
        // to indicate your are ok with fully dynamic rendering.
        if (dynamicValidation.hasDynamicViewport) {
            console.error(`Route "${workStore.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
        if (prelude === 1) {
            // If we ever get this far then we messed up the tracking of invalid dynamic.
            // We still adhere to the constraint that you must produce a shell but invite the
            // user to report this as a bug in Next.js.
            console.error(`Route "${workStore.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    } else {
        if (dynamicValidation.hasAllowedDynamic === false && dynamicValidation.hasDynamicMetadata) {
            console.error(`Route "${workStore.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`);
            throw new _staticgenerationbailout.StaticGenBailoutError();
        }
    }
}
function delayUntilRuntimeStage(prerenderStore, result) {
    if (prerenderStore.runtimeStagePromise) {
        return prerenderStore.runtimeStagePromise.then(()=>result);
    }
    return result;
} //# sourceMappingURL=dynamic-rendering.js.map
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _dynamicrenderingutils = __turbopack_context__.r("[project]/node_modules/next/dist/server/dynamic-rendering-utils.js [app-rsc] (ecmascript)");
const _ispostpone = __turbopack_context__.r("[project]/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-rsc] (ecmascript)");
const _bailouttocsr = __turbopack_context__.r("[project]/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-rsc] (ecmascript)");
const _isnextroutererror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/is-next-router-error.js [app-rsc] (ecmascript)");
const _dynamicrendering = __turbopack_context__.r("[project]/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-rsc] (ecmascript)");
const _hooksservercontext = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/hooks-server-context.js [app-rsc] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _hooksservercontext.isDynamicServerError)(error) || (0, _dynamicrendering.isDynamicPostpone)(error) || (0, _ispostpone.isPostpone)(error) || (0, _dynamicrenderingutils.isHangingPromiseRejectionError)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.server.js.map
}),
"[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * This function should be used to rethrow internal Next.js errors so that they can be handled by the framework.
 * When wrapping an API that uses errors to interrupt control flow, you should use this function before you do any error handling.
 * This function will rethrow the error if it is a Next.js error so it can be handled, otherwise it will do nothing.
 *
 * Read more: [Next.js Docs: `unstable_rethrow`](https://nextjs.org/docs/app/api-reference/functions/unstable_rethrow)
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const unstable_rethrow = ("TURBOPACK compile-time truthy", 1) ? __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.server.js [app-rsc] (ecmascript)").unstable_rethrow : "TURBOPACK unreachable";
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}),
"[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/** @internal */ Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_isUnrecognizedActionError: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_isUnrecognizedActionError: function() {
        return unstable_isUnrecognizedActionError;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect.js [app-rsc] (ecmascript)");
const _redirecterror = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/redirect-error.js [app-rsc] (ecmascript)");
const _notfound = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/not-found.js [app-rsc] (ecmascript)");
const _forbidden = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/forbidden.js [app-rsc] (ecmascript)");
const _unauthorized = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unauthorized.js [app-rsc] (ecmascript)");
const _unstablerethrow = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/unstable-rethrow.js [app-rsc] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
function unstable_isUnrecognizedActionError() {
    throw Object.defineProperty(new Error('`unstable_isUnrecognizedActionError` can only be used on the client.'), "__NEXT_ERROR_CODE", {
        value: "E776",
        enumerable: false,
        configurable: true
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}),
"[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=navigation.react-server.js.map
;
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/script.js"));
}),
"[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/script.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$script$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/script.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/script.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
];

//# sourceMappingURL=_342055a8._.js.map