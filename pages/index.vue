<script setup>
import MainVue from '@/layouts/Main.vue'
const title = ref('Открытый унвиерситет')
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <OpenUniversity />
    <AboutUs />
    <News />
    <VideoLections />
    <VideoStories />
    <UniversityPersons />
  </MainVue>
</template>
<style lang="scss"></style>
