// https://vitepress.dev/reference/site-config
// https://vitepress.dev/reference/default-theme-config
import { defineConfig } from 'vitepress'
// import { createRobots } from 'vite-plugin-robots'
import mdItCustomAttrs from 'markdown-it-custom-attrs'//点击图片放大
// import VitepressPluginNestedSidebar from "vitepress-plugin-nested-sidebar";
// const { generateSidebar } = VitepressPluginNestedSidebar();
import llmstxt from 'vitepress-plugin-llms'
import { ymSidebar } from './ymSidebar.js'

import path from 'path';
// console.log('====', import.meta.dirname); // 输出：/path/to/your/module

const bookRootDir = path.join(import.meta.dirname, '../book')
console.log('====bookRootDir', bookRootDir);

function getSidebar() {
  let a = ymSidebar(bookRootDir)
  return a;
}

import fs from 'fs';

const pkg = JSON.parse(fs.readFileSync(path.join(import.meta.dirname, '../package.json'), 'utf-8')) // 根据实际路径调整
const version = pkg.version
console.log('version:', version)

const basePath = '/apisql'
export default defineConfig({
  lang: 'zh-Hans',
  title: "apisqldoc",
  description: "apisqldoc",
  base: basePath,
  srcDir: 'book',

  head: [
    ['link', { rel: 'icon', href: basePath + '/favicon.ico' }],
  ],
  themeConfig: {
    siteTitle: 'apiSQL',
    logo: '/favicon.ico',//'/images/logo.png',

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
    // aside: true,
    aside: false,
    footer: {
      message: '',
      copyright: 'Copyright © 2022 - present apisql  (V:' + version + ')'
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
      // sourcemap: true,  // 调试时为 true
    },
    plugins: [
      llmstxt({
        // generateLLMsFullTxt: false,    // 关闭全量文件生成
        ignoreFiles: ['archive/*'],   // 忽略指定目录
        title: 'apiSQL',             // 自定义网站标题
        customTemplateVariables: {    // 注入动态变量
          version: 'v'  + version
        }
      })
    ],
  },
})

