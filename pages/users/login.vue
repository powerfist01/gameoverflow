<template>
  <div id="login">
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Log In Here"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Username:"
          label-align-sm="right"
        >
          <b-form-input placeholder="Username" id="username"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Password:"
          label-align-sm="right"
        >
          <b-form-input placeholder="Password" id="password"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="3" label-align-sm="right">
          <b-button>Log In</b-button>
        </b-form-group>

        <div class="forgot-pass">
          <b-form-group label-cols-sm="3">
            <b-form-group
              class="forgot"
              label="Forgot Password?"
              label-align-sm="left"
            ></b-form-group>

          </b-form-group>
        </div>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  head(){
    return {
      title: 'Log in - Game Overflow',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'gameoverflow',
          name: 'Game Overflow',
          content: 'Game Overflow - Where Gamers Meet'
        }
      ]
    }
  }
};
</script>

<style scoped>
.forgot-pass {
  width: 200px;
  margin-left: 300px;
}
.forgot:hover {
  cursor: pointer;
}
</style>