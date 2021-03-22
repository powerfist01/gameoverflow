<template>
  <div>
    <b-container>
      <h2><strong>All the Questions</strong></h2>
      <div v-for="question in questions" :key="question._id">
        <b-card :title=question.title>
          <!-- <b-card-text>
            {{ question.body }}
          </b-card-text> -->
          <b-card-text>
            {{ question.author }}
          </b-card-text>
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
    console.log();
    this.questions = res['data'];
  },
};
</script>

<style scoped>
.container{
  width: 950px;
}
</style>