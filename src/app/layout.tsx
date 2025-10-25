import type { ReactNode } from "react";
import type { Metadata } from "next";
import Script from 'next/script';
import { Geist, Geist_Mono } from "next/font/google";
import "@/app/globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "iSTUDIO - Interior Design Website Template Free",
  description: "",
  viewport: "width=device-width, initial-scale=1.0",
  icons: { icon: "/img/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Space+Grotesk&display=swap"
          rel="stylesheet"
        />

        {/* Icon Font Stylesheet */}
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet" />

        {/* Libraries Stylesheet */}
        <link href="/lib/animate/animate.min.css" rel="stylesheet" precedence="default" />
        <link href="/lib/owlcarousel/assets/owl.carousel.min.css" precedence="default" rel="stylesheet" />

        {/* Customized Bootstrap Stylesheet */}
        <link href="/css/bootstrap.min.css" rel="stylesheet" precedence="default" />

        {/* Template Stylesheet */}
        <link href="/css/style.css" rel="stylesheet" precedence="default" ></link>


      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}

        

        {/* <!-- JavaScript Libraries --> */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"  strategy="beforeInteractive"></Script >
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script >
        <Script src="/lib/wow/wow.min.js" strategy="afterInteractive"></Script >
        <Script src="/lib/easing/easing.min.js" strategy="afterInteractive"></Script >
        <Script src="/lib/waypoints/waypoints.min.js" strategy="afterInteractive"></Script >
        <Script src="/lib/owlcarousel/owl.carousel.min.js" strategy="afterInteractive"></Script >

        {/* <!-- Template Javascript --> */}
        <Script src="/js/main.js"  strategy="afterInteractive"></Script >
      </body>
    </html>
  );
}
