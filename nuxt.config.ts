import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
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
