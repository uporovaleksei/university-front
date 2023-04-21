<script setup>
import Slider from '@/components/Slider.vue'
import { ref, onBeforeUnmount } from 'vue'
const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: news } = await useFetch('/news/3', { baseURL })

const active = ref(0)
const interval = ref(null)

const newInterval = () => {
  clearInterval(interval.value)
  interval.value = setInterval(() => {
    active.value++
    if (active.value > 2) {
      active.value = 0
    }
  }, 4500)
}
// newInterval()

const jump = i => {
  active.value = i
  newInterval()
}

onBeforeUnmount(() => {
  clearInterval(interval.value)
})
</script>

<template>
  <div class="wrapper">
    <h1>Новости</h1>
    <div class="container">
      <Slider :sliderData="news" :active="active" @jump="jump" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #ececec;
  padding: 10px 0;
  padding-top: 80px;
  min-height: 30vh;
  padding-bottom: 90px;
  h1 {
    width: 80%;
    margin: 0 auto;
    padding-bottom: 90px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .container {
    width: 90%;
    margin: 0 auto;
  }
}
@media (min-width: 2559px) {
  .wrapper {
    h1 {
      font-size: 3rem;
    }
  }
}
</style>
