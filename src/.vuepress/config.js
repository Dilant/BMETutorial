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
    sidebarDepth: 2,
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
          {
            text: "彩蛋",
            items: [{ text: "Ballex 周报", link: "/weekly/" }],
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

      "/weekly/": [
        {
          title: "Ballex 周报",
          path: "/weekly/",
          collapsable: false,
          sidebarDepth: 0,
          children: [
            {
              title: "#1 20200522",
              path: "1",
            },
            {
              title: "#2 20200529",
              path: "2",
            },
            {
              title: "#3 20200605",
              path: "3",
            },
            {
              title: "#4 20200612",
              path: "4",
            },
            {
              title: "#5 20200619",
              path: "5",
            },
            {
              title: "#6 20200627",
              path: "6",
            },
            {
              title: "#7 20200703",
              path: "7",
            },
            {
              title: "#8 20200710",
              path: "8",
            },
            {
              title: "#9 20200717",
              path: "9",
            },
            {
              title: "#10 20200724",
              path: "10",
            },
            {
              title: "#11 20200731",
              path: "11",
            },
            {
              title: "#12 20200807",
              path: "12",
            },
            {
              title: "#13 20200814",
              path: "13",
            },
            {
              title: "#14 20200821",
              path: "14",
            },
            {
              title: "#15 20200828",
              path: "15",
            },
            {
              title: "#16 20200904",
              path: "16",
            },
            {
              title: "#17 20200911",
              path: "17",
            },
            {
              title: "#18 20200918",
              path: "18",
            },
            {
              title: "#19 20200925",
              path: "19",
            },
            {
              title: "#20 20201002",
              path: "20",
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
