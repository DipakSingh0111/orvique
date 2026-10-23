import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogSection from "@/components/sections/BlogSection";
import { getOrviqueSections, getOrviquePageBanner } from "@/lib/orvique";

export default function BlogsPage() {
  const sections = getOrviqueSections();
  const banner = getOrviquePageBanner("blogs");

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      <Breadcrumb
        data={banner}
        title={banner?.title || "Blogs"}
        items={banner?.breadcrumb}
        className="bg-[#FAF7F2] border-b border-[#EDE5D8]/50"
      />

      <div className="bg-white pt-6 sm:pt-10 pb-16 sm:pb-24">
        <BlogSection data={sections.BlogNews?.variants?.OrviqueBlogNews1} showButton={false} />
      </div>
    </main>
  );
}
