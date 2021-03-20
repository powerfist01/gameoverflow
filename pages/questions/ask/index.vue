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
          size="sm"
        ></b-form-input>

        <br>

        <label class="label" for="body">Body
          <p class="description">
            Include all the information someone would need to answer your question
          </p>
        </label>
        <client-only>
          <editor
            ref="toastuiEditor"
            :options="editorOptions"
            initialEditType='wysiwyg'
            class="editor"
          />
        </client-only>
        <br>

        <label class="label" for="tags">Tags
          <p class="description">
            Add up to 5 tags to describe what your question is about
          </p>
        </label>
        <!-- Tag not more than 20 letters -->
        <b-form-input
          id="tags"
          placeholder="e.g. (pubg ping pubg-lite)"
          v-model="tags"
          required
          size="sm"
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
      tags: '',
      editorOptions: {
        minHeight: '200px',
        language: 'en-US',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'indent',
          'outdent',
          'divider',
          'table',
          'link',
          'divider',
          'code'
        ]
      }
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
      if(this.title == '' || this.$refs.toastuiEditor.invoke('getMarkdown') == '' || this.tags == ''){
        alert("required fileds");
      } else {
        let tags = this.tags.split(' ');
        this.$store.commit('questions/addQuestion', [this.title, this.$refs.toastuiEditor.invoke('getMarkdown'), tags])
        this.$router.push({ path: '/questions/review' });
      }
    },
    getMarkdown(){
      let mark = this.$refs.toastuiEditor.invoke('getMarkdown');
      if(this.$refs.toastuiEditor.invoke('getMarkdown'))
        alert("hello")
      console.log(mark);
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
  font-weight: 600;
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