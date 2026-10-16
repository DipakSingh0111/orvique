import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import BlogSection from "@/components/sections/BlogSection";
import { getOrviqueSections } from "@/lib/orvique";

export default function Home() {
  const sections = getOrviqueSections();

  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#0E2038] relative flex flex-col overflow-x-hidden selection:bg-[#B38749]/20 selection:text-[#0E2038]">
      {/* Hero Section */}
      <HeroSection data={sections.HeroBanner?.variants?.OrviqueHeroBanner1} />
      <AboutSection data={sections.AboutUs?.variants?.OrviqueAboutUs1} />
      <ServicesSection data={sections.Services?.variants?.OrviqueServices1} />
      <ProcessSection data={sections.WorkingProcess?.variants?.OrviqueWorkingProcess1} />
      <TestimonialSection data={sections.Testimonials?.variants?.OrviqueTestimonials1} />
      <BlogSection data={sections.BlogNews?.variants?.OrviqueBlogNews1} maxItems={4} />
    </main>
  );
}
