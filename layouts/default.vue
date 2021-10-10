<template>
  <div class="default">
    <Navbar />
    <notifications :max="3" position="top center" :width="400" />
    <Nuxt style="margin-top: 60px; margin-bottom: 20px;"/>
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
</style>
