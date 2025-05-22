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
    baseURL: process.env.NODE_ENV === 'production' ? '/homePage/' : '/',
    buildAssetsDir: 'assets'
  },

  nitro: {
    preset: 'static',
    prerender: {
      routes: ['/', '/homePage']
    }
  },

  vite: {
    optimizeDeps: {
      exclude: ['oxc-parser']
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
