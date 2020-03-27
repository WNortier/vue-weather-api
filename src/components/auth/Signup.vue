<template>
  <div class>
    <div class="container" id="SignupContainer">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card text-center card bg-default mb-3">
            <div class="card-header">Signup</div>
            <form @submit.prevent="onSubmit">
              <div class="card-body">
                <input v-model="email" type="text" id="email" class="form-control input-sm chat-input"
                  placeholder="Email" />
                <br />
                <input v-model="username" type="text" id="userName" class="form-control input-sm chat-input"
                  placeholder="Username" />
                <br />
                <input v-model="password" type="password" id="userPassword" class="form-control input-sm chat-input"
                  placeholder="Password" />
                <br />
                <input v-model="confirmPassword" type="password" id="repeatUserPassword"
                  class="form-control input-sm chat-input" placeholder="Repeat Password" />
              </div>
              <!-- <div class="input inline">
              <input type="checkbox" class="big-checkbox" id="terms" v-model="terms" />
              <label for="terms" class="ml-2">Accept Terms of Use</label>
            </div> -->
              <div class="card-footer text-muted submit">
                <button class="btn btn-secondary" type="submit">Create Account</button>
                <br />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  data () {
    return {
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
    }
  },
  props: {
    msg: String
  },
  methods: {
    onSubmit(){
      const formData = {
        email: this.email,
        username: this.username,
        password: this.password,
        confirmPassword: this.confirmPassword
      }
      console.log('formdata', formData)
    }
  }
};
</script>

<style scoped>
#SignupContainer {
  margin-top: 10%;
}

.card {
  opacity: 0.93;
}

.big-checkbox {
  width: 15px;
  height: 15px;
}
</style>