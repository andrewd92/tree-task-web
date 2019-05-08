import { shallowMount } from '@vue/test-utils';
import Main from '@/components/Main/Main.vue';

describe('Main.vue', () => {
  describe('I can see lists and tasks', () => {
    it('renders li for each item in props.list', () => {
      const list = ['todo', 'important'];
      const wrapper = shallowMount(Main, {
        propsData: { list },
      });
      expect(wrapper.findAll('li')).toHaveLength(list.length);
    });

    it('renders li with values in props.list', () => {
      const list = ['todo', 'important'];
      const wrapper = shallowMount(Main, {
        propsData: { list },
      });

      const liArray = wrapper.findAll('li');

      Object.keys(list).forEach((key) => {
        expect(liArray.at(key).text()).toBe(list[key]);
      });
    });
  });
});
