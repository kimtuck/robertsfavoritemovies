import { shallowMount } from "@vue/test-utils";
import MovieTile from "./MovieTile.vue";

describe("MovieTile", () => {
  let name;
  let imgUrl;

  beforeEach(() => {
    name = "Airplane";
    imgUrl = "imageUrl";
  });

  describe("props", () => {
    test("imgUrl", async () => {
      const wrapper = await shallowMount(MovieTile, {
        propsData: { name, imgUrl, isFavorite: false },
      });
      expect(wrapper.find("[data-q-img]").attributes("src")).toBe(imgUrl);
    });

    test("name", async () => {
      const wrapper = await shallowMount(MovieTile, {
        propsData: { name, imgUrl, isFavorite: false },
      });
      expect(wrapper.find("[data-q-name]").text()).toBe("Airplane");
    });

    test.each`
      isFavorite | expected
      ${true}    | ${true}
      ${false}   | ${false}
    `(
      "isFavorite: When isFavorite is $isFavorite, the tile indicates it is a favorite: $expected",
      async ({ isFavorite, expected }) => {
        const wrapper = await shallowMount(MovieTile, {
          propsData: { name, imgUrl, isFavorite },
        });
        expect(wrapper.find("div").classes("bg-gray-300")).toBe(expected);
      }
    );
  });

  describe("events", () => {
    test('Emits event "select" with the name of the movie when the radio button is selected', async () => {
      const wrapper = await shallowMount(MovieTile, {
        propsData: { name, imgUrl, isFavorite: false },
      });
      await wrapper.find("div").trigger("click");
      expect(wrapper.emitted("select")).toBeTruthy();
      expect(wrapper.emitted("select")[0]).toStrictEqual([name]);
    });
  });
});
