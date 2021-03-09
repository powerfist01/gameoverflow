<template>
  <div class="main">
    <div class="container">
      <p class="header">
        Ask a public question
      </p>

      <div class="question">
        <label class="label" for="title">Title
          <p class="description">
            Be specific and imagine you’re asking a question to another person
          </p>
        </label>
        <b-form-input
          id="title"
          placeholder="e.g. How can I check the ping in PUBG Lite?"
          v-model="title"
          required
        ></b-form-input>

        <br>

        <label class="label" for="body">Body
          <p class="description">
            Include all the information someone would need to answer your question
          </p>
        </label>
        <b-form-textarea
          id="textarea-rows"
          placeholder=""
          rows="8"
          v-model="body"
          required
        ></b-form-textarea>

        <br>

        <label class="label" for="tags">Tags
          <p class="description">
            Add up to 5 tags to describe what your question is about
          </p>
        </label>
        <b-form-input
          id="tags"
          placeholder="e.g. (pubg ping pubg-lite)"
          v-model="tags"
          required
        ></b-form-input>
        <br>
        <Button v-on:click.native="reviewQuestion" name="Review your Question" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      body: '',
      tags: ''
    }
  },
  head() {
    return {
      title: 'Ask a Question - Game Overflow',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'gameoverflow',
          name: 'Game Overflow',
          content: 'Game Overflow - Where Gamers Meet'
        }
      ]
    }
  },
  methods: {
    reviewQuestion: function(){
      console.log(this.title, this.body, this.tags);
      if(this.title == '' || this.body == '' || this.tags == ''){
        alert("required fileds");
      } else {
        let tags = this.tags.split(' ');
        this.$store.commit('questions/addQuestion', [this.title, this.body, tags])
        this.$router.push({ path: '/questions/review' });
      }
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px auto 20px auto;
}
p.header {
  font-size: 30px;
  color: rgb(41, 40, 40);
}
label.label {
  font-size: 18px;
  font-weight: 700;
}
p.description {
  font-size: 12px;
  font-weight: 500;
}
</style>