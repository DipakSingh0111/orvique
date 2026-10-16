import React from "react";
import Link from "next/link";
import siteData from "@/data/qrvique.json";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

interface FooterLink {
  name: string;
  href: string;
}

interface SocialLink {
  platform: string;
  url: string;
}

interface FooterProps {
  titleScript?: string;
  titleMain?: string;
  links?: FooterLink[];
  contact?: {
    phone: string;
    email: string;
    address: string;
  };
  socials?: SocialLink[];
  copyright?: string;
}

export default function Footer({
  titleScript = siteData.footer.titleScript,
  titleMain = siteData.footer.titleMain,
  links = siteData.footer.links,
  contact = siteData.footer.contact,
  socials = siteData.footer.socials,
  copyright = siteData.footer.copyright,
}: FooterProps) {
  return (
    <footer className="w-full bg-[#081827] text-white">
      {/* Upper Main Footer Grid */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-0 items-center">
          {/* Column 1: Stay Connected Luxury Branding */}
          <div className="md:col-span-5 lg:col-span-5 flex flex-col justify-center">
            <div className="inline-block">
              {/* Cursive / Calligraphic "Stay" */}
              <span className="block font-serif italic text-[44px] sm:text-[54px] lg:text-[60px] text-[#C29D68] leading-none mb-1 font-normal tracking-wide">
                {titleScript}
              </span>
              {/* Serif "Connected" */}
              <h2 className="font-serif-luxury text-[48px] sm:text-[60px] lg:text-[68px] font-medium text-white tracking-[-0.01em] leading-tight">
                {titleMain}
              </h2>
              {/* Golden underline accent */}
              <div className="w-20 sm:w-24 h-[1.5px] bg-[#B38749] mt-3 sm:mt-4" />
            </div>
          </div>

          {/* Column 2: Navigation Links with vertical dividing borders */}
          <div className="md:col-span-3 lg:col-span-3 lg:border-l lg:border-r border-[#1B2F44] lg:px-12 py-2 flex flex-col justify-center">
            <ul className="space-y-3.5 sm:space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[14px] sm:text-[15px] font-light text-[#E1E7EE] hover:text-[#C29D68] transition-colors duration-200 tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info & Social Icons */}
          <div className="md:col-span-4 lg:col-span-4 lg:pl-14 flex flex-col justify-center space-y-5">
            {/* Phone */}
            <div className="flex items-center gap-4 group">
              <div className="w-9 h-9 rounded-full border border-[#C29D68] flex items-center justify-center text-[#C29D68] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <FiPhone className="w-4 h-4" />
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="text-[14px] sm:text-[15px] text-[#E1E7EE] font-light hover:text-[#C29D68] transition-colors duration-200"
              >
                {contact.phone}
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 group">
              <div className="w-9 h-9 rounded-full border border-[#C29D68] flex items-center justify-center text-[#C29D68] shrink-0 transition-transform duration-300 group-hover:scale-105">
                <FiMail className="w-4 h-4" />
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="text-[14px] sm:text-[15px] text-[#E1E7EE] font-light hover:text-[#C29D68] transition-colors duration-200"
              >
                {contact.email}
              </a>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4 group">
              <div className="w-9 h-9 rounded-full border border-[#C29D68] flex items-center justify-center text-[#C29D68] shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-105">
                <FiMapPin className="w-4 h-4" />
              </div>
              <p className="text-[13px] sm:text-[14px] text-[#E1E7EE] font-light leading-snug whitespace-pre-line">
                {contact.address}
              </p>
            </div>
            <div className="flex items-center gap-3 pt-3">
              {socials.map((social) => {
                let IconComponent = FaFacebookF;
                if (social.platform === "instagram")
                  IconComponent = FaInstagram;
                if (social.platform === "youtube") IconComponent = FaYoutube;

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.platform}
                    className="w-9 h-9 rounded-full border border-[#C29D68] flex items-center justify-center text-[#C29D68] hover:bg-[#C29D68] hover:text-[#081827] transition-all duration-300 hover:scale-105"
                  >
                    <IconComponent className="w-3.5 h-3.5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#B38749]/60" />
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 py-4 sm:py-5">
        <p className="text-[14px] sm:text-[15px] text-white font-normal tracking-wide">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
