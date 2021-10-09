<template>
  <div class="sidenav">
    <a href="#about">About</a>
    <a href="#services">Services</a>
    <a href="#clients">Clients</a>
    <a href="#contact">Contact</a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.sidenav {
  width: 300px;
  position: fixed;
  z-index: 1;
  margin-left: 100;
  background-color: #111;
  overflow-x: hidden;
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
</style>