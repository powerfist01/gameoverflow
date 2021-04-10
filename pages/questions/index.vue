<template>
  <div>
    <b-container>
      <p class="section">
        All Questions
      </p>
      <div v-for="question in questions" :key="question._id">
        <b-card class="summary">
          <b-row>
            <b-col cols="2">
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
                <div class="view">
                  <div class="views">
                    <p class="stat-name" style="margin-bottom: 0px;">1112 views</p>
                  </div>
                </div>
              </div>
            </b-col>
            <b-col cols="10">
              <div class="main">
                <b-card-title class="title"><a :href='getQuestionLink(question.counter, question.title)'>{{ question.title }}</a></b-card-title>
                <TagArr :tags=question.tags />
                <b-card-text class="text-muted small" align="right">
                  {{ question.createdAt }} <br>
                  {{ question.author }}
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
  methods: {
    getQuestionLink(counter, title){
      title = title.replace(/ /g,'-')
      if(counter)
        return '/questions/' + counter.toString() + '/' + title;
      else
        return '#';
    }
  }
};
</script>

<style scoped>
.summary{
  margin-bottom: 10px;
}
.title{
  font-size: 16px;
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