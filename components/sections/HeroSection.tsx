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
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center pt-24 sm:pt-28 lg:pt-32 pb-0">
      {/* Main Banner Visual Frame with Images and Center Typography */}
      <div className="relative w-full aspect-[16/9] min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex items-center justify-center">
        {/* Background Hero Image with subtle fade and scale entrance */}
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
            className="object-contain object-center"
          />
        </motion.div>

        {/* Central Overlay Typography & CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-20 flex flex-col items-center justify-center text-center px-4 translate-x-4 sm:translate-x-8 md:translate-x-12 lg:translate-x-16 -mt-2 sm:-mt-4"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-serif-luxury text-[32px] sm:text-[44px] md:text-[54px] lg:text-[66px] xl:text-[74px] font-semibold tracking-[-0.01em] leading-[0.96] text-[#0A2239] select-text"
          >
            {titleTop}
            <span className="block not-italic text-[#B38749] font-serif-luxury font-semibold my-0.5 sm:my-1 tracking-[-0.01em]">
              {titleMiddle}
            </span>
            {titleBottom}
          </motion.h1>

          {/* Explore More Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.55 }}
            className="mt-5 sm:mt-7"
          >
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0C2237] hover:bg-[#16314f] text-[#FAF7F2] text-[13px] sm:text-[14px] md:text-[15px] font-medium tracking-wide px-7 sm:px-9 py-3 sm:py-3.5 min-h-[44px] sm:min-h-[48px] rounded-full shadow-[0_8px_22px_rgba(10,34,57,0.3)] transition-all duration-300 active:scale-95 group hover:shadow-[0_12px_28px_rgba(10,34,57,0.4)]"
            >
              <span>{ctaText}</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
