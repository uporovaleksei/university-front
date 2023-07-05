<script setup>
const router = useRouter()
const { baseURL } = useRuntimeConfig()
import { ref, computed, onMounted } from 'vue'
import imgLink from '@/plugins/imgLink'
import trimWord from '@/plugins/trimWord'
const { data: lections } = await useFetch('/lections/4', { baseURL })

</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>Лекции</h1>
      <div class="cards">
        <div class="card" v-for="item in lections" :key="item.id">
          <NuxtLink :to="'/lections/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
              <p>{{ item.duration }}</p>
            </div>
            <div class="text">
              <h2>{{ trimWord(item.title) }}</h2>
              <p>{{ trimWord(item.description['Описание'])}}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <NuxtLink to="/lections">
        <button>Все лекции</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
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
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  h1 {
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
    z-index: 20;
  }
  .cards {
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;

    .card {
      flex-basis: calc(24.8% - 30px);
      background: #d9d9d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      }
      a {
        width: 100%;
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
        .text {
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 15px;
          background: #135aae;
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 0 0 10px 10px;
          h2 {
            font-weight: 700;
            font-size: 24px;
            text-transform: uppercase;
            color: #ffffff;
          }
          p {
            width: 90%;
            font-weight: 300;
            font-size: 20px;
            color: #ffffff;
          }
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
@media (max-width: 1440px) {
  .wrapper {
    svg {
      #Layer_1 {
        scale: 0.8;
        transform: translateX(-4%) translateY(8%);
      }
      #Layer_2 {
        scale: 0.6;

        transform: translateX(72%);
      }
    }
  }
  .container {
    width: 80%;
    .cards {
      display: flex;
      gap: 30px;
      .card {
        flex-basis: calc(50% - 30px);
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
            }
          }
          .text {
            h2 {
            }
            p {
            }
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
@media (min-width: 2559px) {
  .container {
    h1 {
      font-size: 3em;
    }
    .cards {
      .card {
        width: 700px;
        height: 600px;
        background: #d9d9d9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        transition: 0.3s ease all;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .image {
            width: 100%;
            display: flex;
            height: 100%;
            justify-content: center;
            position: relative;
            img {
              height: 100%;
            }
            p {
              font-size: 2rem;
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
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2rem;
      }
    }
  }
}
@media (max-width: 1024px) {
  .container {
    width: 80%;
    h1 {
    }
    .cards {
      display: flex;
      gap: 30px;
      .card {
        flex-basis: calc(50% - 30px);
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
            }
          }
          .text {
            h2 {
            }
            p {
            }
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
@media (max-width: 768px) {
  .wrapper {
    svg {
      display: none;

      #Layer_1 {
        display: none;
      }
      #Layer_2 {
        display: none;
      }
    }
  }
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      display: flex;
      flex-direction: column;
      gap: 50px;
      justify-content: center;
      .card {
        width: 80%;
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
              font-size: 2rem;
            }
          }
          .text {
            h2 {
              font-size: 3rem;
            }
            p {
              font-size: 2.5rem;
            }
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
@media (max-width: 426px) {
  .container {
    width: 80%;
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 50px;
      .card {
        width: 100%;
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
              font-size: 2rem;
            }
          }
          .text {
            h2 {
              font-size: 3rem;
            }
            p {
              font-size: 2.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
