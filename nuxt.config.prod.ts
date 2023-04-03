// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss'],
  runtimeConfig: {
    public: {
      baseURL: 'http://api.bytezone.online/',
    },
  },
  server: {
    port: 4444,
  }
})
