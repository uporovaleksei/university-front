<script setup>
import imgLink from '@/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
import { onMounted } from 'vue'
const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: lection } = await useFetch('lection/' + route.params.id, { baseURL })
onMounted(() => {
  const video = document.querySelector('video')
  video.play()
})
</script>

<template>
  <Head>
    <Title>{{ lection.title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
      <video controls :src="lection.path"></video>
      <h2>{{ lection.title }}</h2>
      <p>{{ lection.description['Описание'] }}</p>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 0 auto;
  padding: 120px 0;
}
</style>
