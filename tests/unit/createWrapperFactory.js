import { shallowMount } from "@vue/test-utils";

const createWrapperFactory = (component, defaultProps) => {
  return async (props, options = {}) => {
    const wrapper = await shallowMount(component, {
      ...{
        propsData: {
          ...defaultProps,
          ...props,
        },
      },
      ...options,
    });
    return wrapper;
  };
};

export default createWrapperFactory;
