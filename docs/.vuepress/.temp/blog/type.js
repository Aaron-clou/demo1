export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-79fdd481","v-1dd9c8e3","v-fc7b6eba","v-02972d04","v-46094b16","v-15a69362","v-ef96e3d4"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slides/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/timeline/","keys":["v-79fdd481","v-1dd9c8e3","v-fc7b6eba","v-02972d04","v-46094b16","v-15a69362","v-ef96e3d4"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}
