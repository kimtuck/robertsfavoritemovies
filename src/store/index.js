import Vue from "vue";
import Vuex from "vuex";
import { getFavorite, saveFavorite } from "../api/api.js";

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
    loadFavorite({ dispatch }) {
      const favorite = getFavorite();
      if (favorite) {
        dispatch("select", favorite);
      }
    },
    select({ commit }, name) {
      commit("select", name);
      saveFavorite(name);
    },
  },
  modules: {},
});
