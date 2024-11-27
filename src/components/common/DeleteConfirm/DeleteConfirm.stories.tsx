import type { Meta, StoryObj } from "@storybook/react";
import DeleteConfirm from "@/components/common/DeleteConfirm/DeleteConfirm";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "Components/Common/DeleteConfirm/DeleteConfirm",
  component: DeleteConfirm,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 삭제 확인 모달입니다.",
      },
    },
  },
  argTypes: {
    text: { control: "text" },
    onClickCancel: { action: "clicked" },
    onClickDelete: { action: "clicked" },
  },
} satisfies Meta<typeof DeleteConfirm>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    text: "정말 삭제하시겠습니까?",
    onClickCancel: () => {},
    onClickDelete: () => {},
  },
};
