<template>
  <div class="footer">
    <b-container fluid>
      <div class="information">
        <div class="coll">
          <ul>
            <h6>GAME OVERFLOW</h6>
            <li><p>Questions</p></li>
            <li><p>Jobs</p></li>
            <li><p>Salary Calculator</p></li>
            <li><p>Mobile</p></li>
            <li><p>Help</p></li>
          </ul>
        </div>

        <div class="coll">
          <ul>
            <h6>PRODUCTS</h6>
            <li><p>Teams</p></li>
            <li><p>Talent</p></li>
            <li><p>Advertising</p></li>
            <li><p>Enterprise</p></li>
          </ul>
        </div>

        <div class="coll">
          <ul>
            <h6>COMPANY</h6>
            <li><p>About</p></li>
            <li><p>Work Here</p></li>
            <li><p>Privacy Policy</p></li>
            <li><p>Contact Us</p></li>
          </ul>
        </div>

        <div class="coll">
          <p>
            <a href="https://blogs.gameoverflow.com/">Blogs</a> 
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
p {
  color: #848d95;
  font-size: 12px;
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