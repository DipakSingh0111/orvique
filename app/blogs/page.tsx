import Breadcrumb from "@/components/ui/Breadcrumb";
import BlogSection from "@/components/sections/BlogSection";
import siteData from "@/data/qrvique.json";

export default function BlogsPage() {
  const { title, items } = siteData.breadcrumbs.blogs || {
    title: "Blogs",
    items: [
      { label: "HOME", href: "/" },
      { label: "Blogs" }
    ]
  };

  return (
    <main className="min-h-screen bg-white text-[#0E2038] relative flex flex-col overflow-x-hidden">
      {/* Breadcrumb Header matching reference screenshot */}
      <Breadcrumb
        title={title}
        items={items}
        className="bg-[#FAF7F2] border-b border-[#EDE5D8]/50"
      />

      {/* Main Content Area on Pure White Background */}
      <div className="bg-white pt-6 sm:pt-10 pb-16 sm:pb-24">
        <BlogSection showButton={false} />
      </div>
    </main>
  );
}
