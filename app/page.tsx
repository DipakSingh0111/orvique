import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import BlogSection from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF7F2] text-[#0E2038] relative flex flex-col overflow-x-hidden selection:bg-[#B38749]/20 selection:text-[#0E2038]">
      {/* Hero Section */}
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialSection />
      <BlogSection maxItems={4} />
    </main>
  );
}
