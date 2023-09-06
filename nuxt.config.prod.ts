// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss', '@/assets/styles/animation.css'],
  runtimeConfig: {
    baseURL: 'http://api2.open.rsvpu.ru/',
    public: {
      baseURL: 'http://api.open.rsvpu.ru/',
      globalURL: 'http://api.open.rsvpu.ru/',
    },
  },
})
