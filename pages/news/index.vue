<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '~~/plugins/imgLink'

const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: news } = await useFetch('/news', { baseURL })
</script>
<script></script>

<template>
  <MainVue>
    <div class="container">
      <h1>Новости</h1>
      <hr />
      <div class="card" v-for="item in news" :key="item.id">
        <div class="image">
          <img class="img" :src="imgLink(item)" />
        </div>
        <div class="info">
          <div class="date">{{ item.date }}</div>
          <div class="title">
            <h2>{{ item.title }}</h2>
          </div>
          <div class="text">
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  background: #c9c9c9;
  h1 {
    padding-top: 200px;
  }
}
</style>
