<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import fetch from "../src/config/fetch.js";
import { auth } from "../static/auth.js";
export default {
  name: "app",
  created() {
  }
};
</script>

<style lang="sass">
@import "../static/reset.css";
</style>
