<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <NuxtLink class="mynav" to="/">
        <b-navbar-brand>
          game
          <strong>overflow</strong>
        </b-navbar-brand>
      </NuxtLink>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item>
            <NuxtLink class="routes" to="/news">News</NuxtLink>
          </b-nav-item>
          <b-nav-item>
            <NuxtLink class="routes" to="/blogs">Blogs</NuxtLink>
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
          <NuxtLink to="/users/login"
            ><b-button class="mr-2 my-2 mr-sm-2" variant="outline-primary"
              >Log in</b-button
            ></NuxtLink>

          <NuxtLink to="/users/signup"
            ><b-button class="mr-2 my-2 mr-sm-2" variant="primary"
              >Sign up</b-button
            ></NuxtLink>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<style scoped>
.routes {
  text-decoration: none;
}
</style>