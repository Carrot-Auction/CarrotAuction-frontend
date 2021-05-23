import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { Box, Divider } from "@chakra-ui/react";
import { ItemCard } from "components";
import React from "react";

export const MainPage: React.FC = () => {
  const dummy = [
    {
      title: "상품이름12345678901234567890",
      imgurl: "https://via.placeholder.com/150",
      location: "상도동",
      price: 1000,
      comments: 12,
      likes: 12,
      dday: 5,
      favorite: false,
    },
    {
      title: "상품이름12345678901234567890",
      imgurl: "https://via.placeholder.com/150",
      location: "상도동",
      price: 1000,
      comments: 12,
      likes: 12,
      dday: 5,
      favorite: false,
    },
    {
      title: "상품이름12345678901234567890",
      imgurl: "https://via.placeholder.com/150",
      location: "상도동",
      price: 1000,
      comments: 12,
      likes: 12,
      dday: 5,
      favorite: false,
    },
    {
      title: "상품이름12345678901234567890",
      imgurl: "https://via.placeholder.com/150",
      location: "상도동",
      price: 1000,
      comments: 12,
      likes: 12,
      dday: 5,
      favorite: false,
    },
    {
      title: "상품이름12345678901234567890",
      imgurl: "https://via.placeholder.com/150",
      location: "상도동",
      price: 1000,
      comments: 12,
      likes: 12,
      dday: 5,
      favorite: false,
    },
  ];
  return (
    <>
      <Box maxW="1080px" m="auto" p="1rem">
        <VStack spacing={10}>
          <Box>
            <Heading size="md">마감임박 상품</Heading>
            <Divider mb={2} mt={2} />
            <HStack alignItems="flex-start" justifyContent="center" spacing={5}>
              {dummy.map((item, idx) => (
                <ItemCard key={idx} {...item} />
              ))}
            </HStack>
          </Box>

          <Box>
            <Heading size="md">최근 등록된 상품</Heading>
            <Divider mb={2} mt={2} />
            <HStack alignItems="flex-start" justifyContent="center" spacing={5}>
              {dummy.map((item, idx) => (
                <ItemCard key={idx} {...item} />
              ))}
            </HStack>
          </Box>
        </VStack>
      </Box>
    </>
  );
};
