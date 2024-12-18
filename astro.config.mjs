import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import astroI18next from "astro-i18next";

import netlify from "@astrojs/netlify";

// import node from "@astrojs/node";

// import transitions from "astro-transitions";

// import it from "./public/locales/it/translation.json" assert { type: "json" };
// import en from "./public/locales/en/translation.json" assert { type: "json" };

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    astroI18next({
      defaultLocale: "it",
      locales: ["it", "en"],
      returnObjects: true
    })
  ],
  adapter: netlify(),
  output: "server"
});
