"use client";

import { Afacad_Flux } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import GamingPageTransition from './gaming/components/GamingPageTransition';
import CodingPageTransition from './coding/components/CodingPageTransition';


const afacadFlux = Afacad_Flux({
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
});

export default function RootLayout({ children }) {
  const pathname = usePathname(); // client-side hook

  const isGaming = pathname.startsWith("/gaming");
  const TransitionWrapper = isGaming ? GamingPageTransition : CodingPageTransition;

  return (
    <html lang="en">
      <head>
        <Script id="reload-on-resize" strategy="afterInteractive">
          {`
            let resizeTimer;
            window.addEventListener("resize", () => {
              clearTimeout(resizeTimer);
              resizeTimer = setTimeout(() => {
                location.reload();
              }, 500);
            });
          `}
        </Script>
        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        ></Script>
        <Script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        ></Script>
      </head>
      <body className={`${afacadFlux.variable} antialiased`}>
        <TransitionWrapper>
          {children}
        </TransitionWrapper>
      </body>
    </html>
  );
}
