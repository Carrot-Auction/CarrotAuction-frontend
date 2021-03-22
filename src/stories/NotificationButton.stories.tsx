import React from "react";
import { Story, Meta } from "@storybook/react";

import { NotificationButton, NotificationButtonProps } from "components";

export default {
  title: "Components/NotificationButton",
  component: NotificationButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<NotificationButtonProps> = args => (
  <NotificationButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  unread: true,
};
