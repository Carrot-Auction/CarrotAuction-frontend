import React, { FC } from "react";
import { CarrotIcon } from "Icons";
import { Box, Text } from "@chakra-ui/react";

export const Logo: FC = () => {
  return (
    <Box minW="9rem">
      <CarrotIcon w="2rem" h="2rem" mt="-0.5rem" mr="0.75rem" />
      <Text
        as="span"
        color="orange.500"
        fontSize="2xl"
        lineHeight="2rem"
        fontWeight="bold"
        userSelect="none"
      >
        당근옥션
      </Text>
    </Box>
  );
};
