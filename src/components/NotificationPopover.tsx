import React, { FC, ReactNode } from "react";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

export type NotificationPopoverProps = {
  trigger: ReactNode;
};
export const NotificationPopover: FC<NotificationPopoverProps> = ({
  trigger,
}) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent width="200px">
        <PopoverHeader>알림</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>List Contents</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
