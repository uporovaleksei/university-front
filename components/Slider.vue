<script setup>
import SliderItem from '@/components/SliderItem.vue'
const props = defineProps({
  sliderData: Array,
  active: Number,
})
</script>
<template>
  <div class="container">
    <SliderItem
      v-for="(item, index) in sliderData"
      :key="index"
      :index="index"
      :active="active"
      :itemData="item"
      @jump="v => $emit('jump', v)"
    />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
}
</style>
