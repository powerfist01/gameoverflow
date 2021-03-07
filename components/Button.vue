<template>
  <div>
    <button class="button">{{ name }}</button>
  </div>
</template>

<script>
export default {
    name: "Button",
    props:{
        name: {
            type: String,
            required: true,
        }
    }
};
</script>

<style scoped>
.button {
  background-position: center;
  transition: background 0.8s;
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

/* Button style */
button {
  border: none;
  width: 100px;
  border-radius: 6px;
  padding: 12px 18px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: #0575E6;
  box-shadow: 0 0 4px rgb(102, 102, 102);
  outline: none;
}
</style>