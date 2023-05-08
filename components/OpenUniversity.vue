<script setup>
import { ref, computed, onMounted } from 'vue'

onMounted(() => {
  document.querySelector('#stick').style = 'height:300px;'
  document.querySelector('#logo').style = 'transform: translateX(0%);'
  document.querySelector('#logo').style = 'transform: translateX(0%);'
  document.querySelector('#text').style = 'transform: translateX(0%);'
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
    <img id="logo" src="@/assets/images/second_logo.png" />
    <span id="stick"></span>
    <h1 id="text">Открытый Университет</h1>
  </div>
</template>

<style lang="scss" scoped>
.onLoad {
  height: 300px;
}
.container {
  overflow-x: hidden;
  transition: 0.3s ease all;
  width: 100%;
  height: 100vh;
  background: radial-gradient(at center, #c10020, #135aae);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transition: 0.3s ease all;
    width: 225px;
    height: 200px;
    transform: translateX(-500%);
  }
  span {
    height: 3px;
    margin-left: 50px;
    width: 3px;
    background: var(--white);
    transition: 0.3s ease all;
  }
  h1 {
    width: 470px;
    color: var(--white);
    font-weight: 700;
    font-size: 3.5rem;
    text-transform: uppercase;
    margin-left: 30px;
    transition: 0.3s ease all;

    transform: translateX(300%);
  }
}
@media (min-width: 2559px) {
  .container {
    img {
      scale: 2.5;
    }
    span {
      height: 600px;
      margin-left: 200px;
      width: 6px;
    }
    h1 {
      font-size: 6rem;
    }
  }
}
</style>
