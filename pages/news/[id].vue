<script setup>
import imgLink from '~~/plugins/imgLink'

const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: news } = await useFetch('news-post/' + route.params.id, { baseURL })
</script>
<template>
  <h1>News</h1>
  <div class="container">
    <img class="img" :src="imgLink(news)" />
    <h2>{{ news.title }}</h2>
  </div>
</template>

<style></style>
