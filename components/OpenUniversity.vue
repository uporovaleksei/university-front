<script setup></script>
<template>
  <div class="container">
    <img src="@/assets/images/second_logo.png" />
    <span id="stick"></span>
    <h1>Открытый Университет</h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    to right bottom,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );

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
      font-size: 7rem;
    }
  }
}
</style>
