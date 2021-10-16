<template>
  <b-container>
    <b-row>
      <b-col cols="8">
        <img
          src="https://pixelz.cc/wp-content/uploads/2019/03/blue-planet-and-space-dust-wqhd-1440p-wallpaper.jpg"
          class="login-image"
        />
      </b-col>
      <b-col cols="4">
        <div class="login-form">
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Username"
          ></b-form-input>
          <b-form-input
            id="input-small"
            size="sm"
            placeholder="Password"
          ></b-form-input>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  head() {
    return {
      title: "Log in - Game Overflow",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "gameoverflow",
          name: "Game Overflow",
          content: "Game Overflow - Where Gamers Meet",
        },
      ],
    };
  },
};
</script>

<style scoped>
.login-image {
  width: 100%;
}
</style>