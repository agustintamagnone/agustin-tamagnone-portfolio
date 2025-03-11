import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "../public/fonts/GeistVF.woff",
      weight: "400",
      style: "normal",
    },
  ],
  display: 'swap',
  variable: "--font-geist"
});

export const metadata: Metadata = {
  title: "Agustin Tamagnone",
  description: "Portfolio Agustin Tamagnone",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={geist.variable}>
        {children}
      </body>
    </html>
  );
}
