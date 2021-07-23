<template>
  <RobertsFavoriteMoviesView
    :movies="movies"
    :favorite="favorite"
    @select="select"
  />
</template>

<script>
import RobertsFavoriteMoviesView from "./RobertsFavoriteMoviesView.vue";
export default {
  name: "RobertsFavoriteMoviesPresenter",
  components: {
    RobertsFavoriteMoviesView,
  },
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    favorite() {
      return this.$store.state.favorite;
    },
  },
  methods: {
    select(name) {
      this.$store.dispatch("select", name);
    },
  },
};
</script>
