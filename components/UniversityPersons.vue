<script setup>
import imgLink from '~~/plugins/imgLink'

const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/6', { baseURL })
</script>
<template>
  <div class="container">
    <h1>Университет в лицах</h1>
    <div class="cards">
      <div class="card" v-for="item in persons" :key="item.id">
        <NuxtLink :to="'/persons/' + item.id">
          <div class="image">
            <div class="image-inner">
              <span class="circle"></span>
              <img class="img" :src="imgLink(item)" />
            </div>
          </div>
        </NuxtLink>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description?.['Должность'] }}</p>
      </div>
    </div>
    <NuxtLink to="/persons">
      <button>Подробнее</button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 90px;
    margin-bottom: 120px;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;
    flex-wrap: wrap;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 400px;
      height: 640px;

      .image {
        border-radius: 50%;
        -webkit-tap-highlight-color: transparent;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;
        user-select: none;
        &:hover {
          transform: scale(1.04);
        }
        .image-inner {
          clip-path: path(
            'M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z'
          );
          position: relative;
          top: -280px;
          .circle {
            width: 376px;
            height: 376px;
            background-color: #5e6ad3;
            border-radius: 50%;
            cursor: pointer;
            left: 11px;
            pointer-events: none;
            position: absolute;
            top: 221px;
          }
          .img {
            pointer-events: none;
            position: relative;
            transform: translateY(20px) scale(1.15);
            transform-origin: 50% bottom;
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
            left: 40px;
            top: 240px;
            height: 400px;
            width: 310px;
          }
        }
      }
      .image:hover .img {
        transform: translateY(-20px) scale(1.15);
      }
    }
    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      text-transform: uppercase;
      color: #000000;
      text-align: center;
    }
    p {
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      text-align: center;
    }
  }
  a {
    align-self: flex-end;
    button {
      width: 270px;
      height: 50px;
      border: 0;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      transition: 0.3s ease all;
      &:hover {
        box-shadow: 0px 4px 4px #5e6ad3;
      }
    }
  }
}
</style>
