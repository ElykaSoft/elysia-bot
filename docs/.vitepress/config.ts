import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "NodeBotMagicCatalog",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {text: 'Home', link: '/'},
      {text: 'Examples', link: '/markdown-examples'}
    ],

    sidebar: [
      {
        text: '用户管理模块',
        items: [
          {
            text: '用户管理',
            link: '/elysia/market/user/用户管理.md',
            items: [
              {text: '用户信息维护', link: '/elysia/market/user/用户信息维护.md'},
              {text: '用户注册', link: '/elysia/market/user/用户注册.md'},
              {text: '用户注销', link: '/elysia/market/user/用户注销.md'},
              {text: '用户重置密码', link: '/elysia/market/user/用户重置密码.md'}
            ]
          },
        ]
      },
      {
        text: 'Examples',
        items: [
          {text: 'Markdown Examples', link: '/markdown-examples'},
          {text: 'Runtime API Examples', link: '/api-examples'}
        ]
      }
    ],

    socialLinks: [
      {icon: 'github', link: 'https://github.com/vuejs/vitepress'}
    ]
  }
})
