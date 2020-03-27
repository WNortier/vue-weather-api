<template>
  <div class>
    <div class="container" id="SignupContainer">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card text-center card bg-default mb-3">
            <div class="card-header">Signup</div>
            <form @submit.prevent="onSubmit">
              <div class="card-body">
                <div class="input" :class="{invalid: ($v.email.$error && $v.email.required)}">
                  <!-- <a :class="['btn', (respond === 'responseFound' ? 'btn-yellow' : 'btn-default'), (type === 1 ? 'btn-block' : 'btn-xs center-block')]"> -->
                <input v-model="email" @blur="$v.email.$touch()" autocomplete="off" type="text" id="email" class="mb-3 input form-control input-sm chat-input"
                  placeholder="Email" />
                  <p class="formError" v-if="($v.email.$error && $v.email.required)">Invalid email address</p>
                  <!-- {{ $v }} -->
                </div>
                  <!-- <p v-if="!$v.email.required">This field is required</p> -->
                <!-- <br /> -->
                <input v-model="username" autocomplete="off" type="text" id="userName" class="mb-3 form-control input-sm chat-input"
                  placeholder="Username" />
                <!-- <br /> -->
                <input v-model="password" autocomplete="off" type="password" id="userPassword" class="mb-3 form-control input-sm chat-input"
                  placeholder="Password" />
                <!-- <br /> -->
                <input v-model="confirmPassword" autocomplete="off" type="password" id="repeatUserPassword"
                  class="mb-3 form-control input-sm chat-input" placeholder="Repeat Password" />
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
import { required, email } from 'vuelidate/lib/validators'
export default {
  data() {
      return {
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
      }
    },
    validations: {
      email: {
        required,
        email
      }
    },
    props: {
      msg: String
    },
    methods: {
      onSubmit() {
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

.input.invalid input {
  /* border: 1px solid red; */
  background-color: darksalmon;
}

.formError {
  color: red;
}
</style>
