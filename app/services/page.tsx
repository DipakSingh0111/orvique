import Breadcrumb from "@/components/ui/Breadcrumb";
import ServicesSection from "@/components/sections/ServicesSection";
import siteData from "@/data/qrvique.json";

export default function ServicesPage() {
  const { title, items } = siteData.breadcrumbs.services;

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* Breadcrumb Header with soft warm beige background */}
      <Breadcrumb
        title={title}
        items={items}
        className="bg-[#FAF7F2] border-b border-[#EDE5D8]/50"
      />

      {/* Main Content Area on Pure White Background matching exact reference image */}
      <div className="bg-white pt-10 sm:pt-14 pb-16 sm:pb-24">
        <ServicesSection />
      </div>
    </main>
  );
}
