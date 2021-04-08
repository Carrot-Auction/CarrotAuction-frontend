import React, { FC } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { Avatar } from "@chakra-ui/react";

export type SimpleUserDisplayProps = {
  username: string;
  userpic?: string;
};
export const SimpleUserDisplay: FC<SimpleUserDisplayProps> = ({
  username,
  userpic,
}) => {
  return (
    <Avatar
      name={username}
      src={userpic}
      size="sm"
      icon={<AiOutlineUser fontSize="1.5rem" />}
    />
  );
};
