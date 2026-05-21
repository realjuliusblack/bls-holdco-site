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
  title: "Black Label Solutions | Custom software, not plug-and-play",
  description:
    "BLS builds custom operating engines for vertical recruitment firm founders. Your sourcing logic, your qualification rules, your brand voice. Not a template. Not a SaaS platform. Software shaped to your firm.",
  metadataBase: new URL("https://blacklabelsolutions.net"),
  openGraph: {
    title: "Custom software, not plug-and-play | Black Label Solutions",
    description:
      "BLS builds custom operating engines for vertical recruitment firm founders. Your sourcing logic, your qualification rules, your brand voice. Not a template. Not a SaaS platform.",
    url: "https://blacklabelsolutions.net",
    siteName: "Black Label Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom software, not plug-and-play | Black Label Solutions",
    description:
      "BLS builds custom operating engines for vertical recruitment firm founders. Your sourcing logic, your qualification rules, your brand voice. Not a template.",
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
