import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";
import { Box, Button, HStack } from "@chakra-ui/react";

import {
  Header,
  HeaderProps,
  NotificationButton,
  SimpleUserDisplay,
} from "components";

export default {
  title: "Components/Header",
  component: Header,
} as Meta;

const Template: Story<HeaderProps> = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const LoggedOut: FC = () => {
  const LoginButton: FC = () => (
    <Button
      variant="outline"
      h="full"
      colorScheme="orange"
      _focus={{ outline: "none" }}
    >
      로그인
    </Button>
  );
  return <Header rightArea={<LoginButton />} />;
};

export const LoggedIn: FC = () => {
  const RightBox: FC = () => (
    <HStack spacing={4} mt="-0.25rem">
      <Box>
        <NotificationButton />
      </Box>
      <SimpleUserDisplay username="김지수" />
    </HStack>
  );
  return <Header rightArea={<RightBox />} />;
};
