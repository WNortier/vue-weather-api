<template>

  <div class="home">
            <video ref="videoRef" crossorigin="anonymous" muted loop id="cloudsVideo">
    <source src="" type="video/mp4">
    </video>
    <Login/>

  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  },
   mounted: function(){
    this.$refs.videoRef.src = "https://wnortier.github.io/clouds-video/video/Clouds.mp4"
    this.$refs.videoRef.play()
   }
}
</script>

<style>


#cloudsVideo {
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
  }
</style>