<script>
import MainVue from '@/layouts/Main.vue'
import OpenUniversity from '@/components/OpenUniversity.vue'
import AboutUs from '@/components/AboutUs.vue'
import News from '@/components/News.vue'
import UniversityPersons from '@/components/UniversityPersons.vue'
import VideoLections from '@/components/VideoLections.vue'
import VideoStories from '@/components/VideoStories.vue'
export default {
  components: {
    MainVue,
    OpenUniversity,
    AboutUs,
    News,
    UniversityPersons,
    VideoLections,
    VideoStories,
  },
}
</script>

<template>
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
