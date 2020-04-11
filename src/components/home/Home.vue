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
  locationKey: '',
  components: {
    'app-signin': Signin
  },
   mounted: async function(){
    //  let vm = this;
    //  await axios.get('http://dataservice.accuweather.com/locations/v1/cities/search?q=capetown&apikey=Kpz82H3k2hCmDw9TMv78cfqmBkNSdxXS')
    //    .then(function (response) {
    //      vm.locationKey = response.data[0].Key
    //    })
    //    console.log(this.locationKey)
    //  await axios.get('http://dataservice.accuweather.com/forecasts/v1/daily/5day/' + this.locationKey).then(function (response) {
    //    console.log(response.data)
    //  })
      //     axios.post("/conn/locations/add-user", formData).then((response) => {
      //   this.createConfirmation = response.data.message
      // })

     }
}
</script>

<style>


</style>
