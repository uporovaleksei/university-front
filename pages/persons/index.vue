<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '~~/plugins/imgLink'
const title = ref('Наши наставники')
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/', { baseURL })
const router = useRouter()
const showSerach = ref(false)
const cardsRef = ref(null)

const filteredPersons = computed(() => {
  if (searchQuery.value === '') {
    return persons.value
  } else {
    return persons.value.filter(item => {
      return item.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    })
  }
})

const searchQuery = ref('')
const showSerachInput = () => {
  showSerach.value = !showSerach.value
  if (showSerach.value) {
    document.querySelector('.searchField').classList.add('active')
  } else {
    document.querySelector('.searchField').classList.remove('active')
  }
}

</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
      <h1>Наши наставники</h1>
      <div class="search">
        <input v-model="searchQuery" class="searchField" type="text" placeholder="Поиск..." />
        <button @click="showSerachInput">
          <img src="@/assets/images/search.svg" alt="" />
        </button>
      </div>
      <div class="cards" ref="cardsRef">
        <div class="card" v-for="item in filteredPersons" :key="item.id">
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
        <div v-if="loading && loadedItems < persons.length && searchQuery === ''" class="custom-loader"></div>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  padding: 80px 0;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  .search {
    display: flex;
    align-self: flex-end;
    gap: 20px;
    height: 50px;
    margin: 20px 0;
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
    flex-wrap: wrap;
    gap: 30px;
    .card {
      flex-basis: calc(33.33% - 30px);

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
        height: 100%;
        min-height: 520px;

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
      justify-content: star;
      gap: 35px;
      flex-wrap: wrap;
      .card {
        min-height: 840px;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          min-height: 700px;
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
        font-size: 2.5rem;
      }
    }
  }
}
@media (max-width: 1440px) {
  .container {
    .cards {
      .card {
        width: 30%;
        height: 100%;
        min-height: 250px;
        a {
          .image {
            min-height: 400px;
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
      .card {
        width: 29%;
        height: 100%;
        min-height: 400px;
        a {
          .image {
            min-height: 340px;
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
    }
    .cards {
      margin: 40px auto;

      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        height: 80%;
        width: 90%;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          min-height: 850px !important;
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
      align-items: center;
      justify-content: center;
      flex-direction: c;
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
