import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Black Label Solutions",
  description:
    "Custom operating systems for vertical staffing firms. We build the engine. You keep the brand.",
  metadataBase: new URL("https://blacklabelsolutions.net"),
  openGraph: {
    title: "Black Label Solutions",
    description:
      "Custom operating systems for vertical staffing firms. We build the engine. You keep the brand.",
    url: "https://blacklabelsolutions.net",
    siteName: "Black Label Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Black Label Solutions",
    description:
      "Custom operating systems for vertical staffing firms. We build the engine. You keep the brand.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
