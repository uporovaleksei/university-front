<script setup>
import imgLink from '~~/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: person } = await useFetch('person/' + route.params.id, { baseURL })
</script>
<template>
  <MainVue>
    <div class="container">
      <div class="card">
        <div class="image">
          <img class="img" :src="imgLink(person)" />
          <div class="contacts">
            <p>{{ person.email }}</p>
            <p>{{ person.phone }}</p>
          </div>
        </div>
        <div class="info">
          <h2>{{ person.name }}</h2>
          <div v-for="(key, headers) in person.description" :key="headers">
            <!-- <p> {{ key }}</p>  -->
            <h3>{{ headers }}</h3>
            <p>{{ key }}</p>
          </div>
        </div>
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
    .image {
      border-radius: 50%;
      -webkit-tap-highlight-color: transparent;
      transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
      user-select: none;
      position: relative;
      .contacts {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        user-select: text;
      }
      img {
        background: linear-gradient(0deg, rgb(24, 80, 145), rgb(116, 180, 255));
        box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
        transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
        &:hover {
          scale: 1.05;
        }
      }
    }
    .info {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 15px;
      h2 {
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        text-transform: uppercase;
        color: #000000;
        text-align: center;
      }
      h3 {
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        color: #000000;
      }
      p {
        font-weight: 400;
        font-size: 20px;
        color: #000000;
      }
    }
  }
}
</style>
