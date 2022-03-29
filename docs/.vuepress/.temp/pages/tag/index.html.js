export const data = {
  "key": "v-744d024e",
  "path": "/tag/",
  "title": "Tags",
  "lang": "en-US",
  "frontmatter": {
    "title": "Tags",
    "blog": {
      "type": "category",
      "key": "tag"
    },
    "layout": "Blog",
    "summary": "",
    "head": [
      [
        "meta",
        {
          "property": "og:url",
          "content": "https://vuepress-theme-hope-v2-demo.mrhope.site/demo1/tag/"
        }
      ],
      [
        "meta",
        {
          "property": "og:site_name",
          "content": "LeoBlog"
        }
      ],
      [
        "meta",
        {
          "property": "og:title",
          "content": "Tags"
        }
      ],
      [
        "meta",
        {
          "property": "og:type",
          "content": "website"
        }
      ],
      [
        "meta",
        {
          "property": "og:locale",
          "content": "en-US"
        }
      ]
    ]
  },
  "excerpt": "",
  "headers": [],
  "readingTime": {
    "minutes": 0,
    "words": 0
  },
  "filePathRelative": null
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
