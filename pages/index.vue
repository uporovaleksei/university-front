<script setup>
import MainVue from '@/layouts/Main.vue'
import { ref } from 'vue'

const title = ref('Открытый университет')
const viewport = 'width=device-width, initial-scale=1.0'
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <Meta name="viewport" :content="viewport"/>
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