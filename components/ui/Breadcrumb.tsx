import React from "react";
import Link from "next/link";
import type { SectionProps, BreadcrumbItem } from "@/types/orvique.types";

export type { BreadcrumbItem };

export default function Breadcrumb({
  data,
  title: propTitle,
  items: propItems,
  className = "",
}: SectionProps.Breadcrumb) {
  const title = propTitle || data?.title || "Page";
  const items: BreadcrumbItem[] = propItems || data?.breadcrumb || data?.items || [
    { label: "HOME", href: "/" },
    { label: title },
  ];

  return (
    <section
      className={`relative w-full bg-[#FAF7F2] pt-32 sm:pt-36 lg:pt-40 pb-12 sm:pb-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden ${className}`}
    >
      <h1 className="font-serif-luxury text-[40px] sm:text-[48px] md:text-[56px] lg:text-[62px] font-normal text-[#1A2E44] tracking-[-0.01em] leading-tight mb-4 sm:mb-5">
        {title}
      </h1>

      <nav
        aria-label="Breadcrumb"
        className="inline-flex items-center gap-2.5 px-6 py-1.5 bg-white rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-[#EDE5D8]"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={`${item.label}-${index}`}>
              {index > 0 && (
                <span className="text-[#A4B0BE] text-[11px] select-none font-light">
                  —
                </span>
              )}
              {isLast || !item.href ? (
                <span className="text-[11.5px] sm:text-[12px] font-medium text-[#0A2239] tracking-[0.06em]">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[11px] sm:text-[11.5px] font-semibold text-[#0A2239] tracking-[0.14em] uppercase hover:text-[#B38749] transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </section>
  );
}
