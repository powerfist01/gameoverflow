<template>
  <div class="container">
    <div class="header">
      <p class="section">Review question</p>
    </div>
    <div class="question">
      <p class="title">
        {{ questionTitle }}
      </p>
      <b-card no-body class="text">
        <div class="bg">
          <client-only>
            <Viewer
              ref="toastuiEditor"
              :initialValue = questionBody
            />
          </client-only>
        </div>
      </b-card>
      <br>
      <TagArr :tags=questionTags />
    </div>
    <div class="submit">
      <b-button @click="askQuestion" size="sm">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      questionTitle: '',
      questionBody: '',
      questionTags: []
    }
  },
  async fetch(){
    this.questionTitle = this.$store.state.questions.title;
    this.questionBody = this.$store.state.questions.body;
    this.questionTags = this.$store.state.questions.tags;
  },
  methods: {
    async askQuestion(){
      console.log(this.questionTitle);
      let payload = {
        title: this.questionTitle,
        body: this.questionBody,
        tags: this.questionTags
      }
      let askQuestion = await this.$axios.post(this.$axios.defaults.baseURL + '/questions/ask', payload);
      console.log(askQuestion);
      this.$router.push({ path: '/dashboard' });
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px auto 20px auto;
}
p.section{
  font-weight: 600;
  font-size: 30px;
}
p.title{
  font-size: 25px;
}
.bg{
  background-color: #f7f6f9;
}
.submit{
  margin-top: 10px;
}
</style>