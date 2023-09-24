<script setup>
import MainVue from '@/layouts/Main.vue'
const title = ref('Открытый университет')
import { onMounted, onUnmounted } from 'vue'

const isMobile = ref(false)
const notificationShown = ref(false)

const handleResize = () => {
  if (!notificationShown.value && window.innerWidth <= 768) {
    isMobile.value = true
  } else {
    isMobile.value = false
  }
}
const close = () => {
  isMobile.value = !isMobile.value;
  notificationShown.value = !notificationShown.value;
}
onMounted(() => {
  handleResize()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
    <meta name="yandex-verification" content="95aaee8d77d5c438" />
  </Head>
  <MainVue>
    <OpenUniversity />
    <!-- <AboutUs /> -->
    <!-- <News /> -->
    <VideoLections />
    <VideoStories />
    <UniversityPersons />
    <div class="mobile" :class="{ show: isMobile }">
      <div class="container">
      <div class="left">
        <div class="text">
          Скачать мобильное приложение:
        </div>
      <div class="image">
<NuxtLink to="https://apps.rustore.ru/app/com.mickey.open_university_rsvpu" target="_blank">
              <img src="@/assets/images/rustore.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://apps.apple.com/tr/app/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-%D1%80%D0%B3%D0%BF%D0%BF%D1%83/id6448987693"
              target="_blank"
            >
              <img src="@/assets/images/appstore.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://play.google.com/store/apps/details?id=com.mickey.open_university_rsvpu&hl=ru&gl=US"
              target="_blank"
            >
              <img src="@/assets/images/gp.svg" alt="" />
            </NuxtLink>
      </div>
      </div>
      <div class="right">
        <button @click="close()">X</button>
      </div>
      </div>

    </div>
  </MainVue>
</template>

<style lang="scss">
 .mobile{
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease;
  position: fixed;
  bottom: 0;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px 15px 0 0;
  border: 4px solid #135aae;
  padding: 30px 0;
  width: 100%;
  z-index: 100;
  .container{
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .left{
      display: flex;
      flex-direction: column;
      gap: 10px ;
      .text{
        font-size: 2.6rem;
        font-weight: 700;
      }
      .image{
        display: flex;
        gap: 20px;
        width: 100%;
        height: 100%;
          a{
            width: 100%;
            img{
              width: 230px;
            }
          }
      }
    }
    .right{
      button{
        width: 70px;
        height: 70px;
        border-radius: 100%;
        border: 0;
        background: #c10020;
        color: #fff;
        font-weight: 700;
        font-size: 2.5rem;
      }
    }
  }
 }
 .mobile.show {
  opacity: 1;
  display: block;
}
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