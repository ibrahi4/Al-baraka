import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { services } from "@/config/services";
import { governorates, newCitiesSlugs } from "@/config/governorates";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/services`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/areas`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.95 },
    { url: `${siteConfig.url}/faq`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const servicePages = services.map((s) => ({
    url: `${siteConfig.url}/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  const areaPages = governorates.map((g) => ({
    url: `${siteConfig.url}/areas/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: newCitiesSlugs.includes(g.slug) ? 0.95 : 0.75,
  }));

  return [...staticPages, ...servicePages, ...areaPages];
}
