<script setup>
import { ref, computed, onMounted } from 'vue'

onMounted(() => {
  document.querySelector('#stick').style = 'height:300px;'
  document.querySelector('.text').style = 'transform: translate(0);'
})

const windowWidth = ref(0)
const windowHeight = ref(0)
const mouseXpercentage = ref(0)
const mouseYpercentage = ref(0)

const radialGradientStyle = computed(() => {
  return `radial-gradient(at ${mouseXpercentage.value}% ${mouseYpercentage.value}%, #3498db, #9b59b6)`
})

function handleMouseMove(event) {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight

  mouseXpercentage.value = Math.round((event.pageX / windowWidth.value) * 100)
  mouseYpercentage.value = Math.round((event.pageY / windowHeight.value) * 100)
}
</script>
<template>
  <div class="container radial-gradient" @mousemove="handleMouseMove" :style="{ background: radialGradientStyle }">
    <div class="content">

      <div class="title">
        <span id="stick"></span>
        <div class="text">
          <h1>Открытый</h1>
          <h2>Университет</h2>
        </div>
      </div>
      <img id="logo" src="@/assets/images/phone.webp" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.onLoad {
  height: 300px;
}
.container {
  overflow: hidden;
  transition: 0.3s ease all;
  width: 100%;
  height: 100vh;
  background: radial-gradient(at center, #c10020, #135aae);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  .content{
    display: flex;
    width: 80%;
    align-items: center;
    img {
      transition: 1s ease all;
      max-width: 950px;
      max-height: 950px;
      pointer-events: none;
      user-select: none;
      position: absolute;
      right: 0;
    }
    .title{
      display: flex;
      align-items: center;
      width: 817px;
      span {
        display: block;
        height: 3px;
        margin-right: 50px;
        width: 3px;
        background: var(--white);
        transition: 1s ease all;
        pointer-events: none;
      }
      .text{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: fit-content;
        transform: translate(-300%);
        transition: 1s ease;
        h1 {
          width: 470px;
          color: var(--white);
          font-weight: 700;
          font-size: 128px;
          text-transform: uppercase;
          transition: 1s ease all;
          pointer-events: none;
          user-select: none;
          margin-left: -12px;
        }
        h2 {
          width: 470px;
          color: var(--white);
          font-weight: 700;
          font-size: 100px;
          text-transform: uppercase;
          transition: 1s ease all;
          pointer-events: none;
          user-select: none;
        }

      }
    }
  }

}


@media(min-width: 1440px) and (max-width: 1650px){
.container {

  .content{

    img {
      max-width: 750px;
      max-height: 750px;
    }
    .title{

      .text{

        h1 {
          width: auto;
          font-size: 100px;
        }
        h2 {
          font-size: 72px;
        }

      }
    }
  }

}
}
@media(min-width: 768px) and (max-width: 1440px){
.container {

  .content{

    img {
      max-width: 550px;
      max-height: 550px;
    }
    .title{

      .text{

        h1 {
          width: auto;

          font-size: 72px;
        }
        h2 {
          font-size: 48px;
        }

      }
    }
  }

}
}
@media(max-width: 768px){
.container {
height: 200dvh;
  .content{
    height: 100%;
    align-items: flex-start;
    justify-content: center;
    img {
      max-width: 1525px;
      max-height: 1525px;
      bottom: -40px;
      right: -350px;
    }
    .title{
      margin-top: 120px;
      align-items: center;
      justify-content: center;

      span{
        display: none;
      }
      .text{

        h1 {
          width: auto;

          font-size: 160px;
        }
        h2 {
          width: auto;

          font-size: 125px;
        }

      }
    }
  }

}
}

</style>
