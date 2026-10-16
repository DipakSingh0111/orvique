"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { getOrviqueSections, getOrviquePageBanner } from "@/lib/orvique";
import { FiChevronDown, FiPhone, FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  const sections = getOrviqueSections();
  const banner = getOrviquePageBanner("contact");
  const contactPage = sections.ContactPage?.variants?.OrviqueContactPage1;
  const eventTypes =
    sections.EnquiryPage?.variants?.OrviqueEnquiryPage1?.eventTypes || [
      "Wedding Celebration",
      "Corporate Event",
      "Birthday Celebration",
      "Engagement Event",
      "Family Gathering",
      "Social Celebration",
    ];

  const formSection = contactPage?.formSection || {
    badge: "SEND US A MESSAGE",
    heading: { main: "Enquire About", highlight: "Your Event" },
    description: "Fill out the form below and our team will get back to you shortly.",
    buttonText: "SEND MESSAGE",
    image: "/images/about_01.png",
  };

  const mapSection = contactPage?.mapSection || {
    badge: "OUR LOCATION",
    heading: { main: "Visit Our", highlight: "Office" },
    description: "We welcome you to meet us at our office to discuss your event in detail.",
    buttonText: "GET DIRECTIONS",
    locationPin: "Orvique Events & Celebrations",
  };

  const detailsSection = contactPage?.detailsSection || {
    badge: "CONTACT DETAILS",
    heading: { main: "Let’s Start", highlight: "Planning Together" },
    list: [
      { type: "phone", title: "Call Us", lines: ["+1 00000 00000"] },
      { type: "email", title: "Email Us", lines: ["info@xyz.com"] },
      { type: "address", title: "Our Address", lines: ["500 Terry Francine Street,", "San Francisco, CA 94158,", "United States"] },
    ],
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        eventType: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* 1. Breadcrumb Banner with warm light beige luxury background */}
      <Breadcrumb
        data={banner}
        title={banner?.title || "Contact Us"}
        items={banner?.breadcrumb}
        className="bg-[#F8F5EE] border-b border-[#EDE5D8]/50"
      />

      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-10 py-16 sm:py-20 space-y-16 sm:space-y-24">
        {/* ================= SECTION 1: FORM + RIGHT WEDDING CANOPY ARCH PHOTO ================= */}
        <section className="bg-[#FAF7F2] rounded-[24px] p-6 sm:p-10 lg:p-12 border border-[#EDE5D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Side: Enquiry Form */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              {/* Badge with horizontal line */}
              <div className="flex items-center gap-3.5 mb-2.5">
                <span className="text-[11px] sm:text-[12px] tracking-[0.22em] font-medium text-[#A67C4A] uppercase">
                  {formSection.badge}
                </span>
                <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
              </div>

              {/* Headline */}
              <h2 className="font-serif-luxury text-[36px] sm:text-[44px] md:text-[50px] font-semibold text-[#0A2239] tracking-[-0.015em] leading-[1.08] mb-3">
                {formSection.heading.main}{" "}
                <span className="font-serif-luxury font-normal text-[#B38749]">
                  {formSection.heading.highlight}
                </span>
              </h2>

              {/* Subtitle */}
              <p className="text-[13px] sm:text-[14px] text-[#556372] font-normal mb-8 leading-relaxed">
                {formSection.description}
              </p>

              {/* Form */}
              {submitted ? (
                <div className="p-8 bg-white rounded-[12px] border border-[#E2D9CC] text-center">
                  <span className="w-12 h-12 mx-auto rounded-full bg-[#EBF5EE] text-[#2B7A4B] text-xl flex items-center justify-center mb-3">
                    ✓
                  </span>
                  <h3 className="font-serif-luxury text-xl font-semibold text-[#0A2239] mb-1">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-[13px] text-[#556372]">
                    Thank you for contacting us. We will get back to you
                    shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Row 1: Full Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-white text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] transition-colors"
                    />
                    <input
                      type="email"
                      required
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-white text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] transition-colors"
                    />
                  </div>

                  {/* Row 2: Phone Number & Event Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      required
                      placeholder="Phone Number *"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-white text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] transition-colors"
                    />
                    <div className="relative">
                      <select
                        required
                        value={formData.eventType}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            eventType: e.target.value,
                          })
                        }
                        className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-white text-[13.5px] text-[#0A2239] focus:outline-none focus:border-[#B38749] transition-colors appearance-none cursor-pointer pr-10"
                      >
                        <option value="" disabled className="text-[#A0AEC0]">
                          Event Type *
                        </option>
                        {eventTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <FiChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C9AA8] pointer-events-none" />
                    </div>
                  </div>

                  {/* Row 3: Your Message */}
                  <div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Your Message *"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full p-4 rounded-[6px] border border-[#E2D9CC] bg-white text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full h-[46px] bg-[#A87445] hover:bg-[#8F5F34] active:scale-[0.99] text-white font-medium text-[12.5px] tracking-[0.16em] uppercase rounded-[6px] shadow-[0_4px_16px_rgba(168,116,69,0.25)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      <span>{formSection.buttonText}</span>
                      <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Right Side: High-End Wedding Arch Photo Frame */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-[16px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.1)] border-4 border-white bg-[#FAF7F2]">
                <Image
                  src={formSection.image || "/images/about_01.png"}
                  alt="Orvique Sunset Celebration Arch"
                  fill
                  className="object-cover object-[50%_15%] scale-[1.3] origin-top"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= SECTION 2: MAP / OFFICE LOCATION CARD ================= */}
        <section className="relative w-full h-[340px] sm:h-[380px] lg:h-[420px] rounded-[24px] overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-[#EDE5D8]">
          {/* Map Vector/Visual Background */}
          <div className="absolute inset-0 w-full h-full bg-[#E5ECF0]">
            <iframe
              title="Orvique Events Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d-122.38997782357!3d37.77085737198616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7fcf4b8b6aab%3A0xb7a188f6cf9c0a37!2sTerry%20A%20Francois%20Blvd%2C%20San%20Francisco%2C%20CA%2094158!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              className="w-full h-full border-0 filter saturate-80 opacity-90"
              loading="lazy"
            />
          </div>

          {/* Floating Location Card on Left */}
          <div className="absolute left-4 sm:left-8 lg:left-12 top-1/2 -translate-y-1/2 max-w-[360px] sm:max-w-[400px] bg-white/95 backdrop-blur-md rounded-[16px] p-6 sm:p-8 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-[#EDE5D8]">
            <div className="flex items-center gap-3.5 mb-2">
              <span className="text-[11px] sm:text-[11.5px] tracking-[0.22em] font-medium text-[#A67C4A] uppercase">
                {mapSection.badge}
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
            </div>

            <h3 className="font-serif-luxury text-[26px] sm:text-[32px] font-semibold text-[#0A2239] leading-tight mb-3">
              {mapSection.heading.main}{" "}
              <span className="font-serif-luxury font-normal text-[#B38749]">
                {mapSection.heading.highlight}
              </span>
            </h3>

            <p className="text-[12.5px] sm:text-[13px] text-[#556372] font-normal leading-relaxed mb-6">
              {mapSection.description}
            </p>

            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#A87445] hover:bg-[#8F5F34] text-white text-[11.5px] sm:text-[12px] font-medium tracking-[0.14em] uppercase rounded-[6px] shadow-[0_4px_14px_rgba(168,116,69,0.25)] transition-all duration-300 group"
            >
              <span>{mapSection.buttonText}</span>
              <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Floating Pin Label on Map */}
          <div className="hidden md:flex absolute right-1/4 top-1/3 -translate-y-1/2 flex-col items-center pointer-events-none">
            <div className="px-3 py-1.5 bg-white/95 rounded-[4px] shadow-md border border-[#EDE5D8] text-[11px] font-medium text-[#0A2239] mb-1">
              {mapSection.locationPin}
            </div>
            <div className="w-4 h-4 bg-[#D9381E] rounded-full border-2 border-white shadow-md animate-bounce" />
          </div>
        </section>

        {/* ================= SECTION 3: CONTACT DETAILS 3 COLUMNS ================= */}
        <section className="bg-white rounded-[24px] p-6 sm:p-10 lg:p-12 border border-[#EDE5D8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Header */}
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="flex items-center gap-3.5 mb-2.5">
                <span className="text-[11px] sm:text-[12px] tracking-[0.22em] font-medium text-[#A67C4A] uppercase">
                  {detailsSection.badge}
                </span>
                <span className="w-10 sm:w-12 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
              </div>

              <h2 className="font-serif-luxury text-[36px] sm:text-[46px] md:text-[52px] font-semibold text-[#0A2239] tracking-[-0.015em] leading-[1.08]">
                {detailsSection.heading.main}
                <span className="block font-serif-luxury font-normal text-[#B38749] mt-1">
                  {detailsSection.heading.highlight}
                </span>
              </h2>
            </div>

            {/* Right Contact 3 Info Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 items-stretch">
              {detailsSection.list.map((card, idx) => {
                let IconComponent = FiPhone;
                if (card.type === "email") IconComponent = FiMail;
                if (card.type === "address") IconComponent = FiMapPin;

                return (
                  <div
                    key={card.title}
                    className={`flex flex-col items-center text-center p-4 sm:p-3 ${
                      idx !== 0 ? "sm:border-l sm:border-[#EDE5D8]" : ""
                    }`}
                  >
                    {/* Circle Icon */}
                    <div className="w-12 h-12 rounded-full bg-[#FAF0E1] flex items-center justify-center text-[#B38749] mb-3.5 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    {/* Title */}
                    <h3 className="font-serif-luxury font-semibold text-[16px] sm:text-[17px] text-[#0A2239] mb-2">
                      {card.title}
                    </h3>

                    {/* Lines */}
                    <div className="flex flex-col space-y-1">
                      {card.lines.map((line, lineIdx) => (
                        <p
                          key={lineIdx}
                          className="text-[12.5px] sm:text-[13px] text-[#556372] font-normal leading-snug"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
