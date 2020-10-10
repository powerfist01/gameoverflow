<template>
  <div class="index">
    <div>
      <b-img :src="require('../assets/images/wallpaper.jpg')" fluid></b-img>
    </div>

    <!-- <Card /> -->
    <Info />
    <Footer />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Info from "@/components/Info.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Card,
    Info,
    Footer
  }
};
</script>

<style scoped>

</style>