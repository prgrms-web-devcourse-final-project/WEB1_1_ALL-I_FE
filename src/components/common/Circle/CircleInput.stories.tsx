import type { Meta, StoryObj } from "@storybook/react";
import CircleInput from "@/components/common/Circle/CircleInput";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "components/common/Circle/CircleInput",
  component: CircleInput,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 카테고리 설정에서 보여주는 색상.",
      },
    },
  },
  argTypes: {
    defaultColor: { control: "color" },
    onChange: { action: "onChange" },
  },
} satisfies Meta<typeof CircleInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    defaultColor: "black",
    onChange: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "기본 테스트 컴포넌트입니다.",
      },
    },
  },
};
