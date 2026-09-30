import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/privacy/", "/terms/", "/cookies/"];
  return paths.map((path) => ({
    url: `${site.url.replace(/\/$/, "")}${path}`,
    lastModified: new Date("2026-09-29"),
  }));
}
