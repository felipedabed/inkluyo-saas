module.exports = [
"[project]/apps/landing/.next-internal/server/app/api/analytics/route/actions.js [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__, module, exports) => {

}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[project]/apps/landing/src/app/api/analytics/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
;
// Persistencia robusta para desarrollo/demo
const getActivations = ()=>{
    const g = globalThis;
    if (!g._inkluyo_activations) {
        g._inkluyo_activations = [
            {
                time: "2m",
                page: "/",
                feature: "dyslexia",
                country: "🇺🇸 US"
            },
            {
                time: "5m",
                page: "/pricing",
                feature: "highContrast",
                country: "🇲🇽 MX"
            },
            {
                time: "12m",
                page: "/about",
                feature: "stopAnimations",
                country: "🇪🇸 ES"
            },
            {
                time: "14m",
                page: "/cart",
                feature: "largeText",
                country: "🇨🇱 CL"
            }
        ];
    }
    return g._inkluyo_activations;
};
async function POST(req) {
    try {
        const body = await req.json().catch(()=>({}));
        const { siteId, feature, url } = body;
        if (!siteId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing siteId"
        }, {
            status: 400
        });
        let path = "/";
        try {
            path = new URL(url).pathname;
        } catch  {
            path = url || "/";
        }
        getActivations().unshift({
            time: "Just now",
            page: path,
            feature: feature || "unknown",
            country: "🌐 Web"
        });
        const activations = getActivations();
        if (activations.length > 50) {
            activations.pop();
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true
        });
    } catch (error) {
        console.error("[Analytics API POST Error]:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal Server Error"
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const siteId = searchParams.get("siteId");
        if (!siteId) return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Missing siteId"
        }, {
            status: 400
        });
        const activations = getActivations();
        const recent = activations.slice(0, 8);
        const totalActivations = 1247 + activations.length;
        const featureCounts = [
            {
                f: "Dyslexia",
                n: 150 + activations.filter((a)=>a.feature === 'dyslexia').length
            },
            {
                f: "High contrast",
                n: 230 + activations.filter((a)=>a.feature === 'highContrast').length
            },
            {
                f: "Stop animations",
                n: 85 + activations.filter((a)=>a.feature === 'stopAnimations').length
            },
            {
                f: "Large text",
                n: 110 + activations.filter((a)=>a.feature === 'largeText').length
            }
        ].sort((a, b)=>b.n - a.n);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            activations: totalActivations,
            uniqueUsers: Math.floor(totalActivations * 0.65),
            top: activations[0]?.feature || "highContrast",
            compliance: 85,
            recent,
            featureCounts
        });
    } catch (error) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: error.message || "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7f1b949a._.js.map