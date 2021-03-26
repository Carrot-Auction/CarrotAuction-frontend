import React from "react";
import { Story, Meta } from "@storybook/react";

import { Logo } from "components";

export default {
  title: "Components/Logo",
  component: Logo,
} as Meta;

const Template: Story<unknown> = args => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};
