<template>
  <div class="info">
    <b-container fluid class="text-center">
      <div class="header">
        Questions are everywhere, answers are on Game Overflow
      </div>
      <div class="det">
        <p>
          Answer a question to share your knowledge with the world or in private
          with your team.
        </p>
        <router-link to="/users/signup">
          <Button name="Create an account" />
        </router-link>
      </div>
    </b-container>
  </div>
</template> 

<script>
import Button from "@/components/Button.vue";
export default {
  name: "NextInfo",
  components:{
    Button
  }
};
</script>

<style scoped>
.info {
  padding: 128px 0px 128px 0px;
  margin: 100px 0px 0px 0px;
  background-color: #f7f6f9;
}
.header {
  font-size: 30px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  font-weight: 700;
}
.det {
  padding-top: 40px;
}
</style>