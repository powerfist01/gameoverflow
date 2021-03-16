<template>
  <div>
    {{tag}}
  </div>
</template>

<script>
export default {
  data(){
    return {
      tag: ''
    }
  },
  created(){
    this.tag = this.$route.params.tag;
  }
}
</script>

<style scoped>

</style>