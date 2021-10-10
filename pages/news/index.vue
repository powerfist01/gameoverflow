<template>
  <b-container class="news">
    <p class="main-header">Top Stories</p>
    <p class="sub-header">Insights into the day’s biggest news.</p>
    <div class="main-section">
        <div class="content">
            <img class="main-section-image" src="https://pixelz.cc/wp-content/uploads/2018/07/cryptocurrency-uhd-4k-wallpaper.jpg">
            <p class="main-section-main-header">
                Vitalik Buterin: El Salvador's Bitcoin Approach Is 'Contrary to the Ideals' of Crypto
            </p>
            <TagArr :tags=tags />
        </div>
    </div>
  </b-container>
</template>

<script>
export default {
    data(){
    return {
      tags: ['Ethereum', 'Vitalik']
    }
  },
};
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
.main-section {
  background-color: rgb(250, 250, 250);
  border: 1px solid rgba(0, 0, 0, .1);
}
.content{
    padding: 10px;
}
.main-section-image{
    width: 100%;
    border-radius: 4px;
}
.main-section-image:hover{
    width: 100%;
    transform: translateY(-1px);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.5);
}
.main-section-main-header{
    margin-top: 10px;
    color: rgb(51, 51, 51);
    line-height: 97%;
    font-size: 27px;
    font-weight: 600;
    font-family: 'AkzidenzGrotesk-Bold';
}
</style>