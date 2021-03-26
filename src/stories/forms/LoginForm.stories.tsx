import React from "react";
import { Meta } from "@storybook/react";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

export default {
  title: "Forms/LoginForm",
} as Meta;

export const Default: React.VFC = () => (
  <Flex h="100vh" justifyContent="center" flexDir="column">
    <Box
      m="0 auto"
      w="full"
      maxW="28rem"
      borderRadius="1rem"
      bgColor="white"
      p="1rem"
    >
      <Heading size="md">로그인</Heading>
      <Divider m="0.5rem 0" />

      <form>
        <VStack spacing="1rem">
          <FormControl id="username" isRequired>
            <FormLabel>아이디</FormLabel>
            <Input />
          </FormControl>

          <FormControl id="password" isRequired>
            <FormLabel>패스워드</FormLabel>
            <Input type="password" />
          </FormControl>

          <Button w="full" type="submit">
            로그인
          </Button>
        </VStack>
      </form>
    </Box>
  </Flex>
);
