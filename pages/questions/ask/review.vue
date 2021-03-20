<template>
  <div class="container">
    <p class="header">Review question</p>
    {{ question.title }}
    <br>
    <client-only>
      <Viewer
        ref="toastuiEditor"
        :initialValue = question.body
      />
    </client-only>
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
</style>