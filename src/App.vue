<template>
  <div id="app">
  <video-bg :sources="['https://wnortier.github.io/clouds-video/video/Clouds.mp4']" id="cloudsVideo" img="demo/assets/bg.jpg"></video-bg>

    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="scss">

#app { 
    font-family: orbitron;
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
