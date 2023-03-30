<script>
import NavBarVue from '@/components/NavBar.vue'
export default {
  components: {
    NavBarVue,
  },
}
</script>

<template>
  <NavBarVue />
  <slot />
  <Footer />
</template>

<style></style>
