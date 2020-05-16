<template>
  <div class>
    <div class="container" id="loginContainer">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card text-center card bg-default mb-3">
            <div class="card-header">LOGIN</div>
            <div class="card-body">
              <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="Username" />
              <br />
              <input type="password" v-model="password" id="userPassword" :style="myStyle"
                class="form-control input-sm chat-input" placeholder="Password" />
            </div>
            <div class="card-footer text-muted">
              <!-- <a href="#" class="m-2 btn btn-secondary">Login</a> -->
              <input type="submit" @click="userLogin" class="m-2 btn btn-secondary" value="Login">
              <br />
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
  data() {
    return {
      password: "",
      font: "hellvetica"
    };
  },
  props: {

  },
  methods: {
    userLogin(){
      this.$router.push('/Main')
    }
  },
  computed: {
    myStyle: function () {
      if (this.password.length != 0) {
        return {
          fontFamily: this.font
        } 
          return null
      }
    }
  }
};
</script>

<style scoped>
.btn {
  width: 110px;
}

.card-footer {
  height: absolute;
}
.btn-secondary:hover {
  border-color: #fbc02d;
  border-width: 0.1rem;
}

#loginContainer {
  margin-top: 10%;
}

.card {
  opacity: 0.93;
}
</style>
