<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '~~/plugins/imgLink'
const title = ref('Наши наставники')
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/', { baseURL })
const router = useRouter()
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
      <h1>Наши наставники</h1>
      <div class="cards">
        <div class="card" v-for="item in persons" :key="item.id">
          <NuxtLink :to="'/persons/' + item.id">
            <img class="img" :src="imgLink(item)" />
            <div class="text">
              <h2>{{ item.name }}</h2>
              <p>{{ item.description?.['Должность'] }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 90px;
    margin-bottom: 120px;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    flex-wrap: wrap;
    .card {
      width: 400px;
      height: 540px;
      border-radius: 10px;
      border: 1px solid #000000;
      position: relative;
      background: #fff;
      transition: 0.3s all ease-in-out;
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        align-self: center;
        background: linear-gradient(211.09deg, #ffa621 6.04%, #dba3d2 84.05%);
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid #000000;
        z-index: 5;
      }
      &:nth-child(2n) img {
        background: conic-gradient(
          from 188.78deg at 55.54% 64.13%,
          #2b4aba -103.92deg,
          #cfb8ec 132.9deg,
          #2b4aba 256.08deg,
          #cfb8ec 492.9deg
        );
      }
      &:nth-child(3n) img {
        background: linear-gradient(59deg, #938aff 13.28%, #68ffb7 87.42%);
      }
      &::after {
        position: absolute;
        z-index: -1;
        top: 0px;
        left: 0px;
        content: '';
        width: 400px;
        height: 540px;
        background: #fff;
        filter: drop-shadow(2px 4px 4px #ff006b);
        border-radius: 10px;
        opacity: 0;
        transition: 0.3s all ease;
      }
      &:hover::after {
        opacity: 1;
        top: 10px;
        left: 10px;
      }
      &:nth-child(2n):after {
        filter: drop-shadow(2px 4px 4px #0500ff);
      }
      &:nth-child(3n):after {
        filter: drop-shadow(2px 4px 4px #00ffd1);
      }
    }

    .text {
      z-index: 4;
      display: flex;
      flex-direction: column;
      align-items: center;
      h2 {
        width: 90%;
        font-family: 'Unbounded';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        color: #000000;
        margin: 15px 0;
      }
      p {
        width: 80%;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        text-align: center;
        color: #000000;
      }
    }
  }
}
</style>
