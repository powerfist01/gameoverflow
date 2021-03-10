<template>
  <div>
    <b-container>
      <h2><strong>All the Questions</strong></h2>
      <div v-for="question in questions" :key="question.title">
        <b-card :title=question.title>
          <b-card-text>
            {{ question.tags }}
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
      questions: [
        {
          title: 'How to fix ping in PUBG Mobile?',
          tags: 'pubg ping pubg-mobile'
        },
        {
          title: 'How to fix ping in PUBG Mobile?',
          tags: 'pubg ping pubg-mobile'
        },
        {
          title: 'How to fix ping in PUBG Mobile?',
          tags: 'pubg ping pubg-mobile'
        },
        {
          title: 'How to fix ping in PUBG Mobile?',
          tags: 'pubg ping pubg-mobile'
        }
      ]
    }
  }
};
</script>

<style scoped>
.container{
  width: 950px;
}
</style>