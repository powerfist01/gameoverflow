<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" offset="1"><LeftQuestionPanel /></b-col>
      <b-col cols="6">
        <p class="section">Review question</p>
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
      </b-col>
      <b-col cols="2"><RightQuestionPanel /></b-col>
    </b-row>
  </b-container>
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
p.title{
  font-size: 34px;
}
.bg{
  background-color: #f7f6f9;
}
.submit{
  margin-top: 10px;
}
</style>