import type { Meta, StoryObj } from "@storybook/react";
import GroupSelect from "@/components/common/SelectList/Group/GroupSelect";

const meta = {
  title: "Components/common/SelectList/Group/GroupSelect",
  component: GroupSelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "그룹원을 선택할 수 있는 멀티 셀렉트 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    groupId: {
      control: false,
    },
    selectedMembersId: {
      control: false,
    },
    onMemberChange: { action: "onMemberChange" },
  },
} satisfies Meta<typeof GroupSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    groupId: "1",
    selectedMembersId: [],
    onMemberChange: (selected) => console.log(selected),
  },
  parameters: {
    docs: {
      description: {
        story: "그룹원을 선택할 수 있는 기본 컴포넌트입니다.",
      },
    },
  },
};

// 일부 그룹원이 선택된 상태
export const WithSelectedMembers: Story = {
  args: {
    groupId: "1",
    selectedMembersId: [],
    onMemberChange: (selected) => console.log(selected),
  },
  parameters: {
    docs: {
      description: {
        story: "일부 그룹원이 선택된 상태를 보여줍니다.",
      },
    },
  },
};
