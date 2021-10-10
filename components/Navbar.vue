<template>
  <div>
    <b-navbar toggleable="md" variant="faded" type="light" sticky="true" fixed="top" class="navbar">
      <b-navbar-brand href="/" class="main-company-name">Game Overflow</b-navbar-brand>

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
              class="mr-sm-2 search-bar"
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
.navbar {
  height: 50px;
  position: fixed;
  background: rgb(249, 251, 251);
  box-shadow: 0 2px 3px -1px rgba(0, 0, 0, 0.3);
}
.main-company-name{
    vertical-align: center;
    font-family: 'Canela-Black';
    font-size: 32px;
    font-weight: 700;
}
.navbar-light .navbar-nav .nav-link {
    font-size: 14px;
    color: rgba(0, 0, 0, 0.6);
}
.form-control {
    font-size: 14px;
    width: 100%;
    height: 33px;
}
.btn-sm, .btn-group-sm > .btn {
    font-size: 14px;
}
</style>