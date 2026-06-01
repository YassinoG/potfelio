import type { Metadata } from "next";
import { Geist, Geist_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Yassine Gouti | Web Developer & SAP Consultant",
  description:
    "Portfolio of Yassine Gouti — full-stack web developer and SAP PP/QM consultant based in Tunis, Tunisia.",
  keywords: [
    "web developer",
    "SAP consultant",
    "full-stack",
    "React",
    "Next.js",
    "Python",
    "SAP PP QM",
    "Tunisia",
  ],
  authors: [{ name: "Yassine Gouti", url: "https://linkedin.com/in/yassin-gouti-5a2527262" }],
  openGraph: {
    title: "Yassine Gouti | Web Developer & SAP Consultant",
    description:
      "Full-stack web developer and SAP PP/QM consultant. Building scalable platforms and integrating intelligent systems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${spaceGrotesk.variable}`}
    >
      <body className="scanlines antialiased">{children}</body>
    </html>
  );
}
