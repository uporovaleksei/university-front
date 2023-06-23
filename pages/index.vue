<script setup>
import MainVue from '@/layouts/Main.vue'
const title = ref('Открытый университет')
onMounted(() => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  if (isMobile && window.innerWidth <= 425) {
    const metaViewport = document.querySelector('meta[name="viewport"]')
    metaViewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0')
  }
})
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

<style lang="scss"></style>