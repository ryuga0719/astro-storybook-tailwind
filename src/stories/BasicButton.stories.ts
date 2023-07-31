// Button.stories.ts
import { defineComponent } from 'vue';
import BasicButton from '../components/BasicButton/BasicButton.vue';
import type { StoryFn } from '@storybook/vue3';

export default {
  title: 'Example/BasicButton',
  component: BasicButton,
  argTypes: {
    type: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'warning', 'error'],
      },
    },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
    additionalClass: { control: 'text' },
    disabled: { control: 'boolean' },
    rounded: { control: 'boolean' },
  },
};

const Template = (
  args: Record<string, unknown>,
  { argTypes }: { argTypes: Record<string, unknown> }
) => ({
  components: { BasicButton },
  setup() {
    return { args };
  },
  template:
    '<BasicButton v-bind="args" @click="args.onClick">Button</BasicButton>',
});

export const Primary: StoryFn = Template.bind({});
Primary.args = {
  type: 'primary',
  size: 'md',
  additionalClass: '',
  disabled: false,
  rounded: false,
};

export const Secondary: StoryFn = Template.bind({});
Secondary.args = {
  type: 'secondary',
  size: 'md',
  additionalClass: '',
  disabled: false,
  rounded: false,
};
