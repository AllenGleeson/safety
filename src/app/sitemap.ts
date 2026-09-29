import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/privacy", "/terms", "/cookies"];
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-09-29"),
  }));
}
