<template>
  <div>
    {{tag}}
    {{name}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      tag: '',
      name: 'sujeet'
    }
  },
  created(){
    this.tag = this.$route.params.tag;
  }
}
</script>

<style scoped>

</style>