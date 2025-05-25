// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
import { defineConfig } from 'vitepress'
// import { createRobots } from 'vite-plugin-robots'
import mdItCustomAttrs from 'markdown-it-custom-attrs'//点击图片放大
// import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";
// const { generateSidebar } = VitepressPluginNestedSidebar();

import { ymSidebar } from './ymSidebar.js'

import path from 'path';
// console.log('====', import.meta.dirname); // 输出：/path/to/your/module

const bookRootDir = path.join(import.meta.dirname, '../../../book')
// const bookRootDir = path.join(import.meta.dirname, '../book')
// const bookRootDir = join(__dirname, '../book')
// const bookRootDir = './book'
console.log('====bookRootDir', bookRootDir);

function getSidebar() {
  let a = ymSidebar(bookRootDir)
  return a;
}

const basePath = '/apisql'
export default defineConfig({
  lang: 'zh-Hans',
  title: "apisqldoc",
  description: "apisqldoc",
  base: basePath,
  srcDir: bookRootDir,
  head: [
    ['link', { rel: 'icon', href: basePath + '/images/favicon.ico' }],
  ],
  themeConfig: {
    siteTitle: 'apiSQL',
    logo: '/images/favicon.ico',//'/images/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: '在线版', link: 'https://open.apisql.cn' }
    ],
    sidebar: getSidebar(),
    // sidebar: ymSidebar(bookRootDir),
    sidebarMenuLabel: '目录',
    outline: [2, 3],

    outlineTitle: '页面导航',

    //右边github图标
    socialLinks: [
      { icon: 'github', link: 'https://github.com/yyimen/apisqldoc.git' }
    ],
    aside: true,
    // aside: false,
    footer: {
      message: '',
      copyright: 'Copyright © 2025 - present apisql'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
        }
      }
    }
  },


  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(mdItCustomAttrs, 'image', {
        'data-fancybox': "gallery"
      })
    }
  },
  vite: {
    build: {
      sourcemap: true  // 必须设置为 true
    },
    // plugins: [
    //   createRobots({
    //     host: 'https://yourdomain.com',
    //     sitemap: 'https://yourdomain.com/sitemap.xml',
    //     policies: [
    //       {
    //         userAgent: '*',
    //         allow: '/',
    //         disallow: '/private/',
    //       },
    //     ],
    //   }),
    // ],
    // plugins: [
    //   AutoSidebar({
    //     // 当插件将目录结构转换为 sidebar 配置后触发，
    //     sidebarResolved(value) {
    //       console.log(value);
    //       value = ymSidebar()
    //       // value["/dir2/"][0].items?.sort((a, b) => a.text - b.text);// do sort
    //       // value["/dir2/"][0].text = "sorted";// rename
    //       // return value;
    //     },
    //     ignores: ["index.md"],// 忽略一些文件
    //     // Which files are included
    //     docs: bookRootDir, // 指定我们要自动构建的文档目录，默认是 .vitepress 目录
    //     // root: path.resolve(process.cwd(), "docs"),//指定 .vitepress 目录，默认会通过 glob 匹配到，
    //   }),
    // ],
  },
})
