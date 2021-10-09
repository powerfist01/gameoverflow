<template>
  <div class="nav-bar">
      
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/">Game Overflow</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/dashboard">Dashboard</b-nav-item>
          <b-nav-item href="/questions">Questions</b-nav-item>
          <!-- <b-nav-item href="/tags">Tags</b-nav-item>
          <b-nav-item href="/questions/ask">Ask</b-nav-item>
          <b-nav-item href="/settings">Settings</b-nav-item>
          <b-nav-item href="/profile">Profile</b-nav-item> -->
          <b-nav-item href="/news">News</b-nav-item>
          <b-nav-item href="/blogs">Blogs</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form inline>
            <b-form-input
              id="input"
              class="mr-sm-2 search"
              placeholder="Search..."
            ></b-form-input>
          </b-nav-form>
          <NuxtLink to="/users/login">
            <b-button
              size="sm"
              class="mr-2 my-2 mr-sm-2"
              variant="outline-primary"
              >Log in</b-button
            >
          </NuxtLink>

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
.search {
  height: 35px;
}
</style>