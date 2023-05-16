<script setup>
import imgLink from '~~/plugins/imgLink'

const router = useRouter()
const { baseURL } = useRuntimeConfig()
const { data: persons } = await useFetch('persons/6', { baseURL })
import { ref, computed, onMounted, onBeforeUnmount  } from 'vue'

const handleScroll = () => {
  const element = document.querySelector('.person__wrapper svg')
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
  <div class="person__wrapper">
    <svg
      version="1.1"
      id="Layer1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 576 288"
      style="enable-background: new 0 0 576 288"
      xml:space="preserve"
      width="576"
      height="288"
    >
      <g fill="none" fill-rule="evenodd" stroke="#185091" id="XMLID_5865_">
        <path
          id="XMLID_5866_"
          class="st0 svg-elem-person-1"
          d="M25.1,20.1c-1.1-0.2-2.1,0.5-2.5,1.5c-0.2,0.5-0.2,1,0,1.5l-2.9,5.1
		c-0.1,0.2-0.1,0.5-0.1,0.7c0.1,0.2,0.3,0.4,0.5,0.5l3.8,1.4c0.2,0.1,0.5,0.1,0.7-0.1c0.2-0.1,0.4-0.3,0.4-0.6l1.3-6
		c0.3-0.3,0.6-0.6,0.7-1c0.3-0.8,0.1-1.6-0.4-2.3l1.1-2.9l4.2,4l-4.5,12.3c-0.6,1.5,0.2,3.2,1.7,3.8l22.6,8.4
		c1.5,0.6,3.2-0.2,3.8-1.7l4.8-13l13.7-0.8c0.4,0,0.7-0.3,0.8-0.6c0.1-0.3,0-0.7-0.3-0.9L50.9,10.3c-0.2-0.1-0.3-0.2-0.5-0.2
		c-10.5,0.1-27.6,0-29-0.4c-0.4-0.1-0.8,0-1,0.3c-0.2,0.3-0.2,0.8,0.1,1.1l5.9,5.6L25.1,20.1z M21.5,28.2l2.6-4.6
		c0.2-0.3,0.2-0.6,0-0.9c-0.1-0.2-0.1-0.4,0-0.5c0.1-0.3,0.5-0.5,0.8-0.4c0.3,0.1,0.5,0.5,0.4,0.8c-0.1,0.2-0.2,0.3-0.3,0.3
		c-0.2,0.1-0.4,0.3-0.4,0.6l-1.2,5.3L21.5,28.2z M53.8,44.1c-0.2,0.6-0.9,1-1.6,0.7l-22.6-8.4c-0.6-0.2-1-0.9-0.7-1.6l4.3-11.6
		l9.5,9c0.1,0.1,0.2,0.1,0.3,0.2c0.1,0,0.2,0.1,0.3,0.1l15.1-0.8L53.8,44.1z M23.4,11.6c6.5,0.3,22.3,0.2,26.7,0.2l21.5,17.5
		l-28,1.5L30.1,18l14.1,3.2c0.5,0.6,1.3,1.1,2.3,1.5c1.9,0.7,3.5,0.5,3.9-0.5c0.4-1-0.8-2.2-2.6-2.9c-1.6-0.6-3.1-0.5-3.7,0.2
		l-16.4-3.7L23.4,11.6z"
        ></path>
      </g>
      <g fill="none" fill-rule="evenodd" stroke="#185091" id="XMLID_5565_">
        <path
          id="XMLID_5576_"
          class="st0 svg-elem-person-2"
          d="M43.4,178.6c-0.4,1.8-0.7,3.3-0.7,5.7c0,4.2,1.1,10.1,1.5,12.1c-0.5,0.4-0.8,1-1,1.6
		c-0.2,0.8-0.1,1.5,0.3,2.2c-0.6,0.4-1.1,1.1-1.3,1.8c-0.2,0.9,0,1.7,0.4,2.5c-0.6,0.4-1,1-1.2,1.7c-0.4,1.7,0.7,3.5,2.6,4l12.2,3.1
		c0,0,0,0,0,0c0.9,0.2,1.9,0.1,2.7-0.4c0.7-0.4,1.2-1.1,1.4-1.9c0.2-0.9,0-1.7-0.4-2.5c0.6-0.4,1-1,1.2-1.7c0.2-0.8,0.1-1.5-0.3-2.2
		c0.6-0.4,1.1-1.1,1.2-1.8c0.2-0.8,0.1-1.5-0.3-2.2c1.3-1.7,4.9-6.4,6.7-10.1c1.1-2.1,1.6-3.6,2-5.4c1.8-7.5-2.9-15.1-10.4-16.9
		C52.8,166.4,45.2,171,43.4,178.6z M58,211.1c-0.3,0.2-0.7,0.3-1.1,0.1l-12.2-3.1c-0.7-0.2-1.2-0.8-1.1-1.4c0.1-0.5,0.6-0.8,1.2-0.8
		c0.5,0,0.9-0.4,1-0.9c0.1-0.5-0.2-1-0.6-1.2c-0.6-0.3-1-0.8-0.8-1.4c0.1-0.4,0.6-0.8,1.1-0.8c0.5,0,0.9-0.4,1-0.8
		c0.1-0.5-0.1-0.9-0.5-1.2c-0.5-0.3-0.7-0.8-0.6-1.2c0-0.2,0.2-0.3,0.3-0.5l14.5,3.5c0.1,0.2,0.2,0.5,0.1,0.8
		c-0.1,0.4-0.6,0.8-1.1,0.8c-0.5,0-0.9,0.4-1,0.8c-0.1,0.5,0.1,0.9,0.5,1.2c0.5,0.3,0.7,0.8,0.6,1.3c-0.1,0.5-0.6,0.8-1.2,0.8
		c-0.5,0-0.9,0.4-1,0.9c-0.1,0.5,0.2,1,0.6,1.2c0.6,0.3,1,0.8,0.8,1.4C58.4,210.8,58.2,211,58,211.1z M59.8,170.2
		c6.4,1.5,10.4,8,8.8,14.4c-0.4,1.6-0.8,3-1.8,4.9c-1.8,3.5-5.4,8.2-6.6,9.8l-14-3.3c-0.4-2-1.4-7.8-1.4-11.7c0-2.2,0.2-3.6,0.6-5.2
		C47,172.7,53.4,168.7,59.8,170.2z"
        ></path>
        <path
          id="XMLID_5573_"
          class="st0 svg-elem-person-3"
          d="M48.4,154.6c-0.1-0.3-0.4-0.5-0.7-0.6c-0.3-0.1-0.6-0.1-0.9,0c-0.3,0.1-0.5,0.4-0.6,0.7
		c-0.1,0.3-0.1,0.6,0,0.9l4.3,9.3c0.2,0.3,0.5,0.6,0.8,0.7c0,0,0,0,0,0l0,0c0.3,0.1,0.5,0,0.8-0.1c0.3-0.1,0.5-0.4,0.6-0.7
		c0.1-0.3,0.1-0.6,0-0.9L48.4,154.6z"
        ></path>
        <path
          id="XMLID_5570_"
          class="st0 svg-elem-person-4"
          d="M68.5,169.4L68.5,169.4c0.2,0.2,0.4,0.3,0.6,0.4c0,0,0,0,0,0c0.4,0.1,0.8,0,1.1-0.3l6.9-6.4
		c0.2-0.2,0.4-0.5,0.4-0.9c0-0.3-0.1-0.6-0.3-0.9c-0.2-0.2-0.5-0.4-0.9-0.4c-0.3,0-0.6,0.1-0.9,0.3l-6.9,6.4
		c-0.2,0.2-0.4,0.5-0.4,0.9C68.1,168.8,68.3,169.2,68.5,169.4z"
        ></path>
        <path
          id="XMLID_5567_"
          class="st0 svg-elem-person-5"
          d="M60.6,165.6C60.6,165.6,60.7,165.6,60.6,165.6C60.7,165.7,60.7,165.7,60.6,165.6
		c0.7,0.2,1.4-0.2,1.5-0.9l2.9-10.1c0.1-0.3,0.1-0.7-0.1-0.9c-0.2-0.3-0.4-0.5-0.7-0.6c-0.3-0.1-0.7-0.1-0.9,0.1
		c-0.3,0.2-0.5,0.4-0.6,0.7l-2.9,10.1c-0.1,0.3-0.1,0.7,0.1,0.9C60,165.3,60.3,165.5,60.6,165.6L60.6,165.6z"
        ></path>
        <path
          id="XMLID_5566_"
          class="st0 svg-elem-person-6"
          d="M50.2,178.1L50.2,178.1c0.6,0.2,1.3-0.2,1.5-0.8c0.1-0.3,0.2-0.6,0.3-0.8
		c0.9-1.8,2.6-2.1,3.9-2.1c0.6,0,1,0.1,1,0.1c0.6,0.1,1.2-0.3,1.4-0.9c0.1-0.6-0.3-1.2-0.9-1.4c-2.1-0.5-6.6-0.1-8,4.5
		C49.2,177.3,49.5,177.9,50.2,178.1z"
        ></path>
      </g>
      <g fill="none" fill-rule="evenodd" stroke="#185091" id="XMLID_5638_">
        <path
          id="XMLID_5639_"
          class="st0 svg-elem-person-7"
          d="M17.1,251.7C17.1,251.7,17.1,251.7,17.1,251.7C17.1,251.7,17.1,251.7,17.1,251.7
		c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0c0,0,0,0,0,0c-0.1,0-0.1,0-0.2,0.1c0,0,0,0,0,0
		c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0-0.1,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1c0,0,0,0,0,0
		c0,0,0,0,0,0c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0.1
		c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0l4.3,28.5c0,0.3,0.2,0.5,0.4,0.6c0,0,0,0,0.1,0
		c0.2,0.1,0.5,0.1,0.7,0l11.4-6.1l7.2,6.6c0,0,0,0,0,0c0.1,0.1,0.2,0.1,0.2,0.1c0.2,0.1,0.5,0.1,0.7,0c0.2-0.1,0.4-0.4,0.4-0.6
		l3.6-11.6l12.2-0.5c0.4,0,0.7-0.3,0.7-0.7c0.1-0.4-0.1-0.7-0.5-0.9L17.1,251.7C17.1,251.7,17.1,251.7,17.1,251.7z M34.4,274.7
		l0.9-0.5l2.9-1.5l1.3,6.7L34.4,274.7z M53.6,268l-8.9,0.4l-19.3-11.7L53.6,268z M43.6,269.5l-2.7,8.7l-1.4-6.9c0,0,0,0,0-0.1
		c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1-0.1-0.1c0,0,0,0,0,0c0,0,0,0,0,0l-14.9-13L43.6,269.5z
		 M37.3,271.3l-15.6,8.4l-3.8-25.3L37.3,271.3z"
        ></path>
      </g>
      <g fill="none" fill-rule="evenodd" stroke="#185091">
        <path
          class="st0 svg-elem-person-8"
          d="M18.1,68.1l-9.7,38.6l38,9.6L18.1,68.1z M17,101.9l3.7-14.6l10.7,18.2L17,101.9z"
        ></path>
        <line class="st0 svg-elem-person-9" x1="38.7" y1="111.2" x2="38.4" y2="112.4"></line>
        <line class="st0 svg-elem-person-10" x1="35.8" y1="109.1" x2="35.2" y2="111.6"></line>
        <line class="st0 svg-elem-person-11" x1="32.5" y1="109.7" x2="32.2" y2="110.9"></line>
        <line class="st0 svg-elem-person-12" x1="29.6" y1="107.5" x2="29" y2="110"></line>
        <line class="st0 svg-elem-person-13" x1="26.4" y1="108.1" x2="26.1" y2="109.3"></line>
        <line class="st0 svg-elem-person-14" x1="23.5" y1="105.9" x2="22.8" y2="108.5"></line>
        <line class="st0 svg-elem-person-15" x1="20.2" y1="106.5" x2="19.9" y2="107.7"></line>
        <line class="st0 svg-elem-person-16" x1="17.3" y1="104.4" x2="16.6" y2="106.9"></line>
        <line class="st0 svg-elem-person-17" x1="14" y1="105" x2="13.7" y2="106.2"></line>
      </g>
    </svg>

    <div class="container">
      <h1>Наши наставники</h1>
      <div class="cards">
        <div class="card" v-for="item in persons" :key="item.id">
          <NuxtLink :to="'/persons/' + item.id">
            <div class="image">
              <img class="img" :src="imgLink(item)" />
            </div>
            <div class="text">
              <h2>{{ item.name }}</h2>
              <!-- <p>{{ item.description?.['Должность'] }}</p> -->
            </div>
          </NuxtLink>
        </div>
      </div>
      <NuxtLink to="/persons">
        <button>Подробнее</button>
      </NuxtLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.person__wrapper {
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
  padding: 80px 0;
  width: 80%;
  overflow-x: hidden;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  h1 {
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: 700;
    font-size: 36px;
    text-transform: uppercase;
    color: #000000;
  }
  .cards {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 75px;
    flex-wrap: wrap;
    .card {
      width: calc(30% - 10px);
      height: 100%;
      border-radius: 10px;
      background: #fff;
      position: relative;
      transition: 0.3s all ease-in-out;
      &:hover .image img{
        scale: 1.07;
        transform: translateX(-47%) translateY(-14px);
      } 
      .image {
        position: relative;
        width: 100%;
        height: 480px;
        background: linear-gradient(291.45deg, #d1fff4 11.63%, #f0dcff 92.9%);
        border-radius: 10px 10px 0px 0px;
        img {
          max-width: 90%;
          height: auto;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          align-self: center;
          bottom: 0;
          object-fit: cover;
          transition:all 0.5s ease;
        }
      }

      &:nth-child(2n) .image {
        background: linear-gradient(291.45deg, #e2f9fb 11.63%, #e6fcfc 92.9%);
      }
      &:nth-child(3n) .image {
        background: linear-gradient(59deg, #e6eaf1 13.28%, #b2d7fc 87.42%);
      }
      &::after {
        position: absolute;
        z-index: -1;
        top: 0px;
        left: 0px;
        content: '';
        width: 100%;
        height: 100%;
        background: #fff;
        filter: drop-shadow(2px 4px 4px #185091);
        border-radius: 10px;
        opacity: 0;
        transition: 0.3s all ease;
      }
      &:hover {
        scale: 0.98;
        &::after {
          opacity: 1;
        }
      }
      .text {
        z-index: 51;
        width: 90%;
        display: flex;
        margin: 0 auto;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        align-items: center;
        h2 {
          width: 90%;
          font-family: 'Unbounded';
          font-style: normal;
          font-weight: 700;
          font-size: 20px;
          text-align: center;
          text-transform: uppercase;
          color: #000000;
          margin: 10px 0;
        }
        p {
          width: 80%;
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          text-align: center;
          color: #000000;
        }
      }
    }
  }
  a {
    padding: 60px 0;
    align-self: flex-end;
    button {
      cursor: pointer;
      width: 270px;
      height: 50px;
      border: 0;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 30px;
      font-weight: 400;
      font-size: 24px;
      color: #000000;
      transition: 0.3s ease all;
      &:hover {
        box-shadow: 0px 4px 4px #5e6ad3;
      }
    }
  }
}
@media (min-width: 2559px) {
  .container {
    width: 80%;
    h1 {
      font-size: 3rem;
    }
    .cards {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        min-height: 840px;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          min-height: 660px;
          img {
            max-width: 90%;
            height: auto;
          }
          &::after {
            width: 100%;
            height: 100%;
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
    a {
      button {
        width: 370px;
        height: 80px;
        font-size: 2.5rem;
      }
    }
  }
}
@media (max-width: 1690px) {
  .container {
    .cards {
      gap: 50px;
      .card {
        width: 30%;
        height: 100%;
        min-height: 500px;
        a {
          .image {
            height: 380px;
            img {
            }
          }
        }
        &::after {
          width: 100%;
          height: 100%;
        }
        .text {
          h2 {
          }
          p {
          }
        }
      }
    }
    a {
      button {
      }
    }
  }
}
@media (max-width: 1024px) {
  .container {
    .cards {
      width: 100%;
      justify-content: flex-start;
      .card {
        width: 29%;
        height: 100%;
        min-height: 450px;
        a {
          .image {
            height: 320px;
            img {
            }
          }
        }
        &::after {
          width: 100%;
          height: 100%;
        }
        .text {
        }
      }
    }
    a {
      button {
      }
    }
  }
}
@media (max-width: 768px) {
  .person__wrapper {
    svg {
      display: none;

      #Layer1 {
        display: none;
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
      align-items: center;
      justify-content: center;
      gap: 75px;
      flex-wrap: wrap;
      .card {
        height: 100%;
        width: 80%;
        border-radius: 10px;
        background: #fff;
        position: relative;
        transition: 0.3s all ease-in-out;
        .image {
          height: 750px !important;

          img {
            height: auto;
            width: 80%;
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
  transform: translateX(-50%) translateY(-50%);
}
.person__wrapper svg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  scale: 0.5;
}
svg .svg-elem-person-1 {
  stroke-dashoffset: 441.8546447753906px;
  stroke-dasharray: 441.8546447753906px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0s;
}

svg.active .svg-elem-person-1 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-2 {
  stroke-dashoffset: 270.0497741699219px;
  stroke-dasharray: 270.0497741699219px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.12s;
}

svg.active .svg-elem-person-2 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-3 {
  stroke-dashoffset: 30.011281967163086px;
  stroke-dasharray: 30.011281967163086px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.24s;
}

svg.active .svg-elem-person-3 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-4 {
  stroke-dashoffset: 28.707536697387695px;
  stroke-dasharray: 28.707536697387695px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.36s;
}

svg.active .svg-elem-person-4 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-5 {
  stroke-dashoffset: 31.065670013427734px;
  stroke-dasharray: 31.065670013427734px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.48s;
}

svg.active .svg-elem-person-5 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-6 {
  stroke-dashoffset: 26.008296966552734px;
  stroke-dasharray: 26.008296966552734px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.6s;
}

svg.active .svg-elem-person-6 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-7 {
  stroke-dashoffset: 336.0738830566406px;
  stroke-dasharray: 336.0738830566406px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.72s;
}

svg.active .svg-elem-person-7 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-8 {
  stroke-dashoffset: 187.90496826171875px;
  stroke-dasharray: 187.90496826171875px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.84s;
}

svg.active .svg-elem-person-8 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-9 {
  stroke-dashoffset: 3.2369359731674194px;
  stroke-dasharray: 3.2369359731674194px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.96s;
}

svg.active .svg-elem-person-9 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-10 {
  stroke-dashoffset: 4.57099175453186px;
  stroke-dasharray: 4.57099175453186px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.08s;
}

svg.active .svg-elem-person-10 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-11 {
  stroke-dashoffset: 3.2369359731674194px;
  stroke-dasharray: 3.2369359731674194px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.2s;
}

svg.active .svg-elem-person-11 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-12 {
  stroke-dashoffset: 4.5709922313690186px;
  stroke-dasharray: 4.5709922313690186px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.3199999999999998s;
}

svg.active .svg-elem-person-12 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-13 {
  stroke-dashoffset: 3.2369359731674194px;
  stroke-dasharray: 3.2369359731674194px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.44s;
}

svg.active .svg-elem-person-13 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-14 {
  stroke-dashoffset: 4.6925811767578125px;
  stroke-dasharray: 4.6925811767578125px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.56s;
}

svg.active .svg-elem-person-14 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-15 {
  stroke-dashoffset: 3.236928939819336px;
  stroke-dasharray: 3.236928939819336px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.68s;
}

svg.active .svg-elem-person-15 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-16 {
  stroke-dashoffset: 4.596150636672974px;
  stroke-dasharray: 4.596150636672974px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.7999999999999998s;
}

svg.active .svg-elem-person-16 {
  stroke-dashoffset: 0;
}

svg .svg-elem-person-17 {
  stroke-dashoffset: 3.2369288206100464px;
  stroke-dasharray: 3.2369288206100464px;
  -webkit-transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s;
  transition: stroke-dashoffset 3s cubic-bezier(0.47, 0, 0.745, 0.715) 1.92s;
}

svg.active .svg-elem-person-17 {
  stroke-dashoffset: 0;
}
</style>
