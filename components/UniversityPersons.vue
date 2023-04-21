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
            <!-- <p>{{ item.description?.['Должность'] }}</p> -->
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
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 75px;
    flex-wrap: wrap;
    .card {
      width: calc(30% - 10px);
      height: 100%;
      border-radius: 10px;
      border: 1px solid #000000;
      background: #fff;
      position: relative;
      transition: 0.3s all ease-in-out;
      img {
        width: 100%;
        height: 480px;
        object-fit: cover;
        align-self: center;
        background: linear-gradient(291.45deg, #d1fff4 11.63%, #f0dcff 92.9%);
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid #000000;
      }
      &:nth-child(2n) img {
        background: linear-gradient(291.45deg, #e2f9fb 11.63%, #e6fcfc 92.9%);
      }
      &:nth-child(3n) img {
        background: linear-gradient(59deg, #e6eaf1 13.28%, #b2d7fc 87.42%);
      }
      &::after {
        position: absolute;
        z-index: -1;
        top: 0px;
        left: 0px;
        content: '';
        width: 100%;
        height: 100%;
        background: #fff;
        filter: drop-shadow(2px 4px 4px #185091);
        border-radius: 10px;
        opacity: 0;
        transition: 0.3s all ease;
      }
      &:hover::after {
        opacity: 1;
        top: 10px;
        left: 10px;
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
      border-radius: 10px;
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
    h1 {
      font-size: 4rem;
    }
    .cards {
      .card {
        width: 550px;
        min-height: 900px;
        img {
          width: 100%;
          height: 100%;
        }
        &::after {
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
@media (max-width: 1690px) {
  .container {
    .cards {
      gap: 50px;
      .card {
        width: 30%;
        height: 100%;
        min-height: 600px;
        &::after {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .container {
    .cards {
      justify-content: space-between;
      .card {
        width: 29%;
        height: 100%;
        min-height: 420px;
        a {
          height: 200px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        &::after {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      justify-content: center;
      .card {
        height: 100%;
        width: 80%;
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
  }
}
@media (max-width: 425px) {
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      justify-content: center;
      .card {
        height: 100%;
        width: 80%;
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
  }
}
</style>
