import React, { FC, useState } from "react";
import { Box, Image, Flex, Button, Icon } from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

type imgurl = {
  id: number;
  imgurl: string;
};

export type ItemDetailProps = {
  imgurls: imgurl[];
  profilurl: string;
  name: string;
  filter: string;
  title: string;
  time: number;
  nowprice: number;
  defualtprice: number;
  content: string;
};

export const ItemDetail: FC<ItemDetailProps> = props => {
  const [state, stateset] = useState(0);
  return (
    <Flex h="calx(100vh - 6rem)" justifyContent="center" flexDir="column">
      <Box
        m="30rem"
        w="full"
        maxW="28rem"
        borderRadius="1rem"
        bgColor="white"
        p="1rem"
      >
        <Box w="parent" bgColor="gray" textAlign="center">
          <Button display="inline-block">
            <Icon as={AiFillCaretLeft} w="1.5rem" h="1.5rem" />
          </Button>
          <Image
            src={props.imgurls[state].imgurl}
            w="10em"
            h="10rem"
            display="inline-block"
            margin="0 auto"
          />
          <Button display="inline-block">
            <Icon as={AiFillCaretRight} w="1.5rem" h="1.5rem" />
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
