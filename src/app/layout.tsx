import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { BootIntro } from "@/components/ui/BootIntro";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

// Runs synchronously in <head> before paint. Adds `boot-active` to <html>
// so CSS hides the page (and pauses .blur-up) until BootIntro finishes.
// Skipped when the intro already played this session, so returning visitors
// never see a hidden-page flash.
const bootBlockerScript = `
(function() {
  try {
    if (sessionStorage.getItem('boot-played') !== '1') {
      document.documentElement.classList.add('boot-active');
    }
  } catch (e) {
    document.documentElement.classList.add('boot-active');
  }
})();
`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteDescription =
  "Boston University CS '26 grad seeking new-grad software engineering roles. ML pipelines, full-stack web, and systems projects.";

export const metadata: Metadata = {
  metadataBase: new URL("https://kenney-personal.vercel.app"),
  title: {
    template: `%s | ${portfolioData.name}`,
    default: `${portfolioData.name} - ${portfolioData.role}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    url: "https://kenney-personal.vercel.app",
    siteName: portfolioData.name,
    title: `${portfolioData.name} - ${portfolioData.role}`,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.name} - ${portfolioData.role}`,
    description: siteDescription,
  },
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script dangerouslySetInnerHTML={{ __html: bootBlockerScript }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
      >
        <Spotlight />
        <Navbar />
        <main className="min-h-screen pt-20 relative z-10">{children}</main>
        <Footer />
        <BootIntro />
      </body>
    </html>
  );
}
