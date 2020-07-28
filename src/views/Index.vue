<template>
  <div>
    <b-container>
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="3000"
        controls
        indicators
        background="#ababab"
        img-height="360"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide :img-src="require('../assets/images/apex.jpg')"></b-carousel-slide>

        <b-carousel-slide :img-src="require('../assets/images/csgo.jpg')"></b-carousel-slide>

        <b-carousel-slide :img-src="require('../assets/images/fifa.jpg')"></b-carousel-slide>
      </b-carousel>
      <div class="cards">
        <b-card-group deck>

          <b-card
            border-variant="secondary"
            header="Secondary"
            header-border-variant="secondary"
            align="center"
          >
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </b-card-text>
          </b-card>

          <b-card border-variant="success" header="Success" align="center">
            <b-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b-card-text>
          </b-card>
        </b-card-group>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>
