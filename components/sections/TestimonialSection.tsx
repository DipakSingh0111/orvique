"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import siteData from "@/data/qrvique.json";

interface TestimonialItem {
  id: string;
  feedback: string;
  author: string;
  role: string;
  avatar: string;
}

interface TestimonialSectionProps {
  badge?: string;
  headingPrimary?: string;
  headingHighlight?: string;
  featuredImage?: string;
  items?: TestimonialItem[];
}

export default function TestimonialSection({
  badge = siteData.testimonials.badge,
  headingPrimary = siteData.testimonials.heading.primary,
  headingHighlight = siteData.testimonials.heading.highlight,
  featuredImage = siteData.testimonials.featuredImage,
  items = siteData.testimonials.items,
}: TestimonialSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Smooth Auto Slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % items.length);
    }, 3800);

    return () => clearInterval(interval);
  }, [isPaused, items.length]);

  // Compute 3 items cyclically visible
  const visibleItems = [
    items[startIndex % items.length],
    items[(startIndex + 1) % items.length],
    items[(startIndex + 2) % items.length],
  ];

  return (
    <section className="relative w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10 pt-4 pb-6 sm:pb-8 overflow-hidden">
      {/* Main Container with Left Grand Dinner Photo + Overlapping Testimonial Cards & Header */}
      <div className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end">
          
          {/* Left Side: Photo Frame with Offset Decor */}
          <div className="lg:col-span-5 relative">
            <div className="relative w-full max-w-[480px] aspect-[4/5] sm:aspect-[4/4.5] lg:aspect-[4/4.9] mx-auto lg:mx-0">
              {/* Top-Right Offset Decorative Warm Card */}
              <div className="absolute -top-4 -right-4 w-40 h-40 bg-[#EDE5D8]/75 -z-10 pointer-events-none" />
              {/* Bottom-Left Offset Decorative Warm Card */}
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#EDE5D8]/75 -z-10 pointer-events-none" />

              {/* Photo Container */}
              <div className="relative w-full h-full shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-white p-2">
                <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={featuredImage || "/images/about_01.png"}
                    alt="Our Client Feedback Celebration Ambiance"
                    fill
                    className="object-cover object-[30%_50%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Header directly to the right of image + 3 Testimonial Cards lower overlapping */}
          <div className="lg:col-span-7 flex flex-col justify-end">
            
            {/* Header: Positioned beside the image, matching reference crop */}
            <div className="flex flex-col items-center justify-center text-center mb-10 sm:mb-14 lg:ml-8">
              {/* Badge with horizontal lines */}
              <div className="flex items-center gap-3.5 mb-2.5">
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
                <span className="text-[11px] sm:text-[12px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                  {badge}
                </span>
                <span className="w-8 sm:w-10 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
              </div>

              {/* Headline */}
              <h2 className="font-serif-luxury text-[38px] sm:text-[48px] md:text-[54px] lg:text-[62px] font-semibold tracking-[-0.02em] leading-tight text-[#0A2239]">
                {headingPrimary}{" "}
                <span className="font-serif-luxury font-normal text-[#B38749]">
                  {headingHighlight}
                </span>
              </h2>
            </div>

            {/* 3 Testimonial Cards: Overlapping the lower part of the left photo with negative left margin */}
            <div
              className="lg:-ml-28 xl:-ml-36 z-20 overflow-hidden pb-2 lg:pb-3"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
              {visibleItems.map((item, idx) => (
                <div
                  key={`${item.id}-${idx}`}
                  className="bg-white rounded-[2px] p-6 sm:p-7 shadow-[0_12px_36px_rgba(0,0,0,0.08)] border border-[#F2ECE1] flex flex-col justify-between transition-all duration-500 hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)] hover:-translate-y-1.5"
                >
                  <div>
                    {/* Luxury Gold Quote Icon */}
                    <span className="font-serif text-[42px] font-bold text-[#B38749] leading-none block mb-3 select-none">
                      99
                    </span>

                    {/* Feedback Text */}
                    <p className="text-[13px] sm:text-[13.5px] text-[#556372] leading-[1.65] font-normal mb-6 min-h-[72px]">
                      {item.feedback}
                    </p>
                  </div>

                  {/* Bottom Separator Line & Author Info */}
                  <div>
                    <div className="w-full h-[1px] bg-[#EDE5D8] mb-4" />

                    <div className="flex items-center gap-3">
                      {/* Author Avatar Thumbnail */}
                      <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 shadow-sm border border-[#EDE5D8] bg-[#EDE5D8]">
                        {item.avatar.startsWith("http") ? (
                          <img
                            src={item.avatar}
                            alt={item.author}
                            className="w-full h-full object-cover object-center"
                          />
                        ) : (
                          <Image
                            src={item.avatar}
                            alt={item.author}
                            fill
                            className="object-cover object-center"
                          />
                        )}
                      </div>

                      {/* Author Name and Role */}
                      <div className="flex flex-col">
                        <h4 className="font-serif-luxury font-semibold text-[15px] sm:text-[16px] text-[#0A2239] leading-tight">
                          {item.author}
                        </h4>
                        <span className="text-[11px] sm:text-[12px] text-[#8C9AA8] font-normal">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>

                </div>
              ))}
            </div>

            {/* Dots Indicator */}
            <div className="flex items-center justify-center gap-2 mt-4 sm:mt-5">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setStartIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    startIndex === i ? "w-6 bg-[#B38749]" : "w-1.5 bg-[#DCD4C6]"
                  }`}
                />
              ))}
            </div>

          </div>
          </div>

        </div>
      </div>
    </section>
  );
}
