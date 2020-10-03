<template>
  <div class="news">
    <b-container>
      <h1 class="text-center">Latest News</h1>
      <div>
        <div class="mt-4">
          <b-card
            img-src="https://placekitten.com/200/200"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              India has a bright future in Valorant because of accessible PC
              system requirements: Dr. Rushindra Sinha, CEO & co-founder of
              Global Esports.
            </b-card-text>
            <b-card-text>
              3 days ago
            </b-card-text>
            <b-card-text>
              <ul class="tags">
                <li><a href="#" class="tag">PC Games</a></li>
                <li><a href="#" class="tag">Valorant</a></li>
              </ul>
            </b-card-text>
          </b-card>
        </div>

        <div class="mt-4">
          <b-card
            img-src="https://placekitten.com/200/200"
            img-alt="Card image"
            img-left
            class="mb-3"
          >
            <b-card-text>
              PUBG Mobile: What is the DDoS attack affecting servers across the world?
            </b-card-text>
            <b-card-text>
              5 days ago
            </b-card-text>
            <b-card-text>
              <ul class="tags">
                <li><a href="#" class="tag">PC Games</a></li>
                <li><a href="#" class="tag">PUBG</a></li>
              </ul>
            </b-card-text>
          </b-card>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "News"
};
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
  background: rgb(175, 29, 29);
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
  background-color: rgb(0, 153, 255);
  color: white;
}

.tag:hover::after {
  border-left-color: rgb(0, 153, 255);
}
</style>
