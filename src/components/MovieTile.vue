<template>
  <div class="border-2 border-black p-4">
    <img data-q-img :src="imgUrl" />
    <span class="p-4">
      <input
        data-q-radio
        class="border-0 w-full h-6"
        type="radio"
        name="movie"
        :value="name"
        :checked="isFavorite"
        @change="select(name)"
      />
      <span data-q-name class="ml-4 text-4xl">{{ name }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "MovieTile",
  props: {
    name: {
      type: String,
      required: true,
    },
    imgUrl: {
      type: String,
      required: true,
    },
    isFavorite: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    select(name) {
      this.$emit("select", name);
    },
  },
};
</script>
