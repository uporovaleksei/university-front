<script setup>
import imgLink from '~~/plugins/imgLink'

const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/6', { baseURL })
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'


</script>
<template>
  <div class="person__wrapper">
    <div class="container">
            <div class="title">
        <NuxtLink :to="'/persons/'">
          <h1>Наши наставники</h1>
        </NuxtLink>
      </div>
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
  </div>
</template>

<style lang="scss" scoped>
.person__wrapper {
  width: 100%;
  position: relative;
  overflow-x: hidden;
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    // background: no-repeat url("@/assets/images/2.svg");
    background-size: contain;
    opacity: 0.5;
    z-index: -1;
  }
}
.container {
  padding: 80px 0;
  width: 80%;
  overflow-x: hidden;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
.title{
    width: fit-content;
    a{
    h1 {
      font-weight: 700;
      margin-top: 40px;
       margin-bottom: 40px;
      font-size: 36px;
      text-transform: uppercase;
      color: #000000;
      z-index: 20;
      align-self: flex-end;
      transition: 0.3s ease all;
      &:hover{
      color: #135aae;
      opacity: 0.7;
    }
    }
    }
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
      background: #fff;
      position: relative;
      transition: 0.3s all ease-in-out;
      &:hover .image img {
        scale: 1.07;
        transform: translateX(-47%) translateY(-14px);
      }
      .image {
        position: relative;
        width: 100%;
        height: 480px;
        background: linear-gradient(291.45deg, #d1fff4 11.63%, #f0dcff 92.9%);
        border-radius: 10px 10px 0px 0px;
        img {
          max-width: 90%;
          height: auto;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          align-self: center;
          bottom: 0;
          object-fit: cover;
          transition: all 0.5s ease;
        }
      }

      &:nth-child(2n) .image {
        background: linear-gradient(291.45deg, #e2f9fb 11.63%, #e6fcfc 92.9%);
      }
      &:nth-child(3n) .image {
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
      &:hover {
        scale: 0.98;
        &::after {
          opacity: 1;
        }
      }
      .text {
        z-index: 51;
        width: 90%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        text-align: center;
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
      font-size: 3rem;
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        min-height: 840px;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          min-height: 660px;
          img {
            max-width: 90%;
            height: auto;
          }
          &::after {
            width: 100%;
            height: 100%;
          }
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
        font-size: 2rem;
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
        min-height: 500px;
        a {
          .image {
            height: 380px;
            img {
            }
          }
        }
        &::after {
          width: 100%;
          height: 100%;
        }
        .text {
          h2 {
          }
          p {
          }
        }
      }
    }
    a {
      button {
      }
    }
  }
}
@media (max-width: 1024px) {
  .container {
    .cards {
      width: 100%;
      justify-content: flex-start;
      .card {
        width: 29%;
        height: 100%;
        min-height: 450px;
        a {
          .image {
            height: 320px;
            img {
            }
          }
        }
        &::after {
          width: 100%;
          height: 100%;
        }
        .text {
        }
      }
    }
    a {
      button {
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
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        height: 100%;
        width: 80%;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          height: 750px !important;

          img {
            height: auto;
            width: 80%;
          }
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
@media (max-width: 426px) {
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        height: 100%;
        width: 80%;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          height: 750px !important;

          img {
            height: auto;
            width: 80%;
          }
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
