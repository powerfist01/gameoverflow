<template>
  <div class="card">
    <div class="flashcard-container">
      <div class="flashcard hidden-xs hidden-sm">
        <div class="card-left" @click="previous">
          <div class="arrow">
            <span class="arrow"></span>
          </div>
        </div>

        <div class="card-flipper" @click="flip(card)">
          <div
            class="card-question"
            v-bind:class="{ 'reveal-answer' : flipped }"
          >{{ card.question }}</div>
          <div class="card-answer" v-bind:class="{ 'reveal-answer' : flipped }">
            {{ card.hiragana_answer }}
            <span class="text-xsmall">{{ card.romanji_answer }}</span>
          </div>
        </div>

        <div class="card-right" @click="forward">
          <div class="arrow">
            <span class="arrow"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
var deck1 = [
  { question: "How are you?", hiragana_answer: "I am fine", romanji_answer: "Just do it." },
];

export default {
  data() {
    return {
      total: 0,
      current: 0,
      card: deck1[0],
      flipped: false,
      el: ".flashcard-container"
    };
  },
  computed: {
    getPrev: function() {
      var prev = this.current == 0 ? this.total - 1 : this.current - 1;
      return prev;
    },
    getNext: function() {
      var next = this.current + 1 == this.total ? 0 : this.current + 1;
      return next;
    }
  },
  
  methods: {
    flip: function() {
      this.flipped = !this.flipped;
    },
    previous: function() {
      this.flipped = false;
      this.card = deck1[this.getPrev];
      this.current = this.getPrev;
    },

    forward: function() {
      this.flipped = false;
      this.card = deck1[this.getNext];
      this.current = this.getNext;
    }
  }
};
</script>


<style scoped>
.flashcard-container .flashcard,
.flashcard-container .flashcard-mobile {
  width: 100%;
  height: 80px;
  cursor: pointer;
}
.flashcard-container .flashcard-mobile {
  transition: ease-in 300ms;
  height: 300px;
  background-color: #333;
}
.flashcard-container .flashcard-mobile.reveal-answer {
  background-color: #337ab7;
}
.flashcard-container .flashcard-mobile .card-flipper {
  perspective: 500px;
}
.flashcard-container .flashcard-mobile .card-flipper .card-answer,
.flashcard-container .flashcard-mobile .card-flipper .card-question {
  height: 250px;
  width: 250px;
  top: 50%;
  margin-top: -125px;
  left: 50%;
  margin-left: -125px;
  color: #333;
  background-color: #fff;
  border-radius: 50%;
}
.flashcard-container .card-flipper {
  transition: ease-in 300ms;
  transform-style: preserve-3d;
  position: relative;
  display: inline-block;
  width: 78%;
  height: 100%;
}
.flashcard-container .card-question,
.flashcard-container .card-answer {
  transition: ease-in 300ms;
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  font-size: 60px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333;
}
.flashcard-container .card-question {
  z-index: 2;
  /* for firefox 31 */
  transform: rotateX(0deg);
  background-color: #333;
}
.flashcard-container .card-question.reveal-answer {
  transform: rotateX(180deg);
}
.flashcard-container .card-answer {
  transform: rotateX(180deg);
  background-color: #337ab7;
  flex-direction: column;
  line-height: 1;
}
.flashcard-container .card-answer.reveal-answer {
  transform: rotateX(0deg);
}
.flashcard-container .card-answer span {
  display: block;
}
.flashcard-container .card-left,
.flashcard-container .card-right {
  position: relative;
  display: inline-block;
  width: 10%;
  height: 100%;
  background-color: #333;
}
.text-xsmall {
  font-size: 12px;
}
.no-flexbox .flashcard .card-question,
.no-flexbox .flashcard-container .flashcard-mobile .card-question,
.flashcard-container .no-flexbox .flashcard-mobile .card-question {
  z-index: 2;
}
.no-flexbox .flashcard .card-question.reveal-answer,
.no-flexbox .flashcard-container .flashcard-mobile .card-question.reveal-answer,
.flashcard-container
  .no-flexbox
  .flashcard-mobile
  .card-question.reveal-answer {
  z-index: 0;
}
</style>