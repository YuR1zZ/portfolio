"use client";

import { Afacad_Flux } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const afacadFlux = Afacad_Flux({
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        {children}
      </body>
    </html>
  );
}
