<script setup>
import imgLink from '@/plugins/imgLink'
import dateFormat from '@/plugins/dateFormat'

const router = useRouter()
const props = defineProps({
  itemData: Object,
  active: Number,
  index: Number,
})

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
            <NuxtLink :to="'/news/' + itemData.id">
              <button>Подробнее</button>
            </NuxtLink>
            <NuxtLink to="/news"> Все новости </NuxtLink>
          </div>
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
      font-size: 36px;
      text-transform: uppercase;
      color: #000000;
    }
    .card {
      width: 100%;
      background: #185091;
      display: flex;
      align-items: center;
      border-radius: 10px;
      min-height: 500px;
      max-height: 500px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      .image {
        background: #ffffff;
        border-radius: 10px 0px 0px 10px;
        min-width: 40%;
        max-width: 41%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &::before {
          content: '';
          z-index: 55;
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 10px 0px 0px 10px;
          background: #00000038;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 10px 0px 0px 10px;
          position: relative;
          z-index: 14;
        }
      }
      .info {
        display: flex;
        margin-left: 30px;
        flex-direction: column;
        gap: 60px;
        justify-content: flex-start;
        .date {
          color: #ffffff;
          font-weight: 300;
          font-size: 20px;
          text-transform: capitalize;
        }
        .title {
          width: 90%;
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
            width: 170px;
            height: 40px;
            border: 2px solid #ffffff;
            background: transparent;
            color: #fff;
            border-radius: 10px;
            cursor: pointer;
            transition: 0.2s ease all;
            font-family: 'Open Sans';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            &:hover {
              background: #fff;
              color: #000000;
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
    }
  }
}
@media (min-width: 2559px) {
  .wrapper {
    .container {
      .card {
        min-height: 700px;
        .info {
          .date {
            font-size: 2rem;
          }
          .title {
            h2 {
              font-size: 2.5rem;
            }
          }
          .text {
            p {
              font-size: 2rem;
            }
          }
          .buttons {
            button {
              width: 300px;
              height: 60px;
              font-size: 2.3rem;
              border: 3px solid #ffffff;
            }
            a {
              font-size: 2.5rem;
            }
          }
        }
      }
    }
  }
}
</style>
