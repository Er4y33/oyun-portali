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
  title: "Oyun Portalı",
  description: "Web Programlama dersi haftalık uygulamaları: küçük tarayıcı oyunları",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: tarayıcı eklentileri <html> etiketine kendi özniteliklerini ekleyebiliyor
    // (ör. crxlauncher). Bu, sunucu ve tarayıcı HTML'i arasında zararsız bir fark yaratır; uyarıyı yalnızca bu etiket için kapatır.
    <html
      suppressHydrationWarning
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
