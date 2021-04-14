<template>
  <div class="card">
    <div class="box">
      <h4><b>{{ name }}</b></h4> 
      <p>{{ title }}</p> 
    </div>
  </div>
</template>

<script>
export default {
  name: 'Author',
  props:{
      name: {
          type: String,
          required: true
      },
      title: {
        type: String,
        default: 'Harbinger'
      }
  },
  data(){
    return {

    }
  }
}
</script>

<style scoped>
.card {
  background-color: bisque;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 20%;
}

.card:hover {
  box-shadow: 0 8px 10px 0 rgba(0,0,0,0.2);
}

.box {
  padding: 2px 16px;
}
h4{
  font-size: 14px;
}
p{
  font-size: 12px;
}
</style>