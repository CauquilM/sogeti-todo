<template>
  <div class="main">
    <h1>Todo Details</h1>
    <h2>Title: {{ title }}</h2>
    <p v-if="description != ''">Description: {{ description }}</p>
    <p v-else>Without Description</p>
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
