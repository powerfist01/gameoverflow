<template>
  <div class="index">
    <div>
      <b-img :src="require('../assets/images/wallpaper.jpg')" fluid></b-img>
    </div>

    <!-- <Card /> -->
    <Info />
    <NextInfo/>
    <Footer />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Info from "@/components/Info.vue";
import NextInfo from "@/components/NextInfo.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Card,
    Info,
    NextInfo,
    Footer
  }
};
</script>

<style scoped>

</style>