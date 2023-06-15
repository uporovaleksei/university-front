<script setup>
const router = useRouter()
const { baseURL } = useRuntimeConfig()
import imgLink from '@/plugins/imgLink'
import { ref, computed, onMounted } from 'vue'

const { data: stories } = await useFetch('/stories/4', { baseURL })

</script>

<template>
  <div class="storie__wrapper">
    <div class="container">
      <h1>Истории</h1>
      <div class="cards">
        <div class="card" v-for="item in stories" :key="item.id">
          <NuxtLink :to="'/stories/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
              <p>{{ item.duration }}</p>
            </div>
            <h2>{{ item.title.split(' ').slice(0, 4).join(' ') + '....' }}</h2>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/stories">
        <button>Все истории</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storie__wrapper {
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
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    .card {
      width: 370px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 450px;
        .image {
          margin-top: 66px;
          width: 100%;
          height: 250px;
          display: flex;
          justify-content: center;
          background: #d9d9d9;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
          flex-direction: column;
          align-items: center;
          border-radius: 10px;
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
            border-radius: 10px;
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
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h2 {
          margin-top: 20px;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          word-wrap: break-word;
          text-transform: uppercase;
          color: #000000;
          text-align: center;
          width: 100%;
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
@media (min-width: 2559px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    .cards {
      align-items: baseline;
      .card {
        flex: 24.7% 0 1;
        a {
          .image {
            width: 100%;
            min-height: 350px;
            p {
              font-size: 2rem;
            }
          }
          h2 {
            font-size: 1.8rem;
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
@media (max-width: 1440px) {
  .storie__wrapper {
    svg {
      #Layer1 {
        transform: translateX(-4%);
        scale: 0.8;
      }
      #Layer2 {
        scale: 0.9;
        transform: translateX(10%);
      }
    }
  }
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      gap: 30px;
      flex-wrap: wrap;
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
@media (max-width: 1024px) {
  .storie__wrapper {
    svg {
      #Layer1 {
        transform: translateX(-1%);
        scale: 0.7;
      }
      #Layer2 {
        scale: 0.9;
        transform: translateX(12%);
      }
    }
  }
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      gap: 30px;
      flex-wrap: wrap;
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
@media (max-width: 768px) {
  .storie__wrapper {
    svg {
      #Layer1 {
        display: none;
      }
      #Layer2 {
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
  }
}
@media (max-width: 425px) {
  .container {
    width: 80%;
    h1 {
    }
    .cards {
      display: flex;
      flex-direction: column;
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
          h2 {
            font-size: 32px;
          }
        }
      }
    }
  }
}
</style>
