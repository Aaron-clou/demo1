import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("D:/800_Workspace/820_Web/826_LeoBlog/node_modules/vuepress-theme-hope/lib/client/layouts/404.js")),
  "Layout": defineAsyncComponent(() => import("D:/800_Workspace/820_Web/826_LeoBlog/node_modules/vuepress-theme-hope/lib/client/layouts/Layout.js")),
  "Slide": defineAsyncComponent(() => import("vuepress-plugin-md-enhance/lib/client/SlidePage.js")),
  "Blog": defineAsyncComponent(() => import("D:/800_Workspace/820_Web/826_LeoBlog/node_modules/vuepress-theme-hope/lib/client/module/blog/layouts/Blog.js")),
}
