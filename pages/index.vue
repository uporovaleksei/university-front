<script setup>
import MainVue from '@/layouts/Main.vue'
const title = ref('Открытый университет')

</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
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
@media (max-width: 769px) {
  body {
    zoom: 0.63;
  }
}
@media (max-width: 426px) {
  body {
    zoom: 0.34;
  }
}
@media (max-width: 376px) {
  body {
    zoom: 0.3;
  }
}
@media (max-width: 321px) {
  body {
    zoom: 0.25;
  }
}
</style>