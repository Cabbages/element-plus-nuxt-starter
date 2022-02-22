import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  srcDir: "src/",
  meta: {
    title: "ElementPlus + Nuxt3",
  },
  buildModules: ["@pinia/nuxt",'@unocss/nuxt',],
  css: ["assets/scss/index.scss"],
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  unocss: {
    uno: false,
    icons: {
      scale: 1.2,
    },
  },
});
