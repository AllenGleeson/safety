import type { NextConfig } from "next";

const repoName = "safety";
const basePath =
  process.env.GITHUB_PAGES === "true"
    ? `/${repoName}`
    : process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
  ...(basePath ? { basePath } : {}),
};

export default nextConfig;
