import type { Meta, StoryObj } from "@storybook/react";
import Test from "@/components/Example/Test";

const meta = {
  // 스토리북 경로 - 파일 경로와 동일하게 설정하는 것이 좋을 것 같습니다.
  title: "Components/Example/Test",
  component: Test,
  parameters: {
    // 스토리북 캔버스에 표시되는 위치
    layout: "centered",
    docs: {
      description: {
        component: "이 컴포넌트는 예시용 컴포넌트입니다.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "danger"],
    },
    onClick: { action: "clicked" },
  },
} satisfies Meta<typeof Test>;

export default meta;
type Story = StoryObj<typeof meta>;

// 기본 스토리
export const Default: Story = {
  args: {
    title: "기본 테스트",
    description: "이것은 기본 테스트 컴포넌트입니다.",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 테스트 컴포넌트입니다.",
      },
    },
  },
};

// variant별 스토리
export const Primary: Story = {
  args: {
    title: "프라이머리 버튼",
    variant: "primary",
  },
  parameters: {
    docs: {
      description: {
        story: "프라이머리 버튼입니다.",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    title: "세컨더리 버튼",
    variant: "secondary",
  },
  parameters: {
    docs: {
      description: {
        story: "세컨더리 버튼입니다.",
      },
    },
  },
};

export const Danger: Story = {
  args: {
    title: "위험 버튼",
    variant: "danger",
  },
  parameters: {
    docs: {
      description: {
        story: "위험 버튼입니다.",
      },
    },
  },
};

// 비활성화된 상태
export const Disabled: Story = {
  args: {
    title: "비활성화된 컴포넌트",
    description: "클릭할 수 없는 상태입니다.",
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: "비활성화된 컴포넌트입니다.",
      },
    },
  },
};

// 이런 부분까지는 작성 안 해주셔도 될 것 같습니다.
// 긴 설명이 있는 케이스
export const LongDescription: Story = {
  args: {
    title: "긴 설명이 있는 케이스",
    description:
      "이것은 매우 긴 설명입니다. 이 설명은 여러 줄에 걸쳐 표시될 수 있으며, 컴포넌트의 레이아웃이 어떻게 변하는지 테스트할 수 있습니다.",
  },
  parameters: {
    docs: {
      description: {
        story: "긴 설명이 있는 케이스입니다.",
      },
    },
  },
};

// 커스텀 스타일이 적용된 케이스
export const WithCustomContainer: Story = {
  args: {
    title: "커스텀 컨테이너",
    description: "커스텀 스타일이 적용된 컨테이너 내부의 컴포넌트",
  },
  decorators: [
    (Story) => (
      <div
        style={{ padding: "2rem", background: "#f0f0f0", maxWidth: "400px" }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    docs: {
      description: {
        story: "커스텀 컨테이너 내부의 컴포넌트입니다.",
      },
    },
  },
};
