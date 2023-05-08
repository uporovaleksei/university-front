<template>
  <div>
    <video controls ref="videoPlayer" class="video-js">
      <select id="settings" v-model="selectedQuality" @change="setQuality">
        <option v-for="(source, index) in sources" :value="index" :key="index">
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
          src: this.url.replace(/\.mp4$/, '_1080p.webm'),
          type: 'video/webm',
          label: '1080p',
        },
        {
          src: this.url.replace(/\.mp4$/, '_720p.webm'),
          type: 'video/webm',
          label: '720p',
        },
        {
          src: this.url.replace(/\.mp4$/, '_480p.webm'),
          type: 'video/webm',
          label: '480p',
        },
        {
          src: this.url.replace(/\.mp4$/, '_360p.webm'),
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
    console.log(picInpic)
    const options = {
      qualitySelector: false,
      sources: [this.sources[this.selectedQuality]],
      controls: true,
      autoplay: true,
      preload: 'auto',
    }
    const player = videojs(this.$refs.videoPlayer, options)
    if (player) {
      const settings = document.querySelector('#settings')
      const bar = document.querySelector('.vjs-control-bar')
      const pip = document.querySelector('.vjs-fullscreen-control')
      bar.appendChild(settings)
      pip.before(settings)
      console.log(picInpic)
    }
    player.qualityLevels()
  },
  methods: {
    setQuality() {
      const player = videojs(this.$refs.videoPlayer)
      const selectedSource = this.sources[this.selectedQuality]
      const currentTime = player.currentTime() // сохраняем текущую позицию воспроизведения
      player.src(selectedSource)
      player.on('loadedmetadata', () => {
        player.currentTime(currentTime) // восстанавливаем позицию воспроизведения после загрузки нового источника
        player.play()
      })
    },
  },
}
</script>
<style>
#settings option {
  background-image: url('@/assets/images/settings.svg');
}
.vjs-control-bar {
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
</style>
