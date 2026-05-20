import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayush Mathur — Software Engineer",
  description:
    "Portfolio of Ayush Mathur — Software Engineer specializing in AI systems, cybersecurity, blockchain, and distributed software. Interning at SAP, joining New Relic.",
  keywords: [
    "Ayush Mathur",
    "Software Engineer",
    "Portfolio",
    "Cybersecurity",
    "AI",
    "Blockchain",
    "Full Stack",
    "SAP",
    "New Relic",
  ],
  authors: [{ name: "Ayush Mathur" }],
  openGraph: {
    title: "Ayush Mathur — Software Engineer",
    description:
      "Building secure, scalable systems at the edge of AI, blockchain, and distributed software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
