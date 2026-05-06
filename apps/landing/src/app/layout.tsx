import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Inkluyo — Web accessibility, in one line",
    template: "%s · Inkluyo",
  },
  description:
    "Make any website WCAG 2.1 / ADA-friendly with one <script> tag. The widget your visitors actually use. Dyslexia mode, high contrast, text size, and more.",
  keywords: [
    "accessibility",
    "WCAG",
    "ADA",
    "a11y",
    "accessible website",
    "widget",
    "dyslexia",
    "contrast",
    "inclusive web",
  ],
  authors: [{ name: "Inkluyo" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://inkluyo.com",
    siteName: "Inkluyo",
    title: "Inkluyo — Web accessibility, in one line",
    description: "Make any website WCAG 2.1 / ADA-friendly with one <script> tag.",
    images: [
      {
        url: "https://inkluyo.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Inkluyo - Web Accessibility Widget",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@inkluyo",
    creator: "@inkluyo",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
