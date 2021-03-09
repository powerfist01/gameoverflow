<template>
  <div>
    <p>Review your question here</p>
    {{ question.title }}
    {{ question.body }}
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
      console.log(question)
      return question;
    }
  },
}
</script>

<style scoped>

</style>