import Breadcrumb from "@/components/ui/Breadcrumb";
import ServicesSection from "@/components/sections/ServicesSection";
import { getOrviqueSections, getOrviquePageBanner } from "@/lib/orvique";

export default function ServicesPage() {
  const sections = getOrviqueSections();
  const banner = getOrviquePageBanner("services");

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* Breadcrumb Header with soft warm beige background */}
      <Breadcrumb
        data={banner}
        title={banner?.title || "Services"}
        items={banner?.breadcrumb}
        className="bg-[#FAF7F2] border-b border-[#EDE5D8]/50"
      />

      {/* Main Content Area on Pure White Background matching exact reference image */}
      <div className="bg-white pt-10 sm:pt-14 pb-16 sm:pb-24">
        <ServicesSection data={sections.Services?.variants?.OrviqueServices1} />
      </div>
    </main>
  );
}
