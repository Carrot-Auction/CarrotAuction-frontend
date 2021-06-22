import React, { FC, useCallback, useState } from "react";
import {
  Badge,
  Box,
  HStack,
  Icon,
  Image,
  LinkBox,
  Text,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { toggleFavorite } from "api";
import noimage from "../assets/noimage.jpg";

const FavoriteButton: React.FC<{ favorite: boolean }> = ({ favorite }) => {
  return (
    <>
      {favorite ? (
        <Icon
          as={AiFillHeart}
          w="1.5rem"
          h="1.5rem"
          color="pink.300"
          filter="drop-shadow(1px 1px 2px gray)"
        />
      ) : (
        <Icon
          as={AiOutlineHeart}
          w="1.5rem"
          h="1.5rem"
          color="gray"
          _hover={{
            color: "pink.300",
          }}
          filter="drop-shadow(1px 1px 1px gray)"
        />
      )}
    </>
  );
};

export type ItemCardProps = {
  /**
   * 상품 이름
   */
  title: string;
  /**
   * 상품 이미지
   */
  url?: string;
  /**
   * 거래지역
   */
  location: string;
  /**
   * 현재 가격
   */
  price: number;
  /**
   * 좋아요 수
   */
  likes: number;
  /**
   * 남은 일 수
   */
  dday: number;

  id: number;

  favorite?: boolean;
};
export const ItemCard: FC<ItemCardProps> = props => {
  const [favorite, setFavorite] = useState(props.favorite);
  const favoriteToggleClick = useCallback(
    e => {
      (async () => {
        try {
          await toggleFavorite(props.id);
        } catch (err) {
          console.error(err);
        }
      })();
      setFavorite(!favorite);
      e.preventDefault();
    },
    [favorite, props.id]
  );
  return (
    <LinkBox
      as={Link}
      to={`/items/${props.id}`}
      maxW="12rem"
      borderRadius="1rem"
      bgColor="white"
      overflow="hidden"
      userSelect="none"
      border="1px solid #eee"
    >
      <Box w="12rem" h="12rem" position="relative">
        <Image src={props.url ?? noimage} w="100%" h="100%" />
        <Box
          position="absolute"
          w="1.5rem"
          h="1.5rem"
          top="0.5rem"
          right="0.5rem"
          cursor="pointer"
          onClick={favoriteToggleClick}
        >
          <FavoriteButton favorite={favorite} />
        </Box>
      </Box>
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
              <Icon as={AiOutlineHeart} />
              {props.likes}
            </Box>
          </HStack>
        </HStack>
      </Box>
    </LinkBox>
  );
};
