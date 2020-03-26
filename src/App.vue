<template>
  <div id="app">
        <nav class="navbar navbar-expand-sm navbar-dark bg-secondary mb-3">
          <div class="container">
            <a class="navbar-brand" href="#">WeatherServiceAPI</a>
            <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Sign in</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Sign up</a>
              </li>
              <!-- <li class="nav-item">
                <a class="nav-link" href="#">Services</a>
              </li> -->
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          </div>
        </nav>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
