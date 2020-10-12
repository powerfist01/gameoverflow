<template>
  <div class="info">
    <b-container>
      <div class="header text-center">
        Questions are everywhere, answers are on Game Overflow
      </div>
      <div class="det text-center">
        <p>
          Answer a question to share your knowledge with the world or in private
          with your team.
        </p>
        <router-link to="/signup">
          <b-button class="cre">Create an account</b-button>
        </router-link>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.info {
  padding: 128px 0px 128px 0px;
  margin: 100px 0px 0px 0px;
  background-color: #f7f6f9;
}
.header {
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  font-weight: 700;
}
.det {
  padding-top: 40px;
}
.cre {
  background-color: #f48024;
  border-color: #f48024;
}
</style>