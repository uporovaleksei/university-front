<script setup>
import MainVue from '@/layouts/Main.vue'
const title = ref('Открытый университет')

</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=0.58  , user-scalable=no">
  </Head>
  <MainVue>
    <OpenUniversity />
    <!-- <AboutUs /> -->
    <!-- <News /> -->
    <VideoLections />
    <VideoStories />
    <UniversityPersons />
  </MainVue>
</template>

<style lang="scss">
@media (max-width: 426px) {
  body {
    zoom: 0;
  }
}
</style>