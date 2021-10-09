<template>
  <div>
    <b-navbar toggleable="md" sticky="true" fixed="top">
      <b-navbar-brand href="/">Game Overflow</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>
          <b-nav-item href="/questions">Questions</b-nav-item>
          <b-nav-item href="/tags">Tags</b-nav-item>
          <b-nav-item href="/questions/ask">Ask</b-nav-item>
          <b-nav-item href="/settings">Settings</b-nav-item>
          <b-nav-item href="/profile">Profile</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form inline>
            <b-form-input
              id="input"
              class="mr-sm-2 search-bar"
              placeholder="Search..."
            ></b-form-input>
          </b-nav-form>
          <NuxtLink to="/users/login"
            ><b-button
              size="sm"
              class="mr-2 my-2 mr-sm-2"
              variant="outline-primary"
              >Log in</b-button
            ></NuxtLink
          >

          <NuxtLink to="/users/signup"
            ><b-button size="sm" class="mr-2 my-2 mr-sm-2" variant="primary"
              >Sign up</b-button
            ></NuxtLink
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  background: rgb(249, 251, 251);
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.5);
}
.search-bar {
  height: 40px;
}
</style>