<script setup>
import imgLink from '@/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
import { onMounted } from 'vue'
const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: lection } = await useFetch('lection/' + route.params.id, { baseURL })

</script>

<template>
  <Head>
    <Title>{{ lection.title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
<iframe width="720" height="405" src="https://rutube.ru/play/embed/05535e77baa4fa8d8a78959b0e084476" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>  
      <h2>{{ lection.title }}</h2>
      <p>{{ lection.description['Описание'] }}</p>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  width: 60%;
  height: 100%;
  margin: 0 auto;
  padding: 120px 0;
  iframe{
    width: 100%;
    height: 600px;
  }
}
</style>
