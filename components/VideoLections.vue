<script setup>
const router = useRouter()
const { baseURL } = useRuntimeConfig()
import imgLink from '@/plugins/imgLink'
const { data: lections } = await useFetch('/lections', { baseURL })
const trimDescription = ({ description }) => description.split(' ').slice(0, 2).join(' ') + '....'
</script>

<template>
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
            <h2>{{ item.title.split(' ').slice(0, 3).join(' ') + '....' }}</h2>
            <p>{{ item.description['Описание'].split(' ').slice(0, 4).join(' ') + '....' }}</p>
          </div>
        </NuxtLink>
      </div>
    </div>
    <NuxtLink to="/lections">
      <button>Все лекции</button>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  h1 {
    margin-top: 40px;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    margin-top: 90px;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;

    .card {
      width: 370px;

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
            border-radius: 30px 30px 0 0;
            background: linear-gradient(
              180deg,
              rgba(63, 63, 63, 0) 0%,
              rgba(63, 63, 63, 0.7) 31.25%,
              rgba(0, 0, 0, 0.7) 100%
            );
          }
          img {
            border-radius: 30px 30px 0 0;
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
          border-radius: 0 0 30px 30px;
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
@media (min-width: 2559px) {
  .container {
    h1 {
      font-size: 4rem;
    }
    .cards {
      gap: 50px;
      .card {
        width: 700px;
        height: 745px;
        background: #d9d9d9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 30px;
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
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
      }
    }
  }
}
@media (max-width: 768px) {
  .container {
    width: 80%;
    h1 {
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
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
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
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
      }
    }
  }
}
</style>
