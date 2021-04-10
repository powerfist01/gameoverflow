<template>
  <div>
    <b-container>
      <h1>{{title}}</h1>
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
      <p>{{ author }}</p>
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
      author: ''
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
}
</script>

<style scoped>

</style>