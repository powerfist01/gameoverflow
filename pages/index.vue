<template>
  <div>
    <p>This is the index page</p>
    <el-row>
      <el-col :span="2"><NuxtLink to="/users/signup"><Button name="Sign up"/></NuxtLink></el-col>
      <el-col :span="2"><NuxtLink to="/users/login"><Button name="Log in"/></NuxtLink></el-col>
    </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
