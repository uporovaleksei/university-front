<script setup>
const router = useRouter()
const { baseURL } = useRuntimeConfig()
import imgLink from '@/plugins/imgLink'
const { data: stories } = await useFetch('/stories', { baseURL })
</script>

<template>
  <div class="container">
    <h1>Видеосюжеты</h1>
    <div class="cards">
      <div class="card" v-for="item in stories" :key="item.id">
        <NuxtLink :to="'/stories/' + item.id">
          <div class="image">
            <img class="img" :src="imgLink(item)" />
            <p>{{ item.duration }}</p>
          </div>
          <h2>{{ item.title }}</h2>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/stories">
      <button>Все сюжеты</button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  h1 {
    margin-top: 40px;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    margin-top: 90px;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .card {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        .image {
          margin-top: 66px;
          width: 100%;
          display: flex;
          justify-content: center;
          width: 370px;
          height: 250px;
          background: #d9d9d9;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
          flex-direction: column;
          align-items: center;
          border-radius: 30px;
          transition: 0.3s ease all;
          position: relative;
          &::after {
            position: absolute;
            background: linear-gradient(
              180deg,
              rgba(63, 63, 63, 0) 0%,
              rgba(63, 63, 63, 0.7) 31.25%,
              rgba(0, 0, 0, 0.7) 100%
            );
            border-radius: 30px;
            content: '';
            width: 100%;
            height: 100%;
          }
          p {
            position: absolute;
            color: #fff;
            bottom: 0;
            right: 0;
            margin: 20px;
            z-index: 100;
          }
          &:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
          }
          img {
            position: relative;
            border-radius: 30px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h2 {
          margin-top: 20px;
          font-weight: 700;
          font-size: 36px;
          text-transform: uppercase;
          color: #000000;
        }
      }
    }
  }
  a {
    align-self: flex-end;
    button {
      margin-top: 54px;
      width: 270px;
      height: 50px;
      align-self: flex-end;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      border: 0;
      transition: 0.3s ease all;
      &:hover {
        cursor: pointer;
        box-shadow: 0px 4px 4px #135aae;
      }
    }
  }
}
</style>
