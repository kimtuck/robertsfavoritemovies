<template>
  <div>
    <h1 class="text-6xl">Robert's Favorite Movies</h1>
    <h1 class="text-4xl">Current favorite: {{ favorite }}</h1>

    <div class="flex items-center mt-6">
      <MovieTile
        v-for="movie in movies"
        :key="movie.name"
        class="w-1/2 m-4 center flex items-center"
        :movie="movie"
        :checked="checked(movie)"
        @select="select"
      />
    </div>
  </div>
</template>

<script>
import MovieTile from "./MovieTile.vue";
export default {
  name: "RobertsFavoriteMoviesView",
  components: {
    MovieTile,
  },
  props: {
    movies: {
      type: Array,
      required: true,
    },
    favorite: {
      type: String,
      required: true,
    },
  },
  methods: {
    checked(movie) {
      return movie.name === this.favorite;
    },
    select(name) {
      this.$emit("select", name);
    },
  },
};
</script>
