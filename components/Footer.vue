<script setup>
import { ref } from 'vue'
import axios from 'axios'
const router = useRouter()

const closeModal = () => {
  showModal.value = false
  document.body.style = ' overflow-y: auto;'
}

const openModal = () => {
  showModal.value = true
  document.body.style = ' overflow-y: hidden;'
}

const { baseURL } = useRuntimeConfig()
const showModal = ref(false)
const title = ref('Обратная связь')
const name = ref('')
const email = ref('')
const text = ref('')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/

const sendEmail = async () => {
  if (!name.value || !email.value || !text.value) {
    const inputs = document.querySelectorAll('input')
    const textAlert = document.querySelector('.text__alert')
    const textArea = document.querySelector('textarea')
    textAlert.style.cssText = 'opacity: 1; scale: 1;'
    textAlert.textContent = 'Заполните все поля!'

    textAlert.classList.add('shake')
    textArea.style.cssText = 'border: 1px solid #c10020;'
    inputs.forEach(input => {
      input.style.cssText = 'border: 1px solid#c10020;'
    })

    setTimeout(() => {
      textAlert.classList.remove('shake')
      inputs.forEach(input => {
        input.classList.remove('shake')
      })
    }, 300)
  } else if (!emailRegex.test(email.value)) {
    const textAlert = document.querySelector('.text__alert')
    textAlert.textContent = 'Неправильный формат почты'
  } else {
    await useFetch(
      `${baseURL}send_mail`,
      {
        method: 'POST',
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          text: text.value,
        }),
      },
      {
        headers: { 'Content-Type': 'application/json' },
      }
    )
    name.value = ''
    email.value = ''
    text.value = ''
    closeModal()
  }
}
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
            <NuxtLink to="https://apps.rustore.ru/app/com.mickey.open_university_rsvpu" target="_blank">
              <img src="@/assets/images/rustore.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://apps.apple.com/tr/app/%D0%BE%D1%82%D0%BA%D1%80%D1%8B%D1%82%D1%8B%D0%B9-%D1%83%D0%BD%D0%B8%D0%B2%D0%B5%D1%80%D1%81%D0%B8%D1%82%D0%B5%D1%82-%D1%80%D0%B3%D0%BF%D0%BF%D1%83/id6448987693"
              target="_blank"
            >
              <img src="@/assets/images/appstore.svg" alt="" />
            </NuxtLink>
            <NuxtLink
              to="https://play.google.com/store/apps/details?id=com.mickey.open_university_rsvpu&hl=ru&gl=US"
              target="_blank"
            >
              <img src="@/assets/images/gp.svg" alt="" />
            </NuxtLink>
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
            <a @click="openModal"> Обратная связь </a>
            <transition name="modal" v-if="showModal">
              <div class="modal-mask">
                <div class="modal-wrapper">
                  <div class="modal-container">
                    <div class="modal">
                      <div class="header">
                        <button @click="closeModal">X</button>
                        <h1>Обратная связь</h1>
                      </div>
                      <input v-model="name" type="text" placeholder="Введите ваше имя" />
                      <input v-model="email" type="text" placeholder="Введите ваш e-mail" />
                      <textarea v-model="text" name="" id="" cols="30" rows="10"></textarea>
                      <div class="text__alert"></div>
                      <button class="modal-default-button" @click="sendEmail">Отправить</button>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
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
      background: #c10020;
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
  .text__alert {
    color: red;
    font-weight: 600;
    transition: 0.3s ease all;
    scale: 0.6;
    opacity: 0;
  }
  .text__alert.shake {
    animation: shake 0.5s;
  }
}
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}
.close {
  display: none;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border: 3px solid #185091;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  align-self: flex-end;
  margin: 10px 0;
  width: 130px;
  height: 30px;
  border-radius: 20px;
  border: 2px solid #185091;
  background: transparent;
  color: #185091;
  transition: 0.3s ease all;
}
.modal-default-button:hover {
  background: #185091;
  color: #fff;
  box-shadow: 0px 0px 4px #185091;
}
.modal-default-button:active {
  scale: 0.9;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translateX(-5px);
  }
  20%,
  40%,
  60%,
  80% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
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
    right: 10%;
    background-image: url('@/assets/images/pattern.png');
    background-size: 656px;
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
          flex-direction: column;
          align-self: flex-start;
          gap: 10px;
          img {
            width: 170px;
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
    }
  }
}
@media (max-width: 768px) {
  .wrapper {
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
