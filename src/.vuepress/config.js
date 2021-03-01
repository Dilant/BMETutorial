const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Ballex 制图教程",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [["meta", { name: "theme-color", content: "#ff9711" }]],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "Dilant/BMETutorial",
    editLinks: true,
    docsDir: "src",
    editLinkText: "在 GitHub 上编辑此页",
    lastUpdated: "上次更新",
    nav: [
      {
        text: "起步",
        link: "/start/preface",
      },
      {
        text: "进阶",
        link: "/advanced/",
      },
      {
        text: "FAQ",
        link: "/faq/",
      },
      {
        text: "更多",
        items: [
          {
            text: "版本迁移",
            items: [
              { text: "迁移指南", link: "/migration/guide" },
              { text: "更新日志", link: "/migration/changelog" },
            ],
          },
        ],
      },
      {
        text: "Ballex² 制图教程",
        link: "https://ballex2.dilant.cn/",
      },
      {
        text: "Ballex @ Steam",
        link: "https://store.steampowered.com/app/1114430/Ballex/",
      },
    ],
    sidebar: {
      "/start/": [
        {
          title: "起步",
          collapsable: false,
          children: [
            {
              title: "前言",
              path: "preface",
            },
          ],
        },
      ],

      "/migration/": [
        {
          title: "版本迁移",
          collapsable: false,
          children: [
            {
              title: "迁移指南",
              path: "guide",
            },
            {
              title: "更新日志",
              path: "changelog",
            },
          ],
        },
      ],

      "/": [""],
    },
  },

  markdown: {
    breaks: true,
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"],

  evergreen: true,
};
