<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '@/plugins/imgLink'
import dateFormat from '@/plugins/dateFormat'
import { onMounted } from 'vue'
const title = ref('Видеосюжеты')
const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: stories } = await useFetch('/stories', { baseURL })
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="cards">
        <div class="card" v-for="(item, index) in stories" :key="index">
          <NuxtLink :to="'/stories/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
            </div>
            <div class="info">
              <div class="title">
                <h2>{{ item.title }}</h2>
                <p>{{ item.duration }}</p>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 0 auto;
  h1 {
    padding-top: 120px;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    margin: 60px 0;
    margin-bottom: 180px;
    gap: 30px;
    .card {
      background: #d9d9d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

      border-radius: 30px;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      }
      a {
        width: 370px;
        height: 310px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image {
          width: 100%;
          display: flex;
          height: 240px;
          justify-content: center;
          img {
            border-radius: 30px 30px 0 0;
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
        }
        .info {
          width: 100%;
          height: 100%;
          background: #185091;
          border-radius: 0 0 30px 30px;
          .title {
            padding-top: 25px;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            h2 {
              font-weight: 700;
              font-size: 24px;
              line-height: 0%;
              text-transform: uppercase;
              color: #ffffff;
            }
            p {
              font-weight: 300;
              font-size: 14px;
              color: #ffffff;
            }
          }
          .text {
            padding-top: 30px;
            padding-left: 30px;
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 100%;
            p {
              font-weight: 300;
              font-size: 24px;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>
