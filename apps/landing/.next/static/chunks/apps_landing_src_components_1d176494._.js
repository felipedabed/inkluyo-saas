(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/apps/landing/src/components/horrible/SufrimoMetro.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SufrimoMetro",
    ()=>SufrimoMetro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function SufrimoMetro(param) {
    let { label, lang } = param;
    _s();
    const [seconds, setSeconds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SufrimoMetro.useEffect": ()=>{
            const start = Date.now();
            const id = window.setInterval({
                "SufrimoMetro.useEffect.id": ()=>{
                    setSeconds(Math.floor((Date.now() - start) / 1000));
                }
            }["SufrimoMetro.useEffect.id"], 1000);
            return ({
                "SufrimoMetro.useEffect": ()=>window.clearInterval(id)
            })["SufrimoMetro.useEffect"];
        }
    }["SufrimoMetro.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
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
_s(SufrimoMetro, "mcG2hTHI4q8+uIAAnRxppoT2y1s=");
_c = SufrimoMetro;
function formatDuration(s, lang) {
    const mm = Math.floor(s / 60);
    const ss = Math.floor(s % 60);
    const pad = (n)=>n.toString().padStart(2, "0");
    if (mm === 0) return lang === "es" ? "".concat(ss, " segundos") : "".concat(ss, " seconds");
    return "".concat(mm, ":").concat(pad(ss));
}
var _c;
__turbopack_context__.k.register(_c, "SufrimoMetro");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/landing/src/components/horrible/EvolvingCTA.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EvolvingCTA",
    ()=>EvolvingCTA
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function EvolvingCTA(param) {
    let { lang, initial, shouting, understood, finalText } = param;
    _s();
    const [count, setCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EvolvingCTA.useEffect": ()=>{
            function tick() {
                var _window_Inkluyo;
                const active = (_window_Inkluyo = window.Inkluyo) === null || _window_Inkluyo === void 0 ? void 0 : _window_Inkluyo.getActiveFeatures();
                if (active) setCount(active.size);
            }
            tick();
            const id = window.setInterval(tick, 600);
            return ({
                "EvolvingCTA.useEffect": ()=>window.clearInterval(id)
            })["EvolvingCTA.useEffect"];
        }
    }["EvolvingCTA.useEffect"], []);
    let label = initial;
    if (count >= 6) label = finalText;
    else if (count >= 4) label = understood;
    else if (count >= 1) label = shouting;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: "/".concat(lang, "/pricing"),
        className: "cta-shouting inline-flex items-center",
        children: label
    }, void 0, false, {
        fileName: "[project]/apps/landing/src/components/horrible/EvolvingCTA.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_s(EvolvingCTA, "/xL7qdScToREtqzbt5GZ1kHtYjQ=");
_c = EvolvingCTA;
var _c;
__turbopack_context__.k.register(_c, "EvolvingCTA");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/landing/src/components/horrible/AchievementToast.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AchievementToast",
    ()=>AchievementToast
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const FEATURE_TO_ACHIEVEMENT = {
    dyslexia: "readable",
    largeText: "readable",
    highContrast: "readable",
    stopAnimations: "stopChaos",
    largeCursor: "first",
    highlightLinks: "first"
};
function AchievementToast(param) {
    let { t } = param;
    _s();
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AchievementToast.useEffect": ()=>{
            let prev = new Set();
            let masterShown = false;
            function tick() {
                var _window_Inkluyo;
                const cur = (_window_Inkluyo = window.Inkluyo) === null || _window_Inkluyo === void 0 ? void 0 : _window_Inkluyo.getActiveFeatures();
                if (!cur) return;
                const newOnes = [];
                for (const f of cur)if (!prev.has(f)) newOnes.push(f);
                newOnes.forEach({
                    "AchievementToast.useEffect.tick": (f, i)=>{
                        var _FEATURE_TO_ACHIEVEMENT_f;
                        const key = (_FEATURE_TO_ACHIEVEMENT_f = FEATURE_TO_ACHIEVEMENT[f]) !== null && _FEATURE_TO_ACHIEVEMENT_f !== void 0 ? _FEATURE_TO_ACHIEVEMENT_f : "first";
                        const text = t[key];
                        const id = Date.now() + i;
                        setToasts({
                            "AchievementToast.useEffect.tick": (arr)=>[
                                    ...arr,
                                    {
                                        id,
                                        text
                                    }
                                ]
                        }["AchievementToast.useEffect.tick"]);
                        window.setTimeout({
                            "AchievementToast.useEffect.tick": ()=>setToasts({
                                    "AchievementToast.useEffect.tick": (arr)=>arr.filter({
                                            "AchievementToast.useEffect.tick": (x)=>x.id !== id
                                        }["AchievementToast.useEffect.tick"])
                                }["AchievementToast.useEffect.tick"])
                        }["AchievementToast.useEffect.tick"], 4200);
                    }
                }["AchievementToast.useEffect.tick"]);
                if (cur.size >= 6 && !masterShown) {
                    masterShown = true;
                    const id = Date.now() + 999;
                    setToasts({
                        "AchievementToast.useEffect.tick": (arr)=>[
                                ...arr,
                                {
                                    id,
                                    text: t.master
                                }
                            ]
                    }["AchievementToast.useEffect.tick"]);
                    window.setTimeout({
                        "AchievementToast.useEffect.tick": ()=>setToasts({
                                "AchievementToast.useEffect.tick": (arr)=>arr.filter({
                                        "AchievementToast.useEffect.tick": (x)=>x.id !== id
                                    }["AchievementToast.useEffect.tick"])
                            }["AchievementToast.useEffect.tick"])
                    }["AchievementToast.useEffect.tick"], 5500);
                }
                if (cur.size < 6) masterShown = false;
                prev = new Set(cur);
            }
            const id = window.setInterval(tick, 500);
            return ({
                "AchievementToast.useEffect": ()=>window.clearInterval(id)
            })["AchievementToast.useEffect"];
        }
    }["AchievementToast.useEffect"], [
        t
    ]);
    if (toasts.length === 0) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed top-20 left-1/2 -translate-x-1/2 z-50 flex flex-col gap-2 pointer-events-none",
        children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        children: "🏆"
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "·"
                    }, void 0, false, {
                        fileName: "[project]/apps/landing/src/components/horrible/AchievementToast.tsx",
                        lineNumber: 95,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(AchievementToast, "oL0MrtDCqig+amxuKH2EOlnBcjg=");
_c = AchievementToast;
var _c;
__turbopack_context__.k.register(_c, "AchievementToast");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/landing/src/components/horrible/ConsoleEasterEgg.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConsoleEasterEgg",
    ()=>ConsoleEasterEgg
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
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
function ConsoleEasterEgg(param) {
    let { lang } = param;
    _s();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConsoleEasterEgg.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (window.__inkluyoEgg) return;
            window.__inkluyoEgg = true;
            const msgs = MESSAGES[lang];
            console.log(msgs[0], "background: linear-gradient(135deg, #6c47ff, #4f2fe0); color: white; padding: 6px 12px; border-radius: 6px; font-weight: 700;");
            console.log("%c".concat(msgs[1]), "color: #6c47ff; font-weight: 600;");
            console.log("%c".concat(msgs[2]), "color: #888;");
        }
    }["ConsoleEasterEgg.useEffect"], [
        lang
    ]);
    return null;
}
_s(ConsoleEasterEgg, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ConsoleEasterEgg;
var _c;
__turbopack_context__.k.register(_c, "ConsoleEasterEgg");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/apps/landing/src/components/common/OpenWidgetButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OpenWidgetButton",
    ()=>OpenWidgetButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function OpenWidgetButton(param) {
    let { label, className } = param;
    _s();
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "OpenWidgetButton.useCallback[handleClick]": ()=>{
            var _window_Inkluyo;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if ((_window_Inkluyo = window.Inkluyo) === null || _window_Inkluyo === void 0 ? void 0 : _window_Inkluyo.open) {
                window.Inkluyo.open();
                return;
            }
            let attempts = 0;
            const id = window.setInterval({
                "OpenWidgetButton.useCallback[handleClick].id": ()=>{
                    var _window_Inkluyo;
                    attempts += 1;
                    if ((_window_Inkluyo = window.Inkluyo) === null || _window_Inkluyo === void 0 ? void 0 : _window_Inkluyo.open) {
                        window.clearInterval(id);
                        window.Inkluyo.open();
                    } else if (attempts > 20) {
                        window.clearInterval(id);
                    }
                }
            }["OpenWidgetButton.useCallback[handleClick].id"], 100);
        }
    }["OpenWidgetButton.useCallback[handleClick]"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(OpenWidgetButton, "PRIOWs9bezaAbp8UlGmbaZMoYYA=");
_c = OpenWidgetButton;
var _c;
__turbopack_context__.k.register(_c, "OpenWidgetButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=apps_landing_src_components_1d176494._.js.map