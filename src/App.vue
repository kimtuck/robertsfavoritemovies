<template>
  <div id="app">
    <RobertsFavoriteMoviesPresenter />
  </div>
</template>

<script>
import RobertsFavoriteMoviesPresenter from "./components/RobertsFavoriteMoviesPresenter.vue";

export default {
  name: "App",
  components: {
    RobertsFavoriteMoviesPresenter,
  },
  mounted() {
    this.$store.dispatch("loadFavorite");
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
