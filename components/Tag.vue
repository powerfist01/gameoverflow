<template>
  <div>
    <h1>Tags</h1>

    <h2>Example 1</h2>
    <a href="#" class="tag">Valorant</a>

    <h2>Example 2</h2>
    <ul class="tags">
      <li><a href="#" class="tag">PC Games</a></li>
      <li><a href="#" class="tag">Valorant</a></li>
      <li><a href="#" class="tag">India</a></li>
    </ul>
  </div>
</template>

<style scoped>
.tags {
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
}

.tags li {
  float: left;
}

.tag {
  background: rgb(138, 135, 135);
  border-radius: 3px 0 0 3px;
  color: rgb(255, 255, 255);
  display: inline-block;
  height: 26px;
  line-height: 26px;
  padding: 0 20px 0 23px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: "";
  height: 6px;
  left: 10px;
  position: absolute;
  width: 6px;
  top: 10px;
}

.tag::after {
  background: #fff;
  border-bottom: 13px solid transparent;
  border-left: 10px solid rgb(255, 255, 255);
  border-top: 13px solid transparent;
  content: "";
  position: absolute;
  right: 0;
  top: 0;
}

.tag:hover {
  background-color: rgb(104, 159, 195);
  color: white;
}

.tag:hover::after {
  border-left-color: rgb(104, 159, 195);
}
</style>