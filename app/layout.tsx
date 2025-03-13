import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

export const metadata: Metadata = {
  title: "Agustin Tamagnone",
  description: "Portfolio Agustin Tamagnone",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}