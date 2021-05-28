import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { ItemCard } from "components";
import React from "react";

export const UserProfilePage: React.FC = () => {
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
    <Box p="1rem">
      <Box m="0 auto" w="full" borderRadius="1rem" bgColor="white" p="1rem">
        <Box display="flex">
          <Box>
            <Box w="3.1rem">
              <Avatar size="md" src="" />
              <Button
                colorScheme="orange"
                w="3.1rem"
                h="1.3rem"
                fontSize="0.8rem"
                marginTop="0.1rem"
                filter="drop-shadow(1px 1px 1px gray)"
              >
                1:1채팅
              </Button>
            </Box>
          </Box>
          <Box marginLeft="0.4rem" marginTop="0.1rem">
            <Box fontWeight="500" fontSize="1.1rem">
              김지수
            </Box>
            <Box w="5rem" fontSize="0.7rem">
              방배
            </Box>
          </Box>
        </Box>
        <Divider m="0.5rem 0" />

        <Tabs colorScheme="orange">
          <TabList>
            <Tab>등록상품</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
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
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Box>
  );
};
