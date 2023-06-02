// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss', '@/assets/styles/animation.css'],
  runtimeConfig: {
    baseURL: 'http://api2.bytezone.online/',
    public: {
      baseURL: 'https://api.bytezone.online/',
      globalURL: 'https://api.bytezone.online/',
    },
  },
})
