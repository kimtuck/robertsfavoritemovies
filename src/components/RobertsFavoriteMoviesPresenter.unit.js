import RobertsFavoriteMoviesPresenter from "./RobertsFavoriteMoviesPresenter.vue";
import RobertsFavoriteMoviesView from "./RobertsFavoriteMoviesView.vue";
import Vuex from "vuex";
import createWrapperFactory from "../../tests/unit/createWrapperFactory";
import { createLocalVue } from "@vue/test-utils";
import { movies } from "../../tests/unit/data";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("RobertsFavoriteMoviesPresenter", () => {
  const createWrapper = createWrapperFactory(
    RobertsFavoriteMoviesPresenter,
    {}
  );
  let store;
  let getters;
  let actions;

  beforeEach(() => {
    getters = {
      movies: () => movies,
      favorite: () => movies[0].name,
    };

    actions = {
      select: jest.fn(),
    };

    store = new Vuex.Store({
      getters,
      actions,
    });
  });

  describe("Getters", () => {
    test.each`
      getter        | prop          | value
      ${"movies"}   | ${"movies"}   | ${movies}
      ${"favorite"} | ${"favorite"} | ${movies[0].name}
    `("Passes getter $getter to $prop prop", async ({ prop, value }) => {
      const wrapper = await createWrapper({}, { store, localVue });
      expect(
        wrapper.findComponent(RobertsFavoriteMoviesView).props(prop)
      ).toStrictEqual(value);
    });
  });

  describe("actions", () => {
    test.each`
      action      | event       | payload
      ${"select"} | ${"select"} | ${movies[0].name}
    `(
      "dispatches $action when child emits $event with payload $payload",
      async ({ action, event, payload }) => {
        const wrapper = await createWrapper({}, { store, localVue });
        wrapper
          .findComponent(RobertsFavoriteMoviesView)
          .vm.$emit(event, payload);
        expect(actions[action]).toHaveBeenCalledTimes(1);
        expect(actions[action]).toHaveBeenNthCalledWith(
          1,
          expect.anything(),
          payload
        );
      }
    );
  });
});
