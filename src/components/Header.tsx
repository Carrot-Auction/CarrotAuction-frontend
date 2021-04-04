import {
  Box,
  Flex,
  Icon,
  IconButton,
  Input,
  InputProps,
} from "@chakra-ui/react";
import React, { FC, ReactNode, useRef } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Logo } from "./Logo";
import { Link as RouterLink } from "react-router-dom";

type SearchInputProps = { onQuery?: (query: string) => void } & InputProps;
const SearchInput: FC<SearchInputProps> = ({ onQuery, ...props }) => {
  const inputEl = useRef<HTMLInputElement>();
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
        onClick={() => {
          inputEl.current.value === ""
            ? inputEl.current.focus()
            : onQuery && onQuery(inputEl.current.value);
        }}
      />
      <Input
        ref={inputEl}
        h="full"
        borderColor="transparent"
        bgColor="appBG"
        maxW="13rem"
        placeholder="검색어를 입력해주세요."
        _placeholder={{
          color: "#9B9B9B",
        }}
        _focus={{
          maxW: "20rem",
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
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>
      <Box flexGrow={1} h="full" w="full">
        <SearchInput />
      </Box>
      {rightArea && <Box h="full">{rightArea}</Box>}
    </Flex>
  );
};
