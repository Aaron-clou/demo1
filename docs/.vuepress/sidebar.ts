import { defineSidebarConfig } from 'vuepress-theme-hope'

export default defineSidebarConfig([
  '',
  'home',

  {
    text: '前端',
    prefix: '/web/',
    children: [
      { text: 'html', link: 'html/html.md' },
      { text: 'css', link: 'css/css.md' },
      { text: 'javascipts', link: 'javascript/js.md' }
    ]
  },
  { text: 'java', prefix: '/java/', children: [{ text: 'java基础', link: 'java基础/java.md' }] },
  { text: '数据库', prefix: '/database/', children: [{ text: '数据库基础', link: 'database.md' }] },
  { text: '学习报告', prefix: '/progress/', children: [{ text: '学习进度汇报', link: 'progress.md' }] }
])
