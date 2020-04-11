<template>
  <div id="app">
  <video-bg :sources="['https://wnortier.github.io/clouds-video/video/Clouds.mp4']" id="cloudsVideo" img="demo/assets/bg.jpg"></video-bg>

    <app-header v-bind:weatherInfo="weatherText"></app-header>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import axios from 'axios'

export default {
  data() {
    return {
      weatherText: ''
    }
  },
  components: {
      'app-header': Header
    },
    mounted() {

      // axios.post("/conn/locations/add-location", {'title': 'second', 'content':'gauteng'}).then((response) => {
      //   console.log(response.data)
      // })
        let self = this;
            axios.post("/conn/weather/get-location-key", {'location': 'Cape Town'}).then((response) => {
        console.log(response.data)
        self.weatherText = response.data.message
        console.log(self.weatherText)

        
      })
    }
}
</script>

<style lang="scss">

#app {
    font-family: orbitron, monospace;
}

#cloudsVideo {
    z-index: 0;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
  }
</style>
