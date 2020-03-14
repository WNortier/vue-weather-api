<template>
  <div class="">
        <video ref="videoRef" crossorigin="anonymous" muted loop id="cloudsVideo">
    <source src="" type="video/mp4">
    </video>
    <div class="container" id="loginContainer">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card text-center card  bg-default mb-3">
            <div class="card-header">
              LOGIN
            </div>
            <div class="card-body">
              <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="Username" />
              <br>
              <input type="password" id="userPassword" class="form-control input-sm chat-input"
                placeholder="Password" />
            </div>
            <div class="card-footer text-muted">
              <a href="#" class="btn btn-secondary">Login</a>
              <br>
              <br>
              <a href="#" class="btn btn-secondary">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'Login',
  props: {
    msg: String
  },
   mounted: function(){
    this.$refs.videoRef.src = "https://wnortier.github.io/clouds-video/video/Clouds.mp4"
    this.$refs.videoRef.play()
   }
};
</script>

<style scoped>

#loginContainer {
  margin-top: 15%;
}

.card {
  opacity: 90%;
}

#cloudsVideo {
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%; 
    min-height: 100%;
  }

</style>
