import type { Meta, StoryObj } from "@storybook/react";
import CategorySelect from "@/components/common/SelectList/Category/CategorySelect";
import { OptionType } from "@/components/common/SelectList/Category/CategorySelect";

// 카테고리 데이터 예시
const categoryOptions: OptionType[] = [
  { name: "운동", color: "#FF5733" },
  { name: "공부", color: "#33FF57" },
  { name: "스터디", color: "#3357FF" },
  { name: "프로젝트", color: "#FFC300" },
];

const meta = {
  title: "Components/common/SelectList/Category/CategorySelect",
  component: CategorySelect,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "카테고리를 선택할 수 있는 드롭다운 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    options: {
      control: false,
      description: "선택 가능한 카테고리 목록입니다.",
    },
    onCategoryChange: {
      action: "categoryChanged",
      description: "선택된 카테고리가 변경되었을 때 호출됩니다.",
    },
  },
} satisfies Meta<typeof CategorySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    options: categoryOptions,
    onCategoryChange: (selectedCategory) => console.log(selectedCategory), // 필수 prop 추가
  },
  parameters: {
    docs: {
      description: {
        story: "카테고리를 선택할 수 있는 기본 드롭다운 컴포넌트입니다.",
      },
    },
  },
};

// 선택된 카테고리가 있는 경우
export const WithSelectedCategory: Story = {
  args: {
    options: categoryOptions,
    onCategoryChange: (selectedCategory) => console.log(selectedCategory), // 필수 prop 추가
  },
  render: (args) => (
    <CategorySelect
      {...args}
      onCategoryChange={(category) => console.log("선택된 카테고리:", category)}
    />
  ),
  parameters: {
    docs: {
      description: {
        story: "운동 카테고리가 기본으로 선택된 상태를 보여줍니다.",
      },
    },
  },
};
