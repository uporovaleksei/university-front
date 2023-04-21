<script setup>
import imgLink from '@/plugins/imgLink'
import MainVue from '@/layouts/Main.vue'
import VideoPlayer from '@/components/VideoPlayer.vue'
import videojs from 'video.js';
import 'videojs-contrib-quality-levels';
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const { baseURL } = useRuntimeConfig()
const { data: lection } = await useFetch('lection/' + route.params.id, { baseURL })
const { data: lections } = await useFetch('lections/', { baseURL })

const filteredLections = computed(() => {
  if (!lections.value || !lection.value) {
    return []
  }
  return lections.value.filter(item => item.id !== lection.value.id)
})
</script>

<template>
  <Head>
    <Title>{{ lection.title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <MainVue>
    <div class="container">
      <div class="video">
        <VideoPlayer
          :url="lection.path"
         />
        <h2>{{ lection.title }}</h2>
        <p>{{ lection.description['Описание'] }}</p>
      </div>
      <div class="more__videos">
        <div class="cards">
          <div class="card" v-for="(item, index) in filteredLections" :key="index">
            <NuxtLink :to="'/lections/' + item.id">
              <div class="image">
                <img class="img" :src="imgLink(item)" />
                <p>{{ item.duration }}</p>
              </div>
              <div class="info">
                <div class="title">
                  <h2>{{ item.title.split(' ').slice(0, 3).join(' ') + '....' }}</h2>
                </div>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  padding: 100px 0;
  .video {
    width: 70%;
    height: 100%;
    .video-js{
    width: 66px ;
    height: 543px;
}
    video {
      height: 100%;
    }
  }
  .more__videos {
    width: 35%;
    .cards {
      display: flex;
      flex-direction: column;
      gap: 15px;
      padding: 15px;
      border-radius: 10px;
        .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        transition: 0.3s ease all;
        &:hover {
          transform: scale(1.05);
        }
        a {
          width: 100%;
          display: flex;
          gap: 15px;
          align-items: flex-start;
          .image {
            width: 168px;

            height: 94px;
            display: flex;
            justify-content: center;
            position: relative;
            &::before {
              position: absolute;
              content: '';
              width: 100%;
              height: 100%;
              border-radius: 10px;
              background: linear-gradient(
                180deg,
                rgba(63, 63, 63, 0) 0%,
                rgba(63, 63, 63, 0.7) 31.25%,
                rgba(0, 0, 0, 0.7) 100%
              );
            }
            img {
              border-radius: 10px;
              width: 100%;
              min-width: 168px;
              height: 94px;
              object-fit: cover;
            }
            p {
              position: absolute;
              color: #fff;
              bottom: 0;
              right: 0;
              margin: 8px;
            }
          }
          .info {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .title {
              h2 {
                font-weight: 700;
                font-size: 16px;
                color: #000;
              }
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
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 60px;
  padding: 100px 0;
  h2{
    font-size: 28px;
  }
  p{
    font-size: 22px;
  }
  .video {
    width: 100%;
    height: 100%;

  }
  .more__videos {
    width: 100%;
    .cards {
      display: flex;
      flex-direction: column;
      gap: 15px;
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        transition: 0.3s ease all;
        &:hover {
          transform: scale(1.05);
        }
        a {
          width: 100%;
          display: flex;
          gap: 15px;
          align-items: flex-start;
          .image {
            width: 368px;
            height: 194px;
            display: flex;
            justify-content: center;
            position: relative;
            &::before {
              position: absolute;
              content: '';
              width: 100%;
              height: 100%;
              border-radius: 10px;
              background: linear-gradient(
                180deg,
                rgba(63, 63, 63, 0) 0%,
                rgba(63, 63, 63, 0.7) 31.25%,
                rgba(0, 0, 0, 0.7) 100%
              );
            }
            img {
              border-radius: 10px;
              width: 100%;
              min-width: 168px;
              height: 100%;
              object-fit: cover;
            }
            p {
              position: absolute;
              color: #fff;
              bottom: 0;
              right: 0;
              margin: 8px;
            }
          }
          .info {
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            .title {
              h2 {
                font-weight: 700;
                font-size: 28px;
                color: #000000;
              }
            }
          }
        }
      }
    }
  }
}
}
</style>
