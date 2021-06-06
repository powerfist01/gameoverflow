<template>
  <div>
    <div class="blog-posts">
      <div class="post">
        <img
          src="https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/1.jpg"
          alt=""
          class="post-img"
        />
        <div class="post-content">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            soluta?
          </h3>
          <span class="date">July 13, 2020</span>
        </div>
      </div>

      <div class="post">
        <img
          src="https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/2.jpg"
          alt=""
          class="post-img"
        />
        <div class="post-content">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            soluta?
          </h3>
          <span class="date">July 13, 2020</span>
        </div>
      </div>

      <div class="post">
        <img
          src="https://fadzrinmadu.github.io/hosted-assets/awesome-hover-effect-on-blog-posts-using-html-and-css/3.jpg"
          alt=""
          class="post-img"
        />
        <div class="post-content">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis,
            soluta?
          </h3>
          <span class="date">July 13, 2020</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
body{
  background-color: #444;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.blog-posts{
  width: min(1200px, 100%);
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  cursor: pointer;
}

.post{
  width: calc(33% - 10px);
  overflow: hidden;
}

.post-img{
  width: 100%;
  border-radius: 6px;
  transition: .3s linear;
}

.post-content{
  background-color: #e1ebffdd;
  margin: 0 20px;
  padding: 30px;
  border-radius: 6px;
  transform: translateY(-60px);
  transition: .3s linear;
}

.post-content h3{
  font-size: 16px;
  margin-bottom: 10px;
}

.date{
  font-size: 15px;
  font-style: italic;
  color: #e77f67;
}

.post:hover .post-img{
  transform: translateY(20px);
}

.post:hover .post-content{
  transform: translateY(-80px);
}

@media screen and (max-width: 1200px){
  .blog-posts{
    justify-content: center;
  }
  .post{
    width: min(600px, 100%);
  }
}
</style>