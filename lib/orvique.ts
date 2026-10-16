import rawData from "@/data/qrvique.json";
import type { OrviqueTemplateData } from "@/types/orvique.types";

const templateData: OrviqueTemplateData = rawData as unknown as OrviqueTemplateData;

export function getOrviqueSections() {
  return templateData.categories.Orvique.sections;
}

export function getOrviquePageBanner(pageKey: string) {
  const banners = templateData.categories.Orvique.sections.PageBanners?.variants?.OrviquePageBanners1?.pages;
  return banners?.[pageKey];
}
