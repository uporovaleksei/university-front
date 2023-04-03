<script setup>
import imgLink from '@/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
import { onMounted } from 'vue'
const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: storie } = await useFetch('storie/' + route.params.id, { baseURL })
</script>

<template>
  <Head>
    <Title>{{ storie.title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
<iframe width="720" height="405" src="https://rutube.ru/play/embed/e49a12c61d336f2a9330080fd88900b3" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>  
      <h2>{{ storie.title }}</h2>
      <p>{{ storie.duration }}</p>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 0 auto;
  padding: 100px 0;
  video {
    width: 100%;
  }
}
</style>
