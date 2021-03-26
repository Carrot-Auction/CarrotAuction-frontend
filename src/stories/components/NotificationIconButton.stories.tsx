import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  NotificationIconButton,
  NotificationIconButtonProps,
} from "components";

export default {
  title: "Components/NotificationIconButton",
  component: NotificationIconButton,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<NotificationIconButtonProps> = args => (
  <NotificationIconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  unread: true,
};
