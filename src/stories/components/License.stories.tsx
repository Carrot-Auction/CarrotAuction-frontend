import React from "react";
import { Story, Meta } from "@storybook/react";

import { License } from "components";

export default {
  title: "Components/License",
  component: License,
} as Meta;

const Template: Story<unknown> = args => <License {...args} />;

export const Default = Template.bind({});
Default.args = {};
