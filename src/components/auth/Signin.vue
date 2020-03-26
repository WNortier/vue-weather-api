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
              <input type="password" v-model="password" id="userPassword" :style="myStyle" @input="changeFont()"
                class="form-control input-sm chat-input" placeholder="Password" />
            </div>
            <div class="card-footer text-muted">
              <a href="#" class="btn btn-secondary">Login</a>
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
.btn-secondary:hover {
  border-color: #fbc02d;
}

#loginContainer {
  margin-top: 10%;
}

.card {
  opacity: 0.93;
}
</style>
