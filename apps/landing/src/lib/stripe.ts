import Stripe from "stripe";

if (!process.env.STRIPE_SECRET_KEY) {
  // En desarrollo sin keys, no queremos que truene todo al importar
  console.warn("STRIPE_SECRET_KEY is missing. Stripe functionality will be disabled.");
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia" as any, // Usar la versión más reciente compatible
  appInfo: {
    name: "Inkluyo SaaS",
    version: "0.1.0",
  },
});
