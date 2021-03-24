<template>
  <div>
    <b-container>
      <h1>{{title}}</h1>
      <h2>{{ body }}</h2>
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
    console.log("man question page");
  },
  async fetch(){
    let res = await this.$axios.get(this.$axios.defaults.baseURL + '/questions/' + this.id);
    this.title = res.data[0].title;
    this.body = res.data[0].body;
    this.tags = res.data[0].tags;
    this.author = res.data[0].author;
  },
}
</script>

<style scoped>

</style>