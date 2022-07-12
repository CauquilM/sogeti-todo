<template>
  <v-app>
    <v-main class="indigo darken-3 pa-0 overflow-hidden">
      <v-row>
        <v-spacer/>
        <v-col xs="4" sm="8" md="6" >
          <router-view />
        </v-col>
        <v-spacer/>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: "App",
};
</script>
<style></style>
