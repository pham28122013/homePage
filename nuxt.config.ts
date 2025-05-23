import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
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
