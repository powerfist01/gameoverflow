<template>
  <div class="text-center">
    <div class="arrow-up"></div>
    {{ votes }}
    <div class="arrow-down"></div>
  </div>
</template>

<script>
export default {
  name: "UpDownButton",
  props:{
      votes: {
          type: Number,
          required: true
      }
  },
}
</script>

<style scoped>
.arrow-up {
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-bottom: 15px solid rgb(170, 160, 160);
}
.arrow-down {
  width: 0; 
  height: 0; 
  border-left: 15px solid transparent;
  border-right: 15px solid transparent;
  
  border-top: 15px solid rgb(170, 160, 160);
}
</style>