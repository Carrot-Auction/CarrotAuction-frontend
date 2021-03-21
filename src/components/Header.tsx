import {
  Box,
  BoxProps,
  Flex,
  Spacer,
  Icon,
  IconButton,
  Input,
} from "@chakra-ui/react";
import React, { FC, ReactNode } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Logo } from "./Logo";

const SearchInput: FC<BoxProps> = props => {
  return (
    <Flex h="full" {...props}>
      <Input
        h="full"
        border="none"
        color="#9B9B9B"
        bgColor="appBG"
        focusBorderColor="orange.500"
        placeholder="검색어를 입력해주세요."
      />
      <IconButton
        aria-label="Search"
        icon={<Icon as={IoSearchOutline} />}
        variant="ghost"
        color="gray.600"
        colorScheme="orange"
        fontSize="1.25rem"
        ml="0.5rem"
        _focus={{ border: "none" }}
        h="full"
        w="auto"
        p="0.25rem"
      />
    </Flex>
  );
};

export type HeaderProps = {
  rightArea?: ReactNode;
};
export const Header: FC<HeaderProps> = ({ rightArea }) => {
  return (
    <Flex w="full" h="4rem" bgColor="white" p="1rem">
      <Box>
        <Logo />
      </Box>
      <Box h="full" w="full" maxW="720px">
        <SearchInput justifyContent="center" />
      </Box>
      <Spacer />
      {rightArea && <Box h="full">{rightArea}</Box>}
    </Flex>
  );
};
