<template>
  <div class="index">
    <div>
      <b-img :src="require('../assets/images/wallpaper.jpg')" fluid></b-img>
    </div>

    <div class="info-text text-center">
      <div class="header">
        For Gamers, by Gamers
      </div>
      <div class="text-center">
        Game Overflow is an open community for
        anyone that codes. We help you get answers to your toughest coding
        questions, share knowledge with your coworkers in private, and find your
        next dream job.
      </div>
    </div>

    <b-container fluid>
      <div class="cards">
        <b-card-group deck>
          <b-card border-variant="secondary" header="Secondary" align="center">
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
          <b-card border-variant="secondary" header="Secondary" align="center">
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
          <b-card border-variant="secondary" header="Secondary" align="center">
            <b-card-text
              >Lorem ipsum dolor sit amet, consectetur adipiscing
              elit.</b-card-text
            >
          </b-card>
        </b-card-group>
      </div>
    </b-container>
    
    <Card />
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  data() {
    return {
     
    };
  },
  components: {
    Card
  }
};
</script>

<style scoped>
.info-text .header{
  color: red;
  font-size: 45px;
  font-family:'Roboto Slab Bold',serif;
  font-weight: 600;
}
.info-text{
  color: black;
  width: 500px;
}
</style>