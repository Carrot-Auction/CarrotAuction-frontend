import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React, { FC } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Logo } from "./Logo";

const SearchInput: FC<InputProps> = props => {
  return (
    <Flex h="full">
      <Input
        h="full"
        border="none"
        bgColor="appBG"
        focusBorderColor="orange.500"
        {...props}
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

export const Header: FC = () => {
  return (
    <Flex w="full" h="4rem" bgColor="white" p="1rem">
      <Box>
        <Logo />
      </Box>
      <Box ml="1rem" flexGrow={1}>
        <SearchInput />
      </Box>
    </Flex>
  );
};
