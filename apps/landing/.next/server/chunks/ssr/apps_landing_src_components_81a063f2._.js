module.exports = [
"[project]/apps/landing/src/components/horrible/SufrimoMetro.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SufrimoMetro",
    ()=>SufrimoMetro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function SufrimoMetro({ label, lang }) {
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const start = Date.now();
        const id = window.setInterval(()=>{
            setSeconds(Math.floor((Date.now() - start) / 1000));
        }, 1000);
        return ()=>window.clearInterval(id);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "status",
        "aria-live": "off",
        className: "w-full text-center py-1.5 px-3 text-[12px] font-semibold tracking-tight",
        style: {
            background: "linear-gradient(90deg, #ff1493, #ffd700, #00ced1)",
            color: "#1a1a1a",
            fontFamily: "Comic Sans MS, Comic Sans, cursive",
            borderBottom: "2px dashed #ff00ff"
        },
        children: [
            "😬 ",
            label,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                children: formatDuration(seconds, lang)
            }, void 0, false, {
                fileName: "[project]/apps/landing/src/components/horrible/SufrimoMetro.tsx",
                lineNumber: 39,
                columnNumber: 18
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/apps/landing/src/components/horrible/SufrimoMetro.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
function formatDuration(s, lang) {
    const mm = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    const pad = (n)=>n.toString().padStart(2, "0");
    if (mm === 0) return lang === "es" ? `${ss} segundos` : `${ss} seconds`;
    return `${mm}:${pad(ss)}`;
}
}),
"[project]/apps/landing/src/components/horrible/EvolvingCTA.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EvolvingCTA",
    ()=>EvolvingCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function EvolvingCTA({ lang, initial, shouting, understood, finalText }) {
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function tick() {
            const active = window.Inkluyo?.getActiveFeatures();
            if (active) setCount(active.size);
        }
        tick();
        const id = window.setInterval(tick, 600);
        return ()=>window.clearInterval(id);
    }, []);
    let label = initial;
    if (count >= 6) label = finalText;
    else if (count >= 4) label = understood;
    else if (count >= 1) label = shouting;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/${lang}/pricing`,
        className: "cta-shouting inline-flex items-center",
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/landing/src/components/horrible/EvolvingCTA.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/landing/src/components/horrible/AchievementToast.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AchievementToast",
    ()=>AchievementToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const FEATURE_TO_ACHIEVEMENT = {
    dyslexia: "readable",
    largeText: "readable",
    highContrast: "readable",
    stopAnimations: "stopChaos",
    largeCursor: "first",
    highlightLinks: "first"
};
function AchievementToast({ t }) {
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let prev = new Set();
        let masterShown = false;
        function tick() {
            const cur = window.Inkluyo?.getActiveFeatures();
            if (!cur) return;
            const newOnes = [];
            for (const f of cur)if (!prev.has(f)) newOnes.push(f);
            newOnes.forEach((f, i)=>{
                const key = FEATURE_TO_ACHIEVEMENT[f] ?? "first";
                const text = t[key];
                const id = Date.now() + i;
                setToasts((arr)=>[
                        ...arr,
                        {
                            id,
                            text
                        }
                    ]);
                window.setTimeout(()=>setToasts((arr)=>arr.filter((x)=>x.id !== id)), 4200);
            });
            if (cur.size >= 6 && !masterShown) {
                masterShown = true;
                const id = Date.now() + 999;
                setToasts((arr)=>[
                        ...arr,
                        {
                            id,
                            text: t.master
                        }
                    ]);
                window.setTimeout(()=>setToasts((arr)=>arr.filter((x)=>x.id !== id)), 5500);
            }
            if (cur.size < 6) masterShown = false;
            prev = new Set(cur);
        }
        const id = window.setInterval(tick, 500);
        return ()=>window.clearInterval(id);
    }, [
        t
    ]);
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "achievement-toast pointer-events-auto",
                style: {
                    background: "linear-gradient(135deg, #6c47ff 0%, #4f2fe0 100%)",
                    color: "white",
                    padding: "10px 18px",
                    borderRadius: 14,
                    fontWeight: 600,
                    fontSize: 13,
                    boxShadow: "0 8px 24px rgba(76, 47, 224, 0.35)",
                    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    display: "flex",
                    alignItems: "center",
                    gap: 8
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "🏆"
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            opacity: 0.7,
                            fontSize: 11
                        },
                        children: t.title
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                        lineNumber: 94,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: toast.text
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                ]
            }, toast.id, true, {
                fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                lineNumber: 75,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
}
}),
"[project]/apps/landing/src/components/horrible/ConsoleEasterEgg.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsoleEasterEgg",
    ()=>ConsoleEasterEgg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
const MESSAGES = {
    en: [
        "%c👀 Dev mode detected.",
        "Yes, this page looks bad on purpose. The widget makes it human.",
        "Curious? → /pricing"
    ],
    es: [
        "%c👀 Detectamos que abriste DevTools.",
        "Sí, la página se ve mal a propósito. El widget la vuelve humana.",
        "¿Te interesa? → /pricing"
    ],
    pt: [
        "%c👀 Modo dev detectado.",
        "Sim, esta página parece ruim de propósito. O widget a torna humana.",
        "Ficou curioso? → /pricing"
    ]
};
function ConsoleEasterEgg({ lang }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        const msgs = undefined;
    }, [
        lang
    ]);
    return null;
}
}),
"[project]/apps/landing/src/components/common/OpenWidgetButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenWidgetButton",
    ()=>OpenWidgetButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function OpenWidgetButton({ label, className }) {
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if ("TURBOPACK compile-time truthy", 1) return;
        //TURBOPACK unreachable
        ;
        let attempts;
        const id = undefined;
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: handleClick,
        className: className,
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/landing/src/components/common/OpenWidgetButton.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=apps_landing_src_components_81a063f2._.js.map