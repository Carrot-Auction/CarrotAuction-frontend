import {
  Box,
  Divider,
  Flex,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import { FaListAlt, FaStar, FaUserEdit } from "react-icons/fa";

export const MyPage: React.FC = () => {
  return (
    <Flex p="1rem" flexDir="row" gridGap="3" minH="32rem">
      <Box borderRadius="1rem" bgColor="white" p="1rem" w="18rem">
        <List spacing={3}>
          <ListItem>
            <ListIcon as={FaUserEdit} />
            {"회원 정보 수정"}
          </ListItem>
          <ListItem>
            <ListIcon as={FaListAlt} />
            {"거래 이력"}
          </ListItem>
          <ListItem>
            <ListIcon as={FaStar} />
            {"즐겨찾기"}
          </ListItem>
        </List>
      </Box>

      <Box borderRadius="1rem" bgColor="white" p="1rem" flexGrow={1}>
        <Heading size="md">회원정보 수정</Heading>
        <Divider mt="0.25rem" />
      </Box>
    </Flex>
  );
};
