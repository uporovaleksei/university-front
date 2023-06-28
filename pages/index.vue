<script setup>
import MainVue from '@/layouts/Main.vue'
const title = ref('Открытый университет')

</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
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

<style lang="scss"></style>