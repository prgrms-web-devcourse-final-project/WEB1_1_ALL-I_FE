import type { Meta, StoryObj } from "@storybook/react";
import ProfileImg from "@/components/common/ProfileImg/ProfileImg";

const meta = {
  title: "Components/common/ProfileImg/ProfileImg",
  component: ProfileImg,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "프로필 이미지를 렌더링하는 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["large", "medium", "small"],
    },
    src: { control: "text" },
    alt: { control: "text" },
  },
} satisfies Meta<typeof ProfileImg>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    size: "medium",
    src: "https://via.placeholder.com/120",
    alt: "Default Profile Image",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 프로필 이미지입니다.",
      },
    },
  },
};

// Large 사이즈 이미지
export const Large: Story = {
  args: {
    size: "large",
    src: "https://via.placeholder.com/120",
    alt: "Large Profile Image",
  },
  parameters: {
    docs: {
      description: {
        story: "Large 크기의 프로필 이미지입니다.",
      },
    },
  },
};

// Medium 사이즈 이미지
export const Medium: Story = {
  args: {
    size: "medium",
    src: "https://via.placeholder.com/120",
    alt: "Medium Profile Image",
  },
  parameters: {
    docs: {
      description: {
        story: "Medium 크기의 프로필 이미지입니다.",
      },
    },
  },
};

// Small 사이즈 이미지
export const Small: Story = {
  args: {
    size: "small",
    src: "https://via.placeholder.com/120",
    alt: "Small Profile Image",
  },
  parameters: {
    docs: {
      description: {
        story: "Small 크기의 프로필 이미지입니다.",
      },
    },
  },
};
