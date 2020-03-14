import Day from '../src/components/Calendar/Day';

export default {
  title: 'Calendar',
  // component: Day,
};

export const toStorybook = () => ({
  components: { Day },
  template: '<day id="1"> </day>',
});

toStorybook.story = {
  name: 'Day not selected',
};
