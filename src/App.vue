<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark" class="navbar">
      <div
        v-bind:class="{ open: menu }"
        v-on:click="menu = !menu"
        id="nav-icon"
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <router-link class="mynav" to="/">
        <b-navbar-brand class="brand">
          game
          <strong>overflow</strong>
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="routes" to="/news">News</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="routes" to="/blogs">Blogs</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="routes" to="/profile">Profile</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="routes" to="/games">Games</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form inline>
            <b-form-input
              id="input"
              class="mr-sm-2"
              placeholder="Search..."
            ></b-form-input>
          </b-nav-form>
          <router-link to="/login"
            ><b-button class="mr-2 my-2 mr-sm-2" variant="outline-primary"
              >Log in</b-button
            ></router-link
          >

          <router-link to="/signup"
            ><b-button class="mr-2 my-2 mr-sm-2" variant="primary"
              >Sign up</b-button
            ></router-link
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  name: "App",
  components: {
  },
  data() {
    return {
      menu: false
    };
  },
  methods: {}
};
</script>
<style scoped>
.routes {
  text-decoration: none;
}

#nav-icon {
  width: 30px;
  height: 15px;
  position: relative;
  margin: auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}

#nav-icon span {
  display: block;
  position: absolute;
  height: 3px;
  width: 100%;
  background: #0575e6;
  border-radius: 2px;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon span:nth-child(1) {
  top: 0px;
}

#nav-icon span:nth-child(2),
#nav-icon span:nth-child(3) {
  top: 10px;
}

#nav-icon span:nth-child(4) {
  top: 20px;
}

#nav-icon.open span:nth-child(1) {
  top: 20px;
  width: 0%;
  left: 50%;
}

#nav-icon.open span:nth-child(2) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon.open span:nth-child(3) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon.open span:nth-child(4) {
  top: 18px;
  width: 0%;
  left: 50%;
}

</style>
