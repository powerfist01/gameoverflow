<template>
  <b-container fluid>
    <b-row>
      <b-col cols="2" offset="1"><LeftQuestionPanel /></b-col>
      <b-col cols="6">
        <p class="section">Tags</p>
        <p>
          A tag is a keyword or label that categorizes your question with other,
          similar questions. Using the right tags makes it easier for others to find
          and answer your question.
        </p>
        <b-form-input
          id="input"
          class="mr-sm-2"
          placeholder="Search a tag"
          size="sm"
          v-model="tagInput"
          style="width: 250px"
        ></b-form-input>
        <br />
        <b-row>
          <div v-for="_tag in allTags" :key="_tag._id">
            <b-col>
              <b-card no-body class="tag-card">
                <b-card-body>
                  <!-- <NuxtLink :to="getLink(_tag.slug)">
                        <p>{{ _tag.slug }}</p>
                      </NuxtLink> -->
                  <Tag :name="_tag.name" />
                  <!-- <p class="card-text">{{ _tag.name }}</p> -->
                </b-card-body>
              </b-card>
            </b-col>
          </div>
        </b-row>
        <!-- <div class="mt-3">
          <div class="overflow-auto">
            <b-pagination-nav 
            :link-gen="linkGen" 
            :number-of-pages="totalPages"
            :v-model="currentPage"
            :hide-goto-end-buttons="true"
            prev-text="Prev"
            next-text="Next"
            align="right"
            size="sm"
            :hide-ellipsis="true"
            no-prefetch
            use-router>
            </b-pagination-nav>
          </div>
        </div> -->
      </b-col>
      <b-col cols="2"><RightQuestionPanel /></b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      tagInput: "",
      totalPages: "1",
      allTags: [],
      currentPage: 1,
    };
  },
  methods: {
    // getTaggedQuestions: function () {
    //   this.$router.push({ path: "/questions/tagged/" + this.tag });
    // },
    // getTags: async function(){
    //   let res = await this.$axios.get(this.$axios.defaults.baseURL + '/tags/getalltags');
    //   this.totalPages = res.data['totalPages'];
    //   this.allTags = res.data['tags'];
    // },
    // getPageTags: async function(pageNum){
    //   console.log(pageNum)
    //   let res = await this.$axios.get('http://localhost:8000/tags/getalltags?page=' + pageNum);
    //   this.totalPages = res.data['totalPages'];
    //   this.allTags = res.data['tags'];
    // },
    // linkGen(pageNum) {
    //   this.getPageTags(pageNum);
    //   return pageNum === 1 ? '?' : `?page=${pageNum}`
    // }
  },
  async fetch() {
    let res = await this.$axios.get(
      this.$axios.defaults.baseURL + "/tags/getalltags"
    );
    // this.totalPages = res.data['totalPages'];
    this.allTags = res.data["tags"];
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.tag-card {
  height: 100px;
  width: 181px;
  margin-right: 5px;
  margin-bottom: 10px;
}
</style>