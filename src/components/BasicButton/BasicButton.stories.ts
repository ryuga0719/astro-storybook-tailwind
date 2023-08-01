import type { StoryFn, Meta } from '@storybook/vue3';
import mdx from './BasicButton.mdx';
import BasicButton from './BasicButton.vue';

export default {
  title: 'Components/BasicButton',
  component: BasicButton,
  parameters: {
    docs: {
      page: mdx
    },
    controls: { hideNoControlsWarning: true } // Controlsで制御する項目がない場合、警告メッセージを非表示にする
  },
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
} as Meta;

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
