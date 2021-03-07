<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#fff"
      text-color="#000"
    >
      <el-menu-item index="1"><NuxtLink to="/">Home</NuxtLink></el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      };
    },
    methods: {
     
    }
  }
</script>

<style scoped>
</style>