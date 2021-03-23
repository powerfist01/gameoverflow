<template>
  <div>
    <ul class="tags">
      <li v-for="tag in tags" :key="tag"><a :href="getLinkUsingTag(tag)" class="tag">{{ tag }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Tag",
  props:{
      tags: {
          type: Array,
          required: true
      }
  },
  methods: {
    getLinkUsingTag(tag){
      return '/questions/tagged/' + tag;
    }
  }
}
</script>

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
  background: rgb(161, 205, 255);
  border-radius: 2px 2px 2px 2px;
  color: rgb(0, 0, 0);
  display: inline-block;
  font-size: 12px;
  height: 22px;
  line-height: 22px;
  padding: 0 8px 0 15px;
  position: relative;
  margin: 0 5px 5px 0;
  text-decoration: none;
}

.tag::before {
  background: #fff;
  border-radius: 10px;
  box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
  content: "";
  height: 6px;
  left: 6px;
  position: absolute;
  width: 5px;
  top: 8px;
}

.tag:hover {
  background-color: rgb(111, 178, 255);
  color: rgb(0, 0, 0);
}
</style>