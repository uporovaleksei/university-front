<template>
  <div>
    <video controls ref="videoPlayer" class="video-js"></video>
    <div>
      <select v-model="selectedQuality" @change="setQuality">
        <option v-for="(source, index) in sources" :value="index" :key="index">
          {{ source.label }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
import videojs from 'video.js';
import 'videojs-contrib-quality-levels';
import 'video.js/dist/video-js.css';


export default {
	props:{
		url:String
	},
  data() {
    return {
      sources: [
        {
          src: this.url.replace(/\.mp4$/, '1080.mp4'),
          type: 'video/mp4',
          label: '1080p'
        },
        {
          src: this.url.replace(/\.mp4$/, '720.mp4'),
          type: 'video/mp4',
          label: '720p'
        },
        {
          src: this.url.replace(/\.mp4$/, '480.mp4'),
          type: 'video/mp4',
          label: '480p'
        },
        {
          src: this.url.replace(/\.mp4$/, '360.mp4'),
          type: 'video/mp4',
          label: '360p'
        }
      ],
      selectedQuality: 0
    };
  },
  mounted() {
		console.log(this.url.replace(/\.mp4$/, '1080.mp4').toString());
    const options = {
      qualitySelector: false,
      sources: [this.sources[this.selectedQuality]],
      controls: true,
      autoplay: true,
      preload: 'auto'
    };
    const player = videojs(this.$refs.videoPlayer, options);
    player.qualityLevels(); 
  },
  methods: {
setQuality() {
  const player = videojs(this.$refs.videoPlayer);
  const selectedSource = this.sources[this.selectedQuality];
  const currentTime = player.currentTime(); // сохраняем текущую позицию воспроизведения
  player.src(selectedSource);
  player.on('loadedmetadata', () => {
    player.currentTime(currentTime); // восстанавливаем позицию воспроизведения после загрузки нового источника
    player.play();
  });
}
  }
};
</script>
<style>
.video-js{
	width: 800px;
	height: 600px;
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

.vjs-default-skin .vjs-play-progress, .vjs-default-skin .vjs-volume-level {
  background-color: #fff;
}

.vjs-default-skin .vjs-progress-holder, .vjs-default-skin .vjs-play-progress:before, .vjs-default-skin .vjs-volume-level:before {
  border-color: #fff;
}
</style>