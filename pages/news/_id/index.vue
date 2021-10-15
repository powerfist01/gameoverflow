<template>
  <b-container>
    <div class="news-content">
      <p class="main-header">{{ heading }}</p>
      <p class="sub-header">{{ subHeading }}</p>
      <div class="footer-main">
        <div class="footer-details-left">
          <span class="author">By {{ author }}</span>
        </div>

        <div class="footer-details-right">
          <span class="bookmark"></span>
          <div class="space"></div>

          <span class="time-to-read"> 2 min read </span>
          <div class="dot"></div>
          <span class="entry-date published"> Oct 10, 2021 </span>
        </div>
      </div>
      <TagArr :tags="tags" />
      <div class="main-section">
        <div class="content">
          <img
            class="main-section-image"
            src="https://pixelz.cc/wp-content/uploads/2018/07/cryptocurrency-uhd-4k-wallpaper.jpg"
          />
          <p class="image-description">{{ imageDescription }}</p>
          <div class="body">
            <p>{{ body }}</p>
          </div>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      tags: [],
      heading: "",
      subHeading: "",
      date: "",
      image: "",
      imageDescription: "",
      body: "",
      likes: "",
      author: "",
    };
  },
  created() {},
  async fetch() {
    try {
      let path = this.$route.path;
      const newsId = "6160a240f58ee51020a8a2da";
      let url = `${this.$axios.defaults.baseURL}/news/${newsId}`;
      let res = await this.$axios.get(url);
      let data = res.data;
      if (data.success) {
        console.log("passed");
        data = data.data;
        this.heading = data.heading;
        this.subHeading = data.subHeading;
        this.body = data.body;
        this.likes = data.likes;
        this.imageDescription = data.imageDescription;
        this.author = data.author;
        this.date = data.createdAt;
        this.image = data.image;
        this.tags = data.tags;
      } else {
        console.log("failed");
      }
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style scoped>
.news-content {
  text-align: left;
  width: 70%;
}
a {
  text-decoration: none;
}
.main-header {
  font-family: "Canela-Black";
  color: rgb(51, 51, 51);
  margin: 0px;
  font-weight: 900;
  line-height: 95%;
  font-size: 40px;
}
.sub-header {
  font-family: "AkzidenzGrotesk-Regular";
  color: rgb(47, 47, 47);
  font-weight: 400;
  opacity: 0.5;
  margin-top: 2px;
  font-size: 16px;
}

.main-section-image {
  width: 100%;
  border-radius: 4px;
}
.image-description {
  text-align: right;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
}
.main-section-main-header {
  margin-top: 10px;
  color: rgb(51, 51, 51);
  line-height: 97%;
  font-size: 27px;
  font-weight: 600;
  font-family: "AkzidenzGrotesk-Bold";
}

.author,
.entry-date.published,
.time-to-read {
  font-size: 12px;
  color: rgb(153, 154, 157);
}

.footer-main {
  width: 100%;
  min-width: 100%;
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin-top: 16px;
  margin-bottom: 0px;
}
.footer-details-left {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-start;
}
.footer-details-right {
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: start;
  justify-content: flex-end;
}
.dot {
  border-radius: 50%;
  background-color: rgb(0, 0, 0);
  width: 2px;
  height: 2px;
  margin: 0px 7px;
}
.body {
  text-align: justify;
}
</style>