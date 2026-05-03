# Inkluyo — Estrategia y Roadmap

> Notas estratégicas de la sesión inicial. Re-leer antes de cada gran decisión.

## TL;DR

- El **overlay puro** (estilo accessiBe) es mercado saturado, éticamente cuestionado y comoditizándose. **No construir solo eso.**
- El widget actual es un **gran MVP de credibilidad y entry-point**, no el producto final.
- El moat real está en lo que se construya **encima** del widget.
- **Recomendación**: combinar **dev-tool angle + WordPress como canal + LATAM como nicho** para los próximos 12 meses.

---

## Las 3 propuestas

### 🤖 1. AI-powered remediation
Inkluyo arregla el HTML real con IA, no solo aplica filtros CSS.

- Auto-`alt` para imágenes (vision AI)
- Auto-`<label>` para forms sin label
- Sugerencia de ARIA roles
- Auto-transcripción de `<video>`
- **Generación de Pull Request** con los fixes (Business+)

**Moat**: data → modelo → modelos verticales (Inkluyo Shopify, Inkluyo WP, etc.)
**Riesgo**: token cost (~$0.02-0.05/scan), precisión imperfecta, comunidad a11y crítica

---

### 🌎 2. LATAM-first
Primer producto de accesibilidad serio diseñado para LATAM/España.

- Localización profunda (ES-MX, ES-CL, PT-BR, etc.)
- Dashboards de cumplimiento por país (Ley 21.380 Chile, NMX-R-050 México, LBI Brasil…)
- **Generador automático de "Declaración de Accesibilidad"** legal-PDF
- Pricing en moneda local + Mercado Pago/PayU

**Moat**: 600M+ hispanohablantes sin competencia local seria, marca culturalmente nativa
**Riesgo**: ACV menor, payments fragmentados, sales en español

---

### 🛠️ 3. Dev-tool / CI angle ("Sentry para a11y")
El widget es el free tier; el producto real son herramientas para devs.

| Componente | Para quién |
|---|---|
| Inkluyo Widget | End-users |
| Inkluyo Audit (web dashboard) | Devs |
| Inkluyo CI (GitHub Action) | DevOps |
| Inkluyo Monitor (24/7 prod monitoring) | Eng managers |
| Inkluyo Fix (auto-PRs) | Devs Pro+ |
| Inkluyo VS Code Extension | Devs en IDE |

**Moat**: engineering buyers viral, OSS-first distribución gratuita, posicionamiento ético opuesto a accessiBe
**Riesgo**: espacio crowded (axe-core, Lighthouse), sales B2B largos, producto más complejo

---

## Distribución — los 7 canales (ranked por leverage)

1. **WordPress Plugin Directory** ⭐⭐⭐⭐⭐ — 40% de la web (~478M sitios)
2. **Shopify App Store** ⭐⭐⭐⭐⭐ — 4.4M tiendas, 80% de demandas ADA
3. **GitHub Marketplace + OSS** ⭐⭐⭐⭐⭐ — para angle dev-tool, viralidad pura
4. **Embed-via-badge / free tier viral** ⭐⭐⭐⭐ — modelo Intercom/Crisp/Tidio
5. **Webflow + Wix marketplaces** ⭐⭐⭐⭐ — designer-driven distribution
6. **Agency / SI partnerships LATAM** ⭐⭐⭐⭐ — 1 agencia = 50-200 sitios/año
7. **Lighthouse plugin partnerships** ⭐⭐⭐ — distribución dentro de Google Lighthouse

---

## Roadmap recomendado (12 meses, 1-2 founders)

### Fase 1 — horas 0-3: MVP + 1 canal viral
- [x] Pulir el widget actual (Shadow DOM, Resets CSS, isolation)
- [x] Implementar badge "Powered by Inkluyo" (opcional en Pro)
- [x] Empaquetar el widget como **WordPress plugin** (apps/wordpress-plugin)
- [x] Backend simple: API de analíticas con pings en tiempo real (mocked/memory)
- [x] Deploy real (GitHub Actions para build del widget)
- **Meta**: 1.000 sitios instalados, 50 paying ($2-3K MRR)

### Fase 2 — horas 3-9: elegir moat y reforzar
- [ ] Decidir entre las 3 propuestas según tracción de Fase 1
- [ ] Si dev-tool: shipping GitHub Action + VS Code extension + open-source el core
- [x] Si LATAM: agregar PT-BR + dashboards legales por país + Mercado Pago
- [x] Si AI: depriorizado/removido en favor de estabilidad core.
- **Meta**: $20-50K MRR

### Fase 3 — horas 9-18: segundo canal + enterprise
- [ ] Sumar el segundo canal (Shopify si fue WP, o viceversa)
- [ ] Outbound sales a enterprise (universidades, gobierno LATAM, e-commerce)
- [ ] Decidir si levantar capital o seguir bootstrapping
- **Meta**: $100K+ MRR

---

## Piloto Enterprise (estrategia corporativa)

- Apps nativas iOS/Android: el modelo de overlay web no aplica, el foco inicial debe ser 100% web.
- Propiedades web corporativas (portales de ayuda, páginas de carrera, blogs): instalable, pero el ROI inicial puede ser difícil de cuantificar sin métricas claras.
- **Pitch B2B ganador** no es vender "un overlay más", sino:
  > "Inkluyo es una herramienta que detecta y auto-arregla problemas de accesibilidad usando IA. Proponemos un piloto en su portal principal de soporte para medir directamente la reducción de tickets de soporte técnico de usuarios con dificultades de acceso."
- Esa narrativa tiene métricas claras, demuestra retorno de inversión, y es altamente defendible a nivel corporativo.

---

## Decisiones tomadas

- **Propuesta elegida**: Combinación de **LATAM-first** (ES/PT-BR) con un fuerte enfoque en **Distribución vía WordPress**.
- **Modelo de Ventas**: Freemium. El widget es gratuito con analíticas básicas. Los planes Pro desbloquean analíticas avanzadas, personalización de color y remoción del badge.
- **Diferenciador**: Marca "playful" pero profesional. Nos alejamos del tono corporativo frío de la competencia.

## Tareas Pendientes Inmediatas

- [ ] **Persistencia Real**: Conectar a PostgreSQL para guardar activaciones de por vida.
- [ ] **Pasarela de Pagos**: Integrar Stripe.
- [ ] **Soporte Brasil**: Traducir widget y landing a PT-BR.
- [ ] **Marketing**: Publicar el plugin en el repositorio oficial de WordPress.org.
- [ ] **¿Cuál canal de distribución primero?** (Recomendación: WordPress plugin)
- [ ] **¿Posicionamiento ético?** — clave para diferenciarse de accessiBe (no vendemos compliance theater)
- [ ] **¿Bootstrapping o fundraise?** — decidir en Fase 2
- [ ] **¿Open-source el core?** — solo si vamos por dev-tool angle

---

## Lecciones del MVP actual

- Shadow DOM + host element fuera de `<body>` resuelve el problema de containing block con `filter` en alto contraste
- i18n en widget + landing es estructural desde día 1, no añadido después
- La narrativa "self-aware" (landing horrible) funciona como diferenciador de marca
- El generador de snippets en `/get-started` no es funcional sin CDN público — fix-rápido con `window.location.origin`
