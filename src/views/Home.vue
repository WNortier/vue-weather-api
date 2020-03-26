<template>
<div class="home">

  <Login/>
  <video-bg :sources="['https://wnortier.github.io/clouds-video/video/Clouds.mp4']" id="cloudsVideo" img="demo/assets/bg.jpg"></video-bg>
  <!-- If you want to add content here, a slot is waiting! -->

</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Login from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    Login
  },
   mounted: function(){
     axios.get('http://dataservice.accuweather.com/locations/v1/cities/search?q=capetown&apikey=Kpz82H3k2hCmDw9TMv78cfqmBkNSdxXS')
        .then(function (response) {
            // handle success
            console.log(response);
        })
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