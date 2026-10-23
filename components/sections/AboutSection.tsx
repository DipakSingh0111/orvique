"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/orvique.types";

export default function AboutSection({ data, showButton = true }: SectionProps.About) {
  if (!data) return null;

  const badge = data.badge || "ABOUT ORVIQUE";
  const headingPrimary = data.heading?.main || "Moments";
  const headingHighlight = data.heading?.highlight || "Made Extraordinary";
  const description = data.description || "";
  const features = data.list || [];
  const buttonText = data.cta?.label || "EXPLORE MORE";
  const buttonLink = data.cta?.href || "#about";
  const leftImage = data.images?.right || "/images/about_01.png";
  const rightImage = data.images?.left || "/images/about_02.png";

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-2 pb-8 sm:pt-3 sm:pb-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-start"
        >
          <div className="relative w-full max-w-[480px] aspect-square">
            <div className="absolute -top-5 -left-5 w-44 sm:w-56 h-44 sm:h-56 bg-[#EDE5D8]/65 -z-10 pointer-events-none" />

            <div className="absolute -bottom-5 -right-5 w-40 sm:w-52 h-40 sm:h-52 bg-[#EDE5D8]/65 -z-10 pointer-events-none" />

            <div className="relative w-full h-full shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white p-2 sm:p-2.5">
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={leftImage}
                  alt="Moments Made Extraordinary - Orvique Luxury Table Setting"
                  fill
                  priority
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="lg:col-span-7 flex flex-col justify-center pl-0 lg:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-7 flex flex-col items-start text-left"
            >
              <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
                <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                  {badge}
                </span>
                <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
              </div>

              <h2 className="font-serif-luxury text-[36px] sm:text-[46px] md:text-[50px] lg:text-[54px] font-semibold tracking-[-0.015em] leading-[1.05] text-[#0A2239] mb-5">
                {headingPrimary}
                <span className="block font-serif-luxury font-normal text-[#B38749] mt-1">
                  {headingHighlight}
                </span>
              </h2>

              <p className="text-[13px] sm:text-[14.5px] text-[#556372] leading-[1.65] font-normal mb-6 sm:mb-8 max-w-[420px]">
                {description}
              </p>

              <div className="flex flex-col gap-3.5 mb-8 sm:mb-10 w-full">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <span className="w-5 h-5 rounded-full bg-[#B38749] text-white flex items-center justify-center shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-110">
                      <svg
                        className="w-3 h-3"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="2.5 6 4.8 8.5 9.5 3.5" />
                      </svg>
                    </span>
                    <span className="text-[13px] sm:text-[14px] text-[#4A5568] font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {showButton && (
                <Link
                  href={buttonLink}
                  className="inline-flex items-center gap-2.5 bg-[#A87948] hover:bg-[#936637] text-white text-[12px] sm:text-[13px] font-medium tracking-[0.1em] px-8 sm:px-9 py-3 sm:py-3.5 rounded-full shadow-[0_6px_20px_rgba(168,121,72,0.3)] transition-all duration-300 active:scale-95 group uppercase"
                >
                  <span>{buttonText}</span>
                  <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="md:col-span-5 flex justify-center md:justify-end mt-4 md:mt-0"
            >
              <div className="relative w-full max-w-[270px] sm:max-w-[300px] aspect-[4/5]">
                <div className="absolute -bottom-5 -right-5 w-44 sm:w-52 h-44 sm:h-52 bg-[#EDE5D8]/70 -z-10 pointer-events-none" />
                <div className="absolute -top-4 -left-4 w-28 sm:w-36 h-28 sm:h-36 bg-[#EDE5D8]/50 -z-10 pointer-events-none" />

                <div className="relative w-full h-full shadow-[0_12px_32px_rgba(0,0,0,0.08)] bg-white p-2">
                  <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                    <Image
                      src={rightImage}
                      alt="Orvique Evening Coastal Celebration Arch"
                      fill
                      className="object-cover object-[50%_12%] scale-[1.35] origin-top"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
