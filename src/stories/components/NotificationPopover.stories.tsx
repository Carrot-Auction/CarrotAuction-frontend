import React from "react";
import { Story, Meta } from "@storybook/react";

import {
  NotificationIconButton,
  NotificationPopover,
  NotificationPopoverProps,
} from "components";

export default {
  title: "Components/NotificationPopover",
  component: NotificationPopover,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<NotificationPopoverProps> = args => (
  <NotificationPopover {...args}>{"Notification List"}</NotificationPopover>
);

export const Default = Template.bind({});
Default.args = {
  trigger: <NotificationIconButton />,
};
