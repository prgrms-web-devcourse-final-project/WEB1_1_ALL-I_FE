import type { Meta, StoryObj } from "@storybook/react";
import TextButton from "@/components/common/TextButton/TextButton";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "Components/common/TextButton/TextButton",
  component: TextButton,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 텍스트 형식의 버튼입니다.",
      },
    },
    argTypes: {
      size: {
        control: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    children: "기본 테스트",
    size: "small",
  },
};

// size별 스토리
export const Small: Story = {
  args: {
    children: "기본 테스트",
    size: "small",
  },
};

export const Medium: Story = {
  args: {
    children: "기본 테스트",
    size: "medium",
  },
};

export const Large: Story = {
  args: {
    children: "기본 테스트",
    size: "large",
  },
};
