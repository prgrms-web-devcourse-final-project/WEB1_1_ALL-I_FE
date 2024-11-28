import { Meta, StoryObj } from "@storybook/react";
import TextInput from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/common/TextInput/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    name: "default",
    type: "text",
    required: true,
  },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["text", "email", "password"],
      description: "Input의 타입을 선택합니다.",
    },
    label: {
      control: "text",
      description: "Input에 표시할 레이블입니다.",
    },
    placeholder: {
      control: "text",
      description: "Input에 표시할 플레이스홀더입니다.",
    },
    required: {
      control: "boolean",
      description: "Input 필수 여부를 설정합니다.",
    },
    maxLength: {
      control: "number",
      description: "입력할 수 있는 최대 길이를 설정합니다.",
    },
    minLength: {
      control: "number",
      description: "입력할 수 있는 최소 길이를 설정합니다.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    placeholder: "Enter your username",
  },
};

export const EmailField: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    required: true,
  },
};

export const PasswordField: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    required: true,
    minLength: 8,
    maxLength: 16,
  },
};
