<script setup>
import imgLink from '~~/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
const route = useRoute()
const show = ref(false)
const { baseURL } = useRuntimeConfig()
const { data: person } = await useFetch('person/' + route.params.id, { baseURL })
</script>
<template>
  <Head>
    <Title>{{ person.name }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="card__wrapper">
      <div class="card__container">
        <span v-if="person.id == 8"></span>
        <div class="card">
          <div class="info">
            <h2>{{ person.name }}</h2>
            <div v-for="(key, headers) in person.description" :key="headers">
              <p>{{ key }}</p>
            </div>
          </div>
          <img class="img" :src="imgLink(person)" />
        </div>
      </div>
    </div>

    <div class="container">
      <div class="interview">
        <div class="btn" @click="show = !show">
          <h2>Интервью</h2>
          <img src="@/assets/images/arrow.svg" :class="{ active: show }" />
        </div>

        <Transition name="slide-fade">
          <div class="text" v-if="show" v-html="person.interview"></div>
        </Transition>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.card__wrapper {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: url('@/assets/images/фон.jpg');
  position: relative;
  span {
    &::after {
      position: absolute;
      content: '';
      width: 35%;
      height: 35%;
      bottom: 0;
      right: 0;
      border-radius: 50% 50% 0 0 / 100% 100% 0 0;
      z-index: 2;
      background: linear-gradient(180.4deg, #c2bdff 0.35%, #135aae 99.65%);
      filter: blur(1px);
    }
  }

  .card__container {
    width: 80%;
    margin: 0 auto;
    height: 100%;
    min-height: 600px;
    .card {
      display: flex;
      align-items: flex-start;
      width: 45%;
      height: 100%;
      gap: 40px;
      transition: 0.3s all ease;
      img {
        z-index: 1;
        position: absolute;
        bottom: 0;
        right: 15%;
        object-fit: contain;
        width: 35%;
        border-radius: 10px;
        transition: 0.3s all ease;
      }
      .info {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 15px;
        color: #ffffff;
        h2 {
          font-family: 'Mulish';
          font-style: normal;
          font-weight: 700;
          font-size: 36px;
          text-transform: uppercase;
        }
        h3 {
          margin-top: 60px;
          font-weight: 700;
          font-size: 18px;
          text-transform: uppercase;
        }
        p {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
        }
      }
    }
  }
}

.container {
  z-index: 20;
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  .interview {
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .btn {
      transition: 0.3s all ease;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      img {
        transition: 0.3s all ease;
        width: 40px;
      }
      .active {
        transform: rotate(90deg);
      }
      h2 {
        font-weight: 700; 
        font-size: 36px;
        text-transform: uppercase;
        color: #000000;
        cursor: pointer;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      gap: 60px;
      :deep(h1) {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        color: #000000;
      }
      :deep(h2) {
        font-family: 'Merriweather';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        color: #000000;
        text-align: justify;
      }
      :deep(p) {
        font-family: 'Merriweather';
        font-style: italic;
        font-weight: 400;
        font-size: 24px;
        color: #000000;
        background: #ffffff;
        text-align: justify;
      }
    }
  }
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(220px);
  opacity: 0;
}
</style>
