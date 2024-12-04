import type { Meta, StoryObj } from "@storybook/react";
import ScheduleItem from "@/components/common/ScheduleItem/ScheduleItem";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "components/common/ScheduleList/ScheduleItem",
  component: ScheduleItem,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 카테고리 리스트에서 일정을 담당합니다.",
      },
    },
  },
} satisfies Meta<typeof ScheduleItem>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    id: "1",
    title: "기말고사",
    startDate: "2023-12-16",
    endDate: "2023-12-20",
    startTime: null,
    endTime: null,
    isAlarmed: false,
    categoryId: "1",
    color: "#FFE3E1",
    onDelete: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "기본 테스트 컴포넌트입니다.",
      },
    },
  },
};
