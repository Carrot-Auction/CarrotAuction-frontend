import { Divider, Heading, HStack } from "@chakra-ui/react";
import { ItemCard } from "components";
import React, { FC } from "react";

const Favorite: FC = () => {
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
      <Heading size="md">찜목록</Heading>
      <Divider m="0.25rem 0" />
      <HStack
        alignItems="flex-start"
        justifyContent="left"
        spacing={5}
        p="1rem"
      >
        {dummy.map((item, idx) => (
          <ItemCard key={idx} id={idx} {...item} favorite />
        ))}
      </HStack>
    </>
  );
};

export default Favorite;
