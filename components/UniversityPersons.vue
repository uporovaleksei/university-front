<script setup>
import imgLink from '~~/plugins/imgLink'

const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/6', { baseURL })
</script>
<template>
  <div class="container">
    <h1>Наши наставники</h1>
    <div class="cards">
      <div class="card" v-for="item in persons" :key="item.id">
        <NuxtLink :to="'/persons/' + item.id">
          <div class="image">
            <img class="img" :src="imgLink(item)" />
          </div>
          <div class="text">
            <h2>{{ item.name }}</h2>
            <p>{{ item.description?.['Должность'] }}</p>
          </div>
        </NuxtLink>
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
      width: 400px;
      height: 540px;
      border-radius: 10px;
      border: 1px solid #000000;
      background: #fff;
      position: relative;
      transition: 0.3s all ease-in-out;
      img {
        width: 100%;
        height: 400px;
        object-fit: cover;
        align-self: center;
        background: linear-gradient(211.09deg, #ffa621 6.04%, #dba3d2 84.05%);
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid #000000;
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

      .text {
        z-index: 5;
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
          margin: 10px 0;
        }
        p {
          width: 80%;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
  a {
    padding: 60px 0;
    align-self: flex-end;
    button {
      cursor: pointer;
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
@media (min-width: 2559px) {
  .container {
    width: 80%;
    h1 {
      font-size: 4rem;
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        height: 100%;
        min-height: 100px;
        width: 550px;
        border-radius: 10px;
        border: 1px solid #000000;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        img {
          width: 100%;
          height: 100%;
        }
        .text {
          h2 {
            font-size: 2rem;
          }
          p {
            font-size: 2rem;
          }
        }
      }
    }
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
      }
    }
  }
}
</style>
