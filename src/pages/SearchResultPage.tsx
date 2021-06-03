import { Heading } from "@chakra-ui/layout";
import { Box, Divider, Grid } from "@chakra-ui/react";
import { searchItem } from "api";
import { ItemCard, ItemCardProps } from "components";
import { useQuery } from "hooks/useQuery";
import React, { useEffect, useMemo, useState } from "react";

export const SearchResultPage: React.FC = () => {
  const query = useQuery();
  const [results, setResults] = useState<ItemCardProps[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await searchItem(query.get("q"));
      setResults(
        data.map(el => ({
          title: el.title,
          location: "서울",
          id: el.id,
          price: el.start_price,
          dday: 0,
          imgurl: "https://via.placeholder.com/150",
          likes: 0,
        }))
      );
    })();
  }, [query]);
  return (
    <>
      <Box maxW="1080px" m="auto">
        <Heading size="md">{`"${query.get("q")}" 검색 결과`}</Heading>
        <Divider mb={2} mt={2} />
        <Grid templateColumns="repeat(5, 1fr)" gap={6}>
          {results.map((item, idx) => (
            <ItemCard key={idx} id={idx} {...item} />
          ))}
        </Grid>
      </Box>
    </>
  );
};
