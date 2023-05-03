<script setup>
const showModal = ref(false)
</script>
<template>
  <div class="wrapper">
    <div class="container">
      <footer>
        <div class="icons">
          <div class="actions">
            <NuxtLink to="https://t.me/rsvpu_inter" target="_blank">
              <img src="@/assets/images/Telegramm.svg" />
            </NuxtLink>
            <NuxtLink to="https://www.youtube.com/channel/UC-y6HemC-f1Yf_9lFSnPbSw" target="_blank">
              <img src="@/assets/images/Yutub.svg" />
            </NuxtLink>
            <NuxtLink to="https://vk.com/rsvpu_official" target="_blank">
              <img src="@/assets/images/VK.svg" />
            </NuxtLink>
          </div>
          <div class="mobile__app">
            <img src="@/assets/images/phone.svg" alt="" />
            <a href="#" target="_blank"> Скачать мобильное приложение </a>
          </div>
        </div>
        <div class="links">
          <div class="about">
            <NuxtLink to="/about"> О проекте </NuxtLink>
            <NuxtLink to="/persons"> Наставники </NuxtLink>
          </div>
          <div class="video">
            <NuxtLink to="/lections"> Лекции </NuxtLink>
            <NuxtLink to="/stories"> Истории </NuxtLink>
          </div>
          <div class="contacts">
            <a @click="showModal = true">Обратная связь</a>
          </div>
          <ModalWindow v-if="showModal" @close="showModal = false">
            <div class="modal">
              <div class="header"> 
                <button @click="showModal = !showModal">X</button>
                <h1>Обратная связь</h1>
              </div>
              <input type="text" placeholder="Введите ваше имя" />
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
          </ModalWindow>
        </div>
      </footer>
      <p>ФГАОУ ВО «Российский государственный профессионально-педагогический университет»</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .header {
    width: 100%;
    display: flex;
    flex-direction: column;
    button {
      align-self: flex-end;
      border: none;
      width: 30px;
      height: 30px;
      background: rgb(223, 35, 35);
      color: #fff;
      border-radius: 100%;
      transition: 0.3s all ease;
      font-weight: 900;
      cursor: pointer;
      &:hover {
        opacity: 0.6;
      }
      &:active {
        scale: 0.6;
      }
    }
  }
  input {
    width: 300px;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #185091;
    transition: 0.3s ease all;
    &:focus {
      border: 1px solid var(--red);
    }
  }
  textarea {
    resize: none;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    border: 1px solid #185091;
    transition: 0.3s ease all;
    &:focus {
      border: 1px solid var(--red);
    }
  }
}
.wrapper {
  width: 100%;
  margin: 0 auto;
  background: #185091;
  position: relative;
  z-index: 10;
  overflow: hidden;
  &::before {
    z-index: -1;
    position: absolute;
    content: '';
    top: 10%;
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
    padding: 60px 0;
    footer {
      display: flex;
      height: 100%;
      width: 100%;
      gap: 20px;
      .icons {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        a {
          img {
            width: 50px;
          }
        }
        .actions {
          width: 100%;
          display: flex;
          align-items: flex-start;
          gap: 10px;
        }
        .mobile__app {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: flex-start;
          gap: 10px;
          img {
            width: 48px;
          }
          a {
            color: #fff;
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
          }
        }
      }
      .links {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        height: 100%;
        width: 100%;
        // gap: 100px;
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
          a {
            color: #fff;
            cursor: pointer;
          }
        }
      }
      p {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        color: #ffffff;
      }
    }
    p {
      width: 387px;
      margin-top: 25px;
      font-family: 'Open Sans';
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      color: #ffffff;
    }
  }
}
@media (max-width: 1024px) {
  .wrapper {
    width: 100%;
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
      left: -250px;
      width: 100%;
      height: 100%;
    }
    .container {
      width: 80%;
      height: 100%;
      margin: 0 auto;
      footer {
        display: flex;
        height: 100%;
        width: 100%;
        gap: 30px;
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
          // gap: 100px;
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
            a {
              color: #fff;
              cursor: pointer;
            }
          }
        }
        p {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          color: #ffffff;
        }
      }
      p {
      }
    }
  }
}
@media (max-width: 768px) {
  .wrapper {
    &::before {
    }
    .container {
      width: 80%;
      footer {
        .icons {
          a {
            img {
              width: 75px;
            }
          }
          .mobile__app {
            a {
              font-size: 24px;
            }
            img {
              width: 75px;
            }
          }
        }
        .links {
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
            font-size: 24px;
            a {
              color: #fff;
              cursor: pointer;
              font-size: 28px;
            }
          }
        }
        p {
          font-size: 28px;
        }
      }
      p {
        font-size: 28px;
        width: 600px;
      }
    }
  }
}
@media (max-width: 425px) {
  .wrapper {
    &::before {
    }
    .container {
      width: 90%;
      footer {
        .icons {
          a {
            img {
              width: 75px;
            }
          }
        }
        .links {
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
            font-size: 24px;
            a {
              color: #fff;
              cursor: pointer;
              font-size: 28px;
            }
          }
        }
        p {
          font-size: 28px;
        }
      }
    }
  }
}
</style>
