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

    test.skip.each`
      isFavorite | expected
      ${true}    | ${true}
      ${false}   | ${false}
    `(
      "isFavorite: When isFavorite is $isFavorite, the radio button is checked: $expected",
      async ({ isFavorite, expected }) => {
        const wrapper = await shallowMount(MovieTile, {
          propsData: { name, imgUrl, isFavorite },
        });
        console.log(wrapper.find("[data-q-radio]").attributes());
        expect(wrapper.find("[data-q-radio]").element.selected).toBe(expected);
      }
    );
  });

  describe("events", () => {
    test('Emits event "select" with the name of the movie when the radio button is selected', async () => {
      const wrapper = await shallowMount(MovieTile, {
        propsData: { name, imgUrl, isFavorite: false },
      });
      await wrapper.find("[data-q-radio]").trigger("click");
      expect(wrapper.emitted("select")).toBeTruthy();
      expect(wrapper.emitted("select")[0]).toStrictEqual([name]);
    });
  });
});
