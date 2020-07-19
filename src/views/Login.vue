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
        <b-form-group label-cols-sm="3" label="Username:" label-align-sm="right">
          <b-form-input placeholder="Username" id="username"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="3" label="Password:" label-align-sm="right">
          <b-form-input placeholder="Password" id="password"></b-form-input>
        </b-form-group>

        <b-form-group label-cols-sm="3" label-align-sm="right">
          <b-button>Log In</b-button>
        </b-form-group>
        
        <div class="forgot-pass">
          <b-form-group label-cols-sm="3" >
          <b-form-group
            class="forgot"
            v-b-modal.modal-center
            label="Forgot Password?"
            label-align-sm="left"
          ></b-form-group>

          <b-modal id="modal-center" hide-footer="true" centered title="Forgot Password?">
            <p>Don't you worry, just give your email Id and we will send you a link to change password.</p>
            <b-form-group label-size="lg" label-class="font-weight-bold pt-0" class="mb-0">
              <b-form-group
                label-cols-sm="2"
                label="Email Id:"
                placeholder="Email"
                label-align-sm="left"
              >
                <b-form-input id="email" type="email"></b-form-input>
              </b-form-group>

              <b-form-group label-cols-sm="2">
                <b-button>Send Link</b-button>
              </b-form-group>
            </b-form-group>
          </b-modal>
        </b-form-group>
        </div>
        
      </b-form-group>
    </b-card>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>

<style scoped>
.forgot-pass{
  width: 200px;
  margin-left: 300px;
}
.forgot:hover {
  cursor: pointer;
}
</style>