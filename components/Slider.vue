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
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
        .slider {
          transform: translateX(-40px);
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
</style>
