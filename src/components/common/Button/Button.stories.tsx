import type { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/common/Button/Button";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "Components/Common/Button/Button",
  component: Button,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 버튼 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
    },
    buttonType: {
      control: "select",
      options: [
        "primaryLarge",
        "primaryMedium",
        "primarySmall",
        "primaryMicro",
        "whiteMedium",
        "whiteSmall",
        "whiteMicro",
      ],
    },
    isHoverEffect: {
      control: "boolean",
    },
    type: {
      control: "select",
      options: ["button", "submit", "reset"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary 스토리
export const PrimaryLarge: Story = {
  args: {
    buttonType: "primaryLarge",
    isHoverEffect: false,
    children: "큰 기본 버튼",
    type: "button",
  },
};

export const PrimaryMedium: Story = {
  args: {
    buttonType: "primaryMedium",
    isHoverEffect: false,
    children: "중간 기본 버튼",
    type: "button",
  },
};

export const PrimarySmall: Story = {
  args: {
    buttonType: "primarySmall",
    isHoverEffect: false,
    children: "작은 기본 버튼",
    type: "button",
  },
};

export const PrimaryMicro: Story = {
  args: {
    buttonType: "primaryMicro",
    isHoverEffect: false,
    children: "가장 작은 기본 버튼",
    type: "button",
  },
};

// White 스토리
export const WhiteMedium: Story = {
  args: {
    buttonType: "whiteMedium",
    isHoverEffect: false,
    children: "중간 흰색 버튼",
    type: "button",
  },
};

export const WhiteSmall: Story = {
  args: {
    buttonType: "whiteSmall",
    isHoverEffect: false,
    children: "작은 흰색 버튼",
    type: "button",
  },
};

export const WhiteMicro: Story = {
  args: {
    buttonType: "whiteMicro",
    isHoverEffect: false,
    children: "가장 작은 흰색 버튼",
    type: "button",
  },
};
