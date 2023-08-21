<script setup>
import { ref, onMounted } from 'vue'
import MainVue from '@/layouts/Main.vue'
import imgLink from '@/plugins/imgLink'
import trimWord from '@/plugins/trimWord'

const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: lections } = await useFetch('/lections', { baseURL })
const title = ref('Лекции')
const showSerach = ref(false)

const searchQuery = ref('')
const showSerachInput = () => {
  showSerach.value = !showSerach.value
  if (showSerach.value) {
    document.querySelector('.searchField').classList.add('active')
  } else {
    document.querySelector('.searchField').classList.remove('active')
  }
}

const filteredLections = computed(() => {
  if (searchQuery.value === '') {
    return lections.value
  } else {
    return lections.value.filter(item => {
      return item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  }
})
</script>

<template>
  <MainVue>
    <Head>
      <Title>{{ title }}</Title>
      <Meta name="description" :content="title" />
    </Head>
    <div class="container">
      <h1>{{ title }}</h1>
      <div class="search">
        <input v-model="searchQuery" class="searchField" type="text" placeholder="Поиск..." />
        <button @click="showSerachInput">
          <img src="@/assets/images/search.svg" alt="" />
        </button>
      </div>
      <div class="cards">
        <div class="card" v-for="(item, index) in filteredLections" :key="index">
          <NuxtLink :to="'/lections/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
              <p>{{ item.duration }}</p>
            </div>
            <div class="info">
              <div class="title">
                <h2>{{ trimWord(item.title) }}</h2>
              </div>
              <div class="text">
                <p>
                  {{ trimWord(item.description?.['Описание']) }}
                </p>
              </div>
            </div>
          </NuxtLink>
        </div>
        <div v-if="loading && loadedItems < lections.length && searchQuery === ''" class="custom-loader"></div>
      </div>
    </div>
  </MainVue>
</template>
<style lang="scss" scoped>
.scroll {
  background: red;
}
.container {
  width: 80%;
  margin: 0 auto;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  .search {
    display: flex;
    align-self: flex-end;
    gap: 20px;
    height: 50px;
    button {
      width: 50px;
      border-radius: 100%;
      outline: none;
      border: 0;
      background: #135aae;
      transition: 0.3s ease all;
      &:hover {
        scale: 0.95;
        filter: drop-shadow(0 0 4px #135aae);
      }
      &:active {
        scale: 0.9;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        padding: 12px;
      }
    }
    .searchField {
      opacity: 0;
      width: 0;
      transition: all 0.5s;
    }
    .active {
      display: block;
      width: 300px;
      opacity: 1;
      padding: 10px;
      outline: none;
      border-radius: 50px;
      border: 1px solid var(--blue);
    }
  }

  h1 {
    padding-top: 120px;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  // .filters {
  //   margin-top: 60px;
  //   display: flex;
  //   gap: 30px;
  //   select {
  //     background: #d9d9d9;
  //     border: 0;
  //     border-radius: 18px;
  //     padding: 2px 10px;
  //     font-style: normal;
  //     font-weight: 400;
  //     font-size: 18px;
  //     display: flex;
  //     align-items: flex-end;
  //     color: #000000;
  //   }
  //   .select_arrow {
  //     position: absolute;
  //     top: 17px;
  //     right: 98px;
  //     pointer-events: none;
  //     border-style: solid;
  //     border-width: 8px 5px 0px 5px;
  //     border-color: #7b7b7b transparent transparent transparent;
  //   }
  // }
  .cards {
    display: flex;
    margin: 20px 0;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 30px;
    .card {
      flex-basis: calc(24.8% - 20px);
      height: 415px;
      margin: 20px 0;

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
        height: 100%;
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
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-radius: 0 0 10px 10px;
          .title {
            h2 {
              font-weight: 700;
              font-size: 22px;
              text-transform: uppercase;
              color: #ffffff;
            }
          }
          .text {
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 100%;
            p {
              font-weight: 300;
              font-size: 20px;
              color: #ffffff;
            }
          }
        }
      }
    }
    .custom-loader {
      position: relative;
      left: 50%;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: conic-gradient(#0000 10%, #135aae);
      -webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 8px), #000 0);
      animation: s3 1s infinite linear;
      @keyframes s3 {
        to {
          transform: rotate(1turn);
        }
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
      gap: 50px;
      .card {
        flex-basis: calc(33.33% - 50px);
        height: 500px;

        a {
          width: 100%;
          height: 100%;

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
  }
}
@media (max-width: 1440px) {
  .container {
    width: 80%;
    .cards {
      display: flex;
      gap: 20px;
      .card {
        flex-basis: calc(33.33% - 20px);
        a {
          width: 100%;
          height: 100%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .container {
    width: 80%;
    .cards {
      display: flex;
      .card {
        a {
          width: 100%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
          }
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
      display: flex;
      flex-direction: column;
      gap: 50px;
      justify-content: center;
      align-items: center;
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
