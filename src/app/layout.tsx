import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Store",
  description: "متجر منتجات رقمية",
  manifest: "/manifest.json",
  themeColor: "#2563eb",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body style={{ direction: "rtl", textAlign: "right" }}>
        {children}
      </body>
    </html>
  );
}
