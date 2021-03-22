import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Logo } from "./Logo";

const SearchInput: FC<InputProps> = props => {
  return (
    <Flex p="0 0.5rem" h="full" justifyContent="flex-start">
      <IconButton
        aria-label="Search"
        icon={<Icon as={IoSearchOutline} />}
        variant="ghost"
        color="gray.600"
        colorScheme="orange"
        fontSize="1.25rem"
        mr="0.5rem"
        _focus={{ border: "none" }}
        h="full"
        w="auto"
        p="0.25rem"
      />
      <Input
        h="full"
        borderColor="transparent"
        color="#9B9B9B"
        bgColor="appBG"
        placeholder="검색어를 입력해주세요."
        maxW="12rem"
        _focus={{
          maxW: "320px",
          borderColor: "orange.500",
        }}
        {...props}
      />
    </Flex>
  );
};

export type HeaderProps = {
  rightArea?: ReactNode;
};
export const Header: FC<HeaderProps> = ({ rightArea }) => {
  return (
    <Flex
      w="full"
      h="4rem"
      bgColor="white"
      p="1rem"
      justifyContent="space-between"
    >
      <Box>
        <Logo />
      </Box>
      <Box flexGrow={1} h="full" w="full">
        <SearchInput />
      </Box>
      {rightArea && <Box h="full">{rightArea}</Box>}
    </Flex>
  );
};
