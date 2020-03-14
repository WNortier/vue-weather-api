<template>

  <div class="home">
    <Login/>
    <!-- <video ref="videoRef" crossorigin="anonymous" muted loop id="cloudsVideo">
    <source src="" type="video/mp4">
    </video> -->

    <video-bg :sources="['https://wnortier.github.io/clouds-video/video/Clouds.mp4']" id="cloudsVideo" img="demo/assets/bg.jpg">
  <!-- If you want to add content here, a slot is waiting! -->
</video-bg>
    

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
  //  mounted: function(){
  //   this.$refs.videoRef.src = "https://wnortier.github.io/clouds-video/video/Clouds.mp4"
  //   this.$refs.videoRef.play()
  //  }
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