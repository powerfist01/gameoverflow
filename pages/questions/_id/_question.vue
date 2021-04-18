<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col cols="2" offset="1"><LeftQuestionPanel /></b-col>
        <b-col cols="6">
          <h1>{{title}}</h1>
          <b-row>
            <b-col cols="3"><p><span class="key">Asked</span> 3 years, 9 months ago</p></b-col>
            <b-col cols="3"><p><span class="key">Active</span> 31 days ago</p></b-col>
            <b-col cols="3"><p><span class="key">Viewed</span> 68k times</p></b-col>
          </b-row>
          <b-card no-body class="text">
            <div class="bg">
              <client-only>
                <Viewer
                  :initialValue="body"
                />
              </client-only>
            </div>
          </b-card>

          <TagArr :tags=tags />
          <Author :name="author" title="title"/>
          <hr>
          <hr>
          <p>Know someone who can answer? Share a link to this question via email, Twitter, or Facebook.</p>
          <h4>Your Answer</h4>

          <client-only>
            <editor
              ref="toastuiAnswerEditor"
              :options="editorOptions"
              initialEditType='wysiwyg'
              class="editor"
            />
          </client-only>
          <br>
          <Button v-on:click.native="reviewAnswer" name="Post Your Answer" />
        </b-col>
        <b-col cols="2">
          <Button to="/questions/ask" name="Ask Question"/>
          <br>
          <RightQuestionPanel />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      title: '',
      tags: [],
      body: '',
      author: '',
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
  created() {
    // console.log(this);
  },
  async fetch(){
    let res = await this.$axios.get(this.$axios.defaults.baseURL + '/questions/' + this.id);
    this.body = res.data[0].body;
    this.title = res.data[0].title;
    this.tags = res.data[0].tags;
    this.author = res.data[0].author;
  },
  methods: {
    async reviewAnswer(){
      let ans = this.$refs.toastuiAnswerEditor.invoke('getMarkdown');
      console.log(ans);
    }
  }
}
</script>

<style scoped>
p{
  font-size: 14px;
}
.key{
  color: rgb(124, 124, 124);
}
a{
  text-decoration: none;
}
</style>