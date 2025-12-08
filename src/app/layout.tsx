import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://personal-website-two-pi-35.vercel.app"),
  title: {
    template: `%s | ${portfolioData.name}`,
    default: `${portfolioData.name} - ${portfolioData.role}`,
  },
  description: portfolioData.about,
  keywords: [
    "Computer Science Student",
    "Software Developer",
    "Web Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Python",
    "Machine Learning",
    "Portfolio",
    "Boston University",
    "Kenney Tran",
    "CS Student",
    "Software Engineering",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/icons/KT.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <StructuredData />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Navbar />
        <main className="min-h-screen pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
