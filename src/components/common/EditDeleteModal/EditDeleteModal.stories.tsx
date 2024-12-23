import type { Meta, StoryObj } from "@storybook/react";
import EditDeleteModal from "@/components/common/EditDeleteModal/EditDeleteModal";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "Components/Common/EditDeleteModal/EditDeleteModal",
  component: EditDeleteModal,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component:
          "이 컴포넌트는 수정/삭제 모달입니다. 위치는 절대 위치로 설정해야 합니다.",
      },
    },
  },
  argTypes: {
    top: {
      control: "number",
    },
    bottom: {
      control: "number",
    },
    left: {
      control: "number",
    },
    right: {
      control: "number",
    },
  },
} satisfies Meta<typeof EditDeleteModal>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary 스토리
export const Default: Story = {
  args: {
    top: 0,
    left: 0,
    onClickEdit: () => {},
    onClickDelete: () => {},
  },
};
