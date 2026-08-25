import type { NextConfig } from "next";

// Set in CI to the repo name (e.g. "/website-kroketco") so the site works from
// the GitHub Pages project subpath. Empty in local dev so assets resolve at "/".
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Emit a fully static site into `out/` for GitHub Pages.
  output: "export",
  basePath: basePath || undefined,
  // GitHub Pages serves each route as a directory index.html.
  trailingSlash: true,
  // No Node image optimizer on a static host.
  images: { unoptimized: true },
};

export default nextConfig;
