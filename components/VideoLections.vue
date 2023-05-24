<script setup>
const router = useRouter()
const { baseURL } = useRuntimeConfig()
import { ref, computed, onMounted } from 'vue'
import imgLink from '@/plugins/imgLink'
const { data: lections } = await useFetch('/lections/4', { baseURL })
const trimDescription = ({ description }) => description.split(' ').slice(0, 2).join(' ') + '....'


const handleScroll = () => {
  const element = document.querySelector('.wrapper svg')
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

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="wrapper">
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
      <g id="Layer_1" fill="none" fill-rule="evenodd" stroke="#185091">
        <g>
          <path
            class="st0 svg-elem-1"
            d="M40.9,155.2c-0.3,0-0.6-0.1-0.9-0.2c-0.5-0.3-0.9-0.9-0.9-1.5v-18.8c0-0.6,0.3-1.2,0.9-1.5
			c0.5-0.3,1.2-0.3,1.8,0l16.2,9.4c0.5,0.3,0.9,0.9,0.9,1.5c0,0.6-0.3,1.2-0.9,1.5l-16.2,9.4C41.5,155.1,41.2,155.2,40.9,155.2z
			 M42.7,137.7v12.6l10.9-6.3L42.7,137.7z"
          ></path>
        </g>
        <g>
          <path
            class="st0 svg-elem-2"
            d="M46.9,164c0.2,0,0.5,0,0.7,0c9.4,0,15.4-7.2,15.8-7.7c1.1-1.5,4.2-6.1,4.2-12.3c0-11-9-20-20-20
			c-0.3,0-0.5,0-0.8,0"
          ></path>
          <path
            class="st0 svg-elem-3"
            d="M47.1,127.6c0.2,0,0.3,0,0.5,0c9.1,0,16.5,7.4,16.5,16.5c0,9.1-7.4,16.5-16.5,16.5c-0.2,0-0.3,0-0.5,0"
          ></path>
          <path class="st0 svg-elem-4" d="M47.1,127.6c-8.8,0.3-15.9,7.5-15.9,16.4c0,8.9,7.1,16.2,16,16.4"></path>
          <path class="st0 svg-elem-5" d="M47.6,143.9"></path>
          <path
            class="st0 svg-elem-6"
            d="M27.6,144c0-10.8,8.6-19.6,19.2-20C40.9,45.8,2.1,3.4-1.2,0L-1,288c2.9-3.5,40.8-46.1,47.9-124
			C36.2,163.6,27.6,154.8,27.6,144z"
          ></path>
        </g>
      </g>
      <g id="Layer_2" fill="none" fill-rule="evenodd" stroke="#185091">
        <g>
          <g>
            <g>
              <path class="st0 svg-elem-9" d="M499.5,81.6v1.8h-34.9V59.7h12"></path>
              <path
                class="st0 svg-elem-10"
                d="M473.8,55.9h-11c-1,0-1.9,0.8-1.9,1.9v27.5c0,1,0.8,1.9,1.9,1.9h38.6c1,0,1.9-0.8,1.9-1.9v-1.1"
              ></path>
              <path
                class="st0 svg-elem-11"
                d="M499.5,81.6v-2.7c0-0.7,0.4-1.3,0.9-1.6c0.6-0.3,1.3-0.3,1.9,0l9.9,5.7V60.1l-9.9,5.7
					c-0.6,0.3-1.3,0.3-1.9,0s-0.9-1-0.9-1.6v-4.5h-22.9"
              ></path>
              <path
                class="st0 svg-elem-12"
                d="M455.5,0c0,9.7,1.5,19,4.3,27.9c2.6-2.8,6.3-4.6,10.5-4.6c7.9,0,14.4,6.4,14.4,14.3c0,7.7-6,14-13.5,14.4"
              ></path>
              <path
                class="st0 svg-elem-13"
                d="M473.8,55.9h27.6c1,0,1.9,0.8,1.9,1.9v3.1l9.9-5.7c0.6-0.3,1.3-0.3,1.9,0c0.6,0.3,0.9,1,0.9,1.6v29.4
					c0,0.7-0.4,1.3-0.9,1.6c-0.3,0.2-0.6,0.3-0.9,0.3c-0.3,0-0.6-0.1-0.9-0.3l-9.9-5.7v2.1c20.2,13.4,45.4,21.4,72.8,21.4"
              ></path>
            </g>
            <path
              class="st0 svg-elem-14"
              d="M459.8,27.9c-2.4,2.6-3.9,6-3.9,9.9c0,7.9,6.5,14.4,14.4,14.3c0.3,0,0.5,0,0.8,0"
            ></path>
          </g>
          <g>
            <path
              class="st0 svg-elem-15"
              d="M498.3,52.1c-6,0-10.9-4.9-10.9-10.9c0-6,4.9-10.9,10.9-10.9c6,0,10.9,4.9,10.9,10.9
				C509.2,47.2,504.3,52.1,498.3,52.1z"
            ></path>
          </g>
        </g>
      </g>
    </svg>

    <div class="container">
      <h1>Лекции</h1>
      <div class="cards">
        <div class="card" v-for="item in lections" :key="item.id">
          <NuxtLink :to="'/lections/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
              <p>{{ item.duration }}</p>
            </div>
            <div class="text">
              <h2>{{ item.title.split(' ').slice(0, 3).join(' ') + '....' }}</h2>
              <p>{{ item.description['Описание'].split(' ').slice(0, 4).join(' ') + '....' }}</p>
            </div>
          </NuxtLink>
        </div>
      </div>

      <NuxtLink to="/lections">
        <button>Все лекции</button>
      </NuxtLink>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
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
    z-index: 20;
  }
  .cards {
    display: flex;
    margin-top: 40px;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    flex-wrap: wrap;

    .card {
      flex-basis: calc(24.8% - 30px);
      background: #d9d9d9;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
      display: flex;
      flex-direction: column;
      align-items: center;
      border-radius: 10px;
      transition: 0.3s ease all;
      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5);
      }
      a {
        width: 100%;
        height: 415px;
        display: flex;
        flex-direction: column;
        align-items: center;
        .image {
          width: 100%;
          display: flex;
          height: 240px;
          justify-content: center;
          position: relative;
          &::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            border-radius: 10px 10px 0 0;
            background: linear-gradient(
              180deg,
              rgba(63, 63, 63, 0) 0%,
              rgba(63, 63, 63, 0.7) 31.25%,
              rgba(0, 0, 0, 0.7) 100%
            );
          }
          img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 240px;
            object-fit: cover;
          }
          p {
            position: absolute;
            color: #fff;
            bottom: 0;
            right: 0;
            margin: 20px;
          }
        }
        .text {
          padding-left: 20px;
          padding-top: 20px;
          padding-bottom: 15px;
          background: #135aae;
          width: 100%;
          display: flex;
          flex-direction: column;
          height: 100%;
          border-radius: 0 0 10px 10px;
          h2 {
            font-weight: 700;
            font-size: 24px;
            text-transform: uppercase;
            color: #ffffff;
          }
          p {
            width: 90%;
            font-weight: 300;
            font-size: 20px;
            color: #ffffff;
          }
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
@media (max-width: 1440px) {
  .wrapper {
    svg {
      #Layer_1 {
        scale: 0.8;
        transform: translateX(-4%) translateY(8%);
      }
      #Layer_2 {
        scale: 0.6;

        transform: translateX(72%);
      }
    }
  }
    .container {
    width: 80%;
    .cards {
      display: flex;
      gap: 30px;
      .card {
        flex-basis: calc(50% - 30px);
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
            }
          }
          .text {
            h2 {
            }
            p {
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
@media (min-width: 2559px) {
  .container {
    h1 {
      font-size: 3em;
    }
    .cards {
      .card {
        width: 700px;
        height: 600px;
        background: #d9d9d9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 10px;
        transition: 0.3s ease all;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          .image {
            width: 100%;
            display: flex;
            height: 100%;
            justify-content: center;
            position: relative;
            img {
              height: 100%;
            }
            p {
              font-size: 2rem;
            }
          }
          .text {
            h2 {
              font-size: 2rem;
            }
            p {
              font-size: 2rem;
            }
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
@media (max-width: 1024px) {
  .container {
    width: 80%;
    h1 {
    }
    .cards {
      display: flex;
      gap: 30px;
      .card {
        flex-basis: calc(50% - 30px);
        a {
          width: 100%;
          height: 80%;
          .image {
            height: 100%;
            img {
              height: 100%;
            }
            p {
            }
          }
          .text {
            h2 {
            }
            p {
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
@media (max-width: 768px) {
  .wrapper {
    svg {
      display: none;

      #Layer_1 {
        display: none;
      }
      #Layer_2 {
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
      justify-content: center;
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
@media (max-width: 426px) {
  .container {
    width: 80%;
    h1 {
    }
    .cards {
      display: flex;
      flex-direction: column;
      justify-content: center;
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
</style>
<style scoped>
#Layer_1 {
  transform: translateX(-21%);
}
#Layer_2 {
  transform: translateX(21%);
}
.wrapper svg {
  width: 100vw;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
  z-index: -1;
}
svg .svg-elem-1 {
  stroke-dashoffset: 107.09912109375px;
  stroke-dasharray: 107.09912109375px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elem-1 {
  stroke-dashoffset: 0;
}

svg .svg-elem-2 {
  stroke-dashoffset: 66.23404693603516px;
  stroke-dasharray: 66.23404693603516px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
}

svg.active .svg-elem-2 {
  stroke-dashoffset: 0;
}

svg .svg-elem-3 {
  stroke-dashoffset: 54.832618713378906px;
  stroke-dasharray: 54.832618713378906px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
}

svg.active .svg-elem-3 {
  stroke-dashoffset: 0;
}

svg .svg-elem-4 {
  stroke-dashoffset: 52.62813949584961px;
  stroke-dasharray: 52.62813949584961px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
}

svg.active .svg-elem-4 {
  stroke-dashoffset: 0;
}

svg .svg-elem-5 {
  stroke-dashoffset: 2px;
  stroke-dasharray: 2px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
}

svg.active .svg-elem-5 {
  stroke-dashoffset: 0;
}

svg .svg-elem-6 {
  stroke-dashoffset: 621.46533203125px;
  stroke-dasharray: 621.46533203125px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
}

svg.active .svg-elem-6 {
  stroke-dashoffset: 0;
}

svg .svg-elem-7 {
  stroke-dashoffset: 2px;
  stroke-dasharray: 2px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s;
}

svg.active .svg-elem-7 {
  stroke-dashoffset: 0;
}

svg .svg-elem-8 {
  stroke-dashoffset: 7.032886028289795px;
  stroke-dasharray: 7.032886028289795px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s;
}

svg.active .svg-elem-8 {
  stroke-dashoffset: 0;
}

svg .svg-elem-9 {
  stroke-dashoffset: 74.39999389648438px;
  stroke-dasharray: 74.39999389648438px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s;
}

svg.active .svg-elem-9 {
  stroke-dashoffset: 0;
}

svg .svg-elem-10 {
  stroke-dashoffset: 89.15642547607422px;
  stroke-dasharray: 89.15642547607422px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s;
}

svg.active .svg-elem-10 {
  stroke-dashoffset: 0;
}

svg .svg-elem-11 {
  stroke-dashoffset: 85.63312530517578px;
  stroke-dasharray: 85.63312530517578px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s;
}

svg.active .svg-elem-11 {
  stroke-dashoffset: 0;
}

svg .svg-elem-12 {
  stroke-dashoffset: 86.43193054199219px;
  stroke-dasharray: 86.43193054199219px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s;
}

svg.active .svg-elem-12 {
  stroke-dashoffset: 0;
}

svg .svg-elem-13 {
  stroke-dashoffset: 174.74667358398438px;
  stroke-dasharray: 174.74667358398438px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s;
}

svg.active .svg-elem-13 {
  stroke-dashoffset: 0;
}

svg .svg-elem-14 {
  stroke-dashoffset: 36.259864807128906px;
  stroke-dasharray: 36.259864807128906px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s;
}

svg.active .svg-elem-14 {
  stroke-dashoffset: 0;
}

svg .svg-elem-15 {
  stroke-dashoffset: 70.46224975585938px;
  stroke-dasharray: 70.46224975585938px;
  -webkit-transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s;
  transition: stroke-dashoffset 1s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s;
}

svg.active .svg-elem-15 {
  stroke-dashoffset: 0;
}
</style>
