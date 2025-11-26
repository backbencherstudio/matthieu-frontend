import { AppConfig } from "@/config/app.config";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: AppConfig().app.name,
  description: AppConfig().app.slogan,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Translate Init Script */}
        <Script id="google-translate-init" strategy="afterInteractive">
          {`
    function googleTranslateElementInit() {
      new google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'en,fr',
        autoDisplay: false
      }, 'google_translate_element');
    }
  `}
        </Script>

        {/* Google Translate External JS */}
        <Script
          src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
          strategy="afterInteractive"
        />
      </head>
      <body className="avenir">
        <div id="google_translate_element" className="hidden"></div>
        {children}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
