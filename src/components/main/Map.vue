<template>
  <div class="main-container">
     <div id="mapid"></div>
     <div class="box">box-1</div>
     <div class="box">box-1</div>
     <div class="box">box-1</div>
     <div class="box">box-1</div>
     <div class="box">box-1</div>
  </div>
</template>

<style scoped>

.main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  /* position: relative; */
}

#mapid {
  opacity: 0.9;
  border-radius: 5px;
  /* height: 500px;
  width: 500px; */
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  width: 100%;
  /* position: absolute; */
}

.box {
  z-index: 10;
  height: 500px;
  width: 500px;
  background: red;
}
</style>

<script>
export default {
  mounted() {

(function geolocate() {
  if (window.navigator && window.navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onGeolocateSuccess, onGeolocateError);
  }
})()

var mymap = L.map('mapid')
function onGeolocateSuccess(coordinates) {
  const { latitude, longitude } = coordinates.coords;
  console.log('Found coordinates: ', latitude, longitude);
 mymap.setView([latitude, longitude], 13);
}


function onGeolocateError(error) {
  console.warn(error.code, error.message);
 
  if (error.code === 1) {
    // they said no
  } else if (error.code === 2) {
    // position unavailable
  } else if (error.code === 3) {
    // timeout
  }
}


      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);

      var Temp = L.tileLayer(
        'http://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=e446cfb78d17e0373dc4b733ed3bc3ba', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://owm.io">VANE</a>',
          id: 'temp'
        }).addTo(mymap);

      var Precipitation = L.tileLayer(
        'http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=e446cfb78d17e0373dc4b733ed3bc3ba', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://owm.io">VANE</a>'
        })

      var Wind = L.tileLayer(
        'http://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=e446cfb78d17e0373dc4b733ed3bc3ba', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://owm.io">VANE</a>'
        })

      var Pressure = L.tileLayer(
        'http://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=e446cfb78d17e0373dc4b733ed3bc3ba', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://owm.io">VANE</a>'
        })


      var Clouds = L.tileLayer(
        'http://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=e446cfb78d17e0373dc4b733ed3bc3ba', {
          maxZoom: 18,
          attribution: '&copy; <a href="http://owm.io">VANE</a>'
        })

      var baseMaps = {
        "Temperature": Temp,
        "Precipitation": Precipitation,
        "Clouds": Clouds,
        "Pressure": Pressure,
        "Wind": Wind
      };

      L.control.layers(baseMaps).addTo(mymap);
  }
};
</script>

