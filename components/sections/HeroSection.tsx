"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/orvique.types";

export default function HeroSection({ data }: SectionProps.Hero) {
  if (!data) return null;

  const bannerSrc = data.image?.src || "/images/Hero-banner.png";
  const bannerAlt = data.image?.alt || "Moments Beyond Expectations";
  const titleTop = data.heading?.main || "Moments";
  const titleMiddle = data.heading?.middle || "Beyond";
  const titleBottom = data.heading?.highlight || "Expectations";
  const ctaText = data.cta?.label || "Explore More";
  const ctaHref = data.cta?.href || "#explore";

  return (
    <section className="relative w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-0">
      {/* 
        Hero Banner Container:
        - Exactly matches Navbar's max-w-[1440px] and px-6 sm:px-10 lg:px-16 so the left edge of hero aligns with Navbar logo
        - Responsive aspect ratio & height for 90%, 100%, 110%, 125% laptop views
      */}
      <div className="relative w-full aspect-[16/9.5] sm:aspect-[16/9] min-h-[420px] sm:min-h-[500px] md:min-h-[560px] lg:min-h-[620px] max-h-[84vh] flex items-center justify-center overflow-hidden">
        
        {/* Background Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 w-full h-full pointer-events-none select-none"
        >
          <Image
            src={bannerSrc}
            alt={bannerAlt}
            fill
            priority
            quality={100}
            sizes="(max-width: 768px) 100vw, (max-width: 1440px) 100vw, 1440px"
            className="object-contain object-left lg:object-center"
          />
        </motion.div>

        {/* 
          Central Overlay Typography & CTA Button:
          - Proportionally centered over the arch across 90%, 100%, 110%, 125% zoom levels
        */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex flex-col items-center justify-center text-center px-4 translate-x-[4%] sm:translate-x-[5%] md:translate-x-[5.5%] lg:translate-x-[6%] -mt-2 sm:-mt-3"
        >
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-serif-luxury text-[clamp(2rem,4vw,4.8rem)] font-semibold tracking-[-0.015em] leading-[0.98] text-[#0A2239] select-text"
          >
            {titleTop}
            <span className="block not-italic text-[#B38749] font-serif-luxury font-semibold my-0.5 sm:my-1 tracking-[-0.01em]">
              {titleMiddle}
            </span>
            {titleBottom}
          </motion.h1>

          {/* Explore More Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-4 sm:mt-5 md:mt-6 lg:mt-7"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-[#0C2237] hover:bg-[#16314f] text-[#FAF7F2] text-[clamp(12px,0.95vw,14.5px)] font-medium tracking-wide px-6 sm:px-8 py-2.5 sm:py-3 min-h-[40px] sm:min-h-[44px] rounded-full shadow-[0_6px_20px_rgba(10,34,57,0.28)] transition-all duration-300 active:scale-95 group hover:shadow-[0_10px_26px_rgba(10,34,57,0.38)] hover:-translate-y-0.5"
            >
              <span>{ctaText}</span>
              <span className="text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
