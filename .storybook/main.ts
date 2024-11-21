import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    // docs랑 controls는 essentials에 포함되어 있어서 따로 추가 안해도 됨?
    // "@storybook/addon-docs",
    // "@storybook/addon-controls",
    "@storybook/addon-links",
    // "@storybook/testing-library",
    // 전역 css 적용을 storybook 환경에 적용하기 위해
    // 전역 css 파일 생기면 preview.ts 파일에 설정 추가
    "@storybook/addon-styling",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
