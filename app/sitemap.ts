import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = "https://barwaaqo-agri.vercel.app";
  const now = new Date();

  // Keep this list strictly frontend/static (no backend calls).
  const staticRoutes = [
    "",
    "/about",
    "/contact",
    "/insights",
    "/partners",
    "/projects",
    "/services",
    "/services/advisory",
    "/services/irrigation",
    "/services/programs",
    "/services/seeds",
  ];

  // Dynamic routes currently have fixed static params in the repo.
  const insightSlugs = [
    "tomato-production-somalia",
    "benefits-drip-irrigation",
    "soil-preparation-techniques",
  ];

  const caseStudySlugs = [
    "baidoa-irrigation",
    "regional-seed-trials",
    "farmer-to-market",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.7,
    })),
    ...insightSlugs.map((slug) => ({
      url: `${siteUrl}/insights/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    ...caseStudySlugs.map((slug) => ({
      url: `${siteUrl}/projects/case-study/${slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
    })),
  ];
}

