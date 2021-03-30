<template>
  <div id="app">
    <div id="nav">
      <span v-if="$auth.isAuthenticated"> 
        <router-link to="/">Kwetter</router-link> 
      </span>
      <span v-if="$auth.isAuthenticated"> |
        <router-link  to="/profile">Profile</router-link>
      </span>
      <span v-if="$auth.isAuthenticated"> |
        <router-link  to="/about">About</router-link>
      </span>
      <span v-if="$auth.isAuthenticated"> |
        <router-link to="/#">Log out</router-link>
      </span>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-image: url('./assets/bg.png');
}
</style>
