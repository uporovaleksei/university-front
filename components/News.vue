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
newInterval()

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
    <div class="container">
      <h1>Новости</h1>
      <Slider :sliderData="news" :active="active" @jump="jump" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #ececec;
  padding: 10px 0;
  padding-top: 80px;
  padding-bottom: 90px;
  .container {
    width: 80%;
    margin: 0 auto;
    h1 {
      padding-bottom: 90px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      text-transform: uppercase;
      color: #000000;
    }
    .card {
      background: var(--blue);
      display: flex;
      align-items: center;
      border-radius: 30px;
      padding: 75px 0;
      .image {
        background: #ffffff;
        border-radius: 30px;
        transform: translateX(-100px);
        min-width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &::before {
          content: '';
          z-index: 55;
          position: absolute;
          width: 95%;
          height: 95%;
          border-radius: 30px;
          background: #00000038;
        }
        img {
          width: 95%;
          height: 95%;
          border-radius: 30px;
          position: relative;
          z-index: 14;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .date {
          color: #ffffff;
          font-weight: 300;
          font-size: 20px;
          text-transform: capitalize;
        }
        .title {
          height: 80px;
          h2 {
            font-weight: 700;
            font-size: 40px;
            color: #ffffff;
          }
        }
        .text {
          width: 80%;
          height: 140px;
          display: flex;
          p {
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
          }
        }
        .buttons {
          display: flex;
          align-items: center;
          gap: 70px;
          button {
            width: 270px;
            height: 50px;
            font-weight: 400;
            font-size: 24px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            border: 0;
            cursor: pointer;
            transition: 0.2s ease all;
            &:hover {
              box-shadow: 0px 0px 1px 3px var(--red);
            }
          }
          a {
            font-weight: 400;
            font-size: 24px;
            text-decoration-line: underline;
            color: #ffffff;
            transition: 0.2s ease all;
            &:hover {
              text-decoration: var(--red) underline;
            }
          }
        }
      }
      .slider {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: 40px;
        span {
          width: 15px;
          height: 15px;
          background: #d9d9d9;
          border-radius: 100%;
          transition: 0.2s ease all;
          &:hover {
            background: var(--red);
          }
        }
        .active {
          height: 30px;
          background: var(--red);
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
