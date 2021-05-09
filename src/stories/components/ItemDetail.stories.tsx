import React from "react";
import { Story, Meta } from "@storybook/react";
import { ItemDetail, ItemDetailProps } from "components/ItemDetail";

export default {
  title: "Components/ItemDetail",
  component: ItemDetail,
} as Meta;

const Template: Story<ItemDetailProps> = args => <ItemDetail {...args} />;

export const Default: Story<ItemDetailProps> = Template.bind({});
Default.args = {
  imgurls: [
    {
      id: 0,
      imgurl: "https://via.placeholder.com/150",
    },
    {
      id: 1,
      imgurl: "https://via.placeholder.com/150",
    },
  ],
  profilurl: "https://via.placeholder.com/150",
  name: "구본휘",
  filter: "신발",
  title: "조던 신상 팝니다.",
  time: 6,
  nowprice: 30000,
  defualtprice: 25000,
  content: "진짜 5번 이하 신었습니다. 저희 애들 꼭 데려가 주세요.",
};
