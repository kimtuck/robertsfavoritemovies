import createWrapperFactory from "../../tests/unit/createWrapperFactory";
import RobertsFavoriteMoviesView from "./RobertsFavoriteMoviesView.vue";
import MovieTile from "./MovieTile.vue";
import { movies } from "../../tests/unit/data";

describe("RobertsFavoriteMoviesView", () => {
  const createWrapper = createWrapperFactory(RobertsFavoriteMoviesView, {
    movies,
    favorite: "",
  });

  describe("props", () => {
    test("renders MovieTile for each movie", async () => {
      const wrapper = await createWrapper();
      expect(wrapper.findAllComponents(MovieTile).length).toBe(movies.length);
    });

    describe("MovieTile props", () => {
      test("passes name to the name prop", async () => {
        const wrapper = await createWrapper();
        expect(wrapper.findComponent(MovieTile).props("name")).toBe(
          movies[0].name
        );
      });

      test("passes imgUrl to the imgUrl prop", async () => {
        const wrapper = await createWrapper();
        expect(wrapper.findComponent(MovieTile).props("imgUrl")).toBe(
          "img/Airplane.jpg"
        );
      });
      test.each`
        favorite          | isFavorite
        ${movies[0].name} | ${true}
        ${movies[1].name} | ${false}
      `(
        "passes isFavorite as $isFavorite to isFavorite prop based on matching the first movie name to $favorite",
        async ({ favorite, isFavorite }) => {
          const wrapper = await createWrapper({ favorite });
          expect(
            wrapper.findAllComponents(MovieTile).at(0).props("isFavorite")
          ).toStrictEqual(isFavorite);
        }
      );
    });
    describe("events", () => {
      test("When MovieTile emits select, emits select with the movie title", async () => {
        const wrapper = await createWrapper();
        wrapper.findComponent(MovieTile).vm.$emit("select", "one");
        expect(wrapper.emitted("select")).toBeTruthy();
        expect(wrapper.emitted("select")[0]).toStrictEqual(["one"]);
      });
    });
  });
});
