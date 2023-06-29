<template>
  <div>
    <video controls ref="videoPlayer" class="video-js">
      <select id="settings" v-model="selectedQuality" @change="setQuality">
        <option class="options" v-for="(source, index) in sources" :value="index" :key="index">
          {{ source.label }}
        </option>
      </select>
    </video>
  </div>
</template>

<script>
import videojs from 'video.js'
import 'videojs-contrib-quality-levels'
import 'video.js/dist/video-js.css'

export default {
  props: {
    url: String,
  },
  data() {
    return {
      sources: [
        {
          src: this.url.replace(/\.webm$/, '_1080p.webm'),
          type: 'video/webm',
          label: '1080p',
        },
        {
          src: this.url.replace(/\.webm$/, '_720p.webm'),
          type: 'video/webm',
          label: '720p',
        },
        {
          src: this.url.replace(/\.webm$/, '_480p.webm'),
          type: 'video/webm',
          label: '480p',
        },
        {
          src: this.url.replace(/\.webm$/, '_360p.webm'),
          type: 'video/webm',
          label: '360p',
        },
      ],
      selectedQuality: 0,
    }
  },
  mounted() {
    const picInpic = document.querySelector('.vjs-control-bar')
    const settings = document.querySelector('#settings')
    const options = {
      qualitySelector: false,
      sources: [this.sources[this.selectedQuality]],
      controls: true,
      autoplay: true,
      preload: 'auto',
    }
    const player = videojs(this.$refs.videoPlayer, options)
    const isFullscreen = player.isFullscreen();
    if (player) {
      const settings = document.querySelector('#settings')
      const bar = document.querySelector('.vjs-control-bar')
      const pip = document.querySelector('.vjs-fullscreen-control')
      bar.appendChild(settings)
      pip.before(settings)
      pip.addEventListener('click', () => {
        document.querySelector('.video-js').classList.add('mobile__fullscren')
      })

      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          document.querySelector('.video-js').classList.remove('mobile__fullscren')
        }
      })
    }
    player.qualityLevels()
  },
  methods: {
    setQuality() {
      const player = videojs(this.$refs.videoPlayer)
      const selectedSource = this.sources[this.selectedQuality]
      const currentTime = player.currentTime()
      player.src(selectedSource)
      player.on('loadedmetadata', () => {
        player.currentTime(currentTime)
        player.play()
      })
    },
  },
}
</script>
<style>
#settings option {
  background-image: url('@/assets/images/settings.svg');
  transform: rotate(90deg);
}
.vjs-live-display {
  display: none;
}
#settings {
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  text-align: center;
  background: transparent;
  color: #fff;
  border: 0;
  outline: none;
  align-items: center;
  -webkit-appearance: none;
  transition: 0.3s all ease;
}
#settings:focus {
  color: #fff;
  background: #2b333f;
  border: 0;
  outline: none;
}
#settings:focus #settings:hover {
  filter: drop-shadow(0 0 0px #fff);
}
video {
}
.video-js[tabindex='-1'] {
  outline: none;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video-js {
}
.vjs-default-skin {
  color: #fff;
}

.vjs-default-skin .vjs-control-bar {
  background-color: #000;
}

.vjs-default-skin .vjs-slider-bar {
  background-color: #fff;
}

.vjs-default-skin .vjs-play-progress,
.vjs-default-skin .vjs-volume-level {
  background-color: #fff;
}

.vjs-default-skin .vjs-progress-holder,
.vjs-default-skin .vjs-play-progress:before,
.vjs-default-skin .vjs-volume-level:before {
  border-color: #fff;
}
@media(max-width: 769px){
.mobile__fullscren{
  rotate: 90deg;
  position: absolute;
  top: 0;
  left: 0;
  width: 100% !important;
  height: 100% !important;
  object-fit: fill;
  scale: 1;

}
.mobile__fullscren .vjs-control-bar{
position: absolute;
bottom: 4%;
}
#settings option {
    transform: rotate(90deg);
  }

}
@media(max-width: 426px){
.mobile__fullscren{
  rotate: 90deg;
  scale: 1.9;
}
.mobile__fullscren .vjs-control-bar{
position: absolute;
bottom: 38%;
scale: 0.9;
}
#settings option {
    transform: rotate(90deg);
  }

}
@media(max-width: 376px){
.mobile__fullscren{
  rotate: 90deg;
  scale: 1.78;
}
.mobile__fullscren .vjs-control-bar{
position: absolute;
bottom: 760px;
scale: 0.9;
}
#settings option {
    transform: rotate(90deg);
  }

}
@media(max-width: 321px){
.mobile__fullscren{
  rotate: 90deg;
  scale: 1.75;
}
.mobile__fullscren .vjs-control-bar{
position: absolute;
bottom: 1185px;
scale: 0.9;
}
#settings option {
    transform: rotate(90deg);
  }

}
</style>
