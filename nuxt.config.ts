// import { defineNuxtConfig } from 'nuxt/config'

// export default defineNuxtConfig({
//  app: {
//   baseURL: process.env.NUXT_APP_BASE_URL || '/',
//  },
//  css: [
//     'vuetify/styles',
//     '@mdi/font/css/materialdesignicons.min.css',
//     '@/assets/styles/font-style.scss',
//     '@/assets/styles/font-classes.scss'
//   ],
//   build: {
//     transpile: ['vuetify']
//   }
// })

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // Disable SSR để tạo static site
  ssr: false,
  
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    buildAssetsDir: 'assets'
  },
  
  // Prerender các routes cho GitHub Pages
  nitro: {
    prerender: {
      routes: [
        '/',
        '/homePage'
      ]
    }
  },
  
  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.min.css',
    '@/assets/styles/font-style.scss',
    '@/assets/styles/font-classes.scss'
  ],
  
  build: {
    transpile: ['vuetify']
  }
})
