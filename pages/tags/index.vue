<template>
  <div>
    <b-container class="bv-example-row">
      <h2>Tags</h2>
      <p>A tag is a keyword or label that categorizes your question with other, similar questions. Using the right tags makes it easier for others to find and answer your question.</p>
      <b-row>
          <div v-for="_tag in allTags" :key="_tag._id">
            <b-col>
              <b-card no-body class="card">
                <b-card-body>
                  <b-link to="/">
                    <p>{{ _tag.slug }}</p>
                  </b-link>
                  <p class="card-text">{{ _tag.name }}</p>
                </b-card-body>
              </b-card>
            </b-col>
          </div>
      </b-row>
      <div class="mt-3">
      <b-pagination 
        v-model="currentPage" 
        :total-rows="rows"
        prev-text="Prev"
        next-text="Next"
        hide-goto-end-buttons=true
        hide-ellipsis=true
        align="right">
      </b-pagination>
    </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: 100,
      currentPage: 3,
      allTags: []
    };
  },
  methods: {
    getTaggedQuestions: function () {
      this.$router.push({ path: "/questions/tagged/" + this.tag });
    },
    getTags: async function(){
      let res = await this.$axios.get('http://localhost:8000/tags/getalltags');
      this.allTags = res.data.splice(1,12);
    }
  },
  mounted(){
    this.getTags()
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
}
.card{
  height: 150px;
  width: 250px;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>