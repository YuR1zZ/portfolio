import { Afacad_Flux } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';

const afacadFlux = Afacad_Flux({
  subsets: ['latin'],
  variable: '--font-afacad',
  display: 'swap',
});

export const metadata = {
  title: "Mohammad Panahi | Portfolio",
  description: "Personal portfolio of Mohammad Panahi",
  icons: {
    icon: "/images/yuri.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${afacadFlux.variable} antialiased`}>
        {children}

        <Script
          type="module"
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"
        />
        <Script
          nomodule
          src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"
        />
      </body>
    </html>
  );
}