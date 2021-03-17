<template>
  <div class="games">
    <b-container fluid>
      <div class="cards-list">
        <Game src="https://i.redd.it/b3esnz5ra34y.jpg" title="Hangman" />
        <Game src="https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg" title="Hangman" />
        <Game src="https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif" title="Hangman" />
        <Game src="https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif" title="Hangman" />
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.cards-list {
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>