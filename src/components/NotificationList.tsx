import { Box, Flex, List, ListItem, Avatar, Text } from "@chakra-ui/react";
import React, { FC } from "react";

export type NotificationItem = {
  id: number;
  title: string;
  desc: string;
  pic: string;
};

type NotificationListItemProps = Omit<NotificationItem, "id">;
const NotificationListItem: FC<NotificationListItemProps> = ({
  title,
  desc,
  pic,
}) => (
  <ListItem as={Flex} p="0.25rem">
    <Box>
      <Avatar mt="3px" size="sm" name="Dan Abrahmov" src={pic} />
    </Box>
    <Flex flexDir="column" pl="0.5rem">
      <Box>
        <Text fontSize="xs" fontWeight="bold">
          {title}
        </Text>
      </Box>
      <Box>
        <Text fontSize="xs">{desc}</Text>
      </Box>
    </Flex>
  </ListItem>
);

export type NotificationListProps = {
  items: NotificationItem[];
};
export const NotificationList: FC<NotificationListProps> = ({ items }) => (
  <List>
    {items.map(({ id, ...rest }) => (
      <NotificationListItem key={id} {...rest} />
    ))}
  </List>
);
