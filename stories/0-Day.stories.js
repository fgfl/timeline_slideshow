import Day from '../src/components/Calendar/Day';

export default {
  title: 'Calendar',
  // component: Day,
};

export const toStorybook = () => ({
  components: { Day },
  template: '<day> </day>',
});

toStorybook.story = {
  name: 'Day not selected',
};
