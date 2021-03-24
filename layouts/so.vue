<template>
  <div>
    <Navbar />
    <notifications :max="3" position="top center" :width="400" />
    <b-row>
      <b-col cols="1" offset="1">
        <p>This is hard</p>
      </b-col>
      <b-col cols="7">
        <Nuxt />
      </b-col>
      <b-col cols="3">
        <p>this is too hard</p>
      </b-col>
    </b-row>
    <Footer />
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  },
  head(){
    return {
      title: 'Game Overflow - Where Gamers Meet',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'gameoverflow',
          name: 'Game Overflow',
          content: 'Game Overflow - Where Gamers Meet'
        }
      ]
    }
  }
}
</script>
<style>
p.section {
  font-size: 34px;
  font-weight: 600;
  color: rgb(41, 40, 40);
}
.container{
  width: 1000px;
  margin: 20px auto 20px auto;
}
</style>
