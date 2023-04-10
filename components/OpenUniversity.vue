<script>
export default {}
</script>
<template>
  <div class="container">
    <img src="@/assets/images/second_logo.png" />
    <span></span>
    <h1>Открытый Университет</h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/gradient.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 225px;
    height: 200px;
  }
  span {
    height: 300px;
    margin-left: 50px;
    width: 3px;
    background: var(--white);
  }
  h1 {
    width: 470px;
    color: var(--white);
    font-weight: 700;
    font-size: 80px;
    text-transform: uppercase;
    margin-left: 30px;
  }
}
@media  (min-width: 2559px) {
.container {
  width: 100%;
  height: 100vh;
  background: url('@/assets/images/gradient.png');
  background-size: 100vw;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  img {
    scale: 2;
  }
  span {
    height: 600px;
    margin-left: 150px;
    width: 6px;
  }
  h1 {
    font-size: 7rem;
  }
}
}
</style>
