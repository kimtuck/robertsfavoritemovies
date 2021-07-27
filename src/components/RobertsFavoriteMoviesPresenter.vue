<template>
  <RobertsFavoriteMoviesView
    :movies="movies"
    :favorite="favorite"
    @select="selectMovie"
  />
</template>

<script>
import RobertsFavoriteMoviesView from "./RobertsFavoriteMoviesView.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "RobertsFavoriteMoviesPresenter",
  components: {
    RobertsFavoriteMoviesView,
  },
  computed: {
    ...mapGetters(["movies", "favorite"]),
  },
  methods: {
    ...mapActions(["select"]),
    selectMovie(name) {
      this.select(name);
    },
  },
};
</script>
