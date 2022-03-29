import { defineHopeConfig } from 'vuepress-theme-hope'
import themeConfig from './themeConfig'

export default defineHopeConfig({
  base: '/',

  dest: './dist',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_3282046_zupk1vicks.css'
      }
      // <script src="https://kit.fontawesome.com/f65f65420a.js" crossorigin="anonymous"></script>
    ],
    [
      'script',
      {
        src: 'https://kit.fontawesome.com/ca37c296c5.js',
        // src: 'https://kit.fontawesome.com/f65f65420a.js',
        crossorigin: 'anonymous'
      }
    ]
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'Theme Demo',
      description: 'A demo for vuepress-theme-hope'
    }
  },

  themeConfig
})
