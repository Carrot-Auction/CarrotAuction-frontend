import React, { FC } from "react";
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

const History: FC = () => {
  return (
    <>
      <Heading size="md">거래이력</Heading>
      <Divider m="0.25rem 0" />

      <Tabs colorScheme="orange">
        <TabList>
          <Tab>구입</Tab>
          <Tab>판매</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <OrderTable />
          </TabPanel>
          <TabPanel>
            <OrderTable />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};

const OrderTable: FC = () => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th w="50%">상품명</Th>
          <Th w="10%">상태</Th>
          <Th w="10%" isNumeric>
            호가
          </Th>
          <Th w="10%">등록일</Th>
          <Th w="10%">마감일</Th>
          <Th w="10%">판매자</Th>
        </Tr>
      </Thead>
      <Tbody>
        <Tr>
          <Td>우산</Td>
          <Td>경매종료</Td>
          <Td isNumeric>100원</Td>
          <Td>2020.01.01</Td>
          <Td>2020.01.01</Td>
          <Td>홍길동</Td>
        </Tr>
        <Tr>
          <Td>공구</Td>
          <Td>경매중</Td>
          <Td isNumeric>100원</Td>
          <Td>2020.01.01</Td>
          <Td>2020.01.01</Td>
          <Td>철수</Td>
        </Tr>
        <Tr>
          <Td>TV</Td>
          <Td>경매종료</Td>
          <Td isNumeric>100원</Td>
          <Td>2020.01.01</Td>
          <Td>2020.01.01</Td>
          <Td>영희</Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default History;
