<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '@/plugins/imgLink'
import dateFormat from '@/plugins/dateFormat'
import { onMounted } from 'vue'
const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: lections } = await useFetch('/lections', { baseURL })
const title = ref('Видеолекции')
</script>

<template>
  <MainVue>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="filters">
        <select name="" id="">
          <option selected>Институт</option>
        </select>
        <select name="" id="">
          <option value="" selected>Направление подготовки</option>
        </select>
      </div>
      <div class="cards">
        <div class="card" v-for="(item, index) in lections" :key="index">
          <NuxtLink :to="'/lections/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
              <p>{{ item.duration }}</p>
            </div>
            <div class="info">
              <div class="title">
                <h2>{{ item.title }}</h2>
              </div>
              <div class="text">
                <p>
                  {{ item.description?.['Описание'] }}
                </p>
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
  .filters {
    margin-top: 60px;
    display: flex;
    gap: 30px;
    select {
      background: #d9d9d9;
      border: 0;
      border-radius: 18px;
      padding: 2px 10px;
      font-style: normal;
      font-weight: 400;
      font-size: 18px;
      display: flex;
      align-items: flex-end;
      color: #000000;
    }
    .select_arrow {
      position: absolute;
      top: 17px;
      right: 98px;
      pointer-events: none;
      border-style: solid;
      border-width: 8px 5px 0px 5px;
      border-color: #7b7b7b transparent transparent transparent;
    }
  }
  .cards {
    display: flex;
    margin: 60px 0;
    gap: 30px;
    .card {
      width: 370px;
      height: 415px;
      background: #d9d9d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 30px;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      }
      a {
        width: 370px;
        height: 415px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image {
          width: 100%;
          display: flex;
          height: 240px;
          justify-content: center;
          position: relative;
          &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
            background: linear-gradient(
              180deg,
              rgba(63, 63, 63, 0) 0%,
              rgba(63, 63, 63, 0.7) 31.25%,
              rgba(0, 0, 0, 0.7) 100%
            );
          }
          img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          p {
            position: absolute;
            color: #fff;
            bottom: 0;
            right: 0;
            margin: 20px;
          }
        }
        .info {
          width: 100%;
          height: 100%;
          background: #185091;
          border-radius: 0 0 10px 10px;
          .title {
            padding-top: 30px;
            padding-left: 30px;
            h2 {
              font-weight: 700;
              font-size: 24px;
              line-height: 0%;
              text-transform: uppercase;
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
