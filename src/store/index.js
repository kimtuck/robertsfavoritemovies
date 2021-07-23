import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [
      {
        name: "The Matrix",
        art: "TheMatrix",
      },
      { name: "Airplane", art: "Airplane" },
      {
        name: "Taken",
        art: "Taken",
      },
      {
        name: "Ferris Bueler's Day Off",
        art: "Ferris",
      },
    ],
    favorite: "The Matrix",
  },
  mutations: {
    select(state, name) {
      this.state.favorite = name;
    },
  },
  actions: {
    select({ commit }, name) {
      commit("select", name);
    },
  },
  modules: {},
});
