import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tameka Wills — Operator, Analyst, Founder",
  description:
    "Portfolio of Tameka Wills — systems thinker, operator, and founder based in Pittsburgh, PA.",
  openGraph: {
    title: "Tameka Wills — Operator, Analyst, Founder",
    description:
      "Portfolio of Tameka Wills — systems thinker, operator, and founder based in Pittsburgh, PA.",
    url: "https://tamekawills.com",
    siteName: "Tameka Wills",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tameka Wills — Operator, Analyst, Founder",
    description:
      "Portfolio of Tameka Wills — systems thinker, operator, and founder based in Pittsburgh, PA.",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
