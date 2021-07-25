import { shallowMount } from "@vue/test-utils";
import RobertsFavoriteMoviesView from "./RobertsFavoriteMoviesView.vue";
import MovieTile from "./MovieTile.vue";

describe("RobertsFavoriteMoviesView", () => {
  describe("props", () => {
    test("renders a MovieTile for each movie", async () => {
      const movies = [
        { name: "one", art: "Airplane" },
        { name: "two", art: "Ferris" },
      ];
      const wrapper = await shallowMount(RobertsFavoriteMoviesView, {
        propsData: {
          movies,
          favorite: "",
        },
      });
      expect(wrapper.findAllComponents(MovieTile).length).toBe(movies.length);
    });
    describe("MovieTile props", () => {
      test("name", async () => {
        const movies = [{ name: "one", art: "Airplane" }];
        const wrapper = await shallowMount(RobertsFavoriteMoviesView, {
          propsData: {
            movies,
            favorite: "",
          },
        });
        expect(wrapper.findComponent(MovieTile).props("name")).toBe(
          movies[0].name
        );
      });
      test("imgUrl", async () => {
        const movies = [{ name: "one", art: "Airplane" }];
        const wrapper = await shallowMount(RobertsFavoriteMoviesView, {
          propsData: {
            movies,
            favorite: "",
          },
        });
        expect(wrapper.findComponent(MovieTile).props("imgUrl")).toBe(
          "img/Airplane.jpg"
        );
      });
      test.each`
        favorite | isFavorite
        ${"one"} | ${true}
        ${"two"} | ${false}
      `(
        'When movie name is "one" and favorite is $favorite, then isFavorite is $isFavorite',
        async ({ favorite, isFavorite }) => {
          const movies = [{ name: "one", art: "Airplane" }];
          const wrapper = await shallowMount(RobertsFavoriteMoviesView, {
            propsData: {
              movies,
              favorite,
            },
          });
          expect(wrapper.findComponent(MovieTile).props("isFavorite")).toBe(
            isFavorite
          );
        }
      );
    });
    describe("events", () => {
      test("When MovieTile emits select, emits select with the movie title", async () => {
        const movies = [{ name: "one", art: "Airplane" }];
        const wrapper = await shallowMount(RobertsFavoriteMoviesView, {
          propsData: {
            movies,
            favorite: "",
          },
        });
        wrapper.findComponent(MovieTile).vm.$emit("select", "one");
        expect(wrapper.emitted("select")).toBeTruthy();
        expect(wrapper.emitted("select")[0]).toStrictEqual(["one"]);
      });
    });
  });
  describe.skip("movie tiles", () => {});
  describe.skip("props passed to child compnents", () => {});
  describe.skip("events", () => {});
});
