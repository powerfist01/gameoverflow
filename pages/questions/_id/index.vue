<template>
  <div>
    <b-container>
      <p>Not yet working. Have to fix it.</p>
    </b-container>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      title: ''
    }
  },
  created() {
    console.log("middle page");
  },
  async fetch(){
    let res = await this.$axios.get(this.$axios.defaults.baseURL + '/questions/' + this.id);
    this.title = res.data[0].title.replace(/ /g,'-');
    let path = '/questions/' + this.id + '/' + this.title;
    console.log(path);
    await this.$router.push({ path: path}, function(err){
      if(err){
        alert(err);
        console.log(err)
      }
      console.log("yoyoyoyoo")
    });
  },
}
</script>

<style scoped>

</style>