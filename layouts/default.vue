<template>
  <div class="default">
    <Navbar />
    <notifications :max="3" position="top center" :width="400" />
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
.sidenav {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
}

.sidenav a {
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
}

.sidenav a:hover {
  color: #f1f1f1;
}
.default{
    background: rgb(242, 245, 248);
}
p.section {
  font-size: 34px;
  font-weight: 600;
  color: rgb(41, 40, 40);
}
.container{
  width: 2000px;
  margin: 20px auto 20px auto;
}
</style>
