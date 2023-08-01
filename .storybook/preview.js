/** @type { import('@storybook/vue3').Preview } */
import '../src/assets/css/global.scss';
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
    source: {
      state: 'open',
    },
  },
  },
};

export default preview;
