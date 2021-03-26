import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Button, HStack } from "@chakra-ui/react";

import {
  Header,
  HeaderProps,
  NotificationIconButton,
  NotificationList,
  NotificationPopover,
  SimpleUserDisplay,
} from "components";

const dummy = [...Array(10)].map((_, idx) => ({
  id: idx,
  pic: "https://via.placeholder.com/150",
  title: "Notification Item " + idx,
  desc: "Description",
}));

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const LoggedOut: FC = () => {
  const LoginButton: FC = () => (
    <Button variant="outline" h="full" colorScheme="orange">
      로그인
    </Button>
  );
  return <Header rightArea={<LoginButton />} />;
};

export const LoggedIn: FC = () => {
  const RightBox: FC = () => (
    <HStack spacing={4} mt="-0.25rem">
      <Box>
        <NotificationPopover trigger={<NotificationIconButton unread />}>
          <NotificationList items={dummy} />
        </NotificationPopover>
      </Box>
      <SimpleUserDisplay username="김지수" />
    </HStack>
  );
  return <Header rightArea={<RightBox />} />;
};
