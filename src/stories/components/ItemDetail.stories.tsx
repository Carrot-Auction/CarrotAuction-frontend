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
      imgurl:
        "http://www.jspeople.co.kr/data/file/jsmarket/3667210319_f7kLICDB_3faa45d62e3edb7038322ab991459e73947f34f8.jpg",
    },
    {
      id: 1,
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
