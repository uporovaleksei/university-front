<script setup>
import MainVue from '@/layouts/Main.vue'
const title = 'О проекте'
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <MainVue>
    <AboutUs />
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
}
</style>
