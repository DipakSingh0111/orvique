"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/orvique.types";

export default function ServicesSection({ data }: SectionProps.Services) {
  if (!data) return null;

  const badge = data.badge || "OUR SERVICES";
  const description = data.description || "";
  const headingPrimary = data.heading?.main || "Creating Events";
  const headingHighlight = data.heading?.highlight || "That Truly Matter";
  const items = data.list || [];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-2 pb-10 sm:pb-14 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8 sm:mb-10"
      >
        <div className="lg:col-span-5 flex flex-col items-start pt-1">
          <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
            <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
              {badge}
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
          </div>
          <p className="text-[13px] sm:text-[14.5px] text-[#556372] leading-[1.65] font-normal max-w-[380px]">
            {description}
          </p>
        </div>
        <div className="lg:col-span-7 flex flex-col items-start lg:items-end text-left lg:text-right">
          <h2 className="font-serif-luxury text-[42px] sm:text-[54px] md:text-[64px] lg:text-[72px] font-semibold tracking-[-0.02em] leading-[0.98] text-[#0A2239]">
            {headingPrimary}
            <span className="block font-serif-luxury font-normal text-[#B38749] mt-1 sm:mt-1.5">
              {headingHighlight}
            </span>
          </h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch">
        {items.map((item, index) => {
          const isArch = item.imageType === "arch";
          const isTable = item.imageType === "table";
          const isChandelier = item.imageType === "chandelier";
          const linkHref = item.href || `/services/${item.slug}`;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.75,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`flex flex-col justify-between relative ${
                index !== 0
                  ? "md:border-l md:border-[#E8E2D8] md:pl-6 lg:md:pl-8"
                  : ""
              }`}
            >
              <div className="flex flex-col mb-4">
                <span className="font-serif-luxury text-[32px] sm:text-[38px] text-[#E0D7C8] leading-none mb-3 select-none">
                  {item.id}
                </span>
                <div className="grid grid-cols-12 gap-3 items-end">
                  <div className="col-span-6 flex flex-col justify-between min-h-[160px] sm:min-h-[180px]">
                    <div>
                      <Link href={linkHref} className="group/title block">
                        <h3 className="font-serif-luxury text-[22px] sm:text-[24px] lg:text-[26px] font-semibold text-[#0A2239] group-hover/title:text-[#B38749] leading-[1.15] whitespace-pre-line mb-2.5 transition-colors">
                          {item.title}
                        </h3>
                      </Link>
                      <p className="text-[12px] sm:text-[13px] text-[#64748B] leading-[1.5] font-normal">
                        {item.description}
                      </p>
                    </div>
                    <div className="mt-5">
                      <Link
                        href={linkHref}
                        aria-label={`View ${item.title}`}
                        className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#A87948] hover:bg-[#8e6438] active:scale-95 text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_14px_rgba(168,121,72,0.3)] group"
                      >
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                  <div className="col-span-6 flex justify-end">
                    <Link
                      href={linkHref}
                      className="group/img relative w-full aspect-[4/5] max-w-[150px] sm:max-w-[170px] overflow-hidden rounded-[2px] bg-[#FAF7F2] shadow-sm block"
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={item.image || "/images/about_02.png"}
                          alt={item.title}
                          fill
                          className="object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
