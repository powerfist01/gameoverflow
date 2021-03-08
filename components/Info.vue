<template>
  <div class="info">
    <b-container fluid class="text-center info">
      <div class="header">
        For Gamers, by Gamers
      </div>
      <div class="line"></div>
      <div class="content">
        Game Overflow is an open community for anyone that plays. We help you
        get answers to your toughest coding questions, share knowledge with your
        coworkers in private, and find your next dream job.
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
.info {
  text-align: center;
}
.header {
  margin: 40px 0px 30px 0px;
  font-size: 40px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: black;
  font-weight: 700;
}
.line {
  margin: auto;
  width: 64px;
  height: 8px;
  text-align: center;
  background-color: #f48024;
  border-radius: 10px 10px 10px 10px;
}
.content {
  margin: auto;
  margin-top: 30px;
  max-width: 500px;
  text-align: center;
}
.info-cards {
  margin-top: 100px;
}
</style>