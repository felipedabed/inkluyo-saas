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
      content: `# Complete Guide to WCAG 2.1 AA Compliance

Web accessibility has become a legal requirement, not just a nice-to-have. In 2026, over 2,000 accessibility lawsuits are filed annually in the US alone.

## What is WCAG 2.1 AA?

WCAG 2.1 AA is the international standard for web accessibility. It ensures that people with disabilities can access and use your website.

Key numbers:
- 1.3 billion people worldwide live with some form of disability
- 15% of your website visitors have accessibility needs
- 98% of websites have accessibility failures

## The 4 Pillars of WCAG Compliance

### 1. Perceivable
Users must be able to see/hear your content. This includes alt text for images, captions for videos, and sufficient color contrast.

### 2. Operable
Users must be able to navigate your site. Full keyboard navigation is essential, along with skip navigation links and large buttons.

### 3. Understandable
Users must understand your content. Use plain language, consistent navigation, and clear error messages.

### 4. Robust
Your site must work with assistive technologies. Valid HTML, proper heading hierarchy, and ARIA roles are critical.

## How to Get Started

1. Audit your site using free tools like WAVE, Axe, or Lighthouse
2. Fix critical issues like color contrast and alt text
3. Implement accessibility patterns gradually
4. Test with real assistive technologies

## The Inkluyo Advantage

Inkluyo makes it easy to add accessibility features to your existing site without redesigning everything. Our widget adds dyslexia-friendly fonts, high contrast mode, text sizing, and more—all with a single line of code.

Start today and protect your users and your business.`,
    },
    es: {
      title: "Guía Completa para Cumplir WCAG 2.1 AA en 2026",
      author: "Equipo Inkluyo",
      date: "9 de mayo, 2026",
      readTime: "8 min lectura",
      category: "Accesibilidad",
      image: "🏛️",
      excerpt: "Aprende qué significa el cumplimiento WCAG 2.1 AA y cómo implementarlo sin rediseñar tu sitio.",
      content: `# Guía Completa para Cumplir WCAG 2.1 AA

La accesibilidad web se ha convertido en un requisito legal, no solo una opción. En 2026, más de 2,000 demandas de accesibilidad se presentan anualmente solo en EE.UU.

## ¿Qué es WCAG 2.1 AA?

WCAG 2.1 AA es el estándar internacional para la accesibilidad web. Garantiza que las personas con discapacidades puedan acceder y usar tu sitio web.

Números clave:
- 1.300 millones de personas en el mundo viven con algún tipo de discapacidad
- 15% de tus visitantes web tienen necesidades de accesibilidad
- 98% de los sitios web tienen fallos de accesibilidad

## Los 4 Pilares del Cumplimiento WCAG

### 1. Perceptible
Los usuarios deben poder ver/escuchar tu contenido. Esto incluye texto alternativo para imágenes, subtítulos para videos y contraste de color suficiente.

### 2. Operable
Los usuarios deben poder navegar tu sitio. La navegación completa por teclado es esencial, junto con enlaces de omisión de navegación y botones grandes.

### 3. Comprensible
Los usuarios deben entender tu contenido. Usa lenguaje plano, navegación consistente y mensajes de error claros.

### 4. Robusto
Tu sitio debe funcionar con tecnologías de asistencia. HTML válido, jerarquía de encabezados adecuada y roles ARIA son críticos.

## Cómo Comenzar

1. Audita tu sitio usando herramientas gratuitas como WAVE, Axe o Lighthouse
2. Soluciona problemas críticos como contraste de color y texto alternativo
3. Implementa patrones de accesibilidad gradualmente
4. Prueba con tecnologías de asistencia reales

## La Ventaja de Inkluyo

Inkluyo hace que sea fácil agregar características de accesibilidad a tu sitio existente sin rediseñar todo. Nuestro widget agrega tipografías amigables para dislexia, modo de alto contraste, cambio de tamaño de texto y más, todo con una sola línea de código.

Comienza hoy y protege a tus usuarios y tu negocio.`,
    },
    pt: {
      title: "Guia Completo para Conformidade WCAG 2.1 AA em 2026",
      author: "Equipe Inkluyo",
      date: "9 de maio, 2026",
      readTime: "8 min leitura",
      category: "Acessibilidade",
      image: "🏛️",
      excerpt: "Aprenda o que significa conformidade WCAG 2.1 AA e como implementá-la.",
      content: `# Guia Completo para Conformidade WCAG 2.1 AA

A acessibilidade na web se tornou um requisito legal, não apenas uma opção. Em 2026, mais de 2.000 processos de acessibilidade são registrados anualmente apenas nos EUA.

## O que é WCAG 2.1 AA?

WCAG 2.1 AA é o padrão internacional para acessibilidade na web. Garante que pessoas com deficiências possam acessar e usar seu site.

Números-chave:
- 1,3 bilhão de pessoas em todo o mundo vivem com algum tipo de deficiência
- 15% de seus visitantes da web têm necessidades de acessibilidade
- 98% dos sites têm falhas de acessibilidade

## Os 4 Pilares da Conformidade WCAG

### 1. Perceptível
Os usuários devem poder ver/ouvir seu conteúdo. Isso inclui texto alternativo para imagens, legendas para vídeos e contraste de cor suficiente.

### 2. Operável
Os usuários devem poder navegar seu site. A navegação completa por teclado é essencial, junto com links de salto de navegação e botões grandes.

### 3. Compreensível
Os usuários devem entender seu conteúdo. Use linguagem simples, navegação consistente e mensagens de erro claras.

### 4. Robusto
Seu site deve funcionar com tecnologias de assistência. HTML válido, hierarquia de títulos apropriada e papéis ARIA são críticos.

## Como Começar

1. Faça auditoria do seu site usando ferramentas gratuitas como WAVE, Axe ou Lighthouse
2. Corrija problemas críticos como contraste de cor e texto alternativo
3. Implemente padrões de acessibilidade gradualmente
4. Teste com tecnologias de assistência reais

## A Vantagem do Inkluyo

Inkluyo facilita a adição de recursos de acessibilidade ao seu site existente sem redesenhar tudo. Nosso widget adiciona fontes amigáveis à dislexia, modo de alto contraste, redimensionamento de texto e muito mais, tudo com uma única linha de código.

Comece hoje e proteja seus usuários e seu negócio.`,
    },
  },
  "accessibility-widget-benefits": {
    en: {
      title: "Why Your E-Commerce Site Needs an Accessibility Widget",
      author: "Inkluyo Team",
      date: "May 8, 2026",
      readTime: "6 min read",
      category: "Business",
      image: "💰",
      excerpt: "Accessibility isn't just ethical—it's profitable. Discover how accessibility features reduce cart abandonment and increase conversions.",
      content: `# Why Your E-Commerce Site Needs an Accessibility Widget

Accessibility isn't just about doing the right thing—it's smart business. E-commerce sites with strong accessibility features see higher conversion rates, lower cart abandonment, and stronger customer loyalty.

## The Business Case for Accessibility

Recent data shows that accessible e-commerce sites convert better:
- Accessible sites have 20% higher conversion rates
- Users with disabilities spend more money online
- 1 in 4 adults in the US has a disability
- Accessibility-first sites retain customers longer

## Accessibility Reduces Cart Abandonment

A confusing checkout process is the #1 reason people abandon carts. When you add accessibility features, you make it easier for everyone to complete their purchase:

- High contrast mode helps users with low vision
- Text resizing helps people with dyslexia
- Keyboard navigation helps users with motor disabilities
- Animated pause stops distracting content

## Who Benefits from Accessibility?

It's not just people with permanent disabilities. Accessibility helps:
- Elderly users with declining vision
- People using mobile devices in bright sunlight
- Users with temporary injuries
- People in loud environments (captions for videos)
- Non-native speakers (high contrast improves readability)

## Real Numbers

Companies that invest in accessibility report:
- 25% increase in conversion rates
- 30% reduction in cart abandonment
- Higher customer lifetime value
- Improved brand reputation

## The Inkluyo Solution

Inkluyo makes it easy to add accessibility to your e-commerce site without expensive redesigns. Add one line of code and your customers instantly gain access to:

- Dyslexia-friendly fonts
- High contrast mode
- Text sizing
- Dark mode
- Animated pause
- Focus indicators

Your users are happier, your conversions go up, and your business grows. That's the Inkluyo difference.`,
    },
    es: {
      title: "Por Qué Tu Sitio de E-Commerce Necesita un Widget de Accesibilidad",
      author: "Equipo Inkluyo",
      date: "8 de mayo, 2026",
      readTime: "6 min lectura",
      category: "Negocios",
      image: "💰",
      excerpt: "La accesibilidad no es solo ética—es rentable. Descubre cómo las características de accesibilidad reducen el abandono del carrito y aumentan las conversiones.",
      content: `# Por Qué Tu Sitio de E-Commerce Necesita un Widget de Accesibilidad

La accesibilidad no es solo hacer lo correcto—es un buen negocio. Los sitios de e-commerce con fuertes características de accesibilidad ven tasas de conversión más altas, menos abandono de carrito y mayor lealtad del cliente.

## El Caso de Negocio para la Accesibilidad

Datos recientes muestran que los sitios de e-commerce accesibles convierten mejor:
- Los sitios accesibles tienen 20% más de tasas de conversión
- Los usuarios con discapacidades gastan más dinero en línea
- 1 de cada 4 adultos en EE.UU. tiene una discapacidad
- Los sitios con accesibilidad primero retienen clientes por más tiempo

## La Accesibilidad Reduce el Abandono del Carrito

Un proceso de compra confuso es la razón #1 por la que las personas abandonan carritos. Cuando agregas características de accesibilidad, haces que sea más fácil para todos completar su compra:

- El modo de alto contraste ayuda a usuarios con baja visión
- El cambio de tamaño de texto ayuda a personas con dislexia
- La navegación por teclado ayuda a usuarios con discapacidades motoras
- La pausa de animación detiene contenido que distrae

## ¿Quién se Beneficia de la Accesibilidad?

No es solo gente con discapacidades permanentes. La accesibilidad ayuda a:
- Usuarios mayores con visión decreciente
- Personas que usan dispositivos móviles bajo el sol brillante
- Usuarios con lesiones temporales
- Personas en entornos ruidosos (subtítulos para videos)
- Hablantes no nativos (alto contraste mejora la legibilidad)

## Números Reales

Las empresas que invierten en accesibilidad reportan:
- Aumento del 25% en tasas de conversión
- Reducción del 30% en abandono del carrito
- Mayor valor de vida del cliente
- Reputación de marca mejorada

## La Solución Inkluyo

Inkluyo facilita la adición de accesibilidad a tu sitio de e-commerce sin rediseños costosos. Agrega una línea de código y tus clientes obtienen instantáneamente acceso a:

- Tipografías amigables para dislexia
- Modo de alto contraste
- Cambio de tamaño de texto
- Modo oscuro
- Pausa de animación
- Indicadores de enfoque

Tus usuarios están más felices, tus conversiones suben y tu negocio crece. Esa es la diferencia de Inkluyo.`,
    },
    pt: {
      title: "Por Que Seu Site de E-Commerce Precisa de um Widget de Acessibilidade",
      author: "Equipe Inkluyo",
      date: "8 de maio, 2026",
      readTime: "6 min leitura",
      category: "Negócios",
      image: "💰",
      excerpt: "Acessibilidade não é apenas ética—é lucrativa. Descubra como os recursos de acessibilidade reduzem o abandono do carrinho e aumentam as conversões.",
      content: `# Por Que Seu Site de E-Commerce Precisa de um Widget de Acessibilidade

Acessibilidade não é apenas fazer a coisa certa—é um bom negócio. Sites de e-commerce com fortes recursos de acessibilidade veem taxas de conversão mais altas, menos abandono de carrinho e maior fidelidade do cliente.

## O Caso de Negócio para Acessibilidade

Dados recentes mostram que sites de e-commerce acessíveis convertem melhor:
- Sites acessíveis têm 20% mais taxas de conversão
- Usuários com deficiências gastam mais dinheiro online
- 1 em cada 4 adultos nos EUA tem uma deficiência
- Sites com acessibilidade em primeiro lugar retêm clientes por mais tempo

## A Acessibilidade Reduz o Abandono do Carrinho

Um processo de checkout confuso é a razão #1 pela qual as pessoas abandonam carrinhos. Quando você adiciona recursos de acessibilidade, torna mais fácil para todos completarem sua compra:

- Modo de alto contraste ajuda usuários com baixa visão
- Redimensionamento de texto ajuda pessoas com dislexia
- Navegação por teclado ajuda usuários com deficiências motoras
- Pausa de animação interrompe conteúdo que distrai

## Quem se Beneficia da Acessibilidade?

Não é apenas pessoas com deficiências permanentes. A acessibilidade ajuda:
- Usuários idosos com visão declinante
- Pessoas que usam dispositivos móveis sob luz solar brilhante
- Usuários com lesões temporárias
- Pessoas em ambientes barulhentos (legendas para vídeos)
- Falantes não nativos (alto contraste melhora a legibilidade)

## Números Reais

Empresas que investem em acessibilidade relatam:
- Aumento de 25% nas taxas de conversão
- Redução de 30% no abandono do carrinho
- Maior valor vitalício do cliente
- Reputação de marca aprimorada

## A Solução Inkluyo

Inkluyo facilita a adição de acessibilidade ao seu site de e-commerce sem redesenhos custosos. Adicione uma linha de código e seus clientes ganham acesso instantaneamente a:

- Fontes amigas da dislexia
- Modo de alto contraste
- Redimensionamento de texto
- Modo escuro
- Pausa de animação
- Indicadores de foco

Seus usuários estão mais felizes, suas conversões aumentam e seu negócio cresce. Essa é a diferença do Inkluyo.`,
    },
  },
  "dyslexia-friendly-fonts": {
    en: {
      title: "Dyslexia-Friendly Fonts: Making Your Content Readable for Everyone",
      author: "Inkluyo Team",
      date: "May 7, 2026",
      readTime: "7 min read",
      category: "Design",
      image: "🔤",
      excerpt: "Over 700 million people worldwide have dyslexia. Learn which fonts work best and how to implement them.",
      content: `# Dyslexia-Friendly Fonts: Making Your Content Readable for Everyone

Over 700 million people worldwide have dyslexia. That's roughly 10% of the global population. Yet most websites use fonts that are actively difficult for dyslexic readers to process.

The good news? Implementing dyslexia-friendly fonts takes minutes and can dramatically improve readability for millions of users.

## What is Dyslexia?

Dyslexia is a neurological condition that affects how the brain processes written language. People with dyslexia often see:
- Letters that appear to move or flip
- Difficulty distinguishing between similar letters (like b and d)
- Trouble tracking across lines of text
- Confusion with letter order

It's not about intelligence—many dyslexic people are highly intelligent. It's about how their visual system processes text.

## What Makes a Font Dyslexia-Friendly?

Good dyslexia fonts have:
- **Unique letter shapes**: Each letter looks distinctly different
- **Open letterforms**: More whitespace inside letters
- **Consistent baselines**: Letters sit evenly on the line
- **Weighted designs**: Top-heavy or unusual weights to prevent flipping
- **Good spacing**: More space between letters and lines

## Popular Dyslexia-Friendly Fonts

- **OpenDyslexic**: Free and specifically designed for dyslexia
- **Lexie Readable**: Professional option used by many accessibility experts
- **Comic Sans**: Often mocked, but actually quite readable for dyslexic users
- **Verdana**: Standard sans-serif that works well for dyslexia
- **Arial**: Simple and effective

## How to Implement

1. Choose a dyslexia-friendly font
2. Test it with your content
3. Increase line height (1.5 to 2)
4. Add letter spacing
5. Use a readable font size (14px minimum)

## The Impact

Users with dyslexia report:
- Faster reading speed
- Better comprehension
- Less eye strain
- Improved confidence

## Make It Easy with Inkluyo

Don't force your users to change fonts themselves. Inkluyo automatically includes dyslexia-friendly fonts that users can toggle with one click. One line of code, and your content becomes readable for everyone.`,
    },
    es: {
      title: "Tipografías Amigables para Dislexia: Haciendo tu Contenido Legible",
      author: "Equipo Inkluyo",
      date: "7 de mayo, 2026",
      readTime: "7 min lectura",
      category: "Diseño",
      image: "🔤",
      excerpt: "Más de 700 millones de personas en el mundo tienen dislexia. Aprende cuáles son las mejores tipografías y cómo implementarlas.",
      content: `# Tipografías Amigables para Dislexia: Haciendo tu Contenido Legible

Más de 700 millones de personas en el mundo tienen dislexia. Eso es aproximadamente el 10% de la población global. Sin embargo, la mayoría de los sitios web utilizan tipografías que son activamente difíciles de procesar para lectores con dislexia.

La buena noticia? Implementar tipografías amigables para dislexia toma minutos y puede mejorar dramáticamente la legibilidad para millones de usuarios.

## ¿Qué es la Dislexia?

La dislexia es una condición neurológica que afecta cómo el cerebro procesa el lenguaje escrito. Las personas con dislexia a menudo ven:
- Letras que parecen moverse o voltearse
- Dificultad para distinguir entre letras similares (como b y d)
- Problemas para seguir a través de líneas de texto
- Confusión con el orden de letras

No es sobre inteligencia—muchas personas con dislexia son altamente inteligentes. Se trata de cómo su sistema visual procesa el texto.

## ¿Qué Hace que una Tipografía sea Amigable para Dislexia?

Las buenas tipografías para dislexia tienen:
- **Formas de letra únicas**: Cada letra se ve distintivamente diferente
- **Formas de letra abiertas**: Más espacio en blanco dentro de las letras
- **Líneas de base consistentes**: Las letras se sientan uniformemente en la línea
- **Diseños ponderados**: Superior-pesado u pesos inusuales para evitar el volteo
- **Buen espaciado**: Más espacio entre letras y líneas

## Tipografías Populares Amigables para Dislexia

- **OpenDyslexic**: Gratuita y diseñada específicamente para dislexia
- **Lexie Readable**: Opción profesional utilizada por muchos expertos en accesibilidad
- **Comic Sans**: A menudo criticada, pero muy legible para usuarios con dislexia
- **Verdana**: Sans-serif estándar que funciona bien para dislexia
- **Arial**: Simple y efectiva

## Cómo Implementar

1. Elige una tipografía amigable para dislexia
2. Pruébala con tu contenido
3. Aumenta la altura de línea (1.5 a 2)
4. Agrega espaciado de letras
5. Usa un tamaño de fuente legible (mínimo 14px)

## El Impacto

Los usuarios con dislexia reportan:
- Velocidad de lectura más rápida
- Mejor comprensión
- Menos fatiga ocular
- Mayor confianza

## Hazlo Fácil con Inkluyo

No obligues a tus usuarios a cambiar tipografías ellos mismos. Inkluyo incluye automáticamente tipografías amigables para dislexia que los usuarios pueden activar con un solo clic. Una línea de código y tu contenido se vuelve legible para todos.`,
    },
    pt: {
      title: "Fontes Amigáveis à Dislexia: Tornando Seu Conteúdo Legível",
      author: "Equipe Inkluyo",
      date: "7 de maio, 2026",
      readTime: "7 min leitura",
      category: "Design",
      image: "🔤",
      excerpt: "Mais de 700 milhões de pessoas no mundo têm dislexia. Saiba quais fontes funcionam melhor e como implementá-las.",
      content: `# Fontes Amigáveis à Dislexia: Tornando Seu Conteúdo Legível

Mais de 700 milhões de pessoas no mundo têm dislexia. Isso é aproximadamente 10% da população global. No entanto, a maioria dos sites usa fontes que são ativamente difíceis para leitores com dislexia processar.

A boa notícia? Implementar fontes amigáveis à dislexia leva minutos e pode melhorar dramaticamente a legibilidade para milhões de usuários.

## O que é Dislexia?

Dislexia é uma condição neurológica que afeta como o cérebro processa a linguagem escrita. Pessoas com dislexia frequentemente veem:
- Letras que parecem se mover ou virar
- Dificuldade em distinguir entre letras semelhantes (como b e d)
- Problemas ao rastrear através das linhas de texto
- Confusão com a ordem das letras

Não é sobre inteligência—muitas pessoas com dislexia são altamente inteligentes. É sobre como seu sistema visual processa o texto.

## O que Torna uma Fonte Amigável à Dislexia?

Boas fontes para dislexia têm:
- **Formas de letra únicas**: Cada letra parece distintivamente diferente
- **Formas de letra abertas**: Mais espaço em branco dentro das letras
- **Linhas de base consistentes**: As letras se assentam uniformemente na linha
- **Designs ponderados**: Peso superior ou pesos incomuns para evitar inversão
- **Bom espaçamento**: Mais espaço entre letras e linhas

## Fontes Populares Amigáveis à Dislexia

- **OpenDyslexic**: Gratuita e projetada especificamente para dislexia
- **Lexie Readable**: Opção profissional usada por muitos especialistas em acessibilidade
- **Comic Sans**: Frequentemente ridicularizada, mas muito legível para usuários com dislexia
- **Verdana**: Sans-serif padrão que funciona bem para dislexia
- **Arial**: Simples e eficaz

## Como Implementar

1. Escolha uma fonte amigável à dislexia
2. Teste-a com seu conteúdo
3. Aumente a altura da linha (1,5 a 2)
4. Adicione espaçamento de letra
5. Use um tamanho de fonte legível (mínimo 14px)

## O Impacto

Usuários com dislexia relatam:
- Velocidade de leitura mais rápida
- Melhor compreensão
- Menos fadiga ocular
- Confiança aumentada

## Facilite com Inkluyo

Não force seus usuários a mudarem fontes eles mesmos. Inkluyo inclui automaticamente fontes amigáveis à dislexia que os usuários podem ativar com um único clique. Uma linha de código e seu conteúdo se torna legível para todos.`,
    },
  },
  "ada-compliance-requirements": {
    en: {
      title: "ADA Compliance Requirements for Websites: What You Need to Know",
      author: "Inkluyo Team",
      date: "May 6, 2026",
      readTime: "9 min read",
      category: "Legal",
      image: "⚖️",
      excerpt: "The Americans with Disabilities Act applies to websites. Here's what you must do to avoid legal issues.",
      content: `# ADA Compliance Requirements for Websites

The Americans with Disabilities Act (ADA) applies to websites. If you operate a website and serve the public, you must ensure it's accessible. Failing to do so exposes your business to lawsuits.

## What is the ADA?

The Americans with Disabilities Act is a federal civil rights law that prohibits discrimination against individuals with disabilities. Originally passed in 1990, it has been interpreted by courts to include websites and digital content.

## Does the ADA Apply to Me?

The ADA applies if your website:
- Is operated by a business
- Serves the public
- Provides goods or services

This includes:
- E-commerce sites
- Service provider websites
- Educational institutions
- Government agencies
- Non-profit organizations

## Legal Reality in 2026

Over 2,000 accessibility lawsuits are filed annually in the US. These aren't theoretical risks—they're real consequences:
- Target: $5.3 million settlement
- Nike: $1 million settlement
- Ikea: $6.2 million settlement
- Amazon: Ongoing litigation

## Technical Requirements

The legal standard is WCAG 2.1 Level AA. This includes:
- Alt text for all images
- Keyboard navigation
- Color contrast ratios
- Video captions
- Proper heading hierarchy
- Form labels and validation

## Action Items

1. Audit your website for accessibility issues
2. Document your accessibility efforts
3. Create a formal accessibility statement
4. Fix critical issues
5. Test regularly
6. Get professional help if needed

## The Smart Approach

Don't wait for a lawsuit. Proactively make your site accessible:
- Show customers you care
- Reduce legal risk
- Reach more users
- Improve SEO
- Build brand loyalty

## Inkluyo's Role

Inkluyo complies with WCAG 2.1 AA and ADA requirements. Our widget provides essential accessibility features that help you demonstrate good faith compliance efforts.`,
    },
    es: {
      title: "Requisitos de Cumplimiento ADA para Sitios Web: Lo Que Necesitas Saber",
      author: "Equipo Inkluyo",
      date: "6 de mayo, 2026",
      readTime: "9 min lectura",
      category: "Legal",
      image: "⚖️",
      excerpt: "La Ley de Estadounidenses con Discapacidades se aplica a los sitios web. Aquí está lo que debes hacer para evitar problemas legales.",
      content: `# Requisitos de Cumplimiento ADA para Sitios Web

La Ley de Estadounidenses con Discapacidades (ADA) se aplica a los sitios web. Si operas un sitio web y sirves al público, debes asegurar que sea accesible. No hacerlo expone tu negocio a demandas.

## ¿Qué es la ADA?

La Ley de Estadounidenses con Discapacidades es una ley federal de derechos civiles que prohíbe la discriminación contra personas con discapacidades. Originalmente aprobada en 1990, ha sido interpretada por los tribunales para incluir sitios web y contenido digital.

## ¿Se me Aplica la ADA?

La ADA se aplica si tu sitio web:
- Es operado por un negocio
- Sirve al público
- Proporciona bienes o servicios

Esto incluye:
- Sitios de e-commerce
- Sitios web de proveedores de servicios
- Instituciones educativas
- Agencias gubernamentales
- Organizaciones sin ánimo de lucro

## Realidad Legal en 2026

Más de 2,000 demandas de accesibilidad se presentan anualmente en EE.UU. Estos no son riesgos teóricos—son consecuencias reales:
- Target: acuerdo de $5.3 millones
- Nike: acuerdo de $1 millón
- Ikea: acuerdo de $6.2 millones
- Amazon: litigio en curso

## Requisitos Técnicos

El estándar legal es WCAG 2.1 Nivel AA. Esto incluye:
- Texto alternativo para todas las imágenes
- Navegación por teclado
- Ratios de contraste de color
- Subtítulos de vídeo
- Jerarquía de encabezados apropiada
- Etiquetas de formulario y validación

## Elementos de Acción

1. Audita tu sitio web para problemas de accesibilidad
2. Documenta tus esfuerzos de accesibilidad
3. Crea una declaración formal de accesibilidad
4. Soluciona problemas críticos
5. Prueba regularmente
6. Obtén ayuda profesional si es necesario

## El Enfoque Inteligente

No esperes a una demanda. Haz que tu sitio sea accesible de forma proactiva:
- Muestra a los clientes que te importa
- Reduce riesgo legal
- Alcanza a más usuarios
- Mejora SEO
- Construye lealtad de marca

## El Rol de Inkluyo

Inkluyo cumple con WCAG 2.1 Nivel AA y requisitos de ADA. Nuestro widget proporciona características de accesibilidad esenciales que te ayudan a demostrar esfuerzos de cumplimiento de buena fe.`,
    },
    pt: {
      title: "Requisitos de Conformidade ADA para Sites: O Que Você Precisa Saber",
      author: "Equipe Inkluyo",
      date: "6 de maio, 2026",
      readTime: "9 min leitura",
      category: "Legal",
      image: "⚖️",
      excerpt: "A Lei dos Americanos com Deficiências se aplica aos sites. Aqui está o que você deve fazer para evitar problemas legais.",
      content: `# Requisitos de Conformidade ADA para Sites

A Lei dos Americanos com Deficiências (ADA) se aplica aos sites. Se você operar um site e servir ao público, deve garantir que seja acessível. Não fazer isso expõe seu negócio a processos.

## O que é ADA?

A Lei dos Americanos com Deficiências é uma lei federal de direitos civis que proíbe discriminação contra pessoas com deficiências. Originalmente aprovada em 1990, foi interpretada pelos tribunais para incluir sites e conteúdo digital.

## A ADA se Aplica a Mim?

A ADA se aplica se seu site:
- É operado por uma empresa
- Serve ao público
- Fornece bens ou serviços

Isso inclui:
- Sites de e-commerce
- Sites de provedores de serviços
- Instituições educacionais
- Agências governamentais
- Organizações sem fins lucrativos

## Realidade Legal em 2026

Mais de 2.000 processos de acessibilidade são registrados anualmente nos EUA. Esses não são riscos teóricos—são consequências reais:
- Target: acordo de $5,3 milhões
- Nike: acordo de $1 milhão
- Ikea: acordo de $6,2 milhões
- Amazon: litígio em andamento

## Requisitos Técnicos

O padrão legal é WCAG 2.1 Nível AA. Isso inclui:
- Texto alternativo para todas as imagens
- Navegação por teclado
- Proporções de contraste de cor
- Legendas de vídeo
- Hierarquia de títulos apropriada
- Rótulos de formulário e validação

## Itens de Ação

1. Audite seu site para problemas de acessibilidade
2. Documente seus esforços de acessibilidade
3. Crie uma declaração formal de acessibilidade
4. Corrija problemas críticos
5. Teste regularmente
6. Obtenha ajuda profissional se necessário

## A Abordagem Inteligente

Não espere por um processo. Torne seu site acessível proativamente:
- Mostre aos clientes que você se importa
- Reduza riscos legais
- Alcance mais usuários
- Melhore SEO
- Construa lealdade de marca

## O Papel do Inkluyo

Inkluyo está em conformidade com WCAG 2.1 Nível AA e requisitos de ADA. Nosso widget fornece recursos essenciais de acessibilidade que ajudam você a demonstrar esforços de conformidade de boa fé.`,
    },
  },
  "contrast-ratios-wcag": {
    en: {
      title: "Color Contrast Ratios: The Complete WCAG Guide",
      author: "Inkluyo Team",
      date: "May 5, 2026",
      readTime: "6 min read",
      category: "Technical",
      image: "🎨",
      excerpt: "Understand WCAG color contrast requirements and how to test your site for compliance.",
      content: `# Color Contrast Ratios: The Complete WCAG Guide

Color contrast is one of the most important—and most commonly violated—WCAG requirements. Poor contrast makes text unreadable for people with low vision, and affects readability for everyone.

## What is Contrast Ratio?

Contrast ratio is the difference in brightness between two colors, expressed as a ratio. WCAG defines specific minimum ratios:

- **4.5:1** for normal text (AA level)
- **3:1** for large text (18pt+ or 14pt+ bold)
- **7:1** for AAA level

## Why It Matters

Poor contrast affects:
- People with low vision
- People with color blindness
- People reading on mobile devices in bright sunlight
- Older users with declining eyesight
- Anyone reading on a low-quality screen

## Testing Your Site

Tools you can use:
- WebAIM Contrast Checker
- Axe DevTools
- WAVE Extension
- Color Contrast Analyzer

Simply enter foreground and background colors and check the ratio.

## Common Violations

- Gray text on white background
- Light text on light background
- Dark text on dark background
- Using color alone to convey information

## How to Fix

1. Increase the darkness difference
2. Use complementary colors
3. Test with real users
4. Use professional design tools
5. Test in different lighting conditions

## Tools and Resources

WebAIM's Color Contrast Checker is free and easy to use. Just input your colors and it tells you if you meet AA or AAA standards.

## Make It Automatic with Inkluyo

Inkluyo's high contrast mode automatically creates perfect contrast ratios for your entire site. Users can toggle it with one click, and you maintain compliance.`,
    },
    es: {
      title: "Proporciones de Contraste de Color: La Guía Completa de WCAG",
      author: "Equipo Inkluyo",
      date: "5 de mayo, 2026",
      readTime: "6 min lectura",
      category: "Técnico",
      image: "🎨",
      excerpt: "Entiende los requisitos de contraste de color de WCAG y cómo probar tu sitio para cumplimiento.",
      content: `# Proporciones de Contraste de Color: La Guía Completa de WCAG

El contraste de color es uno de los requisitos de WCAG más importantes—y más comúnmente violados. El contraste deficiente hace que el texto sea ilegible para personas con baja visión, y afecta la legibilidad para todos.

## ¿Qué es la Proporción de Contraste?

La proporción de contraste es la diferencia de brillo entre dos colores, expresada como una proporción. WCAG define proporciones mínimas específicas:

- **4.5:1** para texto normal (nivel AA)
- **3:1** para texto grande (18pt+ o 14pt+ negrita)
- **7:1** para nivel AAA

## Por Qué Importa

El contraste deficiente afecta a:
- Personas con baja visión
- Personas con daltonismo
- Personas que leen en dispositivos móviles bajo el sol brillante
- Usuarios mayores con visión decreciente
- Cualquier persona que lea en una pantalla de baja calidad

## Probando Tu Sitio

Herramientas que puedes usar:
- Verificador de Contraste WebAIM
- Herramientas Axe DevTools
- Extensión WAVE
- Analizador de Contraste de Color

Simplemente ingresa colores de primer plano y fondo y verifica la proporción.

## Violaciones Comunes

- Texto gris sobre fondo blanco
- Texto claro sobre fondo claro
- Texto oscuro sobre fondo oscuro
- Usar color solo para transmitir información

## Cómo Arreglarlo

1. Aumenta la diferencia de oscuridad
2. Usa colores complementarios
3. Prueba con usuarios reales
4. Usa herramientas de diseño profesional
5. Prueba en diferentes condiciones de iluminación

## Herramientas y Recursos

El Verificador de Contraste de Color de WebAIM es gratuito y fácil de usar. Solo ingresa tus colores y te dice si cumples con estándares AA o AAA.

## Hazlo Automático con Inkluyo

El modo de alto contraste de Inkluyo crea automáticamente proporciones de contraste perfectas para tu sitio completo. Los usuarios pueden alternarlo con un clic, y mantienes cumplimiento.`,
    },
    pt: {
      title: "Proporções de Contraste de Cor: O Guia Completo de WCAG",
      author: "Equipe Inkluyo",
      date: "5 de maio, 2026",
      readTime: "6 min leitura",
      category: "Técnico",
      image: "🎨",
      excerpt: "Entenda os requisitos de contraste de cor de WCAG e como testar seu site para conformidade.",
      content: `# Proporções de Contraste de Cor: O Guia Completo de WCAG

Contraste de cor é um dos requisitos de WCAG mais importantes—e mais comumente violados. Contraste deficiente torna o texto ilegível para pessoas com baixa visão e afeta a legibilidade para todos.

## O que é Proporção de Contraste?

Proporção de contraste é a diferença de brilho entre duas cores, expressa como uma proporção. WCAG define proporções mínimas específicas:

- **4,5:1** para texto normal (nível AA)
- **3:1** para texto grande (18pt+ ou 14pt+ negrito)
- **7:1** para nível AAA

## Por Que Importa

Contraste deficiente afeta:
- Pessoas com baixa visão
- Pessoas com daltonismo
- Pessoas lendo em dispositivos móveis sob luz solar brilhante
- Usuários mais velhos com visão declínante
- Qualquer pessoa lendo em uma tela de baixa qualidade

## Testando Seu Site

Ferramentas que você pode usar:
- Verificador de Contraste WebAIM
- Ferramentas Axe DevTools
- Extensão WAVE
- Analisador de Contraste de Cor

Basta inserir cores de primeiro plano e fundo e verificar a proporção.

## Violações Comuns

- Texto cinza sobre fundo branco
- Texto claro sobre fundo claro
- Texto escuro sobre fundo escuro
- Usar cor única para transmitir informações

## Como Corrigir

1. Aumente a diferença de brilho
2. Use cores complementares
3. Teste com usuários reais
4. Use ferramentas de design profissional
5. Teste em diferentes condições de iluminação

## Ferramentas e Recursos

O Verificador de Contraste de Cor de WebAIM é gratuito e fácil de usar. Basta inserir suas cores e ele informa se você atende aos padrões AA ou AAA.

## Torne Automático com Inkluyo

Modo de alto contraste do Inkluyo cria automaticamente proporções de contraste perfeitas para seu site inteiro. Os usuários podem alterná-lo com um clique e você mantém conformidade.`,
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
                  if (line.startsWith("### ")) {
                    return `<h4 class="text-xl font-bold mt-6 mb-3 text-slate-900">${line.slice(4)}</h4>`;
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
