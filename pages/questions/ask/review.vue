<template>
  <div class="container">
    <p class="header">Review question</p>
    <p class="title">
      {{ question.title }}
    </p>
    
    <br>

    <b-card no-body class="text">
      <div class="bg">
        <client-only>
          <Viewer
            ref="toastuiEditor"
            :initialValue = question.body
          />
        </client-only>
      </div>
    </b-card>
    <br>
    {{ question.tags }}
  </div>
</template>

<script>
export default {
  computed: {
    question () {
      let question = {};
      question['title'] = this.$store.state.questions.title;
      question['body'] = this.$store.state.questions.body;
      question['tags'] = this.$store.state.questions.tags;
      return question;
    }
  },
}
</script>

<style scoped>
p.header{
  font-weight: 600;
  font-size: 30px;
}
p.title{
  font-size: 25px;
  font-weight: 500;
}
.bg{
  background-color: #f7f6f9;
}
</style>