"use client";

import { useState } from "react";
import type { Lang } from "@/lib/i18n";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  lang: Lang;
}

export function ContactModal({ isOpen, onClose, lang }: Props) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "Chile",
    phone: "",
    website: "",
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setFormData({ name: "", email: "", country: "Chile", phone: "", website: "" });
          setSubmitted(false);
          onClose();
        }, 2000);
      } else {
        alert("Error sending message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Error sending message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const labels = {
    en: {
      title: "Talk to an accessibility expert",
      name: "Full name",
      email: "Email",
      phone: "Phone number",
      country: "Country",
      website: "Website link",
      submit: "SCHEDULE A DEMO",
      success: "Thank you! We'll contact you soon.",
      close: "Close",
    },
    es: {
      title: "Habla con un experto en Accesibilidad",
      name: "Nombre completo",
      email: "Email",
      phone: "Número de teléfono",
      country: "País",
      website: "Sitio web",
      submit: "AGENDAR UNA DEMO",
      success: "¡Gracias! Nos comunicaremos pronto.",
      close: "Cerrar",
    },
    pt: {
      title: "Fale com um especialista em acessibilidade",
      name: "Nome completo",
      email: "Email",
      phone: "Número de telefone",
      country: "País",
      website: "Site",
      submit: "AGENDAR UMA DEMO",
      success: "Obrigado! Entraremos em contato em breve.",
      close: "Fechar",
    },
  };

  const t = labels[lang];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            aria-label={t.close}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="text-4xl mb-4">✓</div>
              <p className="text-lg font-semibold text-gray-900">{t.success}</p>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{t.title}</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.name} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.email} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder=""
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.phone} <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <select
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    >
                      <option>Chile</option>
                      <option>Argentina</option>
                      <option>Brasil</option>
                      <option>Colombia</option>
                      <option>Perú</option>
                      <option>México</option>
                      <option>España</option>
                      <option>USA</option>
                      <option>Other</option>
                    </select>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+56..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {t.website} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    placeholder="https://example.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-2.5 rounded-lg transition"
                >
                  {loading ? "..." : t.submit}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </>
  );
}
