<template>
  <div>
    <b-container>
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

      <p><a href="">Share</a></p>

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