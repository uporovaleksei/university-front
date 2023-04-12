<script setup>
const closeModal = () => {
  document.querySelector('.modal-mask').classList.add('close')
}
</script>
<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <slot></slot>
          <button class="modal-default-button" @click="$emit('close')">Отправить</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style>
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

button {
}
</style>
