<script></script>
<template>
  <div class="wrapper">
    <div class="container">
      <footer>
        <div class="icons">
          <NuxtLink to="https://t.me/rsvpu_inter">
            <img src="@/assets/images/Telegramm.svg" />
          </NuxtLink>
          <NuxtLink to="https://www.youtube.com/channel/UC-y6HemC-f1Yf_9lFSnPbSw">
            <img src="@/assets/images/Yutub.svg" />
          </NuxtLink>
          <NuxtLink to="https://vk.com/rsvpu_official">
            <img src="@/assets/images/VK.svg" />
          </NuxtLink>
        </div>
        <div class="links">
          <div class="about">
            <NuxtLink to="/about"> О проекте </NuxtLink>
            <NuxtLink to="/news"> Новости </NuxtLink>
            <NuxtLink to="/persons"> Партнеры </NuxtLink>
          </div>
          <div class="video">
            <NuxtLink to="/lections"> Видеолекции </NuxtLink>
            <NuxtLink to="/stories"> Видеосюжеты </NuxtLink>
          </div>
          <div class="contacts">
            <a href="#">Контакты</a>
            <a href="#">Обратная связь</a>
            <a href="#">Номер телефона</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 260px;
  margin: 0 auto;
  background: #185091;
  position: relative;
  z-index: 10;
  overflow: hidden;
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    background-image: url('@/assets/images/pattern.png');
    background-size: 456px;
    background-repeat: no-repeat;
    opacity: 0.5;
    width: 100%;
    height: 100%;
  }
  .container {
    width: 60%;
    height: 100%;
    margin: 0 auto;
    footer {
      display: flex;
      height: 100%;
      width: 100%;
      gap: 330px;
      padding-top: 60px;
      .icons {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        a {
          img {
            width: 50px;
          }
        }
      }
      .links {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        width: 100%;
        gap: 100px;
        .about,
        .video,
        .contacts {
          display: flex;
          width: 100%;
          gap: 10px;
          min-width: 200px;
          flex-direction: column;
          justify-content: center;
          font-style: normal;
          font-weight: 400;
          font-size: 20px;
          line-height: 27px;
          a {
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
