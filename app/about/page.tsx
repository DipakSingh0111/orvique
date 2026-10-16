import Breadcrumb from "@/components/ui/Breadcrumb";
import AboutSection from "@/components/sections/AboutSection";
import ProcessSection from "@/components/sections/ProcessSection";
import siteData from "@/data/qrvique.json";

export default function AboutPage() {
  const { title, items } = siteData.breadcrumbs.about;

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* Breadcrumb Header with warm light beige background */}
      <Breadcrumb
        title={title}
        items={items}
        className="bg-[#F8F5EE] border-b border-[#EDE5D8]/50"
      />

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white pt-10 sm:pt-14 pb-16 sm:pb-24">
        <AboutSection showButton={false} />
        <ProcessSection />
      </div>
    </main>
  );
}
