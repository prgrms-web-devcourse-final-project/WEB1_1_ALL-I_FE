import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "@/components/common/Toggle/Toggle";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "Components/Common/Toggle/Toggle",
  component: Toggle,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 토글 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    type: { control: "select", options: ["time", "alarm"] },
    isOn: { control: "boolean" },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    type: "time",
    isOn: true,
    onClick: () => {},
  },
};
