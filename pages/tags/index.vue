<template>
  <div>

    <b-container class="bv-example-row">
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
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      allTags: []
    };
  },
  methods: {
    getTaggedQuestions: function () {
      this.$router.push({ path: "/questions/tagged/" + this.tag });
    },
    getTags: async function(){
      let res = await this.$axios.get('http://localhost:8000/tags/getalltags');
      this.allTags = res.data;
    }
  },
  created(){
    this.getTags()
  }
};
</script>

<style scoped>
a{
  text-decoration: none;
}
.card{
  height: 10rem;
  width: 15rem;
}
</style>