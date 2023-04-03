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
        <div class="image">
          <img class="img" :src="imgLink(person)" />
          <div class="contacts">
            <a :href="'mailto::' + person.email">{{ person.email }}</a>
            <a :href="'tel:' + person.phone">{{ person.phone }}</a>
          </div>
        </div>
        <div class="info">
          <h2>{{ person.name }}</h2>
          <div v-for="(key, headers) in person.description" :key="headers">
            <h3>{{ headers }}</h3>
            <p>{{ key }}</p>
          </div>
        </div>
      </div>
              <div class="interview">
                <div class="btn" @click="show = !show">
                <h2>Интервью</h2>
                <span :class="{ active: show }">&gt;</span>
                </div>

              <Transition name="slide-fade">
                      <p v-if="show">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta distinctio, quasi libero provident ut culpa aliquam, alias aperiam architecto nihil non in tempore sed quas sit unde accusamus perspiciatis ex?
            Veniam molestiae voluptas at quo laudantium reprehenderit ea velit ad dolores! Quas explicabo natus distinctio, repudiandae voluptatum corrupti doloremque incidunt odio accusamus nesciunt molestias aut! Dolorum labore at asperiores aliquid!
            Minima, laborum repudiandae facere eum recusandae at expedita sequi ab, maiores ea voluptatem! Quae quisquam distinctio qui nisi molestiae ratione velit? Odit amet quidem explicabo dolorum officiis eligendi esse cum?
            Blanditiis dolorum sapiente eum fugit sunt quisquam minus dignissimos adipisci facilis numquam ea distinctio quos placeat molestiae fugiat, asperiores quod soluta consequatur odit dolor enim! Itaque ex doloribus quam pariatur.
            Expedita molestias qui atque, saepe nostrum at vel reiciendis delectus aut labore veritatis eligendi earum ipsam dolore sit deserunt alias dicta iusto illo voluptatibus? Exercitationem quas beatae distinctio quo libero!
          </p>
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
  .interview{
    padding: 80px 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .btn{
      transition: 0.3s all ease;
      display: flex;
      align-items: center;
      gap: 6px;
      cursor: pointer;
      span{
        transition: 0.3s all ease;
        font-weight: 900;
      }
      .active{
        transform: rotate(90deg);
      }
    h2{
        font-weight: 700;
        font-size: 24px;
        text-transform: uppercase;
        color: #000000;
        cursor: pointer;
    }
    }

    p{
      font-weight: 400;
        font-size: 20px;
        color: #000000;
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
