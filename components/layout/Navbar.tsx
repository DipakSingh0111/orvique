"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { SectionProps } from "@/types/orvique.types";

export default function Navbar({ data }: SectionProps.Header) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const menuRef = useRef<HTMLDivElement>(null);

  // Read current path safely on client after mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentPath(window.location.pathname);
    }
  }, [isOpen]);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Close dropdown on escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!data) return null;

  const logoSrc = data.logo?.src || "/images/logo.png";
  const logoAlt = data.logo?.alt || "Orvique Events & Celebrations";
  const menuLinks = data.menu || [];
  const enquireText = data.cta?.label || "Enquire Now";
  const enquireHref = data.cta?.href || "/enquiry";

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8E2D8]/60 transition-all duration-300">
      <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-3 flex items-center justify-between relative">
        {/* Brand Logo perfectly centered */}
        <Link
          href="/"
          className="flex items-center transition-transform duration-300 hover:scale-[1.02] focus:outline-none"
        >
          <div className="relative w-[150px] sm:w-[185px] lg:w-[210px] h-[48px] sm:h-[58px] flex items-center">
            <Image
              src={logoSrc}
              alt={logoAlt}
              fill
              priority
              className="object-contain object-left"
            />
          </div>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6" ref={menuRef}>
          <div className="relative">
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              onClick={() => setIsOpen((prev) => !prev)}
              className="relative flex flex-col justify-center items-center gap-[5.5px] w-10 h-10 p-2 rounded-full hover:bg-black/5 active:scale-95 group cursor-pointer transition-all duration-300"
            >
              {/* Top bar */}
              <span
                className={`w-6 h-[2px] bg-[#0E2038] rounded-full transition-all duration-300 transform origin-center ${
                  isOpen
                    ? "rotate-45 translate-y-[7.5px] bg-[#B38749]"
                    : "group-hover:bg-[#B38749]"
                }`}
              />
              {/* Middle bar */}
              <span
                className={`w-6 h-[2px] bg-[#0E2038] rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0 scale-x-0" : "group-hover:bg-[#B38749]"
                }`}
              />
              {/* Bottom bar */}
              <span
                className={`w-6 h-[2px] bg-[#0E2038] rounded-full transition-all duration-300 transform origin-center ${
                  isOpen
                    ? "-rotate-45 -translate-y-[7.5px] bg-[#B38749]"
                    : "group-hover:bg-[#B38749]"
                }`}
              />
            </button>

            <div
              className={`absolute right-0 top-[calc(100%+12px)] w-[260px] sm:w-[290px] bg-white rounded-[16px] shadow-[0_16px_40px_rgba(10,34,57,0.12)] border border-[#EDE5D8] overflow-hidden transition-all duration-300 origin-top-right z-50 ${
                isOpen
                  ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                  : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
              }`}
            >
              <div className="px-5 pt-4 pb-2.5 border-b border-[#F4EFE6] flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-[0.22em] font-medium text-[#A67C4A]">
                  Navigation Menu
                </span>
                <span className="w-2 h-2 rounded-full bg-[#B38749]/60" />
              </div>

              <nav className="p-2.5 flex flex-col gap-1">
                {menuLinks.map((tab) => {
                  const isActive = currentPath === tab.href;

                  return (
                    <Link
                      key={tab.label}
                      href={tab.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center justify-between px-4 py-2.5 rounded-[10px] text-[14px] font-medium transition-all duration-200 ${
                        isActive
                          ? "bg-[#FAF7F2] text-[#B38749] font-semibold shadow-xs"
                          : "text-[#0A2239] hover:bg-[#FAF7F2] hover:text-[#B38749]"
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span
                          className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                            isActive
                              ? "bg-[#B38749] scale-100"
                              : "bg-transparent group-hover:bg-[#B38749]/50 scale-75 group-hover:scale-100"
                          }`}
                        />
                        {tab.label}
                      </span>
                      <span
                        className={`text-sm transition-transform duration-200 ${
                          isActive
                            ? "translate-x-0 opacity-100 text-[#B38749]"
                            : "opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 text-[#A67C4A]"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </nav>

              <div className="p-3 bg-[#FAF7F2]/60 border-t border-[#F4EFE6] sm:hidden">
                <Link
                  href={enquireHref}
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 bg-[#A26D38] text-white text-[13px] font-medium py-2 rounded-lg"
                >
                  <span>{enquireText}</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          </div>

          <Link
            href={enquireHref}
            className="inline-flex items-center gap-2 bg-[#A26D38] hover:bg-[#8d5e30] active:scale-95 text-white text-[13px] sm:text-[14px] font-medium tracking-wide px-5 sm:px-6 py-2.5 sm:py-2.8 rounded-full shadow-[0_4px_16px_rgba(162,109,56,0.22)] transition-all duration-300 group"
          >
            <span>{enquireText}</span>
            <span className="text-base font-light transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
