import type { NextConfig } from "next";
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development",
  // Crucial: sw will be at /radio/sw.js
  sw: "sw.js",
  scope: "/radio/",
});

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.20.43.116"],
  output: "export",
  basePath: "/radio",
  assetPrefix: "/radio/",
  trailingSlash: true,
};

export default withPWA(nextConfig);
