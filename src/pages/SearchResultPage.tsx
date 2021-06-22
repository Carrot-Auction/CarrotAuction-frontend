import { Heading, Wrap, WrapItem } from "@chakra-ui/layout";
import { Box, Divider } from "@chakra-ui/react";
import { searchItem } from "api";
import { ItemCard, ItemCardProps } from "components";
import { useQuery } from "hooks/useQuery";
import React, { useEffect, useState } from "react";

export const SearchResultPage: React.FC = () => {
  const query = useQuery();
  const [results, setResults] = useState<ItemCardProps[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await searchItem(query.get("q"));
      setResults(
        data.map(el => ({
          ...el,
          price: el.start_price,
        }))
      );
    })();
  }, [query]);
  return (
    <Box p="1rem" maxW="1080px" m="auto">
      <Heading size="md">{`"${query.get("q")}" 검색 결과`}</Heading>
      <Divider mb={2} mt={2} />
      <Wrap spacing={5}>
        {results.map(item => (
          <WrapItem key={item.id}>
            <ItemCard {...item} />
          </WrapItem>
        ))}
      </Wrap>
    </Box>
  );
};
