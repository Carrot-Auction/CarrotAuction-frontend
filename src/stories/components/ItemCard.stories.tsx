import React from "react";
import { Story, Meta } from "@storybook/react";

import { ItemCard, ItemCardProps } from "components";

export default {
  title: "Components/ItemCard",
  component: ItemCard,
  argTypes: { favoriteHandle: { action: "favoriteHandle" } },
} as Meta;

const Template: Story<ItemCardProps> = args => <ItemCard {...args} />;

export const Default: Story<ItemCardProps> = Template.bind({});
Default.args = {
  title: "상품이름12345678901234567890",
  url: "https://via.placeholder.com/150",
  location: "상도동",
  price: 1000,
  likes: 12,
  dday: 5,
  favorite: false,
  /* favoritHandle 필요 */
};
