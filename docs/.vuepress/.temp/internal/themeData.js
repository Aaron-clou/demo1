export const themeData = {
  "blog": {
    "name": "Leo214",
    "description": "耕耘,不问收获",
    "medias": {
      "GitHub": "https://github.com/Aaron-clou",
      "Gitee": "https://gitee.com/"
    },
    "avatar": "/touxiang1.jpg",
    "roundAvatar": true
  },
  "encrypt": {
    "config": {}
  },
  "pure": false,
  "iconPrefix": "iconfont ",
  "darkmode": "auto-switch",
  "themeColor": {
    "red": "#e74c3c",
    "blue": "#3498db",
    "green": "#3eaf7c",
    "orange": "#f39c12",
    "purple": "#8e44ad"
  },
  "fullscreen": true,
  "locales": {
    "/": {
      "blog": {
        "name": "Leo214",
        "description": "耕耘,不问收获",
        "medias": {
          "GitHub": "https://github.com/Aaron-clou",
          "Gitee": "https://gitee.com/"
        },
        "avatar": "/touxiang1.jpg",
        "roundAvatar": true
      },
      "repoDisplay": true,
      "navbarIcon": true,
      "navbarAutoHide": "mobile",
      "hideSiteNameonMobile": true,
      "sidebar": [
        "",
        "home",
        {
          "text": "前端",
          "prefix": "/web/",
          "children": [
            {
              "text": "html",
              "link": "html/html.md"
            },
            {
              "text": "css",
              "link": "css/css.md"
            },
            {
              "text": "javascipts",
              "link": "javascript/js.md"
            }
          ]
        },
        {
          "text": "java",
          "prefix": "/java/",
          "children": [
            {
              "text": "java基础",
              "link": "java基础/java.md"
            }
          ]
        },
        {
          "text": "数据库",
          "prefix": "/database/",
          "children": [
            {
              "text": "数据库基础",
              "link": "database.md"
            }
          ]
        },
        {
          "text": "学习报告",
          "prefix": "/progress/",
          "children": [
            {
              "text": "学习进度汇报",
              "link": "progress.md"
            }
          ]
        }
      ],
      "sidebarIcon": true,
      "headerDepth": 2,
      "author": {
        "name": "Leo214",
        "url": "https://example.com"
      },
      "logo": "/logo_2.svg",
      "repo": "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
      "docsDir": "demo/src",
      "navbar": [
        "/",
        "/home",
        {
          "text": "前端",
          "prefix": "/web/",
          "children": [
            {
              "text": "html",
              "link": "html/html.md"
            },
            {
              "text": "css",
              "link": "css/css.md"
            },
            {
              "text": "javascipts",
              "link": "javascript/js.md"
            }
          ]
        },
        {
          "text": "java",
          "prefix": "/java/",
          "children": [
            {
              "text": "java基础",
              "link": "java基础/java.md"
            }
          ]
        },
        {
          "text": "数据库",
          "prefix": "/database/",
          "children": [
            {
              "text": "数据库基础",
              "link": "database.md"
            }
          ]
        },
        {
          "text": "学习报告📖",
          "prefix": "/progress/",
          "children": [
            {
              "text": "学习进度汇报",
              "link": "progress.md"
            }
          ]
        }
      ],
      "footer": "默认页脚",
      "displayFooter": true,
      "pageInfo": [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ],
      "lang": "en-US",
      "navbarLocales": {
        "langName": "English",
        "selectLangText": "Language",
        "selectLangAriaLabel": "Select language"
      },
      "metaLocales": {
        "prev": "Prev",
        "next": "Next",
        "lastUpdated": "Last update",
        "contributors": "Contributors",
        "editLink": "Edit this page"
      },
      "blogLocales": {
        "article": "Articles",
        "articleList": "Article List",
        "category": "Category",
        "tag": "Tags",
        "timeline": "Timeline",
        "timelineTitle": "Yesterday Once More!",
        "all": "All",
        "intro": "Personal Intro",
        "star": "Star",
        "slides": "Slides",
        "encrypt": "Encrypted"
      },
      "outlookLocales": {
        "themeColor": "Theme Color",
        "darkmode": "Theme Mode",
        "fullscreen": "Full Screen"
      },
      "encryptLocales": {
        "title": "Please enter password",
        "errorHint": "Please enter the correct password!"
      },
      "routeLocales": {
        "404msg": [
          "There’s nothing here.",
          "How did we get here?",
          "That’s a Four-Oh-Four.",
          "Looks like we've got some broken links."
        ],
        "back": "Go back",
        "home": "Take me home"
      }
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
