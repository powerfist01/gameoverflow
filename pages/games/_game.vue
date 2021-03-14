<template>
  <div>
    <p>Game with id</p>
    {{game_id}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      game_id: ''
    }
  },
  created(){
    this.game_id = this.$route.params.game;
    console.log(this.$route.params);
    console.log(this.$route.query);
  }
}
</script>

<style scoped>

</style>