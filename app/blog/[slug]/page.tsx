import React from "react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getOrviqueSections, getOrviquePageBanner } from "@/lib/orvique";
import { BsCalendar3, BsPerson } from "react-icons/bs";
import { FiCheck } from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

interface BlogDetailPageProps {
  params: Promise<{
    slug?: string;
  }>;
}

export function generateStaticParams() {
  const sections = getOrviqueSections();
  const articles = sections.BlogNews?.variants?.OrviqueBlogNews1?.list || [];
  return articles.map((article) => ({
    slug: article.href.replace("/blog/", ""),
  }));
}

export const instant = false;

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  await params;

  const sections = getOrviqueSections();
  const banner = getOrviquePageBanner("blogDetail");
  const blog = sections.BlogNews?.variants?.OrviqueBlogNews1?.details;

  if (!blog) return null;

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* 1. Standard Warm Breadcrumb Header matching reference */}
      <Breadcrumb
        data={banner}
        title={banner?.title || "Blog Detail"}
        items={banner?.breadcrumb}
        className="bg-[#FAF7F2] border-b border-[#EDE5D8]/50"
      />

      {/* 2. Main Article Content Area */}
      <article className="w-full max-w-[940px] mx-auto px-5 sm:px-8 py-12 sm:py-16 lg:py-20 flex flex-col items-center">
        {/* Top Meta Info Bar: Tag Badge, Date, Author */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-5 text-[12px] sm:text-[13px] text-[#64748B]">
          {/* Tag Capsule */}
          <span className="px-3.5 py-1 bg-[#F6EFE6] text-[#A87948] font-medium rounded-full tracking-wide">
            {blog.badge}
          </span>

          {/* Date */}
          <div className="flex items-center gap-1.5 text-[#A87948]">
            <BsCalendar3 className="w-3.5 h-3.5" />
            <span className="text-[#64748B]">{blog.date}</span>
          </div>

          {/* Author */}
          <div className="flex items-center gap-1.5 text-[#A87948]">
            <BsPerson className="w-4 h-4" />
            <span className="text-[#64748B]">{blog.author}</span>
          </div>
        </div>

        {/* Blog Post Title: 2 Lines matching screenshot */}
        <h1 className="font-serif-luxury text-[34px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold tracking-[-0.02em] leading-[1.08] text-center text-[#0A2239] mb-10 sm:mb-12 max-w-[760px]">
          <span>{blog.heading.main} </span>
          <span className="font-normal text-[#B38749]">
            {blog.heading.highlight}
          </span>
        </h1>

        {/* Featured Big Banner Image */}
        <div className="relative w-full aspect-[16/9] sm:aspect-[16/8.5] rounded-[10px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] bg-[#FAF7F2] mb-10 sm:mb-12">
          <Image
            src={blog.featuredImage?.src || "/images/about_02.png"}
            alt={blog.featuredImage?.alt || "Luxury Event Setup"}
            fill
            priority
            className="object-cover object-[50%_35%]"
          />
        </div>

        {/* Article Body Paragraphs */}
        <div className="w-full space-y-5 text-[14px] sm:text-[14.5px] text-[#556372] leading-[1.75] font-normal text-left">
          {blog.paragraphs.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}

          {/* Checklist with circular warm icons */}
          <div className="space-y-3.5 py-4">
            {blog.checklist.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div className="w-4 h-4 rounded-full bg-[#A87948] flex items-center justify-center shrink-0 text-white mt-1">
                  <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                </div>
                <span className="text-[14px] sm:text-[14.5px] text-[#4A5568] leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Luxury Quote Card */}
          <div className="relative my-8 sm:my-10 p-7 sm:p-9 rounded-[14px] bg-[#FAF7F2] border-l-4 border-[#B38749] flex items-start gap-6 shadow-xs">
            <div className="text-[#C29D68] text-3xl sm:text-4xl shrink-0 select-none">
              <FaQuoteLeft />
            </div>
            <div className="flex flex-col">
              <blockquote className="font-serif-luxury text-[18px] sm:text-[22px] font-semibold text-[#0A2239] leading-[1.35] tracking-[-0.01em] mb-2">
                “{blog.quote.text}”
              </blockquote>
              <span className="text-[12.5px] uppercase tracking-[0.18em] font-medium text-[#B38749]">
                — {blog.quote.author}
              </span>
            </div>
          </div>

          {/* Closing Paragraph */}
          <p>{blog.closingParagraph}</p>
        </div>
      </article>
    </main>
  );
}
