<template>
  <div id="settings">
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="0"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Username:"
          label-align-sm="right"
        >
          <b-form-input id="username"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="E-mail:"
          label-align-sm="right"
          label-for="email"
        >
          <b-form-input id="email"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Pasword:"
          label-align-sm="right"
          label-for="password"
        >
          <b-form-input id="password"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Confirm Password:"
          label-align-sm="right"
          label-for="confirm-password"
        >
          <b-form-input id="confirm-password"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="3" label-align-sm="right">
          <b-form-checkbox
            id="checkbox"
            v-model="status"
            name="checkbox"
            value="accepted"
            unchecked-value="not_accepted"
            >I agree to Gameoverflow Terms and Privacy Policy</b-form-checkbox
          >

          <div>
            State:
            <strong>{{ status }}</strong>
          </div>
        </b-form-group>
        <b-form-group label-cols-sm="3" label-align-sm="right">
          <b-button>Sign Up</b-button>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      status: "not_accepted"
    };
  },
  head(){
    return {
      title: 'Sign up - Game Overflow',
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

<style scoped></style>