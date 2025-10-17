/* eslint-disable @typescript-eslint/ban-ts-comment */
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
//@ts-ignore
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PS Code | Soluções em software",
  description:
    "Desenvolvemos soluções em software sob medida para o seu negócio.",
};

const GoogleTagManagerId = process.env.NEXT_PUBLIC_GTM_ID || "GTM-XXXXXXX";
const GoogleAnalyticsId = process.env.NEXT_PUBLIC_GA_ID || "UA-XXXXXXX-X";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        {/* Fallback for loading Google Tag Manager script when user disables JS */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GoogleTagManagerId}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Loading Google Tag Manager script script */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${GoogleTagManagerId}');
                  `,
          }}
        />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GoogleAnalyticsId}`}
          strategy="afterInteractive"
          async
        />
        {/* Initialize Google Analytics */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GoogleAnalyticsId}');
          `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
