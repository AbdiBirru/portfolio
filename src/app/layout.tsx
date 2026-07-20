import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ThemeProvider from "@/components/layout/ThemeProvider";
import MotionProvider from "@/components/layout/MotionProvider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-heading", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

const siteUrl = "https://abdibirru-portfolio.vercel.app";
const siteDescription = "Full-stack developer specializing in React, Node.js, and PostgreSQL — building real products through internships, freelance work, and personal projects.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "AbdiBuilds | Full-Stack Developer", template: "%s | AbdiBuilds" },
  description: siteDescription,
  keywords: ["Abdisa Birru", "Full-Stack Developer", "React Developer", "Node.js Developer", "Software Engineer"],
  authors: [{ name: "Abdisa Birru", url: siteUrl }],
  openGraph: { title: "AbdiBuilds | Full-Stack Developer", description: siteDescription, url: siteUrl, siteName: "AbdiBuilds", type: "website" },
  twitter: { card: "summary_large_image", title: "AbdiBuilds | Full-Stack Developer", description: siteDescription },
  alternates: { canonical: siteUrl },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abdisa Birru",
  alternateName: "AbdiBuilds",
  jobTitle: "Full-Stack Developer",
  url: siteUrl,
  affiliation: { "@type": "CollegeOrUniversity", name: "Hawassa University" },
  sameAs: ["https://github.com/abdibirru", "https://www.linkedin.com/in/abdibirru", "https://x.com/DevAbdiBirru", "https://bsky.app/profile/abdibirru.bsky.social"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      </head>
      <body className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
          <MotionProvider>
            <Navbar />
            <main className="pt-20">{children}</main>
            <Footer />
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
