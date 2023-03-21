<script>
import MainVue from '@/layouts/Main.vue'
export default {
  components: {
    MainVue,
  },
}
</script>

<template>
  <MainVue>
    <div class="container">
      <h1>ОУ в лицах</h1>
      <hr />
      <ul>
        <li v-for="persons of 5" :key="persons">Лица: {{ persons }}</li>
      </ul>
    </div>
  </MainVue>
</template>

<style lang="scss" scoped>
.container {
  background: #c9c9c9;
  h1 {
    padding-top: 200px;
  }
}
</style>
