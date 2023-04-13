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
    <div class="container">
      <div class="card">
        <img class="img" :src="imgLink(person)" />
        <div class="info">
          <h2>{{ person.name }}</h2>
          <div v-for="(key, headers) in person.description" :key="headers">
            <p>{{ key }}</p>
          </div>
        </div>
      </div>
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
.container {
  width: 60%;
  margin: 0 auto;
  padding: 180px 0;
  display: flex;
  flex-direction: column;
  .card {
    display: flex;
    gap: 40px;
    transition: 0.3s all ease;
    img {
      width: 370px;
      height: 450px;
      object-fit: contain;
      border: 1px solid #000000;
      border-radius: 10px;
      background: linear-gradient(211.09deg, #e3ceef 6.04%, #e4fbfd 84.05%);
      transition: 0.3s all ease;
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      h2 {
        font-family: 'Mulish';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        text-transform: uppercase;
        color: #000000;
      }
      h3 {
        margin-top: 60px;
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        color: #000000;
      }
      p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        color: #000000;
      }
    }
  }
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
