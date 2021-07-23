<template>
  <div id="app">
    <roberts-favorite-movies />
  </div>
</template>

<script>
import RobertsFavoriteMovies from "./components/RobertsFavoriteMovies.vue";

export default {
  name: "App",
  components: {
    RobertsFavoriteMovies,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
