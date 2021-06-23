import React, { FC, useState, useCallback } from "react";
import {
  Box,
  Image,
  Flex,
  Button,
  Icon,
  Avatar,
  Input,
  VStack,
} from "@chakra-ui/react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Chat } from "components/Chat";
import { useAlreadyLoggedInState, useCurrentUserState } from "atoms";
import { ShowDeal } from "atoms/dealState";
import { useRecoilState } from "recoil";
import { DateTime } from "luxon";

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
  user_id: number;
  item_id: number;
};

export const ItemDetail: FC<ItemDetailProps> = props => {
  const [userState] = useCurrentUserState();
  const [state, setState] = useState(0);
  const [showdeal, showdealSet] = useRecoilState(ShowDeal);
  function mod(n: number, m: number) {
    return ((n % m) + m) % m;
  }
  const showdealOn = e => {
    showdealSet(true);
  };

  //const [userLogin] = useAlreadyLoggedInState();
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
                <Box>시작가격: {props.defualtprice}원</Box>
                <Box>현재가격: {props.nowprice}원</Box>
                {props.user_id ? (
                  <Button
                    filter="drop-shadow(1px 1px 1px gray)"
                    colorScheme="blue"
                    marginTop="0.3rem"
                    w="7.5rem"
                    h="2.5rem"
                    onClick={showdealOn}
                  >
                    경매참가
                  </Button>
                ) : (
                  <Box
                    filter="drop-shadow(1px 1px 1px gray)"
                    colorScheme="gray"
                    marginTop="0.3rem"
                    w="7.5rem"
                    h="2.5rem"
                  >
                    경매참가불가
                  </Box>
                )}
              </Box>
              {showdeal ? (
                <Box
                  filter="drop-shadow(1px 1px 1px gray)"
                  position="absolute"
                  left="20%"
                  top="55%"
                  bgColor="orange.300"
                >
                  <DealWindow
                    item_id={props.item_id}
                    nowprice={props.nowprice}
                    user_id={props.user_id}
                  />
                </Box>
              ) : (
                <></>
              )}
            </Box>
          </Box>
          <Box fontSize="3rem" color="red">{`D-${
            DateTime.fromISO(props.time).diffNow().days
          }`}</Box>
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

export type dealProps = {
  nowprice: number;
  item_id: number;
  user_id: number;
};

export type dealPriceProps = {
  item_id: number;
  user_id: number;
  deal_price: number;
};

export const DealWindow: FC<dealProps> = props => {
  const [showdeal, showdealSet] = useRecoilState(ShowDeal);
  const [values, valuesSet] = useState<dealPriceProps>({
    item_id: props.item_id,
    user_id: props.user_id,
    deal_price: 0,
  });
  const onChage = useCallback(
    e => {
      const { name, value } = e.target;
      valuesSet({ ...values, [name]: parseInt(value) });
    },
    [values]
  );
  const deal = async e => {
    (
      await fetch("http://localhost:8080/api/itemBider", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: {
            item_id: values.item_id,
            seller: values.user_id,
            price: values.deal_price,
          },
        }),
      })
    ).json();
    console.log(values);
    showdealSet(false);
  };
  const cancel = e => {
    showdealSet(false);
  };
  return (
    <Box w="20rem" h="10rem">
      <VStack justifyContent="center">
        <Box display="flex" w="20rem" bgColor="green">
          <Box marginLeft="7rem" fontSize="2rem" color="white">
            제시 금액
          </Box>
          <Button marginLeft="3rem" bgColor="green" onClick={cancel}>
            X
          </Button>
        </Box>
        <Box>
          <Input
            name="deal_price"
            value={values.deal_price}
            type="number"
            w="10rem"
            h="3rem"
            onChange={onChage}
          />
        </Box>
        {props.nowprice < values.deal_price ? (
          <Button
            marginTop="3rem"
            bgColor="blue.300"
            w="4rem"
            h="2rem"
            onClick={deal}
          >
            확인
          </Button>
        ) : (
          <Box bgColor="red">가격이 너무 낮습니다.</Box>
        )}
      </VStack>
    </Box>
  );
};
