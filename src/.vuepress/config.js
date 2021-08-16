module.exports = {
  head: [
    ["link", { rel: "icon", href: "/ballex.ico" }],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
  ],
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

  themeConfig: {
    repo: "Dilant/BMETutorial",
    docsDir: "src",
    contributors: false,
    selectLanguageText: "语言 / Languages",

    locales: {
      "/": {
        selectLanguageName: "简体中文",
        editLinkText: "在 GitHub 上编辑此页",
        lastUpdatedText: "上次更新",
        tip: "提示",
        warning: "注意",
        danger: "警告",
        notFound: [
          "啪！没了",
          "跟我念，四——零——四——",
          "不太聪明的样子",
          "因为我只是一只小白兔",
          "在写了在写了",
          "嘿！你不该来这里的！",
          "按 Alt + F4 移交控制权",
          'Press "Ctrl + W" to destroy or "Alt + ←" to resurrect',
          "特特又不是万能的",
          "再刷新你就……你就看遍了（笑",
        ],
        backToHome: "返回首页",
        navbar: [
          {
            text: "起步",
            link: "/start/",
          },
          {
            text: "进阶",
            link: "/advanced/",
          },
          {
            text: "图鉴",
            link: "/glossary/",
          },
          {
            text: "BLE",
            link: "/ble/",
          },
          {
            text: "FAQ",
            link: "/faq/",
          },
          {
            text: "更多",
            children: [
              {
                text: "版本迁移",
                children: [
                  { text: "迁移指南", link: "/migration/guide.md" },
                  { text: "更新日志", link: "/migration/changelog.md" },
                ],
              },
              {
                text: "另请参阅",
                children: [
                  {
                    text: "Steam 商城页面",
                    link: "https://store.steampowered.com/app/1114430/Ballex/",
                  },
                  {
                    text: "官方教程",
                    link: "http://steam.ballex.net/bme/tutorialcn.html",
                  },
                  {
                    text: "旧版教程",
                    link: "https://ballex.dilant.cn/assets/Ballex基础制图教程V1.0.pdf",
                  },
                  {
                    text: "Ballex² 制图教程",
                    link: "https://ballex2.dilant.cn/",
                  },
                ],
              },
              {
                text: "彩蛋",
                children: [
                  { text: "Ballex 周报", link: "/weekly/" },
                  { text: "404 页面", link: "/404/" },
                ],
              },
            ],
          },
        ],
        sidebar: {
          "/start/": [
            {
              isGroup: true,
              text: "起步",
              link: "/start/",
              collapsable: false,
              children: [
                "preparation.md",
                "basics.md",
                "alignment.md",
                "road-at-start.md",
                "road-splicing.md",
                "rail-splicing.md",
                "joints-of-road-and-rail.md",
                "machinery-layout.md",
                "test-map.md",
                "release.md",
                "shortcuts.md",
              ],
            },
          ],

          "/advanced/": [
            {
              isGroup: true,
              text: "进阶",
              link: "/advanced/",
              collapsable: false,
              children: [],
            },
          ],

          "/glossary/": [
            {
              isGroup: true,
              text: "图鉴",
              link: "/glossary/",
              collapsable: false,
              children: [
                "assets-in-menu.md",
                "extras.md",
                "machinery.md",
                "iron-rail.md",
                "stone-road.md",
                "wood-board.md",
                "ice-board.md",
                "pool.md",
                "moving-road.md",
                "tube.md",
                "adjustable-road.md",
              ],
            },
          ],

          "/migration/": [
            {
              isGroup: true,
              text: "版本迁移",
              collapsable: false,
              children: ["guide.md", "changelog.md"],
            },
          ],

          "/weekly/": [
            {
              isGroup: true,
              text: "Ballex 周报",
              link: "/weekly/",
              collapsable: false,
              sidebarDepth: 0,
              children: [
                {
                  text: "#1 20200522",
                  link: "1.md",
                },
                {
                  text: "#2 20200529",
                  link: "2.md",
                },
                {
                  text: "#3 20200605",
                  link: "3.md",
                },
                {
                  text: "#4 20200612",
                  link: "4.md",
                },
                {
                  text: "#5 20200619",
                  link: "5.md",
                },
                {
                  text: "#6 20200627",
                  link: "6.md",
                },
                {
                  text: "#7 20200703",
                  link: "7.md",
                },
                {
                  text: "#8 20200710",
                  link: "8.md",
                },
                {
                  text: "#9 20200717",
                  link: "9.md",
                },
                {
                  text: "#10 20200724",
                  link: "10.md",
                },
                {
                  text: "#11 20200731",
                  link: "11.md",
                },
                {
                  text: "#12 20200807",
                  link: "12.md",
                },
                {
                  text: "#13 20200814",
                  link: "13.md",
                },
                {
                  text: "#14 20200821",
                  link: "14.md",
                },
                {
                  text: "#15 20200828",
                  link: "15.md",
                },
                {
                  text: "#16 20200904",
                  link: "16.md",
                },
                {
                  text: "#17 20200911",
                  link: "17.md",
                },
                {
                  text: "#18 20200918",
                  link: "18.md",
                },
                {
                  text: "#19 20200925",
                  link: "19.md",
                },
                {
                  text: "#20 20201002",
                  link: "20.md",
                },
              ],
            },
          ],

          "/": [""],
        },
      },

      "/en/": {
        selectLanguageName: "English",
        editLinkText: "Edit this page on GitHub",
        lastUpdatedText: "Last updated",
        notFound: [
          "Peek-a-boo!",
          "Read after me, four-oh-four--",
          "Looks not that clever",
          "Because I'm just a little bunny",
          "Coming s∞n",
          "Whoa there! Go back!",
          '"Alt + F4" to hand over the control',
          'Press "Ctrl + W" to destroy or "Alt + ←" to resurrect',
          "I'm nowhere near omnipotent",
          'No "F5" any more, I\'ve told you!',
        ],
        navbar: [
          {
            text: "Start",
            link: "/en/start/",
          },
          {
            text: "Advanced",
            link: "/en/advanced/",
          },
          {
            text: "Glossary",
            link: "/en/glossary/",
          },
          {
            text: "BLE",
            link: "/en/ble/",
          },
          {
            text: "FAQ",
            link: "/en/faq/",
          },
          {
            text: "More",
            children: [
              {
                text: "Versioning",
                children: [
                  { text: "Migration Guide", link: "/en/migration/guide.md" },
                  { text: "Changelog", link: "/en/migration/changelog.md" },
                ],
              },
              {
                text: "See Also",
                children: [
                  {
                    text: "Steam Store Page",
                    link: "https://store.steampowered.com/app/1114430/Ballex/",
                  },
                  {
                    text: "Official Tutorial",
                    link: "http://steam.ballex.net/bme/tutorial.html",
                  },
                  {
                    text: "Legacy Tutorial (简体中文)",
                    link: "https://ballex.dilant.cn/assets/Ballex基础制图教程V1.0.pdf",
                  },
                  {
                    text: "Ballex² Mapping Tutorial",
                    link: "https://ballex2.dilant.cn/en/",
                  },
                ],
              },
              {
                text: "Easter Egg",
                children: [{ text: "404 Page", link: "/en/404/" }],
              },
            ],
          },
        ],
        sidebar: {
          "/en/start/": [
            {
              isGroup: true,
              text: "Start",
              link: "/en/start/",
              collapsable: false,
              children: [
                "preparation.md",
                "basics.md",
                "alignment.md",
                "road-at-start.md",
                "road-splicing.md",
                "rail-splicing.md",
                "joints-of-road-and-rail.md",
                "machinery-layout.md",
                "test-map.md",
                "release.md",
                "shortcuts.md",
              ],
            },
          ],

          "/en/advanced/": [
            {
              isGroup: true,
              text: "Advanced",
              link: "/en/advanced/",
              collapsable: false,
              children: [],
            },
          ],

          "/en/glossary/": [
            {
              isGroup: true,
              text: "Glossary",
              link: "/en/glossary/",
              collapsable: false,
              children: [
                "assets-in-menu.md",
                "extras.md",
                "machinery.md",
                "iron-rail.md",
                "stone-road.md",
                "wood-board.md",
                "ice-board.md",
                "pool.md",
                "moving-road.md",
                "tube.md",
                "adjustable-road.md",
              ],
            },
          ],

          "/en/migration/": [
            {
              isGroup: true,
              text: "Versioning",
              collapsable: false,
              children: ["guide.md", "changelog.md"],
            },
          ],

          "/en/": [""],
        },
      },
    },
  },

  markdown: {
    breaks: true,
  },

  plugins: [
    ["@vuepress/plugin-shiki", { theme: "dark-plus" }],
    [
      "@vuepress/plugin-search",
      {
        locales: {
          "/": {
            placeholder: "搜索",
          },
          "/en/": {
            placeholder: "Search",
          },
        },
      },
    ],
    [
      "@vuepress/pwa",
      {
        skipWaiting: true,
      },
    ],
  ],
};
