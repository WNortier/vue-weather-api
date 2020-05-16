<template>
  <div id="app">
    <!-- <video
      :sources="['https://wnortier.github.io/clouds-video/video/Clouds.mp4']"
      id="cloudsVideo"
      img="demo/assets/bg.jpg"
    ></video>-->

    <video muted="true" autoplay loop id="cloudsVideo">
      <source
        src="https://wnortier.github.io/clouds-video/video/Clouds.mp4"
        type="video/mp4"
      />
    </video>

    <app-header v-bind:weatherInfo="weatherText"></app-header>
    <div class="overlay">
      <ring-loader :loading="loading" :color="color"></ring-loader>
      <p class="loadingText">{{ loadingText }} {{ loaderMessage }}</p>
    </div>

    <router-view />
  </div>
</template>

<script>
import RingLoader from "vue-spinner/src/RingLoader.vue";
import Header from "./components/header/Header.vue";
import axios from "axios";

export default {
  data() {
    return {
      weatherText: "",
      color: "#FBC02D",
      loading: true,
      size: "",
      loadingText: "Loading...",
      defaultLoadingText: "Loading...",
      loadingText2: "Securing Connection...",
      loadingText3: "Establishing Weatherlink..."
    };
  },
  components: {
    "app-header": Header,
    "ring-loader": RingLoader
  },
  computed: {
    loaderMessage: function() {
      let vm = this;
      setInterval(function() {
        switch (vm.loadingText) {
          case "Loading...": {
            vm.loadingText = vm.loadingText2;
            break;
          }
          case "Securing Connection...": {
            vm.loadingText = vm.loadingText3;
            break;
          }
          case "Establishing Weatherlink...": {
            vm.loadingText = vm.defaultLoadingText;
            break;
          }
        }
      }, 1750);
    }
  },
  mounted() {
    // axios.post("/conn/locations/add-location", {'title': 'second', 'content':'gauteng'}).then((response) => {
    //   console.log(response.data)
    // })
    const video = document.getElementById("cloudsVideo");

    // console.log(video);
    // video.onloadstart = function() {
    //   console.log("load has started");
    // };

    video.oncanplay = function() {
      const overlay = document.querySelector(".overlay");
      overlay.classList.add("hide");
    };

    // setTimeout(function() {}, 5000);

    // let self = this;
    // axios
    //   .post("/conn/weather/get-location-key", { location: "Cape Town" })
    //   .then(response => {
    //     console.log(response.data);
    //     self.weatherText = response.data.message;
    //     console.log(self.weatherText);
    //   });
  }
};
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

.overlay {
  z-index: 5;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: #3d4348;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.loader {
  z-index: 6;
}

.loadingText {
  padding-top: 1rem;
  color: white;
}

.hide {
  visibility: hidden;
}
</style>
