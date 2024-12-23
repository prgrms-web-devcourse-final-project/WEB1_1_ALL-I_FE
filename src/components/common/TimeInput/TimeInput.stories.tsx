import type { Meta, StoryObj } from "@storybook/react";
import TimeInput from "./TimeInput";

const meta = {
  title: "Components/common/TimeInput",
  component: TimeInput,
  parameters: {
    docs: {
      description: {
        component:
          "이 컴포넌트는 시작 시간과 종료 시간을 선택하는 입력 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    startTime: { control: "text" }, // 시작 시간을 텍스트로 설정
    endTime: { control: "text" }, // 종료 시간을 텍스트로 설정
    onChange: { action: "changed" }, // onChange 함수에 대한 액션을 기록
    withEndTime: { control: "boolean" }, // 종료 시간 사용 여부
  },
} satisfies Meta<typeof TimeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    startTime: "09:00",
    endTime: "10:00",
    withEndTime: false,
    onChange: (startTime: string, endTime?: string) => {
      // onChange 속성 추가
      console.log("Time changed:", startTime, endTime);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "시작 시간만 선택할 수 있는 기본 상태입니다.",
      },
    },
  },
};

// 종료 시간이 포함된 상태
export const WithEndTime: Story = {
  args: {
    startTime: "09:00",
    endTime: "10:00",
    withEndTime: true,
    onChange: (startTime: string, endTime?: string) => {
      // onChange 속성 추가
      console.log("Time changed:", startTime, endTime);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "시작 시간과 종료 시간을 모두 선택할 수 있는 상태입니다.",
      },
    },
  },
};

// 종료 시간이 비활성화된 상태
export const NoEndTime: Story = {
  args: {
    startTime: "09:00",
    withEndTime: false,
    onChange: (startTime: string, endTime?: string) => {
      // onChange 속성 추가
      console.log("Time changed:", startTime, endTime);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "종료 시간 선택이 비활성화된 상태입니다.",
      },
    },
  },
};
