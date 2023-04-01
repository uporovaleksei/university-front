// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss'],
  runtimeConfig: {
    public: {
      baseURL: 'https://api.bytezone.online/',
    },
  },
})
