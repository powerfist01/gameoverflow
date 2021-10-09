<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="2" offset="1"></b-col>
        <b-col cols="6">
          <p class="section">
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
            <p class="required" v-if="errorTitle">* Please enter valid title of the question.</p>
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
            <p class="required" v-if="errorBody">* Please enter valid body of the question.</p>
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
            <p class="required" v-if="errorTag">* Please enter valid tags of the question.</p>
            <br>
            <Button v-on:click.native="reviewQuestion" name="Review your Question" />
          </div>
        </b-col>
        <b-col cols="2"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      title: '',
      body: '',
      tags: '',
      errorTag: false,
      errorTitle: false,
      errorBody: false,
      sanitizedTags: [],
      editorOptions: {
        minHeight: '200px',
        language: 'en-US',
        useCommandShortcut: true,
        useDefaultHTMLSanitizer: true,
        usageStatistics: false,
        hideModeSwitch: true,
        toolbarItems: [
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
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
    isInputValid(){
      if(this.isTitleValid() && this.isBodyValid() && this.isTagsValid()){
        return true;
      }
      else
        return false;
    },
    isTitleValid(){
      if(this.title.trim() == ''){
        this.errorTitle = true;
        return false;
      }
      else
        return true;
    },
    isBodyValid(){
      if(this.$refs.toastuiEditor.invoke('getMarkdown').trim() == ''){
        this.errorBody = true;
        return false;
      }
      else
        return true;
    },
    isTagsValid(){
      let tags = this.tags.trim().split(' ');
      let sanitizedTags = new Set();
      tags.forEach(function(tag){
        if(tag.trim())
          sanitizedTags.add(tag);
      })
      if(sanitizedTags.size > 0 && sanitizedTags.size <= 5){
        this.sanitizedTags = Array.from(sanitizedTags);
        return true;
      } else {
        this.errorTag = true;
        return false;
      }
    },
    reviewQuestion: function(){
      if(this.isInputValid()){
        this.$store.commit('questions/addQuestion', [this.title, this.$refs.toastuiEditor.invoke('getMarkdown'), this.sanitizedTags])
        this.$router.push({ path: '/questions/ask/review' });
      }
    },
    getMarkdown(){
      let mark = this.$refs.toastuiEditor.invoke('getMarkdown');
      if(mark)
       console.log(mark);
    },
    notify(title, text, type){
      this.$notify({title: title, text: text, type: type, duration: 3000, speed: 1000})
    }
  }
}
</script>

<style scoped>
label.label {
  font-size: 18px;
  font-weight: 700;
}
p.description {
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 0px;
}
p.required{
  font-size: 12px;
  color: rgb(207, 0, 0);
  margin-bottom: 0px;
}
</style>