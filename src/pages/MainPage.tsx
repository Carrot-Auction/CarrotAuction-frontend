import { Heading, HStack, VStack } from "@chakra-ui/layout";
import { Box, Divider, IconButton, Tooltip } from "@chakra-ui/react";
import { deadlineItemList, Item, newItemList } from "api";
import { ItemCard } from "components";
import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useHistory } from "react-router";

export const MainPage: React.FC = () => {
  const history = useHistory();
  const [newItems, setNewItems] = useState<Item[]>([]);
  const [items, setItems] = useState<Item[]>([]);
  useEffect(() => {
    (async () => {
      const itemsResult = await deadlineItemList();
      const newItemsResult = await newItemList();
      setItems(itemsResult.data);
      setNewItems(newItemsResult.data);
    })();
  }, []);
  return (
    <>
      <Box maxW="1080px" m="auto" p="1rem">
        <VStack spacing={10}>
          <Box w="full">
            <Heading size="md">마감임박 상품</Heading>
            <Divider mb={2} mt={2} />
            <HStack alignItems="flex-start" justifyContent="center" spacing={5}>
              {items.map(item => (
                <ItemCard key={item.id} price={item.start_price} {...item} />
              ))}
            </HStack>
          </Box>

          <Box w="full">
            <Heading size="md">최근 등록된 상품</Heading>
            <Divider mb={2} mt={2} />
            <HStack alignItems="flex-start" justifyContent="center" spacing={5}>
              {newItems.map(item => (
                <ItemCard key={item.id} {...item} price={item.start_price} />
              ))}
            </HStack>
          </Box>
        </VStack>
      </Box>
      <Tooltip label="상품 등록">
        <IconButton
          position="fixed"
          bottom="1rem"
          right="1rem"
          aria-label="Search database"
          icon={<FaPlus size="2em" />}
          colorScheme="orange"
          w="3.5em"
          h="3.5em"
          borderRadius="full"
          onClick={() => history.push("/addItem")}
        />
      </Tooltip>
    </>
  );
};
