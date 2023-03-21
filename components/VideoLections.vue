<script>
export default {}
</script>

<template>
  <div class="container">
    <h1>Видео лекции</h1>
    <div class="cards">
      <div class="card">
        <div class="image">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="text">
          <h2>Название</h2>
          <p>Краткое описание</p>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="text">
          <h2>Название</h2>
          <p>Краткое описание</p>
        </div>
      </div>
      <div class="card">
        <div class="image">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="text">
          <h2>Название</h2>
          <p>Краткое описание</p>
        </div>
      </div>
    </div>
    <button>Все лекции</button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 1170px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 90px 0;
  h1 {
    margin-top: 40px;
    font-weight: 700;
    font-size: 48px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    margin-top: 90px;
    align-items: center;
    justify-content: center;
    gap: 30px;
    .card {
      width: 370px;
      height: 415px;
      background: #d9d9d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 30px;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      }
      .image {
        margin-top: 66px;
        width: 100%;
        display: flex;
        justify-content: center;
        img {
          width: 165px;
          height: 120px;
        }
      }
      .text {
        margin-top: 62px;
        padding-left: 30px;
        padding-top: 40px;
        background: #135aae;
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        border-radius: 0 0 30px 30px;
        h2 {
          font-weight: 700;
          font-size: 36px;
          text-transform: uppercase;
          color: #ffffff;
        }
        p {
          font-weight: 300;
          font-size: 24px;
          color: #ffffff;
        }
      }
    }
  }
  button {
    margin-top: 54px;
    width: 270px;
    height: 50px;
    align-self: flex-end;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 30px;
    font-weight: 400;
    font-size: 24px;
    color: #000000;
    border: 0;
    transition: 0.3s ease all;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 4px 4px #135aae;
    }
  }
}
</style>
