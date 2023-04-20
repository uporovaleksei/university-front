// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['@/assets/styles/root.scss'],
  runtimeConfig: {
    public: {
      baseURL: 'http://127.0.0.1:3333/',
    },
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href: 'https://cdn.plyr.io/3.6.8/plyr.css'
      },
      {
        rel: 'stylesheet',
        href:"https://vjs.zencdn.net/7.15.4/video-js.css"
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.plyr.io/3.6.8/plyr.quality.css'
      }
    ]
  },
  
})
