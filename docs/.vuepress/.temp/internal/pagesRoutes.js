import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-79fdd481","/home.html",{"title":"主页","icon":"home","type":"article","readingTime":{"minutes":0.02,"words":6},"excerpt":"每日三省吾身","date":"2022-03-29T03:02:37.000Z"},["/home","/home.md"]],
  ["v-8daa1a0e","/",{"title":"Blog","icon":"home","type":"home","readingTime":{"minutes":0,"words":0},"excerpt":"","date":"2022-03-29T03:02:37.000Z"},["/index.html","/README.md"]],
  ["v-1dd9c8e3","/database/database.html",{"title":"database","type":"article","readingTime":{"minutes":0,"words":1},"excerpt":"database","date":"2022-03-29T03:02:37.000Z"},["/database/database","/database/database.md"]],
  ["v-fc7b6eba","/progress/progress.html",{"title":"progress","type":"article","readingTime":{"minutes":0,"words":1},"excerpt":"progress","date":"2022-03-29T03:02:37.000Z"},["/progress/progress","/progress/progress.md"]],
  ["v-02972d04","/web/html/html.html",{"title":"html demo","type":"article","readingTime":{"minutes":0.02,"words":6},"excerpt":"html demo 1 2 3 4","date":"2022-03-29T03:02:37.000Z"},["/web/html/html","/web/html/html.md"]],
  ["v-46094b16","/web/css/css.html",{"title":"css demo","type":"article","readingTime":{"minutes":0.01,"words":2},"excerpt":"css demo","date":"2022-03-29T03:02:37.000Z"},["/web/css/css","/web/css/css.md"]],
  ["v-15a69362","/web/javascript/js.html",{"title":"js demo","type":"article","readingTime":{"minutes":0.01,"words":2},"excerpt":"js demo","date":"2022-03-29T03:02:37.000Z"},["/web/javascript/js","/web/javascript/js.md"]],
  ["v-ef96e3d4","/java/java%E5%9F%BA%E7%A1%80/java.html",{"title":"java-demo","type":"article","readingTime":{"minutes":0.01,"words":2},"excerpt":"java-demo","date":"2022-03-29T03:02:37.000Z"},["/java/java基础/java.html","/java/java%E5%9F%BA%E7%A1%80/java","/java/java基础/java.md","/java/java%E5%9F%BA%E7%A1%80/java.md"]],
  ["v-3706649a","/404.html",{"title":"","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/404"]],
  ["v-5bc93818","/category/",{"title":"Category","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/category/index.html"]],
  ["v-744d024e","/tag/",{"title":"Tags","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/tag/index.html"]],
  ["v-e52c881c","/article/",{"title":"Articles","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/article/index.html"]],
  ["v-75ed4ea4","/encrypted/",{"title":"Encrypted","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/encrypted/index.html"]],
  ["v-2897d318","/slides/",{"title":"Slides","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/slides/index.html"]],
  ["v-154dc4c4","/star/",{"title":"Star","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/star/index.html"]],
  ["v-01560935","/timeline/",{"title":"Timeline","type":"page","readingTime":{"minutes":0,"words":0},"excerpt":""},["/timeline/index.html"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
