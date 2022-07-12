<template>
  <div class="main">
    <div>
      <h1 class="white--text py-3">Todo Details</h1>
      <v-btn router to='/'>Return to main page</v-btn>
      <h2 class="white--text testDetailsTitle py-3">Title: {{ title }}</h2>
      <p class="white--text testDetailsDesc" v-if="description != ''">Description: {{ description }}</p>
      <p v-else>Without Description</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "TodoDetails",
  data() {
    return {
      title: "",
      description: "",
    };
  },

  created() {
    this.title = this.$route.params.title;
    this.description = this.$route.params.description;
  },
};
</script>
<style>
.main {
  text-align: center;
}
</style>
