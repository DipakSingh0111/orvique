import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { getOrviqueSections } from "@/lib/orvique";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Orvique - Events & Celebrations",
  description: "Moments Beyond Expectations - Luxury Events & Celebrations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const sections = getOrviqueSections();

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF7F2] text-[#0E2038]">
        <Suspense fallback={null}>
          <Navbar data={sections.Header?.variants?.OrviqueHeader1} />
        </Suspense>
        {children}
        <Footer data={sections.Footer?.variants?.OrviqueFooter1} />
      </body>
    </html>
  );
}
