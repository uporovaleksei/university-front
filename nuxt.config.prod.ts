// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss', '@/assets/styles/animation.css'],
  runtimeConfig: {
    baseURL: 'http://api2.open.rsvpu.ru/',
    public: {
      baseURL: 'https://api.open.rsvpu.ru/',
      globalURL: 'https://api.open.rsvpu.ru/',
    },
  },
})
