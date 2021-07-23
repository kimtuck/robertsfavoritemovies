<template>
  <div class="border-2 border-black p-4">
    <img :src="imgUrl(movie)" />
    <span class="p-4">
      <input
        class="border-0 w-full h-6"
        type="radio"
        name="movie"
        :value="movie"
        :checked="checked"
        @change="select(movie)"
      />
      <span class="ml-4 text-4xl">{{ movie.name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "MovieTile",
  props: {
    movie: {
      type: Object,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    imgUrl(movie) {
      return require(`@/assets/${movie.art}.jpg`);
    },

    select(movie) {
      this.$emit("select", movie.name);
    },
  },
};
</script>
