<template>
  <div
    class="p-4 border-2 border-black"
    :class="{ 'bg-gray-300': isFavorite }"
    @click="select"
  >
    <img data-q-img :src="imgUrl" />
    <span class="p-4">
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
    select() {
      this.$emit("select", this.name);
    },
  },
};
</script>
