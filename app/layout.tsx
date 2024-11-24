import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// all components 
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import PageChangeEffect from "@/components/StairTansition";
const Jetbrains_Mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainsMono'
});

export const metadata: Metadata = {
  title: "Vincent's Porfolio",
  description: "A beautiful Portfolio Website coded in Next.js, TypeScript, HTML, TailwindCSS, and framer-motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Jetbrains_Mono.variable}>
        <Header/>
        <PageChangeEffect/>
        <PageTransition> {children} </PageTransition>
      </body>
    </html>
  );
}
