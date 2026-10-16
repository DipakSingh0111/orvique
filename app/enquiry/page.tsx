"use client";

import React, { useState } from "react";
import siteData from "@/data/qrvique.json";
import { FiCalendar, FiChevronDown } from "react-icons/fi";

export default function EnquiryPage() {
  const { badge, heading, description, eventTypes, buttonText, bgImage } = siteData.enquiryPage;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    location: "",
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
        eventDate: "",
        location: "",
        message: "",
      });
    }, 4000);
  };

  return (
    <main className="relative min-h-screen text-[#0E2038] flex flex-col justify-between overflow-x-hidden">
      {/* Background Section with Event Floral Arch Photo */}
      <div className="relative w-full min-h-[920px] lg:min-h-[1050px] flex items-center justify-center pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-28 px-4 sm:px-6">
        
        {/* Full Image Background */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-[center_top] no-repeat"
          style={{
            backgroundImage: `url('${bgImage}')`,
          }}
        >
          {/* Subtle warm wash overlay to keep typography readable like reference */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/80 via-[#FAF7F2]/40 to-transparent pointer-events-none" />
        </div>

        {/* Content Container: Top Heading + Centered Floating Form Card */}
        <div className="relative z-10 w-full max-w-[820px] mx-auto flex flex-col items-center">
          
          {/* Top Header Block */}
          <div className="text-center mb-8 sm:mb-12 max-w-[620px]">
            {/* Badge with horizontal lines */}
            <div className="flex items-center justify-center gap-3.5 mb-3">
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
              <span className="text-[11px] sm:text-[12px] tracking-[0.25em] font-medium text-[#A67C4A] uppercase">
                {badge}
              </span>
              <span className="w-8 sm:w-10 h-[1.5px] bg-[#A67C4A]/80 inline-block"></span>
            </div>

            {/* Headline */}
            <h1 className="font-serif-luxury text-[40px] sm:text-[54px] md:text-[62px] lg:text-[68px] font-semibold tracking-[-0.015em] leading-[1.05] text-[#0A2239] mb-4">
              {heading.primary}{" "}
              <span className="font-serif-luxury font-normal text-[#B38749]">
                {heading.highlight}
              </span>
            </h1>

            {/* Subtitle description */}
            <p className="text-[13.5px] sm:text-[15px] text-[#4A5568] leading-[1.65] font-normal mx-auto max-w-[500px]">
              {description}
            </p>
          </div>

          {/* Floating Luxury Glassmorphism Form Card */}
          <div className="w-full max-w-[660px] bg-white/92 backdrop-blur-md rounded-[20px] p-6 sm:p-9 shadow-[0_16px_50px_rgba(0,0,0,0.12)] border border-[#EDE5D8]">
            {submitted ? (
              <div className="py-12 text-center">
                <span className="w-14 h-14 mx-auto rounded-full bg-[#EBF5EE] text-[#2B7A4B] text-2xl flex items-center justify-center mb-4">
                  ✓
                </span>
                <h3 className="font-serif-luxury text-2xl font-semibold text-[#0A2239] mb-2">
                  Thank You for Reaching Out!
                </h3>
                <p className="text-[14px] text-[#556372]">
                  We have received your event details and will contact you shortly with a customized plan.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                
                {/* Row 1: Full Name & Email Address */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    required
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors"
                  />
                </div>

                {/* Row 2: Phone Number & Event Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors"
                  />
                  <div className="relative">
                    <select
                      required
                      value={formData.eventType}
                      onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                      className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors appearance-none cursor-pointer pr-10"
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

                {/* Row 3: Event Date */}
                <div className="relative">
                  <input
                    type="text"
                    required
                    placeholder="Event Date *"
                    onFocus={(e) => (e.target.type = "date")}
                    onBlur={(e) => {
                      if (!e.target.value) e.target.type = "text";
                    }}
                    value={formData.eventDate}
                    onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors pr-11"
                  />
                  <FiCalendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#A87445] pointer-events-none" />
                </div>

                {/* Row 4: Preferred Venue / Location */}
                <div>
                  <input
                    type="text"
                    placeholder="Preferred Venue / Location"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full h-[46px] px-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors"
                  />
                </div>

                {/* Row 5: Your Message */}
                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-4 rounded-[6px] border border-[#E2D9CC] bg-[#FDFCFA] text-[13.5px] text-[#0A2239] placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#B38749] focus:bg-white transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full h-[48px] bg-[#A87445] hover:bg-[#8F5F34] active:scale-[0.99] text-white font-medium text-[13px] tracking-[0.16em] uppercase rounded-[6px] shadow-[0_6px_20px_rgba(168,116,69,0.3)] transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>{buttonText}</span>
                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
