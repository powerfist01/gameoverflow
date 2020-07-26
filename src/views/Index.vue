<template>
  <div>
    <b-container>
      <b-carousel
        id="carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        img-height="360"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <b-carousel-slide
          :img-src="require('../assets/images/apex.jpg')"
        ></b-carousel-slide>

        <b-carousel-slide
          :img-src="require('../assets/images/csgo.jpg')"
        ></b-carousel-slide>

        <b-carousel-slide
          :img-src="require('../assets/images/fifa.jpg')"
        ></b-carousel-slide>
      </b-carousel>
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
