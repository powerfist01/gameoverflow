<template>
  <div class="default">
    <Navbar />
    <Nuxt />
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
.default{
}
</style>
