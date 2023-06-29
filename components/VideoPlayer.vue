<template>
  <div>
    <div class="video-wrapper">
      <video controls ref="videoPlayer" class="video-js"></video>
    </div>
    <select id="settings" v-model="selectedQuality" @change="setQuality">
      <option v-for="(source, index) in sources" :value="index" :key="index">
        {{ source.label }}
      </option>
    </select>
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
    const player = videojs(this.$refs.videoPlayer, this.getVideoOptions())
    player.qualityLevels()

    // Обработчик изменения размеров окна
    window.addEventListener('resize', () => {
      this.handleResize(player)
    })

    // Запуск обработчика при загрузке видео
    player.on('loadedmetadata', () => {
      this.handleResize(player)
    })
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
    handleResize(player) {
      const videoWrapper = document.querySelector('.video-wrapper')
      const aspectRatio = player.videoWidth() / player.videoHeight()
      const windowAspectRatio = window.innerWidth / window.innerHeight

      if (windowAspectRatio > aspectRatio) {
        videoWrapper.style.width = '100%'
        videoWrapper.style.height = 'auto'
      } else {
        videoWrapper.style.width = 'auto'
        videoWrapper.style.height = '100%'
      }
    },
    getVideoOptions() {
      return {
        qualitySelector: false,
        sources: [this.sources[this.selectedQuality]],
        controls: true,
        autoplay: true,
        preload: 'auto',
      }
    },
  },
}
</script>

<style>
#settings option {
  background-image: url('@/assets/images/settings.svg');
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

.video-wrapper {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  /* Задаем соотношение сторон 16:9 для альбомного формата */
}

.video-js {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
