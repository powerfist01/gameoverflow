<template>
  <b-container class="news">
    <p class="main-header">Top Stories</p>
    <p class="sub-header">Insights into the day’s biggest news.</p>

    <div class="main-section">
      <NuxtLink to="/news/6160a240f58ee51020a8a2da">
        <div class="content">
          <img
            class="main-section-image"
            src="https://pixelz.cc/wp-content/uploads/2018/07/cryptocurrency-uhd-4k-wallpaper.jpg"
          />
          <p class="main-section-main-header">
            Vitalik Buterin: El Salvador's Bitcoin Approach Is 'Contrary to the
            Ideals' of Crypto
          </p>
          <TagArr :tags="tags" />
          <div class="footer-main">
            <div class="footer-details-left">
              <span class="author">Sujeet Singh</span>
              <div class="dot"></div>
              <span class="entry-date published"> Oct 10, 2021 </span>
            </div>

            <div class="footer-details-right">
              <span class="bookmark"></span>
              <div class="space"></div>

              <span class="time-to-read"> 2 min read </span>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>

    <div v-for="news in data" :key="news._id">
      <div class="section">
        <div class="content">
          <b-row>
            <b-col cols="4">
              <NuxtLink to="/news/6160a240f58ee51020a8a2da">
                <img class="section-image" :src=news.image />
              </NuxtLink>
            </b-col>
            <b-col cols="8" class="section-right">
              <NuxtLink to="/news/6160a240f58ee51020a8a2da">
                <p class="section-main-header">
                  {{ news.heading }}
                </p>
              </NuxtLink>
              <TagArr :tags="news.tags" />
              <div class="footer-main">
                <div class="footer-details-left">
                  <span class="author">{{ news.author }}</span>
                  <div class="dot"></div>
                  <span class="entry-date published">
                    {{ news.createdAt }}
                  </span>
                </div>

                <div class="footer-details-right">
                  <span class="bookmark"></span>
                  <div class="space"></div>
                  <NuxtLink to="/news/6160a240f58ee51020a8a2da">
                    <span class="time-to-read">
                      {{ news.timeToRead }} read</span
                    >
                  </NuxtLink>
                </div>
              </div>
            </b-col>
          </b-row>
        </div>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      tags: ["Ethereum", "Vitalik"],
    };
  },
  created() {},
  async fetch() {
    try {
      let path = this.$route.path;
      const newsId = "6160a240f58ee51020a8a2da";
      let url = `${this.$axios.defaults.baseURL}/news/`;
      let res = await this.$axios.get(url);
      if (res.data.success) {
        this.data = res.data.data;
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
.main-section {
  background-color: rgb(250, 250, 250);
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.content {
  padding: 10px;
}
.main-section-image {
  width: 100%;
  border-radius: 4px;
}
.main-section-image:hover {
  width: 100%;
  transform: translateY(-1px);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
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
.entry-date.published {
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
.time-to-read {
  font-family: "AkzidenzGrotesk-Bold";
  font-size: 12px;
  padding: 8px;
  opacity: 1;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  text-decoration: none;
  -webkit-box-pack: center;
  justify-content: center;
  white-space: nowrap;
  border-radius: 3px;
  border: none;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  box-shadow: rgb(0 0 0 / 15%) 0px 0px 15px;
  transform: translateY(0px);
  transition: all 0.2s ease-in-out 0s;
}

.section {
  background-color: rgb(250, 250, 250);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-top: rgba(0, 0, 0, 0.1);
}
.section-image {
  width: 100%;
  border-radius: 4px;
}
.section-image:hover {
  width: 100%;
  transform: translateY(-1px);
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
}
.section-main-header {
  margin-top: 10px;
  color: rgb(51, 51, 51);
  line-height: 97%;
  font-size: 21px;
  font-weight: 600;
  font-family: "AkzidenzGrotesk-Bold";
}
.section-right {
  padding-right: 20px;
}
</style>