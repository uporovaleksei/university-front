<script setup>
import MainVue from '@/layouts/Main.vue'
import imgLink from '@/plugins/imgLink'
import dateFormat from '@/plugins/dateFormat'
import { ref, onMounted, onBeforeUnmount } from 'vue'
const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: news } = await useFetch('/news', { baseURL })
const openNews = ({ id }) => {
  router.push('/news/' + id)
}
</script>

<template>
  <MainVue>
    <div class="container">
      <h1>Новости</h1>
      <div class="filters">
        <ul>
          <li>
            <a href="#" class="active">Все новости</a>
            <a href="#">Главное</a>
            <a href="#">Образование</a>
            <a href="#">Наука</a>
            <a href="#">Проекты</a>
          </li>
        </ul>
      </div>
      <div class="cards">
        <div class="card" v-for="(item, index) in news" :key="index" @click="openNews(item)">
          <div class="image">
            <img class="img" :src="imgLink(item)" />
          </div>
          <div class="info">
            <div class="title">
              <h2>{{ item.title }}</h2>
            </div>
            <div class="text" v-if="index == 0">
              <p>
                {{ item.description.split(' ').slice(0, 10).join(' ') + '....' }}
              </p>
            </div>
            <div class="date" v-if="index == 0">{{ dateFormat(item.date) }}</div>
          </div>
        </div>
      </div>
      <div class="posts">
        <div class="post" v-for="(item, index) in news" :key="index" @click="openNews(item)">
          <div class="image">
            <img class="img" :src="imgLink(item)" />
          </div>
          <div class="info">
            <div class="title">
              <h2>{{ item.title }}</h2>
            </div>
            <div class="date">{{ dateFormat(item.date) }}</div>
          </div>
        </div>
      </div>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 180px;
  width: 60%;
  margin: 0 auto;
  h1 {
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
  }
  .filters {
    margin-top: 60px;
    margin-bottom: 45px;
    ul {
      li {
        display: flex;
        gap: 40px;
        transition: 0.3s ease all;
        a {
          font-weight: 400;
          font-size: 16px;
          color: #000000;
          position: relative;
          transition: 0.3s;
          &:hover {
            color: #ff0000;
          }
          &::before,
          &::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            right: 0;
            height: 2px;
            background-color: #ff0000;
          }
          &:before {
            opacity: 0;
            transform: translateY(-18px);
            transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
          }
          &:after {
            opacity: 0;
            transform: translateY(8px/2);
            transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
          }
          &.active,
          &:hover,
          &:focus {
            color: #ff0000;
            &:before,
            &:after {
              opacity: 1;
              transform: translateY(0);
            }
            &:before {
              transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
            }
            &:after {
              transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s;
            }
          }
        }
      }
    }
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    width: 100%;
    margin-bottom: 60px;
    .card {
      width: 370px;
      display: flex;
      height: 100px;
      background: #e9e9e9;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s all ease;
      &:hover {
        opacity: 0.8;
        scale: 0.99;
      }
      .image {
        img {
          width: 170px;
          height: 100px;
          border-radius: 10px 0px 0px 10px;
          object-fit: cover;
        }
      }
      .info {
        .title {
          h2 {
            font-weight: 400;
            font-size: 16px;
            margin: 10px;
            text-transform: lowercase;
            color: #000000;
          }
        }
      }
      &:nth-child(1) {
        width: 100%;
        height: 350px;
        margin: 40px 0;
        background: #e9e9e9;
        border-radius: 10px;
        .image {
          img {
            width: 370px;
            height: 350px;
            border-radius: 10px 0px 0px 10px;
            object-fit: cover;
          }
        }
        .info {
          margin-left: 30px;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .title {
            h2 {
              font-weight: 700;
              font-size: 24px;
              text-transform: uppercase;
              color: #000000;
            }
          }
          .text {
            width: 95%;
            p {
              font-weight: 300;
              font-size: 16px;
              color: #000000;
            }
          }
          .date {
            font-weight: 300;
            font-size: 16px;
            color: #666666;
          }
        }
      }
    }
  }
  .posts {
    display: flex;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 80px;
    .post {
      width: 350px;
      height: 330px;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 100;
      border-radius: 10px;
      cursor: pointer;
      transition: 0.3s all ease;
      &:hover {
        opacity: 0.8;
        scale: 0.99;
      }
      .image {
        &::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            180deg,
            rgba(63, 63, 63, 0) 0%,
            rgba(63, 63, 63, 0.7) 31.25%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: -1;
          border-radius: 10px;
        }
        img {
          z-index: -5;
          position: absolute;
          width: 350px;
          height: 330px;
          border-radius: 10px;
          object-fit: cover;
        }
      }
      .info {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 18px;
        .title {
          h2 {
            font-weight: 400;
            font-size: 32px;
            color: #ffffff;
          }
        }
        .date {
          font-weight: 300;
          font-size: 14px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>
