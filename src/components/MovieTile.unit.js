import createWrapperFactory from "../../tests/unit/createWrapperFactory";
import MovieTile from "./MovieTile.vue";

describe("MovieTile", () => {
  const name = "Airplane!";
  const imgUrl = "imgUrl";
  const createWrapper = createWrapperFactory(MovieTile, {
    name,
    imgUrl,
    isFavorite: false,
  });

  describe("props", () => {
    test("renders correct image src for prop imgUrl", async () => {
      const wrapper = await createWrapper();
      expect(wrapper.find("[data-q-img]").attributes("src")).toBe(imgUrl);
    });

    test("renders name for prop name", async () => {
      const wrapper = await createWrapper();
      expect(wrapper.find("[data-q-name]").text()).toBe(name);
    });

    test.each`
      isFavorite | expected
      ${true}    | ${true}
      ${false}   | ${false}
    `(
      "renders the tile appearance as isFavorite: $expected when isFavorite prop is $isFavorite",
      async ({ isFavorite, expected }) => {
        const wrapper = await createWrapper({ isFavorite });
        expect(wrapper.find("div").classes("bg-gray-300")).toBe(expected);
      }
    );
  });

  describe("events", () => {
    test('emits event "select" with the name of the movie when the tile is clicked, ', async () => {
      const wrapper = await createWrapper();
      await wrapper.find("div").trigger("click");
      expect(wrapper.emitted("select")).toBeTruthy();
      expect(wrapper.emitted("select")[0]).toStrictEqual([name]);
    });
  });
});
