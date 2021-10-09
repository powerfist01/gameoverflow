<template>
  <div>
    <button class="button" @click="getToLink(to)">{{ name }}</button>
  </div>
</template>

<script>
export default {
    name: "Button",
    props:{
        name: {
            type: String,
            required: true,
        },
        to: {
          type: String,
          required: false
        }
    },
    methods: {
      getToLink(to){
        this.$router.push({path: to})
      }
    }
};
</script>

<style scoped>
.button {
  background-position: center;
  transition: background 0.7s;
}
.button:hover {
  background: #7F00FF radial-gradient(circle, transparent 1%, #7F00FF 1%)
    center/15000%;
}
.button:active {
  background-color: #1CB5E0;
  background-size: 100%;
  transition: background 0s;
}

button {
  border: none;
  border-radius: 3px;
  padding: 12px 12px;
  font-size: 14px;
  cursor: pointer;
  color: white;
  background-color: #0575E6;
  box-shadow: 0 0 4px rgb(102, 102, 102);
  outline: none;
}
</style>