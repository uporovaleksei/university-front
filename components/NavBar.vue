<script>
const onScroll = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.querySelector('nav').style = 'background: rgba(0, 0, 0, 0.5);'
  } else {
    document.querySelector('nav').style = 'background: transparantet;'
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
          label: 'Сюжеты',
          path: '/stories',
        },
        {
          label: 'ОУ в лицах',
          path: '/persons',
        },
      ],
    }
  },
  mounted() {
    window.addEventListener('scroll', onScroll)
    console.log(this.$route)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', onScroll)
  },
  computed: {
    path() {
      return this.$route.path
    },
  },
}
</script>

<template>
  <nav>
    <div class="content">
      <NuxtLink to="/">
        <img src="@/assets/images/logo.png" alt="" />
      </NuxtLink>
      <div class="links">
        <ul>
          <li v-for="item in paths" :key="item.path">
            <NuxtLink :to="item.path" :class="{ active: item.path === path }">
              {{ item.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="search">
        <input type="text" />
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
            color: var(--white);
            position: relative;
            transition: 0.3s;
            &:hover {
              color: var(--white-opacity);
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
    .search {
      margin-left: 44px;
      position: relative;
      input {
        height: 25px;
        width: 87px;
        background: #c4c4c4;
        border-radius: 20px;
        outline: none;
        border: 0;
        padding: 0 10px;
        cursor: pointer;
        transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        &:focus {
          width: 150px;
        }
      }
      &::before {
        background: url('@/assets/images/i_search.svg') no-repeat;
        background-size: cover;
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0px;
        cursor: pointer;
        margin: auto;
        background-position: center;
        width: 40px;
        height: 40px;
        border-radius: 100%;
      }
    }
  }
}
</style>
