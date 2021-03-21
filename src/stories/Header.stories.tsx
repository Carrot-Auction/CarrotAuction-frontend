import React, { FC } from "react";
import { Story, Meta } from "@storybook/react";

import { Header, HeaderProps, SimpleUserDisplay } from "components";
import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { IoNotifications } from "react-icons/io5";
import { NotificationPopover } from "components/NotificationPopover";

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
        <NotificationPopover
          trigger={
            <IconButton
              aria-label="notification"
              variant="ghost"
              borderRadius="full"
              _focus={{ outline: "none" }}
              _hover={{ bgColor: "orange.50" }}
              _active={{ bgColor: "orange.100" }}
              icon={
                <Avatar
                  icon={<IoNotifications fontSize="1.5rem" />}
                  size="sm"
                  bgColor="transparent"
                >
                  <AvatarBadge boxSize="0.8rem" bg="orange.500" />
                </Avatar>
              }
            />
          }
        />
      </Box>
      <SimpleUserDisplay username="김지수" />
    </HStack>
  );
  return <Header rightArea={<RightBox />} />;
};
