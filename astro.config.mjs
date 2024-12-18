import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import astroI18next from "astro-i18next";

import node from "@astrojs/node";

import netlify from "@astrojs/netlify";

// import transitions from "astro-transitions";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroI18next()],
  output: "server",
  adapter: netlify()
});