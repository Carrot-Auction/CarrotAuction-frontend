import React from "react";
import { Story, Meta } from "@storybook/react";

import { Header } from "components";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<unknown> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
