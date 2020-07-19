<template>
  <div id="signup">
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Sign up Here"
        label-size="lg"
        label-class="font-weight-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label-cols-sm="3"
          label="Name:"
          label-align-sm="right"
          label-for="nested-street"
        >
          <b-form-input id="nested-street"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="E-mail:"
          label-align-sm="right"
          label-for="nested-city"
        >
          <b-form-input id="nested-city"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Pasword:"
          label-align-sm="right"
          label-for="nested-state"
        >
          <b-form-input id="nested-state"></b-form-input>
        </b-form-group>

        <b-form-group
          label-cols-sm="3"
          label="Confirm Password:"
          label-align-sm="right"
          label-for="nested-country"
        >
          <b-form-input id="nested-country"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="3" label-align-sm="right">
          <b-form-checkbox
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            value="accepted"
            unchecked-value="not_accepted"
          >I agree to Gameoverflow Terms and Privacy Policy</b-form-checkbox>

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
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Signup",
  data() {
      return {
        status: 'not_accepted'
      }
    }
};
</script>

<style scoped>
</style>