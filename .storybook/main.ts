import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: ['../.storybook/Introduction.stories.tsx', '../src/**/*.stories.@(ts|tsx)'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    const base = process.env.STORYBOOK_BASE_PATH ?? '/';
    return { ...config, base };
  },
};

export default config;
