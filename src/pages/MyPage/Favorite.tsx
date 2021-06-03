import { Divider, Grid, Heading } from "@chakra-ui/react";
import { getMyFavorites } from "api";
import { ItemCard, ItemCardProps } from "components";
import React, { FC, useEffect, useState } from "react";

const Favorite: FC = () => {
  const [favorites, setFavorites] = useState<ItemCardProps[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getMyFavorites();
      setFavorites(
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
  }, []);
  return (
    <>
      <Heading size="md">찜목록</Heading>
      <Divider m="0.25rem 0" />
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        {favorites.map((item, idx) => (
          <ItemCard key={idx} id={idx} {...item} favorite />
        ))}
      </Grid>
    </>
  );
};

export default Favorite;
