<template>
<div class="home">
  <app-signin/>
  <!-- If you want to add content here, a slot is waiting! -->
</div>
</template>

<script>
import axios from 'axios';
import Signin from '@/components/auth/Signin.vue'

export default {
  name: 'Home',
  components: {
    'app-signin': Signin
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

  
</style>