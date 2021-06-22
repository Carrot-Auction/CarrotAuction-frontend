import React, { FC, useState, useCallback } from "react";
import { Box, Image, Flex, Button, Icon, Avatar } from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Chat } from "components/Chat";

export type ItemDetailProps = {
  imgurls: string[]; // 등록한 이미지 리스트
  profilurl: string; // 프로필 사진 url
  name: string; // 닉네임
  filter: string; // 상품 종류
  title: string; // 제목
  time: string; // 시간
  nowprice: number; // 현재가격
  defualtprice: number; // 시작가격
  content: string; // 내용
  location: string; // 판매자 위치
};

export const ItemDetail: FC<ItemDetailProps> = props => {
  const [state, setState] = useState(0);
  props.imgurls === null
    ? (props.imgurls = [
        "https://ceppp.ca/wp-content/uploads/ceppp-profil-generique-1000x1000px-1.jpg",
      ])
    : props.imgurls;
  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }
  const defualt =
    "https://ceppp.ca/wp-content/uploads/ceppp-profil-generique-1000x1000px-1.jpg";
  const onIncrease = useCallback(() => {
    setState(mod(state + 1, props.imgurls.length));
  }, [props.imgurls, state]);
  const onDecrease = useCallback(() => {
    setState(mod(state - 1, props.imgurls.length));
  }, [props.imgurls, state]);
  return (
    <Flex h="calx(100vh - 6rem)" justifyContent="center" flexDir="column">
      <Box display="flex" bgColor="white" minW="46.78rem">
        <Box marginTop="13rem">
          <Button display="inline-block" onClick={onDecrease} bgColor="white">
            <Icon as={AiFillCaretLeft} w="1.5rem" h="1.5rem" />
          </Button>
        </Box>
        <Box
          w="full"
          maxW="50rem"
          p="1rem"
          position="relative"
          paddingTop="1rem"
          paddingBottom="1rem"
        >
          <Box w="parent" textAlign="center">
            <Image
              src={props.imgurls !== null ? props.imgurls[state] : defualt}
              w="46.78rem"
              h="25rem"
              display="inline-block"
              margin="0 auto"
              borderRadius="1rem 1rem 1rem 1rem"
            />
            <Box position="absolute" left="50%" top="55.5%">
              {state + 1}/ {props.imgurls.length}
            </Box>
          </Box>
          <Box w="parent">
            <Box
              w="full"
              marginTop="1rem"
              display="flex"
              justifyContent="space-between"
            >
              <Box display="flex">
                <Box>
                  <Box w="3.1rem">
                    <Avatar size="md" src={props.profilurl} />
                    <Button
                      colorScheme="orange"
                      w="3.1rem"
                      h="1.3rem"
                      fontSize="0.8rem"
                      marginTop="0.1rem"
                      filter="drop-shadow(1px 1px 1px gray)"
                      onClick={() => Chat}
                    >
                      1:1채팅
                    </Button>
                  </Box>
                </Box>
                <Box marginLeft="0.4rem" marginTop="0.1rem">
                  <Box fontWeight="500" fontSize="1.1rem">
                    {props.name}
                  </Box>
                  <Box w="5rem" fontSize="0.7rem">
                    {props.location}
                  </Box>
                </Box>
              </Box>
              <Box textAlign="right">
                <Box>시작가격: {props.defualtprice}</Box>
                <Box>현재가격: {props.nowprice}</Box>
                <Button
                  filter="drop-shadow(1px 1px 1px gray)"
                  colorScheme="blue"
                  marginTop="0.3rem"
                  w="7.5rem"
                  h="2.5rem"
                >
                  경매참가
                </Button>
              </Box>
            </Box>
          </Box>
          <Box
            w="parent"
            borderTopColor="gray.200"
            borderLeft="0"
            borderRight="0"
            borderBottom="0"
            borderWidth="0.1rem"
            marginTop="1.5rem"
          ></Box>
          <Box w="parent" marginTop="1.5rem">
            <Box fontWeight="700" fontSize="1.5rem">
              {props.title}
            </Box>
            <Box fontSize="0.8rem" color="gray">
              {props.filter}
            </Box>
            <Box fontWeight="500" fontSize="1rem" marginTop="1.5rem">
              {props.content}
            </Box>
          </Box>
        </Box>
        <Box marginTop="13rem">
          <Button display="inline-block" onClick={onIncrease} bgColor="white">
            <Icon as={AiFillCaretRight} w="1.5rem" h="1.5rem" />
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
