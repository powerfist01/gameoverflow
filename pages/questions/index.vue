<template>
  <div>
    <b-container>
      <p class="section">
        All Questions
      </p>
      <div v-for="question in questions" :key="question._id">
        <b-card class="summary">
          <b-row>
            <b-col cols="1">
              <div class="stats">
                <div class="vote">
                  <div class="votes">
                    <span class="votes-count">12021</span>
                    <p class="stat-name">votes</p>
                  </div>
                </div>
                <div class="answer">
                  <div class="answers">
                    <span class="answer-count">12</span>
                    <p class="stat-name">answers</p>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col cols="10">
              <div class="main">
                <b-card-title class="title"><NuxtLink to="#">{{ question.title }}</NuxtLink></b-card-title>
                <b-card-text>
                  This card has supporting text below as a natural lead-in to additional content.
                </b-card-text>
                <TagArr :tags=question.tags />
                <b-card-text class="small text-muted" align="right">
                  <!-- <div class="created-at">
                    {{ question.createdAt }}
                  </div> -->
                  <div class="author">
                    <b-avatar></b-avatar> &nbsp;<span>{{ question.author }}</span>
                  </div>
                </b-card-text>
              </div>
            </b-col>
          </b-row> 
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      questions: []
    }
  },
  async fetch(){
    let res = await this.$axios.get(this.$axios.defaults.baseURL + '/questions');
    this.questions = res['data'];
  },
};
</script>

<style scoped>
.summary{
  margin-bottom: 10px;
}
.title{
  font-size: 16px;
}
.views {
  border-radius: 5px;
  border: 2px solid #73AD21;
  padding: 20px;
  width: 50px;
  height: 50px;
}
.stats{
  text-align: center;
  color: rgb(93, 93, 93);
}
p.stat-name{
  font-size: 12px;
}
a{
  text-decoration: none;
}
</style>