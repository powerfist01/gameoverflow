<template>
  <b-container class="news">
    <b-container>
      <b-row>
        <Badge />
        <b-col cols="8">
          <p class="main-header">Top Stories</p>
          <p class="sub-header">Insights into the day’s biggest news.</p>
        </b-col>
        <b-col>
          <p class="main-header">Learn</p>
          <p class="sub-header">
            Quickly explore and learn the gaming that matter.
          </p>
        </b-col>
      </b-row>
    </b-container>
    <hr />
  </b-container>
</template>

<script>
export default {};
</script>

<style scoped>
.main-header {
  font-family: "Canela-Black";
  color: rgb(51, 51, 51);
  margin: 0px;
  font-weight: 900;
  line-height: 95%;
  font-size: 40px;
}
.sub-header {
  font-family: "AkzidenzGrotesk-Regular";
  color: rgb(47, 47, 47);
  font-weight: 400;
  opacity: 0.5;
  margin-top: 2px;
  font-size: 16px;
}
</style>