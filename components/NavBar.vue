<script>
import { tr } from 'date-fns/locale'
const onScroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('nav').classList.add('scroll')
  } else {
   document.querySelector('nav').classList.remove('scroll')
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
          label: 'Новости',
          path: '/news',
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
      menuIsOpen: false
    }
  },
  mounted() {
  window.addEventListener('scroll', onScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', onScroll)
  },
  computed: {
    path() {
      return this.$route.path
    },
  },
  methods:{
    lock(){
    this.menuIsOpen? document.body.style = 'overflow: hidden;': document.body.style = 'overflow: scroll;' 
    }
  }
}
</script>

<template>
  <nav :class=" {'active': menuIsOpen}">
    <div class="content" :class=" {'active': menuIsOpen}">
        <div class="menu__icon" @click="menuIsOpen = !menuIsOpen;lock()"
   :class=" {'open': menuIsOpen}"
   >
    <span></span>
  </div>
      <NuxtLink to="/">
        <img src="@/assets/images/logo.png" />
      </NuxtLink>
      <div :class="['links', {'active': menuIsOpen}]" >
        <ul>
          <li v-for="item in paths" :key="item.path">
            <NuxtLink :to="item.path" :class="{ active: item.path === path }" class="link">
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
  height: 80px;
  position: fixed;
  z-index: 100;
  background: transparent;
  transition: background 0.3s ease-in-out;
  .content {
    width: fit-content;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70px;
      height: 50px;
      cursor: pointer;
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
          a {
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            color: #000;
            position: relative;
            transition: 0.3s;
            &:hover {
              color: rgba(0, 0, 0, 0.5);
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

        }
      }
    }

  }
}
.scroll{
  background: #fff;
}
@media  (max-width: 769px) {
  nav{
    width: 100%;
    background: #fff;
    .content{
      width: 60%;
      padding-top: 20px;
      justify-content: space-between;
      align-items: flex-start;
      display: flex;
      .links{
        display: none;
        margin-left: 0
      
      }
      .active{
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        
        ul{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          li{
          }
        }
        
      }
    }
  }
.active{
    height: 100%;
    width: 100%;
    background: #fff;
    overflow: hidden;
    a{
      order: 3;
    }
  }
  .menu__icon{
    cursor: pointer;
    height: 18px;
    width: 30px;
    position: relative;
    display: block;
    z-index: 5;
    span,
    &::before,
    &::after{
        position: absolute;
        height: 15%;
        width: 100%;
        transition: 0.3s ease;
        background: #031312;
    }
    &::before,
    &::after{
        content: "";
    }
    &::after{
        bottom: 0;
    }
    &::before{
        top: 0;
    }
    span{
        top: 45%;
        transform: translate(0px -50%);
    }
    
  }
  .open{
    &::after{
        bottom: 50%;
        transform: rotate(45deg) translate(0px, 50%);
    }
    &::before{
         top:50%;
        transform: rotate(-45deg) translate(0px, -50%);;
    }
    span{
         transform: scale(0);
    }
  }

}
@media  (min-width: 2559px) {
nav{
  height: 100px;
  .content{
    img{
      scale: 1.3;
    }
    .links{
      ul{
        li{
          a{
            font-size: 2.5rem;
          }
        }
      }
    }
  }
}
  }
</style>
