// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss', '@/assets/styles/animation.css'],
  runtimeConfig: {
    baseURL: 'https://127.0.0.1:3333/',
    public: {
      baseURL: 'https://api.bytezone.online/',
      globalURL: 'https://api.bytezone.online/'
    },
  },
})
