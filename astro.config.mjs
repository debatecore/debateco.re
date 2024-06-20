import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
    markdown: {
    // Example: Translate the footnotes text to another language, here are the default English values
    remarkRehype: { footnoteLabel: "Bibliografia"},
  },
});
