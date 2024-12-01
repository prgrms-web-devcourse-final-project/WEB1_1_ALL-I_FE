import type { Meta, StoryObj } from "@storybook/react";
import GroupSelect from "@/components/common/SelectList/Group/GroupSelect";
import { GroupMember } from "@/types/select.types";

const groupMembers: GroupMember[] = [
  {
    value: "1",
    label: "이가영",
    profileImage: "https://via.placeholder.com/120",
  },
  {
    value: "2",
    label: "조준영",
    profileImage: "https://via.placeholder.com/120",
  },
  {
    value: "3",
    label: "김우종",
    profileImage: "https://via.placeholder.com/120",
  },
  {
    value: "4",
    label: "서진혁",
    profileImage: "https://via.placeholder.com/120",
  },
];

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
    groupMembers: {
      control: false,
      description: "선택 가능한 그룹원 목록입니다.",
    },
    selectedMembers: {
      control: false,
      description: "현재 선택된 그룹원의 배열입니다.",
    },
    onMemberChange: { action: "onMemberChange" },
  },
} satisfies Meta<typeof GroupSelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    groupMembers,
    selectedMembers: [],
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
    groupMembers,
    selectedMembers: [groupMembers[0], groupMembers[2]],
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
