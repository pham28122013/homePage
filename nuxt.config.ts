// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
 app: {
  baseURL: process.env.NUXT_APP_BASE_URL || '/',
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
