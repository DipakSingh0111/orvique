"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/orvique.types";

export default function ProcessSection({ data }: SectionProps.WorkingProcess) {
  if (!data) return null;

  const badge = data.badge || "OUR PROCESS";
  const headingPrimary = data.heading?.main || "From Vision";
  const headingHighlight = data.heading?.highlight || "to Celebration";
  const images = data.images;
  const steps = data.list || [];

  const step1 = steps[0] || {
    number: "(01)",
    title: "Consultation",
    description: "We understand your vision and requirements.",
  };
  const step2 = steps[1] || {
    number: "(02)",
    title: "Planning",
    description: "We plan every detail with care and creativity.",
  };
  const step3 = steps[2] || {
    number: "(03)",
    title: "Execution",
    description: "We bring your event to life with a seamless experience.",
  };

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-2 pb-10 sm:pb-14 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col justify-between h-full"
        >
          <div>
            <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                {badge}
              </span>
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
            </div>

            <h2 className="font-serif-luxury text-[42px] sm:text-[52px] md:text-[60px] lg:text-[64px] font-semibold tracking-[-0.02em] leading-[0.98] text-[#0A2239]">
              {headingPrimary}
              <span className="block font-serif-luxury font-normal text-[#B38749] mt-1 sm:mt-1.5">
                {headingHighlight}
              </span>
            </h2>
          </div>

          <div className="relative w-full max-w-[320px] aspect-[4/3] mt-16 sm:mt-24 lg:mt-32">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#EDE5D8]/75 -z-10 pointer-events-none" />

            <div className="relative w-full h-full shadow-[0_12px_32px_rgba(0,0,0,0.07)] bg-white p-2">
              <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={images?.execution || "/images/about_01.png"}
                  alt="Execution - Event Setup"
                  fill
                  className="object-cover object-[18%_78%] scale-[1.45]"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col"
        >
          <div className="relative w-full max-w-[320px] aspect-[4/3] mx-auto lg:mx-0">
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#EDE5D8]/75 -z-10 pointer-events-none" />

            <div className="relative w-full h-full shadow-[0_12px_32px_rgba(0,0,0,0.07)] bg-white p-2">
              <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={images?.consultation || "/images/about_02.png"}
                  alt="Consultation Moodboard & Inspiration"
                  fill
                  className="object-cover object-[50%_18%] scale-[1.35]"
                />
              </div>
            </div>
          </div>

          <div className="mt-8 sm:mt-12 w-full max-w-[320px] flex flex-col items-start pl-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B38749] inline-block"></span>
              <span className="font-serif-luxury italic text-[#B38749] text-[20px] sm:text-[22px] tracking-wide">
                {step2.number}
              </span>
            </div>
            <h3 className="font-serif-luxury text-[32px] sm:text-[36px] font-semibold text-[#0A2239] leading-tight mb-2">
              {step2.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#64748B] leading-[1.6] font-normal">
              {step2.description}
            </p>
          </div>

          <div className="mt-14 sm:mt-20 w-full max-w-[320px] flex flex-col items-start pl-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B38749] inline-block"></span>
              <span className="font-serif-luxury italic text-[#B38749] text-[20px] sm:text-[22px] tracking-wide">
                {step3.number}
              </span>
            </div>
            <h3 className="font-serif-luxury text-[32px] sm:text-[36px] font-semibold text-[#0A2239] leading-tight mb-2">
              {step3.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#64748B] leading-[1.6] font-normal">
              {step3.description}
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex flex-col items-start lg:items-end"
        >
          <div className="w-full max-w-[320px] flex flex-col items-start pl-2 pt-2">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#B38749] inline-block"></span>
              <span className="font-serif-luxury italic text-[#B38749] text-[20px] sm:text-[22px] tracking-wide">
                {step1.number}
              </span>
            </div>
            <h3 className="font-serif-luxury text-[32px] sm:text-[36px] font-semibold text-[#0A2239] leading-tight mb-2">
              {step1.title}
            </h3>
            <p className="text-[13px] sm:text-[14px] text-[#64748B] leading-[1.6] font-normal">
              {step1.description}
            </p>
          </div>

          <div className="relative w-full max-w-[320px] aspect-[4/3] mt-16 sm:mt-24">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#EDE5D8]/75 -z-10 pointer-events-none" />

            <div className="relative w-full h-full shadow-[0_12px_32px_rgba(0,0,0,0.07)] bg-white p-2">
              <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                <Image
                  src={images?.planning || "/images/about_01.png"}
                  alt="Planning - Fine Dining Setup"
                  fill
                  className="object-cover object-[55%_55%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
