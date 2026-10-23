import React from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getOrviqueSections, getOrviquePageBanner } from "@/lib/orvique";
import { FaStar } from "react-icons/fa";

export default function TestimonialsPage() {
  const sections = getOrviqueSections();
  const banner = getOrviquePageBanner("testimonials");
  const reviews = sections.Testimonials?.variants?.OrviqueTestimonials1?.page?.list || [];

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      <Breadcrumb
        data={banner}
        title={banner?.title || "Testimonials"}
        items={banner?.breadcrumb}
        className="bg-[#F8F5EE] border-b border-[#EDE5D8]/50"
      />

      <section className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 pt-16 sm:pt-20 pb-20 sm:pb-28 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 items-stretch">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#FCFAF7] rounded-[18px] p-7 sm:p-9 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-[#EDE5D8] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF0E1] flex items-center justify-center text-[#B38749] font-serif text-[28px] font-bold leading-none select-none shrink-0 shadow-sm">
                    “
                  </div>

                  <div className="flex items-center gap-1 text-[#E08D3C]">
                    {[...Array(review.rating || 5)].map((_, i) => (
                      <FaStar key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                </div>

                <p className="text-[13.5px] sm:text-[14px] text-[#556372] font-normal leading-[1.7] mb-7">
                  {review.quote || review.feedback}
                </p>
              </div>

              <div className="flex items-center gap-4 pt-2 border-t border-[#F0E8DC]">
                <div className="w-11 h-11 rounded-full bg-[#F3ECE1] text-[#7A644D] font-serif font-medium text-[17px] flex items-center justify-center shrink-0 border border-[#E8DECC] select-none">
                  {review.initial || review.author.charAt(0)}
                </div>

                <div className="flex flex-col">
                  <h3 className="font-serif-luxury font-semibold text-[16px] sm:text-[17px] text-[#0A2239] leading-snug">
                    {review.author}
                  </h3>
                  <span className="text-[12px] sm:text-[12.5px] text-[#8C9AA8] font-normal">
                    {review.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
