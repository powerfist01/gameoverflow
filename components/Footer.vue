<template>
  <div class="footer">
    <b-container fluid>
      <div class="information">
        <div class="coll">
          <ul>
            <h6>GAME OVERFLOW</h6>
            <li><NuxtLink to="/questions"><p>Questions</p></NuxtLink></li>
            <li><NuxtLink to="/jobs"><p>Jobs</p></NuxtLink></li>
            <li><NuxtLink to="/mobile"><p>Mobile</p></NuxtLink></li>
            <li><NuxtLink to="/help"><p>Help</p></NuxtLink></li>
          </ul>
        </div>

        <div class="coll">
          <ul>
            <h6>PRODUCTS</h6>
            <li><NuxtLink to="/products/teams"><p>Teams</p></NuxtLink></li>
            <li><NuxtLink to="/products/talents"><p>Talent</p></NuxtLink></li>
            <li><NuxtLink to="/products/advertisement"><p>Advertising</p></NuxtLink></li>
            <li><NuxtLink to="/products/enterprise"><p>Enterprise</p></NuxtLink></li>
          </ul>
        </div>

        <div class="coll">
          <ul>
            <h6>COMPANY</h6>
            <li><NuxtLink to="/company/about"><p>About</p></NuxtLink></li>
            <li><NuxtLink to="/company/careers"><p>Work Here</p></NuxtLink></li>
            <li><NuxtLink to="/company/privacy"><p>Privacy Policy</p></NuxtLink></li>
            <li><NuxtLink to="/company/contact"><p>Contact Us</p></NuxtLink></li>
          </ul>
        </div>

        <div class="coll">
          <p>
            <a href="/blogs">Blogs</a> 
            <a href="https://www.facebook.com/gameoverflow">Facebook</a> 
            <a href="https://www.twitter.com/gameoverflow">Twitter</a> 
            <a href="https://www.instagram.com/gameoverflow">Instagram</a>
          </p>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer{
  bottom: 0px;
}
p {
  color: #fff;
  font-size: 12px;
}
p:hover{
  color: #bbc0c4;
}
h6 {
  color: #bbc0c4;
}
.footer {
  background-color: #242729;
}
.information {
  color: black;
  padding-top: 70px;
  z-index: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
ul {
  list-style-type: none;
}
li p {
  font-size: 14px;
}
.coll{
  width: 200px;
  margin: 0px auto;
}
a{
  text-decoration: none;
  color: #fff;
}
a:hover{
  color: #bbc0c4;
}
</style>