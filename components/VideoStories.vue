<script setup>
const router = useRouter()
const { baseURL } = useRuntimeConfig()
import imgLink from '@/plugins/imgLink'
import { ref, computed, onMounted } from 'vue'

const { data: stories } = await useFetch('/stories/4', { baseURL })
const handleScroll = () => {
  const element = document.querySelector('.storie__wrapper svg')
  if (element) {
    const elementPosition = element.getBoundingClientRect().top
    const windowHeight = window.innerHeight

    if (elementPosition < windowHeight) {
      element.classList.add('active')
    } else if (elementPosition > windowHeight) {
      element.classList.remove('active')
    }
  }
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="storie__wrapper">
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="100%"
      y="100%"
      viewBox="0 0 576 288"
      style="enable-background: new 0 0 576 288"
      xml:space="preserve"
      width="576"
      height="288"
    >
      <g id="Layer1" fill="none" fill-rule="evenodd" stroke="#185091">
        <g>
          <g>
            <path class="st0 svg-elemsvg-elem-storie-1" d="M35.2,137.8"></path>
            <path
              class="st0 svg-elemsvg-elem-storie-2"
              d="M34.7,124.2c-12.9,0.2-23.4,7.7-23.4,16.9c0,9.3,10.6,16.8,23.6,16.9"
            ></path>
            <path
              class="st0 svg-elemsvg-elem-storie-3"
              d="M6.4,141.1c0-6,3.1-11.6,8.7-15.7c5.2-3.8,12-6,19.3-6.1C29.3,46.8,2.8,5.6-0.9,0v287.6
				C2,283.2,30.4,238.9,34.7,163c-7.4-0.1-14.3-2.3-19.6-6.1C9.5,152.7,6.4,147.1,6.4,141.1z"
            ></path>
            <path
              class="st0 svg-elemsvg-elem-storie-4"
              d="M34.7,163c0.2,0,0.4,0,0.5,0c5.2,0,10.2-1,14.6-3l6.4,7.8c0.5,0.6,1.2,0.9,1.9,0.9c0.3,0,0.6,0,0.8-0.1
				c1-0.4,1.6-1.3,1.6-2.3v-14.7c2.3-3.2,3.5-6.8,3.5-10.4c0-6-3.1-11.6-8.7-15.7c-5.4-4-12.5-6.2-20.1-6.2c-0.3,0-0.6,0-0.9,0"
            ></path>
            <path
              class="st0 svg-elemsvg-elem-storie-5"
              d="M34.7,124.2c0.2,0,0.4,0,0.5,0c13.2,0,23.9,7.6,23.9,16.9c0,2.8-1,5.6-2.9,8.1c-0.3,0.4-0.5,1-0.5,1.5v8.6
				l-3.3-4c-0.5-0.6-1.2-0.9-1.9-0.9c-0.4,0-0.8,0.1-1.1,0.3c-4.1,2.2-9,3.3-14.1,3.3c-0.1,0-0.2,0-0.3,0"
            ></path>
          </g>
          <g>
            <g>
              <ellipse
                transform="matrix(0.2298 -0.9732 0.9732 0.2298 -118.8751 132.0367)"
                class="st0 svg-elemsvg-elem-storie-6"
                cx="24"
                cy="141.1"
                rx="3.3"
                ry="3.3"
              ></ellipse>
            </g>
            <g>
              <ellipse
                transform="matrix(0.2298 -0.9732 0.9732 0.2298 -110.2083 142.9876)"
                class="st0 svg-elemsvg-elem-storie-7"
                cx="35.2"
                cy="141.1"
                rx="3.3"
                ry="3.3"
              ></ellipse>
            </g>
            <g>
              <ellipse
                transform="matrix(0.2298 -0.9732 0.9732 0.2298 -101.5415 153.9386)"
                class="st0 svg-elemsvg-elem-storie-8"
                cx="46.5"
                cy="141.1"
                rx="3.3"
                ry="3.3"
              ></ellipse>
            </g>
          </g>
        </g>
      </g>
      <g id="Layer2" fill="none" fill-rule="evenodd" stroke="#185091">
        <g>
          <path
            class="st0 svg-elemsvg-elem-storie-9"
            d="M541,109.3c12-1.2,21.5-11.4,21.5-23.8c0-12.2-9.3-22.4-21.1-23.8 M538.9,77.9c4,0.2,7.3,3.5,7.3,7.6
			c0,4.1-3.3,7.5-7.4,7.6 M549.3,93c0.1-0.1,0.3-0.1,0.5,0l6.6,7.2c0.1,0.1,0.1,0.4,0,0.5c-0.1,0.1-0.2,0.1-0.2,0.1s-0.2,0-0.2-0.1
			l-6.6-7.2C549.1,93.4,549.1,93.2,549.3,93z M548.7,98.6c0.1-0.1,0.3-0.1,0.4,0l4.4,4.9c0.1,0.1,0.1,0.4,0,0.5
			c-0.1,0.1-0.1,0.1-0.2,0.1c-0.1,0-0.2,0-0.2-0.1l-4.4-4.9C548.6,98.9,548.6,98.7,548.7,98.6z"
          ></path>
          <path class="st0 svg-elemsvg-elem-storie-10" d="M538.6,89.6c2.2,0,4-1.8,4-4.1c0-2.2-1.8-4-4-4.1"></path>
          <path
            class="st0 svg-elemsvg-elem-storie-11"
            d="M542.2,58.3c13.4,1.8,23.8,13.3,23.8,27.2c0,14-10.6,25.6-24.2,27.2c9.9,39.3,39.1,62.1,42.5,64.6V-4.5
			C580-1.3,552.2,20.3,542.2,58.3z"
          ></path>
          <path
            class="st0 svg-elemsvg-elem-storie-12"
            d="M541,109.3c-0.8,0.1-1.6,0.1-2.5,0.1c-13.2,0-23.9-10.7-23.9-23.9c0-7.7,3.7-14.6,9.4-19c0,0,0-0.1,0-0.1
			c0,0,0.1,0,0.1,0c4-3,9-4.8,14.4-4.8c0.9,0,1.9,0.1,2.8,0.2"
          ></path>
          <path
            class="st0 svg-elemsvg-elem-storie-13"
            d="M542.2,58.3c-1.2-0.2-2.4-0.2-3.6-0.2c-15.1,0-27.5,12.3-27.5,27.5c0,15.1,12.3,27.5,27.5,27.5
			c1.1,0,2.2-0.1,3.3-0.2"
          ></path>
          <path
            class="st0 svg-elemsvg-elem-storie-14"
            d="M538.6,89.6C538.6,89.6,538.6,89.6,538.6,89.6c-2.3,0-4.1-1.8-4.1-4.1c0-2.3,1.8-4.1,4.1-4.1c0,0,0.1,0,0.1,0
			"
          ></path>
          <path
            class="st0 svg-elemsvg-elem-storie-15"
            d="M538.9,77.9c-0.1,0-0.2,0-0.3,0c-4.2,0-7.6,3.4-7.6,7.6c0,4.2,3.4,7.6,7.6,7.6c0.1,0,0.1,0,0.2,0"
          ></path>
          <path
            class="st0 svg-elemsvg-elem-storie-16"
            d="M521.7,69.3c-0.1-0.1-0.4-0.1-0.5,0c-0.1,0.1-0.1,0.3,0,0.5l5,4.9c0.1,0.1,0.2,0.1,0.2,0.1s0.2,0,0.2-0.1
			c0.1-0.1,0.1-0.3,0-0.5L521.7,69.3z"
          ></path>
          <path
            class="st0 svg-elemsvg-elem-storie-17"
            d="M524,66.8l3.2,2.7c0.1,0.1,0.2,0.1,0.2,0.1c0.1,0,0.2,0,0.2-0.1c0.1-0.1,0.1-0.3,0-0.4l-3.2-2.7
			c-0.1-0.1-0.2-0.1-0.4,0c0,0-0.1,0.1-0.1,0.1C523.9,66.6,523.9,66.8,524,66.8z"
          ></path>
        </g>
      </g>
    </svg>

    <div class="container">
      <h1>Истории</h1>
      <div class="cards">
        <div class="card" v-for="item in stories" :key="item.id">
          <NuxtLink :to="'/stories/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
              <p>{{ item.duration }}</p>
            </div>
            <h2>{{ item.title.split(' ').slice(0, 4).join(' ') + '....' }}</h2>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/stories">
        <button>Все истории</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.storie__wrapper {
  width: 100%;
  position: relative;
  overflow-x: hidden;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    // background: no-repeat url("@/assets/images/2.svg");
    background-size: contain;
    opacity: 0.5;
    z-index: -1;
  }
}
.container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  h1 {
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    .card {
      width: 370px;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 450px;
        .image {
          margin-top: 66px;
          width: 100%;
          height: 250px;
          display: flex;
          justify-content: center;
          background: #d9d9d9;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
          flex-direction: column;
          align-items: center;
          border-radius: 10px;
          transition: 0.3s ease all;
          position: relative;
          &::after {
            position: absolute;
            background: linear-gradient(
              180deg,
              rgba(63, 63, 63, 0) 0%,
              rgba(63, 63, 63, 0.7) 31.25%,
              rgba(0, 0, 0, 0.7) 100%
            );
            border-radius: 10px;
            content: '';
            width: 100%;
            height: 100%;
          }
          p {
            position: absolute;
            color: #fff;
            bottom: 0;
            right: 0;
            margin: 20px;
            z-index: 100;
          }
          &:hover {
            transform: scale(1.05);
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
          }
          img {
            position: relative;
            border-radius: 10px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        h2 {
          margin-top: 20px;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 700;
          font-size: 22px;
          word-wrap: break-word;
          text-transform: uppercase;
          color: #000000;
          text-align: center;
          width: 100%;
        }
      }
    }
  }
  a {
    align-self: flex-end;
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
}
@media (min-width: 2559px) {
  .container {
    h1 {
      font-size: 3rem;
    }
    .cards {
      .card {
        flex: 33% 0 1;
        a {
          .image {
            width: 675px;
            height: 450px;
            p {
              font-size: 2rem;
            }
          }
          h2 {
            font-size: 2rem;
          }
        }
      }
    }
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2rem;
      }
    }
  }
}
@media (max-width: 1440px) {
  .storie__wrapper {
    svg {
      #Layer1 {
        transform: translateX(-4%);
        scale: 0.8;
      }
      #Layer2 {
        scale: 0.9;
        transform: translateX(10%);
      }
    }
  }

  @media (max-width: 1024px) {
    .storie__wrapper {
      svg {
        #Layer1 {
          transform: translateX(-1%);
          scale: 0.7;
        }
        #Layer2 {
          scale: 0.9;
          transform: translateX(12%);
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .storie__wrapper {
    svg {
      #Layer1 {
        display: none;
      }
      #Layer2 {
        display: none;
      }
    }
  }
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      display: flex;
      flex-direction: column;
      gap: 50px;
      .card {
        width: 80%;
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
              font-size: 2rem;
            }
          }
          .text {
            h2 {
              font-size: 3rem;
            }
            p {
              font-size: 2.5rem;
            }
          }
        }
      }
    }
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
      }
    }
  }
}
@media (max-width: 425px) {
  .container {
    width: 80%;
    h1 {
    }
    .cards {
      display: flex;
      flex-direction: column;
      gap: 50px;
      .card {
        width: 100%;
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
              font-size: 2rem;
            }
          }
          h2 {
            font-size: 32px;
          }
        }
      }
    }
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
      }
    }
  }
}
</style>
<style scoped>
#Layer1 {
  transform: translateX(-21%);
}
#Layer2 {
  transform: translateX(20%);
}
.storie__wrapper svg {
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: -1;
}

svg .svg-elemsvg-elem-storie-1 {
  stroke-dashoffset: 2px;
  stroke-dasharray: 2px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elemsvg-elem-storie-1 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-2 {
  stroke-dashoffset: 65.75651168823242px;
  stroke-dasharray: 65.75651168823242px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
}

svg.active .svg-elemsvg-elem-storie-2 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-3 {
  stroke-dashoffset: 624.8567504882812px;
  stroke-dasharray: 624.8567504882812px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
}

svg.active .svg-elemsvg-elem-storie-3 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-4 {
  stroke-dashoffset: 100.3608627319336px;
  stroke-dasharray: 100.3608627319336px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
}

svg.active .svg-elemsvg-elem-storie-4 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-5 {
  stroke-dashoffset: 77.1805419921875px;
  stroke-dasharray: 77.1805419921875px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
}

svg.active .svg-elemsvg-elem-storie-5 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-6 {
  stroke-dashoffset: 22.734511513692635px;
  stroke-dasharray: 22.734511513692635px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
}

svg.active .svg-elemsvg-elem-storie-6 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-7 {
  stroke-dashoffset: 22.734511513692635px;
  stroke-dasharray: 22.734511513692635px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s;
}

svg.active .svg-elemsvg-elem-storie-7 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-8 {
  stroke-dashoffset: 22.734511513692635px;
  stroke-dasharray: 22.734511513692635px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s;
}

svg.active .svg-elemsvg-elem-storie-8 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-9 {
  stroke-dashoffset: 132.155517578125px;
  stroke-dasharray: 132.155517578125px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s;
}

svg.active .svg-elemsvg-elem-storie-9 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-10 {
  stroke-dashoffset: 14.686527252197266px;
  stroke-dasharray: 14.686527252197266px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s;
}

svg.active .svg-elemsvg-elem-storie-10 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-11 {
  stroke-dashoffset: 418.6838073730469px;
  stroke-dasharray: 418.6838073730469px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s;
}

svg.active .svg-elemsvg-elem-storie-11 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-12 {
  stroke-dashoffset: 82.45924377441406px;
  stroke-dasharray: 82.45924377441406px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s;
}

svg.active .svg-elemsvg-elem-storie-12 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-13 {
  stroke-dashoffset: 95.29044342041016px;
  stroke-dasharray: 95.29044342041016px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s;
}

svg.active .svg-elemsvg-elem-storie-13 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-14 {
  stroke-dashoffset: 15.013423919677734px;
  stroke-dasharray: 15.013423919677734px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s;
}

svg.active .svg-elemsvg-elem-storie-14 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-15 {
  stroke-dashoffset: 26.381816864013672px;
  stroke-dasharray: 26.381816864013672px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s;
}

svg.active .svg-elemsvg-elem-storie-15 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-16 {
  stroke-dashoffset: 17.999338150024414px;
  stroke-dasharray: 17.999338150024414px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s;
}

svg.active .svg-elemsvg-elem-storie-16 {
  stroke-dashoffset: 0;
}

svg .svg-elemsvg-elem-storie-17 {
  stroke-dashoffset: 12.215418815612793px;
  stroke-dasharray: 12.215418815612793px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s;
}

svg.active .svg-elemsvg-elem-storie-17 {
  stroke-dashoffset: 0;
}
</style>
