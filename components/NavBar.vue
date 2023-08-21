<script>
const onScroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('nav').classList.remove('scroll')
    document.querySelectorAll('.main').forEach(e => {
      e.classList.remove('scroll')
    })
  } else {
    document.querySelector('nav').classList.add('scroll')
    document.querySelectorAll('.main').forEach(e => {
      e.classList.add('scroll')
    })
  }
}

export default {
  data() {
    return {
      paths: [
        {
          label: 'О проекте',
          path: '/about',
        },
        {
          label: 'Лекции',
          path: '/lections',
        },
        {
          label: 'Истории',
          path: '/stories',
        },
        {
          label: 'Наставники',
          path: '/persons',
        },
      ],
     menuIsOpen: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', onScroll)
    document.body.style = 'overflow-y: scroll;'
    onScroll()
  },
  beforeUnmount() {
    addEventListener
    window.removeEventListener('scroll', onScroll)
  },
  computed: {
    path() {
      return this.$route.path
    },
  },
  methods: {
    lock() {
      this.menuIsOpen = !this.menuIsOpen
      this.menuIsOpen ? (document.body.style = 'overflow-y: hidden;') : (document.body.style = 'overflow-y: scroll;')
    },
  },
}
</script>

<template>
  <nav :class="{ active: menuIsOpen, main: path === '/' }">
    <div class="content" :class="{ active: menuIsOpen }">
      <div class="menu__icon" @click="lock" :class="{ open: menuIsOpen }">
        <span></span>
      </div>
      <NuxtLink to="/" class="logo">
        <img :class="{ active: menuIsOpen }" src="@/assets/images/logo.png" />
      </NuxtLink>
      <div :class="['links', { active: menuIsOpen }]">
        <ul>
          <li v-for="item in paths" :key="item.path">
            <NuxtLink
              :to="item.path"
              :class="{ active: path == item.path, active__links: menuIsOpen, main: path === '/' }"
            >
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 100;
  background: rgba(255, 255, 255, 0.8);
  transition: all 0.3s ease-in-out;

  .content {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo{
      img {
        width: 70px;
        height: 50px;
        cursor: pointer;
        transition: 0.3s ease all;
      }
    }
    
    .links {
      margin-left: 130px;
      ul {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;
        li {
          line-height: 33px;
          transition: 0.3s ease all;
          .active__links {
            color: var(--blue);
          }
          a {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            color: var(--blue);
            position: relative;
            transition: 0.3s;
            &:hover {
                          color: var(--blue);

            }
            &::before,
            &::after {
              content: '';
              position: absolute;
              bottom: -4px;
              left: 0;
              right: 0;
              height: 4px;
              background-color: var(--red);
            }
            &:before {
              opacity: 0;
              transform: translateY(-18px);
              transition: transform 0s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s;
            }
            &:after {
              opacity: 0;
              transform: translateY(8px/2);
              transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
            }
            &.active,
            &:hover,
            &:focus {
              &:before,
              &:after {
                opacity: 1;
                transform: translateY(0);
              }
              &:before {
                transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.2s;
              }
              &:after {
                transition: transform 0s 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0s 0.2s;
              }
            }
          }
          .scroll {
            color: #fff;
          }
        }
      }
    }
    .menu__icon {
      display: none;
    }
  }
}
.scroll.main {
  background: transparent;
}

@media (max-width: 769px) {
  nav {
    width: 100%;
    background: #fff;
    transition: 0.3s;
    .content {
      width: 80%;
      padding-top: 20px;
      justify-content: space-between;
      align-items: flex-start;
      display: flex;
      .links {
        display: none;
        margin-left: 0;
      }
      .active {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          width: 60%;
          li {
            width: 100%;
            
            a {
              width: 100%;
              height: 70px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 35px;
              border: 2px solid #135aae;
              font-size: 36px;
              
            }
          }
        }
      }
      .menu__icon {
        display: block;
      }
    }
  }
  .active {
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;
    a {
      order: 3;
    }
  }
  .menu__icon {
    cursor: pointer;
    height: 18px;
    width: 30px;
    align-self: center;
    position: relative;
    display: block;
    z-index: 5;
    transition: 0.6s;
    span,
    &::before,
    &::after {
      position: absolute;
      height: 15%;
      width: 100%;
      transition: 0.3s ease;
      background: #031312;
    }
    &::before,
    &::after {
      content: '';
    }
    &::after {
      bottom: 0;
    }
    &::before {
      top: 0;
    }
    span {
      top: 45%;
      transform: translate(0px -50%);
    }
  }
  .open {
    align-self: flex-start;
    &::after {
      bottom: 50%;
      transform: rotate(45deg) translate(0px, 50%);
    }
    &::before {
      top: 50%;
      transform: rotate(-45deg) translate(0px, -50%);
    }
    span {
      transform: scale(0);
    }
  }
}
@media (max-width: 425px) {
  nav {
    width: 100%;
    height: 100px;
    background: #fff;
    transition: 0.3s;
    .content {
      width: 80%;
      padding-top: 20px;
      justify-content: space-between;
      align-items: center;
      display: flex;
      a {
        img {
          width: 90px;
          height: 70px;
        }
      }
      .links {
        display: none;
        margin-left: 0;
      }
      .active {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        ul {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          width: 60%;
          li {
            width: 100%;
            a {
              width: 100%;
              height: 100px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 35px;
              border: 2px solid #135aae;
              font-size: 48px;
            }
          }
        }
      }
      .menu__icon {
        display: block;
      }
    }
  }
  .active {
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;
    a {
      order: 3;
      align-self: flex-start;
    }
  }
  .menu__icon {
    cursor: pointer;
    height: 40px;
    width: 70px;
    align-self: center;
    position: relative;
    display: block;
    z-index: 5;
    transition: 0.6s;
    span,
    &::before,
    &::after {
      position: absolute;
      height: 20%;
      width: 100%;
      transition: 0.3s ease;
      background: #031312;
    }
    &::before,
    &::after {
      content: '';
    }
    &::after {
      bottom: 0;
    }
    &::before {
      top: 0;
    }
    span {
      top: 50%;
      transform: translate(0px -50%);
    }
  }
  .open {
    align-self: flex-start;
    &::after {
      bottom: 50%;
      transform: rotate(45deg) translate(0px, 50%);
    }
    &::before {
      top: 50%;
      transform: rotate(-45deg) translate(0px, -70%);
    }
    span {
      transform: scale(0);
    }
  }
}
@media (min-width: 2559px) {
  nav {
    height: 100px;
    .content {
      img {
        scale: 1.3;
      }
      .links {
        ul {
          li {
            a {
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 1439px) {
nav {
  .content {
    .logo{
        position: relative;
        width: 100px;
        height: 60px;
        transition: 0.3s ease all;
      img {
        width: 70px;
        height: 50px;
        cursor: pointer;
        transition: 0.3s ease all;
      }
       &::after{
        position: absolute;
        background-image: url('@/assets/images/logo.svg');
        background-size: 300px;
        background-repeat: no-repeat;
        width: 300px; 
        height: 60px;
        content:"";
        left: -5px;
        opacity: 0;
        transition: 0.5s ease all;
      }
      &:hover{
        &::after{
        left: 90px;
        opacity: 1;
        }
      }
    }
  
  }
}
}
</style>
