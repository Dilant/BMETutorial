export const navbarZh = [
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
        children: [{ text: "Ballex 周报", link: "/weekly/" }],
      },
    ],
  },
];

export const sidebarZh = {
  "/start/": [
    {
      text: "起步",
      link: "/start/",
      children: [
        "preparation.md",
        "basic-operation.md",
        "alignment.md",
        "road-concatenating.md",
        "road-locating-at-start-point.md",
        "road-locating-at-save-point.md",
        "rail-concatenating.md",
        "connecting-road-and-rail.md",
        "machinery-locating.md",
        "map-testing.md",
        "release.md",
        "shortcut.md",
      ],
    },
  ],

  "/advanced/": [
    {
      text: "进阶",
      link: "/advanced/",
      children: [
        "axis-and-origin.md",
        "advanced-rail-concatenating.md",
        "cooperative-mapping.md",
      ],
    },
  ],

  "/glossary/": [
    {
      text: "图鉴",
      link: "/glossary/",
      children: [
        "assets-in-menu.md",
        "extras.md",
        "machinery.md",
        "iron-rail.md",
        "stone-road.md",
        "wooden-board.md",
        "ice-board.md",
        "pool.md",
        "moving-object.md",
        "tube.md",
        "adjustable-object.md",
      ],
    },
  ],

  "/migration/": [
    {
      text: "版本迁移",
      children: ["guide.md", "changelog.md"],
    },
  ],

  "/weekly/": [
    {
      text: "Ballex 周报",
      link: "/weekly/",
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
};

export const navbarEn = [
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
    ],
  },
];

export const sidebarEn = {
  "/en/start/": [
    {
      text: "Start",
      link: "/en/start/",
      children: [
        "preparation.md",
        "basic-operation.md",
        "alignment.md",
        "road-concatenating.md",
        "road-locating-at-start-point.md",
        "road-locating-at-save-point.md",
        "rail-concatenating.md",
        "connecting-road-and-rail.md",
        "machinery-locating.md",
        "map-testing.md",
        "release.md",
        "shortcut.md",
      ],
    },
  ],

  "/en/advanced/": [
    {
      text: "Advanced",
      link: "/en/advanced/",
      children: [
        "axis-and-origin.md",
        "advanced-rail-concatenating.md",
        "cooperative-mapping.md",
      ],
    },
  ],

  "/en/glossary/": [
    {
      text: "Glossary",
      link: "/en/glossary/",
      children: [
        "assets-in-menu.md",
        "extras.md",
        "machinery.md",
        "iron-rail.md",
        "stone-road.md",
        "wooden-board.md",
        "ice-board.md",
        "pool.md",
        "moving-object.md",
        "tube.md",
        "adjustable-object.md",
      ],
    },
  ],

  "/en/migration/": [
    {
      text: "Versioning",
      children: ["guide.md", "changelog.md"],
    },
  ],

  "/en/": [""],
};
