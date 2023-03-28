<script setup>
import imgLink from '~~/plugins/imgLink'

const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: person } = await useFetch('person/' + route.params.id, { baseURL })
</script>
<template>
  <h1></h1>
  <div class="container">
    <img class="img" :src="imgLink(person)" />
    <h2>{{ person.name }}</h2>
    <div v-for="key in person.description" :key="key">
      {{ key }}
      <h1>{{ person.description[key] }}</h1>
    </div>
  </div>
</template>

<style></style>
