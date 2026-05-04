import type { Metadata, Viewport } from "next";
import { Poppins, Bebas_Neue, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Spotlight } from "@/components/ui/Spotlight";
import { BootIntro } from "@/components/ui/BootIntro";
import { portfolioData } from "@/data/portfolio";
import { StructuredData } from "@/components/seo/StructuredData";

// Runs synchronously in <head> before paint. Adds `boot-active` to <html>
// so CSS hides the page (and pauses .blur-up) until BootIntro finishes.
// TEMP: gating disabled so the boot intro plays on every load while we verify.
const bootBlockerScript = `
(function() {
  try {
    document.documentElement.classList.add('boot-active');
  } catch (e) {}
})();
`;

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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

export const metadata: Metadata = {
  metadataBase: new URL("https://kenney-personal.vercel.app"),
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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <StructuredData />
        <script dangerouslySetInnerHTML={{ __html: bootBlockerScript }} />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${bebasNeue.variable} ${spaceGrotesk.variable} antialiased bg-slate-950 text-slate-50 selection:bg-primary/30 selection:text-primary`}
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
