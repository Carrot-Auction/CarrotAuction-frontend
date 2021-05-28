import { Story, Meta } from "@storybook/react";

import {
  NotificationIconButton,
  NotificationList,
  NotificationListProps,
  NotificationPopover,
} from "components";

const dummy = [...Array(10)].map((_, idx) => ({
  id: idx,
  pic: "https://via.placeholder.com/150",
  title: "Notification Item " + idx,
  desc: "Description",
}));

export default {
  title: "Components/NotificationList",
  component: NotificationList,
  argTypes: { onClick: { action: "clicked" } },
} as Meta;

const Template: Story<NotificationListProps> = args => (
  <NotificationList {...args} />
);

export const Default: Story<NotificationListProps> = Template.bind({});
Default.args = {
  items: dummy,
};

export const WithPopover: Story<NotificationListProps> = args => {
  return (
    <NotificationPopover trigger={<NotificationIconButton unread />}>
      <NotificationList {...args} />
    </NotificationPopover>
  );
};
WithPopover.args = {
  items: dummy,
};
