import { defineUserConfig } from "vuepress";

import { viteBundler } from "@vuepress/bundler-vite";

import { theme } from "./theme";

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { slimsearchPlugin } from "@vuepress/plugin-slimsearch";

import { cut } from "nodejs-jieba";

export default defineUserConfig({
  bundler: viteBundler(),
  theme: theme,

  head: [["link", { rel: "icon", href: "/ballex.ico" }]],
  locales: {
    "/": {
      lang: "zh-CN",
      title: "Ballex 制图教程",
      description: "基于 Ballex Map Editor 3.5.3b2 编写",
    },
    "/en/": {
      lang: "en-US",
      title: "Ballex Mapping Tutorial",
      description: "Based on Ballex Map Editor 3.5.3b2",
    },
  },

  markdown: {
    breaks: true,
  },

  plugins: [
    shikiPlugin({
      theme: "dark-plus",
    }),
    slimsearchPlugin({
      indexContent: true,
      searchDelay: 1000,
      suggestion: false,
      hotKeys: [],
      indexLocaleOptions: {
        "/": {
          // tokenize the content with nodejs-jieba
          tokenize: (text, fieldName) =>
            fieldName === "id" ? [text] : cut(text, true),
        },
      },
    }),
  ],
});
