import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from ".";

const meta = {
  title: "Buttons/GoogleSignInButton",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    layout: "centered",
  },
};
