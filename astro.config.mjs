import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import astroI18next from "astro-i18next";

import netlify from "@astrojs/netlify";

export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  adapter: netlify(),
  output: "server"
});
