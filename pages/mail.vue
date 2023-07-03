<script setup>
import { ref } from 'vue'
import axios from 'axios'
const router = useRouter()

const { baseURL } = useRuntimeConfig()
const showModal = ref(false)
const title = ref('Обратная связь')
const name = ref('')
const email = ref('')
const text = ref('')
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
const sendEmail = async () => {
  if (!name.value || !email.value || !text.value) {

    const inputs = document.querySelectorAll('input');
    const textAlert = document.querySelector('.text__alert');
    const textArea = document.querySelector('textarea');
textAlert.style.cssText = 'opacity: 1; scale: 1;';
textAlert.textContent = 'Заполните все поля!';

textAlert.classList.add('shake');
textArea.style.cssText = 'border: 1px solid #c10020;';
inputs.forEach(input => {
  input.style.cssText = 'border: 1px solid#c10020;';
});

  setTimeout(() => {
    textAlert.classList.remove('shake');
    inputs.forEach(input => {
    input.classList.remove('shake');
});

  }, 300);
}
else if (!emailRegex.test(email.value)) {
  const textAlert = document.querySelector('.text__alert');
  textAlert.textContent = 'Неправильный формат почты';
  }
  else{
    await useFetch(
    `${baseURL}mail`,
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
  console.log('111')
  name.value = ''
  email.value = ''
  text.value = ''
  showModal.value = false
   router.push('/')
  }

}
const closeModal = () => {
  router.push('/')
}
</script>
<template>
  <Head>
    <Title>{{ title }}</Title>
    <Meta name="description" :content="title" />
  </Head>
  <transition name="modal">
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
            <div class="text__alert">
              
            </div>
            <button class="modal-default-button" @click="sendEmail">Отправить</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
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
  .text__alert{
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
  0% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
  20%, 40%, 60%, 80% { transform: translateX(5px); }
  100% { transform: translateX(0); }
}
</style>
