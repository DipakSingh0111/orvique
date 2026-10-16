"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import type { SectionProps } from "@/types/orvique.types";

export default function BlogSection({
  data,
  showButton = true,
  maxItems,
}: SectionProps.Blog) {
  if (!data) return null;

  const badge = data.badge || "OUR BLOG";
  const headingPrimary = data.heading?.main || "Latest";
  const headingHighlight = data.heading?.highlight || "Stories & Ideas";
  const viewAllText = data.cta?.label || "VIEW ALL BLOGS";
  const viewAllLink = data.cta?.href || "/blogs";
  const articles = data.list || [];

  const displayArticles = maxItems ? articles.slice(0, maxItems) : articles;

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 pb-12 sm:pt-6 sm:pb-16 overflow-hidden">
      {/* Top Header Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10"
      >
        <div>
          {/* Badge with trailing horizontal line */}
          <div className="flex items-center gap-3.5 mb-3">
            <span className="text-[11px] sm:text-[12px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
              {badge}
            </span>
            <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
          </div>

          {/* Headline */}
          <h2 className="font-serif-luxury text-[40px] sm:text-[52px] md:text-[58px] lg:text-[64px] font-semibold tracking-[-0.02em] leading-tight text-[#0A2239]">
            {headingPrimary}{" "}
            <span className="font-serif-luxury font-normal text-[#B38749]">
              {headingHighlight}
            </span>
          </h2>
        </div>

        {/* View All Blogs Pill Button */}
        {showButton && (
          <div className="shrink-0">
            <Link
              href={viewAllLink}
              className="inline-flex items-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#A87445] hover:bg-[#8F5F34] text-white text-[11px] sm:text-[12px] font-semibold tracking-[0.16em] uppercase rounded-full shadow-[0_4px_16px_rgba(168,116,69,0.25)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(168,116,69,0.35)] hover:-translate-y-0.5"
            >
              <span>{viewAllText}</span>
              <span className="text-base leading-none">&rarr;</span>
            </Link>
          </div>
        )}
      </motion.div>

      {/* Grid of Articles with subtle row dividers */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-16 gap-y-12 sm:gap-y-14">
        {displayArticles.map((article, idx) => (
          <motion.div
            key={`${article.id}-${idx}`}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.7,
              delay: (idx % 2) * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative group"
          >
            {/* Top border line for subsequent rows on large screens */}
            {idx >= 2 && (
              <div className="hidden lg:block absolute -top-6 sm:-top-7 left-0 right-0 h-[1px] bg-[#EDE5D8]" />
            )}

            <Link href={article.href} className="flex items-center gap-6 sm:gap-8">
              {/* Circular Thumbnail with subtle hover scale */}
              <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden shrink-0 shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-2 border-white bg-[#FAF7F2]">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* Article Content */}
              <div className="flex flex-col justify-center max-w-[340px] sm:max-w-[380px]">
                <h3 className="font-serif-luxury text-[19px] sm:text-[23px] md:text-[25px] font-semibold text-[#0A2239] leading-[1.28] tracking-[-0.01em] mb-3 group-hover:text-[#B38749] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Metadata Row: Date | Category */}
                <div className="flex items-center gap-3 text-[11px] sm:text-[12px] tracking-[0.18em] uppercase font-medium text-[#8C9AA8]">
                  <span>{article.date}</span>
                  <span className="text-[#C5BAA8]">|</span>
                  <span className="text-[#7A8794]">{article.category}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
