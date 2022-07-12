<template>
  <div class="main">
    <h1>Todo Details</h1>
    <h2>Title: {{ title }}</h2>
    <p>Description: {{ description }}</p>
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
    if (this.$route.description != "") {
      this.description = this.$route.params.description;
    } else {
      this.description = "Sans Description";
    }
  },
};
</script>
<style>
.main {
  text-align: center;
}
</style>
