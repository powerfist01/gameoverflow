<template>
  <b-container>
    <h2>{{ heading }}</h2>
    <p>{{ subHeading }}</p>
    <p>{{ author }}</p>
    <p>{{ likes }}</p>
    <p>{{ image }}</p>
    <p>{{ body }}</p>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      heading: '',
      subHeading: '',
      date: '',
      image: '',
      body: '',
      likes: '',
      author: '',
    };
  },
  created() {},
  async fetch() {
    try {
      let path = this.$route.path;
      const newsId = '6160a240f58ee51020a8a2da';
      let url = `${this.$axios.defaults.baseURL}/news/${newsId}`;
      let res = await this.$axios.get(url);
      let data = res.data;
      console.log(data.success);
      if (data.success) {
        console.log('passed');
        data = data.data;
        this.heading = data.heading;
        this.subHeading = data.subHeading;
        this.body = data.body;
        this.likes = data.likes;
        this.author = data.author;
        this.date = data.createdAt;
        this.image = data.image;
      } else {
        console.log('failed');
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
</style>