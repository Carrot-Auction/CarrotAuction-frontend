import React, { FC, useEffect, useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ItemDetail, ItemDetailProps } from "components/ItemDetail";
import { ItemCard, ItemCardProps } from "components/ItemCard";
import { useParams } from "react-router";
/*
interface ItemProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const getItem = async (): Promise<ItemProps> =>
  (await fetch("https://jsonplaceholder.typicode.com/posts/1")).json();

export const ItemDetailPage: React.FC = () => {
  const [item, setItem] = useState<ItemProps>();
  useEffect(() => {
    (async () => {
      setItem(await getItem());
    })();
  }, []);
  return <Box>{item ? item.title : ""}</Box>;
};
*/

type apiItem = {
  nickname: string; // 닉네임
  category: string; // 상품 종류
  title: string; // 제목
  duration: string; // 시간
  current_price: number; // 현재가격
  start_price: number; // 시작가격
  description: string; // 내용
  location: string;
  images: string[];
};

export const ItemDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);

  const getItem = async (): Promise<apiItem> =>
    (await fetch(`http://localhost:8080/api/item/itemDetail/1`)).json();

  const [item, setItem] = useState<ItemDetailProps>();
  const [itemIn, setItemIn] = useState<apiItem>();

  useEffect(() => {
    (async () => {
      const itemIn = await getItem();

      setItem({
        imgurls: itemIn.images, // 등록한 이미지 리스트
        profilurl:
          "https://ceppp.ca/wp-content/uploads/ceppp-profil-generique-1000x1000px-1.jpg",
        name: itemIn.nickname, // 닉네임
        filter: itemIn.category, // 상품 종류
        title: itemIn.title, // 제목
        time: itemIn.duration, // 시간
        nowprice: itemIn.current_price, // 현재가격
        defualtprice: itemIn.start_price, // 시작가격
        content: itemIn.description, // 내용
        location: itemIn.location,
      });
    })();
  }, []);
  console.log(item);
  const Card: ItemCardProps = {
    id: 1,
    title: "상품이름12345678901234567890",
    imgurl: "https://via.placeholder.com/150",
    location: "상도동",
    price: 1000,
    likes: 12,
    dday: 5,
    favorite: false,
  };
  return (
    <Flex justifyContent="center" bgColor="white">
      <Box bgColor="white" marginTop="2rem" w="46.78rem">
        <Box marginLeft="4.5rem" w="37.78rem">
          <Box
            w="37.78rem"
            borderTopColor="gray.200"
            borderLeft="0"
            borderRight="0"
            borderBottom="0"
            borderWidth="0.1rem"
            marginTop="1.5em"
          ></Box>
          <Box fontWeight="600" fontSize="1rem" marginTop="2rem">
            이 상품과 함께 봤어요
          </Box>
          <Box marginTop="2rem">
            <Box display="flex" justifyContent="space-between">
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
            </Box>
            <Box display="flex" marginTop="1rem" justifyContent="space-between">
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
            </Box>
          </Box>
          <Box
            w="37.78rem"
            borderTopColor="gray.200"
            borderLeft="0"
            borderRight="0"
            borderBottom="0"
            borderWidth="0.1rem"
            marginTop="1.5em"
          ></Box>
          <Box fontWeight="600" fontSize="1rem" marginTop="2rem">
            마감 임박 상품
          </Box>
          <Box marginTop="2rem" marginBottom="2rem">
            <Box display="flex" justifyContent="space-between">
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
            </Box>
            <Box display="flex" marginTop="1rem" justifyContent="space-between">
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
              <ItemCard {...Card}></ItemCard>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};
