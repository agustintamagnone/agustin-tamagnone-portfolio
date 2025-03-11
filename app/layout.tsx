import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geist = localFont({
  src: [
    {
      path: "../fonts/GeistVF.woff",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Agustin Tamagnone",
  description: "Portfolio Agustin Tamagnone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geist.className}
      >
        {children}
      </body>
    </html>
  );
}
