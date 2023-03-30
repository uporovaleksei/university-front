<script setup>
import imgLink from '@/plugins/imgLink'
import dateFormat from '@/plugins/dateFormat'

const router = useRouter()
const props = defineProps({
  itemData: Object,
  active: Number,
  index: Number,
})

const openNews = ({ id }) => {
  router.push('/news/' + id)
}

const trimDescription = ({ description }) => description.split(' ').slice(0, 10).join(' ') + '....'
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <div class="card" v-if="active === index">
        <div class="image">
          <img class="img" :src="imgLink(itemData)" />
        </div>
        <div class="info">
          <div class="date">{{ dateFormat(itemData.date) }}</div>
          <div class="title">
            <h2>{{ itemData.title }}</h2>
          </div>
          <div class="text">
            <p>
              {{ trimDescription(itemData) }}
            </p>
          </div>
          <div class="buttons">
            <button @click="openNews(itemData)">Подробнее</button>
            <NuxtLink to="/news"> Все новости </NuxtLink>
          </div>
        </div>
        <div class="slider">
          <ul>
            <li
              v-for="(dot, index) in 3"
              :key="index"
              :class="{ active: index === active }"
              @click="$emit('jump', index)"
            ></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  .container {
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    h1 {
      padding-bottom: 90px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      text-transform: uppercase;
      color: #000000;
    }
    .card {
      background: var(--blue);
      display: flex;
      align-items: center;
      border-radius: 30px;
      padding: 75px 0;
      .image {
        background: #ffffff;
        border-radius: 30px;
        transform: translateX(-100px);
        min-width: 400px;
        max-width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        &::before {
          content: '';
          z-index: 55;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 30px;
          background: #00000038;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
          position: relative;
          z-index: 14;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 40px;
        .date {
          color: #ffffff;
          font-weight: 300;
          font-size: 20px;
          text-transform: capitalize;
        }
        .title {
          h2 {
            font-weight: 700;
            font-size: 40px;
            color: #ffffff;
          }
        }
        .text {
          width: 80%;
          display: flex;
          p {
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
          }
        }
        .buttons {
          display: flex;
          align-items: center;
          gap: 70px;
          button {
            width: 270px;
            height: 50px;
            font-weight: 400;
            font-size: 24px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            border: 0;
            cursor: pointer;
            transition: 0.2s ease all;
            &:hover {
              box-shadow: 0px 0px 1px 3px var(--red);
            }
          }
          a {
            font-weight: 400;
            font-size: 24px;
            text-decoration-line: underline;
            color: #ffffff;
            transition: 0.2s ease all;
            &:hover {
              text-decoration: var(--red) underline;
            }
          }
        }
      }
      .slider {
        ul {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-right: 40px;
          li {
            width: 15px;
            height: 15px;
            background: #d9d9d9;
            border-radius: 100%;
            transition: 0.2s ease all;
            &:hover {
              background: var(--red);
            }
          }
          .active {
            height: 30px;
            background: var(--red);
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>
