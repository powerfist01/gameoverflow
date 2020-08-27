<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link class="mynav" to="/">
        <b-navbar-brand>
          game
          <strong>overflow</strong>
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link class="extra-routes" to="/news">News</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="extra-routes" to="/blogs">Blogs</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link class="extra-routes" to="/profile"
              >Profile</router-link
            >
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
export default {};
</script>
<style scoped>
.extra-routes {
  text-decoration: none;
}
</style>
