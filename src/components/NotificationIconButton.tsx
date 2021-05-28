import {
  Avatar,
  AvatarBadge,
  ComponentWithAs,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoNotifications } from "react-icons/io5";

export type NotificationIconButtonProps = Omit<
  ComponentWithAs<"button", IconButtonProps>,
  "aria-label"
> & {
  unread?: boolean;
};
export const NotificationIconButton: FC<NotificationIconButtonProps> = ({
  unread,
  ...props
}) => (
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
        {unread && <AvatarBadge boxSize="0.8rem" bg="orange.500" />}
      </Avatar>
    }
    {...props}
  />
);
