import React, { FC, useState, useEffect } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Divider,
  Heading,
} from "@chakra-ui/react";
import { getMyBid, getMyItems, Item } from "api";

const History: FC = () => {
  const [myBids, setBids] = useState<Item[]>([]);
  const [myItems, setItems] = useState<Item[]>([]);
  useEffect(() => {
    (async () => {
      const bidResult = await getMyBid();
      const itemsResult = await getMyItems();
      setBids(bidResult.data);
      setItems(itemsResult.data);
    })();
  }, []);
  return (
    <>
      <Heading size="md">거래이력</Heading>
      <Divider m="0.25rem 0" />

      <Tabs colorScheme="orange">
        <TabList>
          <Tab>입찰기록</Tab>
          <Tab>판매기록</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <OrderTable items={myBids} />
          </TabPanel>
          <TabPanel>
            <OrderTable items={myItems} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const OrderTable: FC<{ items: Item[] }> = ({ items }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th w="50%">상품명</Th>
          <Th w="10%">상태</Th>
          <Th w="10%" isNumeric>
            호가
          </Th>
          <Th w="10%">마감일</Th>
          <Th w="10%">판매자</Th>
        </Tr>
      </Thead>
      <Tbody>
        {items.map(item => (
          <Tr key={item.id}>
            <Td>{item.title}</Td>
            <Td>경매종료</Td>
            <Td isNumeric>{item.start_price}</Td>
            <Td>{item.duration}</Td>
            <Td>{item.user_id}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default History;
