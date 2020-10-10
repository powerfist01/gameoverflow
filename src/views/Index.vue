<template>
  <div class="index">
    <div>
      <b-img :src="require('../assets/images/wallpaper.jpg')" fluid></b-img>
    </div>

    <!-- <Card /> -->
    <Info />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Info from "@/components/Info.vue";

export default {
  data() {
    return {};
  },
  components: {
    Card,
    Info
  }
};
</script>

<style scoped>

</style>