import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RegisterSW from "@/components/RegisterSW";

export const metadata: Metadata = {
  title: {
    default: "Digital Store - smart searching  - smart searching | متجر المنتجات الرقمية",
    template: "%s | Digital Store - smart searching ",
  },
  description: "متجر منتجات رقمية – استلم منتجك فورًا بدون تعقيد",
  keywords: [
    "منتجات رقمية",
    "متجر رقمي",
    "خدمات رقمية",
    "Digital Products",
    "Digital Store - smart searching ",
  ],
  authors: [{ name: "Digital Store - Smart Search " }],
  creator: "Digital Store - Smart Search ",

  manifest: "/manifest.json",

  icons: {
    icon: "/favicon.ico",
  },

  openGraph: {
    title: "Digital Store - smart searching  | متجر المنتجات الرقمية",
    description: "خدمات ومنتجات رقمية مجانية وسريعة",
    type: "website",
    locale: "ar_EG",
    siteName: "Digital Store - smart searching ",
  },

  other: {
    "google-site-verification": "7XY4QFlcbO13HsbJ3M-4Pl1l9A4Pbbe-GltnYncvINA",
    "google-adsense-account": "ca-pub-4973672854580770",
  },
};

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 font-sans antialiased">

        {/* تسجيل Service Worker */}
        <RegisterSW />

        <Header />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}
