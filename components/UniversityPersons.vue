<script setup>
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons', { baseURL })
</script>

<template>
  <div class="container">
    <h1>Университет в лицах</h1>
    <div class="cards">
      <div class="card" v-for="item in persons" :key="item.id">
        <div class="image">
          <div class="image-inner">
            <span class="circle"></span>
            <img class="img" :src="`${baseURL}imgs/${item.img.id}.${item.img.format}`" alt="" />
          </div>
        </div>
        <h2>{{ item.name }}</h2>
        <p>{{ item.description['Должность'] }}</p>
      </div>
      <div class="card">
        <div class="image">
          <div class="image-inner">
            <span class="circle"></span>
            <img class="img" src="@/assets/images/тетя.png" alt="" />
          </div>
        </div>
        <h2>Ветлугина Наталия Олеговна</h2>
        <p>Должность</p>
      </div>
      <button>Подробнее</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 60%;
  margin: 90px auto;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 90px;
    margin-bottom: 120px;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;
    flex-wrap: wrap;
    .card {
      display: flex;
      flex-direction: column;
      align-items: center;

      .image {
        border-radius: 50%;
        -webkit-tap-highlight-color: transparent;
        transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
        width: 100%;
        user-select: none;
        &:hover {
          transform: scale(1.04);
        }
        .image-inner {
          clip-path: path(
            'M 390,400 C 390,504.9341 304.9341,590 200,590 95.065898,590 10,504.9341 10,400 V 10 H 200 390 Z'
          );
          position: relative;
          top: -200px;
          .circle {
            width: 380px;
            height: 380px;
            background-color: #5e6ad3;
            border-radius: 50%;
            cursor: pointer;
            left: 10px;
            pointer-events: none;
            position: absolute;
            top: 210px;
          }
          .img {
            pointer-events: none;
            position: relative;
            transform: translateY(20px) scale(1.15);
            transform-origin: 50% bottom;
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
            left: 40px;
            top: 190px;
            width: 317px;
          }
        }
      }
      .image:hover .img {
        transform: translateY(0) scale(1.15);
      }
    }
    h2 {
      text-align: center;
      font-weight: 700;
      font-size: 24px;
      text-transform: uppercase;
      color: #000000;
    }
    p {
      font-weight: 400;
      font-size: 24px;
      color: #000000;
    }
  }
  button {
    margin-top: 70px;
    align-self: flex-end;
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
</style>
