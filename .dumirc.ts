/*
 * @Author: 田双明 2418639820@qq.com
 * @Date: 2023-09-03 05:39:23
 * @LastEditors: 田双明 2418639820@qq.com
 * @LastEditTime: 2023-09-03 08:26:57
 * @FilePath: /dumi-hooks/.dumirc.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineConfig } from 'dumi';
import { menus } from './config/hooks';
export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'hooks-组件库',
    themeConfig: {
      hd: { rules: [] },
      rtl: true,
      name: 'Tst Design',
      // logo: '',
      footer: 'tastaien | Copyright © 2023-present',
      prefersColor: { default: 'light', switch: true },
    },
    theme: {
      '@c-primary': '#b62021',
      'primary-color': '#b62021',
    },
    nav: {
      'zh-CN': [
        { title: '博客', link: '/blog' },
        { title: 'hooks列表', link: '/components' },
      ],
    },
    menus: {
      '/': [
        {
          title: '首页',
          path: 'index',
        },
      ],
      '/guide': [
        {
          title: '介绍',
          path: '/guide',
        },
      ],
      '/components': menus,
    },
  },
});
