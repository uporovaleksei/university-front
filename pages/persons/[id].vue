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
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
  .card__container{
    width: 60%;
    margin: 0 auto;
    height: 100%;
    .card {
    display: flex;
    width: 90%;
    gap: 40px;
    transition: 0.3s all ease;
    img {
      object-fit: contain;
      width: 100%;
      border-radius: 10px;
      transition: 0.3s all ease;
    }
    .info {
      width: 100%;
      padding-top: 80px;
      display: flex;
      flex-direction: column;
      gap: 15px;
      color:#ffffff;
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
  width: 60%;
  margin: 0 auto;
  padding: 180px 0;
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
      }
      :deep(p) {
        font-family: 'Merriweather';
        font-style: italic;
        font-weight: 400;
        font-size: 24px;
        color: #000000;
        background: #ffffff;
        border-radius: 10px;
        padding: 20px;
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
