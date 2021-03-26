import React, { FC } from "react";
import { Badge, Box, HStack, Icon, Image, Text } from "@chakra-ui/react";
import { AiOutlineComment, AiOutlineHeart } from "react-icons/ai";

export type ItemCardProps = {
  /**
   * 상품 이름
   */
  title: string;
  /**
   * 상품 이미지
   */
  imgurl: string;
  /**
   * 거래지역
   */
  location: string;
  /**
   * 현재 가격
   */
  price: number;
  /**
   * 덧글 수
   */
  comments: number;
  /**
   * 좋아요 수
   */
  likes: number;
  /**
   * 남은 일 수
   */
  dday: number;
};
export const ItemCard: FC<ItemCardProps> = props => {
  return (
    <Box maxW="12rem" borderRadius="1rem" bgColor="white" overflow="hidden">
      <Image src={props.imgurl} w="12rem" h="12rem" />
      <Box p="0.5rem" h="6.25rem">
        <Text
          fontWeight="semibold"
          title={props.title}
          isTruncated
          fontSize="0.825rem"
        >
          {props.title}
        </Text>
        <Badge fontWeight="normal" fontSize="0.825rem">
          {props.location}
        </Badge>
        <Box>
          <Text as="span" fontWeight="bold" fontSize="md">
            {`현재가 ${props.price
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`}
          </Text>
        </Box>
        <HStack
          justifyContent="space-between"
          color="gray.500"
          fontSize="0.825rem"
        >
          <Text fontWeight="semibold">{`D-${props.dday}`}</Text>
          <HStack justifyContent="flex-end">
            <Box>
              <Icon as={AiOutlineComment} />
              {props.comments}
            </Box>
            <Box>
              <Icon as={AiOutlineHeart} />
              {props.likes}
            </Box>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
};
