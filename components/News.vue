<script>
export default {}
</script>

<template>
  <div class="wrapper">
    <div class="container">
      <h1>Новости</h1>
      <div class="card">
        <div class="image">
          <img src="@/assets/images/logo.png" alt="" />
        </div>
        <div class="info">
          <div class="date">02.02.2023</div>
          <div class="title">
            <h2>Заголовокк</h2>
          </div>
          <div class="text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis at perferendis, similique placeat neque,
              nulla deserunt ipsum reiciendis esse magni in aliquam repellendus
            </p>
          </div>
          <div class="buttons">
            <button>Подробнее</button>
            <a href="#">Все новости</a>
          </div>
        </div>
        <div class="slider">
          <span class="active"></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  background: #ececec;
  padding: 90px 0;
  .container {
    width: 60%;
    margin: 0 auto;
    h1 {
      padding-bottom: 90px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 700;
      font-size: 48px;
      text-transform: uppercase;
      color: #000000;
    }
    .card {
      background: var(--blue);
      display: flex;
      align-items: center;
      border-radius: 30px;
      padding: 75px 0;
      .image {
        background: #ffffff;
        border-radius: 30px;
        transform: translateX(-100px);
        min-width: 400px;
        height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        img {
          width: 233px;
          height: 170px;
        }
      }
      .info {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .date {
          color: #ffffff;
          font-weight: 300;
          font-size: 20px;
          text-transform: capitalize;
        }
        .title {
          background: red;
          height: 80px;
          h2 {
            font-weight: 700;
            font-size: 40px;
            color: #ffffff;
          }
        }
        .text {
          width: 80%;
          height: 140px;
          display: flex;
          p {
            font-weight: 400;
            font-size: 24px;
            color: #ffffff;
          }
        }
        .buttons {
          display: flex;
          align-items: center;
          gap: 70px;
          button {
            width: 270px;
            height: 50px;
            font-weight: 400;
            font-size: 24px;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
            border-radius: 30px;
            border: 0;
            cursor: pointer;
            transition: 0.2s ease all;
            &:hover {
              box-shadow: 0px 0px 1px 3px var(--red);
            }
          }
          a {
            font-weight: 400;
            font-size: 24px;
            text-decoration-line: underline;
            color: #ffffff;
            transition: 0.2s ease all;
            &:hover {
              text-decoration: var(--red) underline;
            }
          }
        }
      }
      .slider {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-right: 40px;
        span {
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
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
