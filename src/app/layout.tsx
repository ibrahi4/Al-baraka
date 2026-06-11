import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/config/site";
import { generateLocalBusinessSchema } from "@/lib/seo/schema";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { GoogleAnalytics, GoogleTagManager } from "@/components/analytics/GoogleAnalytics";

// ============================
// تحسين الخط العربي
// ============================
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  fallback: ["system-ui", "Arial", "sans-serif"],
  adjustFontFallback: true,
});

// ============================
// METADATA
// ============================
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | خبرة أكثر من 10 سنوات في نقل الأثاث`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "شركة نقل أثاث",
    "نقل عفش",
    "شركة نقل أثاث في مصر",
    "نقل أثاث القاهرة",
    "نقل أثاث الجيزة",
    "نقل أثاث الشيخ زايد",
    "نقل أثاث التجمع الخامس",
    "نقل أثاث مدينتي",
    "نقل أثاث 6 أكتوبر",
    "فك وتركيب أثاث",
    "فك وتركيب تكييفات",
    "تغليف أثاث",
    "ونش رفع أثاث",
    "نقل مقتنيات حساسة",
    "شركة البركة",
    "نقل أثاث في كل مصر",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "ar_EG",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | خبرة أكثر من 10 سنوات`,
    description: siteConfig.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
};

// ============================
// VIEWPORT
// ============================
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#1B2A41" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ============================
// ROOT LAYOUT
// ============================
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = generateLocalBusinessSchema();

  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* Preload Hero Image - مهم جداً لـ LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/services/hero-main.webp"
          type="image/webp"
          fetchPriority="high"
        />

        {/* DNS Prefetch & Preconnect */}
        <link rel="dns-prefetch" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* GTM */}
        <GoogleTagManager />
      </head>
      <body className={cairo.className} suppressHydrationWarning>
        <GoogleAnalytics />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}