<template>
  <div>
    <p>We are here</p>
  </div>
</template>

<script>
export default {
  created(){
    console.log(this.$route.params);
  }
}
</script>

<style scoped>

</style>