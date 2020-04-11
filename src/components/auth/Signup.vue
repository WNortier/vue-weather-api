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
                 
                  <input v-model="email" @blur="$v.email.$touch()" autocomplete="off" type="text" id="email"
                    class="mb-3 input form-control input-sm chat-input" placeholder="Email" />
                  <p class="formError" v-if="($v.email.$error && $v.email.required)">Invalid email address</p>
                  <p class="formError" v-if="(!$v.email.required && $v.email.$error)">This field is required</p>

        <!-- TODO: Add Async vuelidator for already taken email-->

                  <!-- {{ $v }} -->
                </div>
                <!-- <br /> -->
                <div class="input">
                  <input v-model="username" @blur="$v.username.$touch()" autocomplete="off" type="text" id="userName"
                    class="mb-3 form-control input-sm chat-input" placeholder="Username" />
                  <p class="formError" v-if="($v.username.$error && $v.username.required)">Invalid username</p>
                  <p class="formError" v-if="(!$v.username.required && $v.username.$error)">This field is required</p>

                </div>

                <!-- <br /> -->
                <div class="input" :class="{invalid: ($v.password.$error && $v.password.required)}">
                  <input v-model="password" @blur="$v.password.$touch()" :style="passwordStyle" autocomplete="off" type="password"
                    id="userPassword" class="mb-3 form-control input-sm chat-input" placeholder="Password" />
                  <p class="formError" v-if="($v.password.$error && $v.password.required)">Invalid password</p>
                  <p class="formError" ref="error" v-if="(!$v.password.required && $v.password.$error)">This field is required</p>

                </div>

                <!-- <br /> -->
                <div class="input" :class="{invalid: ($v.confirmPassword.$error && $v.confirmPassword.required)}">
                  <input v-model="confirmPassword" @blur="$v.confirmPassword.$touch()" :style="confirmPasswordStyle" autocomplete="off"
                    type="password" id="repeatUserPassword" class="mb-3 form-control input-sm chat-input"
                    placeholder="Repeat Password" />
                  <p class="formError" v-if="($v.confirmPassword.$error && $v.confirmPassword.required)">Invalid
                    password</p>
                  <p class="formError" v-if="(!$v.confirmPassword.required && $v.confirmPassword.$error)">This field is required</p>

                </div>
                <p class="formError" v-if="(!$v.confirmPassword.sameAs && $v.confirmPassword.required)">Passwords do not
                  match</p>
                <p>{{createConfirmation}}</p>
              </div>
              <!-- <div class="input inline">
              <input type="checkbox" class="big-checkbox" id="terms" v-model="terms" />
              <label for="terms" class="ml-2">Accept Terms of Use</label>
              </div>-->
              <div class="card-footer text-muted submit">
                <button class="btn btn-secondary" type="submit.prevent" :disabled="$v.$invalid">Create Account</button>
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from 'axios'
export default {
  data() {
    return {
      font: "hellvetica",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
      createConfirmation: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    username: {
      required,
      minLength: minLength(6)
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      required,
      minLength: minLength(6),
      sameAs: sameAs("password")
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
      };
      //console.log("formdata", formData);
      axios.post("/conn/users/add-user", formData).then((response) => {
        this.createConfirmation = response.data.message
      })
      this.email = "";
      this.username = "";
      this.password = "";
      this.confirmPassword = "";
      // let errors = document.querySelectorAll('.formError')
      // console.log($v.email.required)
      // errors.innerHTML = "";
      this.$v.$reset();
    }
  },
  watch: {
    createConfirmation: function () {
        var vm = this;
        return setTimeout(function(){
          vm.createConfirmation = "";
        }, 3000);
    }
  },
  computed: {
    passwordStyle: function () {
      if (this.password.length != 0) {
        return {
          fontFamily: this.font
        } 
          return null
      }
    },
    confirmPasswordStyle: function () {
      if (this.confirmPassword.length != 0) {
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
  .btn.btn-secondary-disabled {
    pointer-events: none;
  }

  .btn.btn-secondary:hover {
    border-color: #fbc02d;
    border-width: 2px;
  }
  
  /* .btn {
    width: 167px;
  } */

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
