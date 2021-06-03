import React, { FC, ReactNode } from "react";
import {
  Box,
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
  children,
}) => {
  return (
    <Popover placement="bottom-start">
      <PopoverTrigger>
        <Box display="inline-block">{trigger}</Box>
      </PopoverTrigger>
      <PopoverContent width="16rem">
        <PopoverHeader>알림</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody maxH="16rem" overflowX="hidden" overflowY="scroll">
          {children}
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
