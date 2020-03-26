<template>
  <div class="">

    <div class="container" id="SignupContainer">
      <div class="row">
        <div class="col-md-4 offset-md-4">
          <div class="card text-center card  bg-default mb-3">
            <div class="card-header">
              Signup
            </div>
            <div class="card-body">
              <input type="text" id="email" class="form-control input-sm chat-input" placeholder="Email" />
              <br>
              <input type="text" id="userName" class="form-control input-sm chat-input" placeholder="Username" />
              <br>
              <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="Password" />
            <br>
              <input type="password" id="repeatUserPassword" class="form-control input-sm chat-input" placeholder="Repeat Password" />
            </div>
            <div class="card-footer text-muted">
              <a href="#" class="btn btn-secondary">Create Account</a>
              <br>
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


</style>