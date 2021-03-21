import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button, ButtonProps } from "@chakra-ui/react";

export default {
  title: "Components/Button",
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = args => (
  <Button {...args}>{args.children}</Button>
);

export const Default = Template.bind({});
Default.args = { children: "Button" };
export const Primary = Template.bind({});
Primary.args = { children: "Primary Button", colorScheme: "orange" };
