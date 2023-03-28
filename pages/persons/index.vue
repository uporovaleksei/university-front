<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '~~/plugins/imgLink'

const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/', { baseURL })
const router = useRouter()
const openPerson = ({ id }) => {
  router.push('/persons/' + id)
}
</script>
<template>
  <MainVue>
    <div class="container">
      <div class="card" v-for="item in persons" :key="item.id">
        <div class="image" @click="openPerson(item)">
          <img class="img" :src="imgLink(item)" />
        </div>
        <h2>{{ item.name }}</h2>
        <p>Структурное подразделение: {{ item.description?.['Структурное подразделение'] }}</p>
        <p>Должность: {{ item.description?.['Должность'] }}</p>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  background: var(--blue);
  h1 {
    padding-top: 200px;
  }
}
</style>
