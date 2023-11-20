import { defineUserConfig } from "vuepress";

import { theme } from "./theme";

import { shikiPlugin } from "@vuepress/plugin-shiki";
import { searchProPlugin } from "vuepress-plugin-search-pro";

import { cut } from "nodejs-jieba";

export default defineUserConfig({
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

  theme: theme,

  plugins: [
    shikiPlugin({
      theme: "dark-plus",
    }),
    searchProPlugin({
      indexContent: true,
      searchDelay: 1000,
      autoSuggestions: false,
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
