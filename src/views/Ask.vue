<template>
  <div class="main">
    <div class="container">
      <p class="header">
        Ask a public question
      </p>

      <div class="question">
        <label class="title" for="title"
          >Title
          <p class="description">
            Be specific and imagine you’re asking a question to another person
          </p>
        </label>
        <b-form-input
          id="title"
          placeholder="e.g. How can I check the ping in PUBG Lite?"
        ></b-form-input>

        <label class="title" for="body"
          >Body
          <p class="description">
            Include all the information someone would need to answer your
            question
          </p>
        </label>
        <b-form-textarea
          id="textarea-rows"
          placeholder="Tall textarea"
          rows="8"
        ></b-form-textarea>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  margin: 20px auto 20px auto;
}
p.header {
  font-size: 30px;
  color: rgb(41, 40, 40);
}
label.title {
  font-size: 18px;
  font-weight: 700;
}
p.description {
  font-size: 15px;
  font-weight: 500;
}
</style>