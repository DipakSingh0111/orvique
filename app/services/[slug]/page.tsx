import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getOrviqueSections } from "@/lib/orvique";
import { FiCheck } from "react-icons/fi";
import { IoDiamondOutline } from "react-icons/io5";
import { BsCalendar3, BsPeople } from "react-icons/bs";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  const sections = getOrviqueSections();
  const serviceDetails = sections.Services?.variants?.OrviqueServices1?.serviceDetails?.list || [];
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const sections = getOrviqueSections();
  const serviceDetails = sections.Services?.variants?.OrviqueServices1?.serviceDetails?.list || [];

  // Retrieve service by slug or fallback to first
  const serviceData =
    serviceDetails.find((s) => s.slug === slug) ||
    serviceDetails[0];

  if (!serviceData) {
    notFound();
  }

  const { breadcrumb, section1, section2, section3 } = serviceData;

  // Exact icon mapping matching the user's reference image
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "diamond":
        return <IoDiamondOutline className="w-[26px] h-[26px] text-[#B38749] stroke-[1.4]" />;
      case "calendar":
        return <BsCalendar3 className="w-[23px] h-[23px] text-[#B38749]" />;
      case "users":
        return <BsPeople className="w-[26px] h-[26px] text-[#B38749]" />;
      default:
        return <IoDiamondOutline className="w-[26px] h-[26px] text-[#B38749]" />;
    }
  };

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* 1. Dynamic Breadcrumb Header matching reference */}
      <Breadcrumb
        title={breadcrumb.title}
        items={breadcrumb.items}
        className="bg-[#FAF7F2] border-b border-[#EDE5D8]/50"
      />

      <div className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24 space-y-20 sm:space-y-28 lg:space-y-32">
        {/* ================= SECTION 1: Service Hero Intro + 3 Features ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Col: Badge + Heading + Paragraph + Enquire Button */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Badge */}
            <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                {section1.badge}
              </span>
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
            </div>

            {/* Headline */}
            <h2 className="font-serif-luxury text-[44px] sm:text-[54px] md:text-[62px] lg:text-[68px] font-semibold tracking-[-0.02em] leading-[0.98] text-[#0A2239] mb-6">
              {section1.heading.main}
              <span className="block font-serif-luxury font-normal text-[#B38749] mt-1 sm:mt-1.5">
                {section1.heading.highlight}
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#556372] leading-[1.7] font-normal max-w-[460px] mb-8">
              {section1.description}
            </p>

            {/* Enquire Now CTA Button */}
            <Link
              href={section1.cta.href}
              className="inline-flex items-center gap-2 bg-[#A26D38] hover:bg-[#8d5e30] active:scale-95 text-white text-[12.5px] tracking-[0.16em] uppercase font-medium px-7 py-3.5 rounded-[4px] shadow-[0_4px_16px_rgba(162,109,56,0.22)] transition-all duration-300 group"
            >
              <span>{section1.cta.label}</span>
              <span className="text-base font-light transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right Col: Top paragraph + 3 Feature rows with rounded icons */}
          <div className="lg:col-span-6 flex flex-col justify-start lg:pt-6">
            <p className="text-[13.5px] sm:text-[14.5px] text-[#556372] leading-[1.7] font-normal max-w-[500px] mb-8 sm:mb-10">
              {section1.introRight}
            </p>

            {/* 3 Features */}
            <div className="space-y-6 sm:space-y-8">
              {section1.list.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-5 sm:gap-6">
                  {/* Circular Warm Icon Badge matching image */}
                  <div className="w-[60px] h-[60px] rounded-full bg-[#F7EFE5] flex items-center justify-center shrink-0 select-none">
                    {renderIcon(feature.icon)}
                  </div>
                  {/* Feature Text */}
                  <div className="flex flex-col">
                    <h3 className="font-serif-luxury text-[20px] sm:text-[22px] font-semibold text-[#0A2239] leading-tight mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-[13px] sm:text-[13.5px] text-[#64748B] leading-[1.55]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: Image Left + Complete Offer Services Right ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Photo Frame with Warm Offset Backing */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full max-w-[500px] aspect-[4/3.4] mx-auto lg:mx-0">
              {/* Decorative Warm Offset Backing Card */}
              <div className="absolute -top-4 -left-4 w-44 h-44 bg-[#EDE5D8]/75 -z-10 pointer-events-none" />

              {/* Main Photo Container */}
              <div className="relative w-full h-full shadow-[0_14px_36px_rgba(0,0,0,0.08)] bg-white p-2">
                <div className="relative w-full h-full overflow-hidden bg-[#FAF7F2]">
                  <Image
                    src={section2.image || "/images/about_01.png"}
                    alt="Event Design Centerpiece"
                    fill
                    className="object-cover object-[50%_45%]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: What We Offer Header + 2-Column Checklist */}
          <div className="lg:col-span-6 flex flex-col items-start lg:pl-4">
            {/* Badge */}
            <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                {section2.badge}
              </span>
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
            </div>

            {/* Headline */}
            <h2 className="font-serif-luxury text-[38px] sm:text-[48px] md:text-[54px] font-semibold tracking-[-0.02em] leading-[1.05] text-[#0A2239] mb-4">
              {section2.heading.main}
              <span className="block font-serif-luxury font-normal text-[#B38749] mt-1">
                {section2.heading.highlight}
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#556372] leading-[1.65] font-normal max-w-[460px] mb-8">
              {section2.description}
            </p>

            {/* 2-Column Checklist with circular check marks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 w-full max-w-[500px]">
              {section2.checklist.map((item: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#A87948] flex items-center justify-center shrink-0 text-white">
                    <FiCheck className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-[13px] sm:text-[13.5px] font-medium text-[#0A2239]">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= SECTION 3: How We Plan (Numbered Steps Left + Arch Photo Right) ================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Side: Badge + Heading + Timeline Steps */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Badge */}
            <div className="flex items-center gap-3.5 mb-4 sm:mb-5">
              <span className="text-[12px] sm:text-[13px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                {section3.badge}
              </span>
              <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
            </div>

            {/* Headline */}
            <h2 className="font-serif-luxury text-[36px] sm:text-[44px] md:text-[50px] lg:text-[54px] font-semibold tracking-[-0.02em] leading-[1.08] text-[#0A2239] mb-4">
              <span className="block">{section3.heading.main}</span>
              <span className="block font-normal text-[#B38749] mt-1 sm:mt-1.5 whitespace-normal sm:whitespace-nowrap">
                {section3.heading.highlight}
              </span>
            </h2>

            {/* Description */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#556372] leading-[1.65] font-normal max-w-[460px] mb-10">
              {section3.description}
            </p>

            {/* Vertical Connected Numbered Timeline matching image */}
            <div className="relative flex flex-col space-y-8 pl-1">
              {section3.list.map((st, idx) => {
                const isLast = idx === section3.list.length - 1;

                return (
                  <div key={st.step} className="relative flex items-center gap-6 group">
                    {/* Vertical Timeline Line Connector */}
                    {!isLast && (
                      <span className="absolute left-[25px] top-[50px] w-[2px] h-[calc(100%+8px)] bg-[#E8DDD0]" />
                    )}

                    {/* Step Number Circle (Warm soft beige filled, gold number) */}
                    <div className="w-[52px] h-[52px] rounded-full bg-[#F6EFE6] text-[#A87948] font-bold text-[15px] flex items-center justify-center shrink-0 z-10 select-none">
                      {st.step}
                    </div>

                    {/* Step Title & Description */}
                    <div className="flex flex-col">
                      <h3 className="font-serif-luxury text-[20px] sm:text-[22px] font-semibold text-[#0A2239] leading-tight mb-1">
                        {st.title}
                      </h3>
                      <p className="text-[13px] sm:text-[13.5px] text-[#64748B] leading-[1.55] max-w-[420px]">
                        {st.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Side: Tall Wedding / Event Photo */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px] aspect-[4/5.6] rounded-[4px] overflow-hidden shadow-[0_16px_40px_rgba(0,0,0,0.1)] border-4 border-white bg-[#FAF7F2]">
              <Image
                src={section3.image || "/images/about_02.png"}
                alt={section3.heading.main}
                fill
                className="object-cover object-[50%_35%]"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
