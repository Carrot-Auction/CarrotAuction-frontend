import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { ItemDetail, ItemDetailProps } from "components/ItemDetail";
import { ItemCard, ItemCardProps } from "components/ItemCard";
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

export const ItemDetailPage: React.FC = () => {
  const Item: ItemDetailProps = {
    imgurls: [
      {
        imgurl:
          "http://www.jspeople.co.kr/data/file/jsmarket/3667210319_f7kLICDB_3faa45d62e3edb7038322ab991459e73947f34f8.jpg",
      },
      {
        imgurl:
          "http://fpost.co.kr/board/data/editor/1904/093e906c02611697bbc2a72e9080280c_1555372334_9463.jpg",
      },
    ],
    profilurl:
      "http://gangnamstar.co.kr/files/attach/images/119/904/027/99b6e593de5df80fd08141a0db2c2166.jpg",
    name: "구본휘",
    filter: "의류/신발",
    title: "조던 신상 팝니다.",
    time: 6,
    nowprice: 30000,
    defualtprice: 25000,
    content: "진짜 5번 이하 신었습니다. 저희 애들 꼭 데려가 주세요.",
    location: "동작구 상도2동",
  };
  const Card: ItemCardProps = {
    title: "상품이름12345678901234567890",
    imgurl: "https://via.placeholder.com/150",
    location: "상도동",
    price: 1000,
    comments: 12,
    likes: 12,
    dday: 5,
    favorite: false,
  };
  return (
    <Flex justifyContent="center" bgColor="white">
      <Box bgColor="white" marginTop="2rem" w="46.78rem">
        <ItemDetail {...Item}></ItemDetail>
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
