<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <router-link to="/">
        <b-navbar-brand>
          game
          <strong>Overflow</strong>
        </b-navbar-brand>
      </router-link>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <router-link to="/news">News</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/blogs">Blogs</router-link>
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button class="mr-sm-2" variant="outline-primary">Log in</b-button>
            <b-button class="mr-sm-2" variant="primary">Sign up</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view />
  </div>
</template>