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
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input id="input-1" class="mr-sm-2" placeholder="Search..."></b-form-input>
            <router-link to="/login"><b-button class="mr-sm-2" variant="outline-primary">Log in</b-button></router-link>
            
            <router-link to="/signup"><b-button class="mr-sm-2" variant="primary">Sign up</b-button></router-link>
            
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>

<style scoped>
#input-1 {
  width: 500px;
}
.extra-routes {
  text-decoration: none;
}
.ml-auto {
  margin-right: 300px;
}
.mynav {
  margin-left: 300px;
}
</style>