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
     <video :src= storie.path controls></video>
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
