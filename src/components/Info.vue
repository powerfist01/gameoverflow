<template>
  <div>
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

      <b-container class="info-cards">
        <b-row>
          <b-col>
            <info-card
              id="info-card"
              frontType="text"
              frontTitle="Public Q&A"
              frontData="Sign up for an account."
              backTitle="Quote of the Day"
              backData="<i>Do you know why people like violence?</i>"
            >
            </info-card>
          </b-col>
          <b-col>
            <info-card
              id="info-card"
              frontType="text"
              frontTitle="Latest News"
              frontData="<span> Public Q&A </span>"
              backTitle="Quote of the Day"
              backData="<i>Do you know why people like violence?</i>"
            >
            </info-card>
          </b-col>
          <b-col>
            <info-card
              id="info-card"
              frontType="text"
              frontTitle="Blogs"
              backTitle="Quote of the Day"
              backData="<i>Do you know why people like violence?</i>"
            >
            </info-card>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
  </div>
</template>

<script>
import InfoCard from "vue-info-card";
export default {
  components: {
    InfoCard
  },
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