<template>
  <div class="text-center">
    <div class="arrow-up" :class="[isUpvoted?'selected-top':'']" @click="upvote()"></div>
    {{ votes }}
    <div class="arrow-down" :class="[isDownvoted?'selected-bottom':'']" @click="downvote()"></div>
  </div>
</template>

<script>
export default {
  name: "UpDownButton",
  data(){
    return {
      isUpvoted: true,
      isDownvoted: false
    }
  },
  props:{
      votes: {
          type: Number,
          required: true
      }
  },
  methods: {
    async upvote(){
      console.log("Upvotes");

    },
    async downvote(){
      console.log(this);
    }
  }
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
.selected-top{
  border-bottom: 15px solid rgb(224, 14, 77);
}
.selected-bottom{
  border-top: 15px solid rgb(224, 14, 77);
}
</style>