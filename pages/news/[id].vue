<script setup>
import imgLink from '@/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: news } = await useFetch('news-post/' + route.params.id, { baseURL })
</script>
<template>
  <MainVue>
    <div class="wrapper">
      <div class="container">
        <h1>{{ news.title }}</h1>
        <img class="img" :src="imgLink(news)" />
        <p>{{ news.description }}</p>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  .container {
    width: 60%;
    margin: 0 auto;
    padding: 120px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    img {
      width: 90%;
      position: relative;
    }
    h1 {
      align-self: flex-start;
    }
    p {
      font-style: normal;
      font-weight: 400;
      font-size: 24px;
      margin-top: 60px;
    }
  }
}
</style>
