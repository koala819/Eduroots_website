import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import compressor from "astro-compressor";
import vercel from "@astrojs/vercel/serverless";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  // https://docs.astro.build/en/guides/images/#authorizing-remote-images
  site: "https://eduroots.org",
  image: {
    domains: ["images.unsplash.com"],
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
    // Optimisations avancées
    quality: 85,
    format: ["webp", "avif"],
    densities: [1, 2],
  },
  output: "server",
  adapter: vercel(),
  prefetch: true,
  integrations: [
    sitemap(),
    compressor({
      gzip: false,
      brotli: true,
    }),
    mdx()
  ],
  experimental: {
    clientPrerender: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
