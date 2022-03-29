import { defineThemeConfig } from 'vuepress-theme-hope'
import navbar from './navbar'
import sidebar from './sidebar'

export default defineThemeConfig({
  hostname: 'https://vuepress-theme-hope-v2-demo.mrhope.site',

  author: {
    name: 'Leo214',
    url: 'https://example.com'
  },

  iconPrefix: 'iconfont ',

  logo: '/logo_2.svg',

  repo: 'https://github.com/vuepress-theme-hope/vuepress-theme-hope',

  docsDir: 'demo/src',

  //navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '默认页脚',

  displayFooter: true,

  pageInfo: ['Author', 'Original', 'Date', 'Category', 'Tag', 'ReadingTime'],

  blog: {
    name: 'Leo214',
    description: '耕耘,不问收获',
    medias: {
      GitHub: 'https://github.com/Aaron-clou',
      Gitee: 'https://gitee.com/'
    },

    avatar: '/touxiang1.jpg',
    roundAvatar: true
  },

  encrypt: {
    config: {
      // '/guide/encrypt.html': ['1234'],
      // '/zh/guide/encrypt.html': ['1234']
    }
  },

  plugins: {
    blog: {
      autoExcerpt: true
    },

    // you can also use Waline
    // comment: {
    //   type: 'giscus',
    //   repo: 'vuepress-theme-hope/giscus-discussions',
    //   repoId: 'R_kgDOG_Pt2A',
    //   category: 'Announcements',
    //   categoryId: 'DIC_kwDOG_Pt2M4COD69'
    // },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ['highlight', 'math', 'search', 'notes', 'zoom']
      }
    }
  }
})
