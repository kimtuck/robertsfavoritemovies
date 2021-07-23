<template>
  <div>
    <h1 class="text-8xl">Robert's Favorite Movies</h1>
    <h1 class="text-8xl">Current: {{ current }}</h1>

    <div class="flex items-center mt-6">
      <div
        v-for="movie in movies"
        :key="movie.name"
        class="border-2 border-black p-4 w-1/2 m-4 center flex items-center"
      >
        <img :src="imgUrl(movie)" />
        <span class="p-4">
          <input
            class="border-0 w-full h-6"
            type="radio"
            name="movie"
            :value="movie"
            :checked="checked(movie)"
            @change="select(movie)"
          />
          <span class="ml-4 text-4xl">{{ movie.name }}</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { getFavorite, saveFavorite } from "../api/api.js";

export default {
  name: "RobertsFavoriteMovies",
  computed: {
    movies() {
      return this.$store.state.movies;
    },
    current() {
      return this.$store.state.favorite;
    },
  },
  methods: {
    imgUrl(movie) {
      return require(`@/assets/${movie.art}.jpg`);
    },
    checked(movie) {
      return movie.name === this.$store.state.favorite;
    },
    select(movie) {
      this.$store.dispatch("select", movie.name);
      saveFavorite(movie.name);
    },
  },
  created() {
    const favorite = getFavorite();
    if (favorite) {
      this.$store.dispatch("select", favorite);
    }
  },
};
</script>
