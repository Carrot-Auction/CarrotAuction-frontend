import React from "react";
import { Story, Meta } from "@storybook/react";

import { Chat, ChatProps } from "components/Chat";

export default {
  title: "components/Chat",
  component: Chat,
} as Meta;

const Template: Story<ChatProps> = args => <Chat {...args} />;

export const Defualt: Story<ChatProps> = Template.bind({});
Defualt.args = {
  title: "구본휘",
  logincheck: false,
  contents: [
    {
      id: 0,
      chatpersoncheck: false,
      content: "안녕하세요.",
    },
    {
      id: 1,
      chatpersoncheck: false,
      content: "글보고 연락드렸어요.",
    },
    {
      id: 3,
      chatpersoncheck: true,
      content: "안녕하세요.",
    },
    {
      id: 4,
      chatpersoncheck: true,
      content: "직거래 아니면 택배거래 원하세요?",
    },
    {
      id: 5,
      chatpersoncheck: false,
      content: "직거래 희망합니다.",
    },
    {
      id: 6,
      chatpersoncheck: true,
      content: "지역이 어디세요?",
    },
    {
      id: 7,
      chatpersoncheck: false,
      content: "상도동에 살고 있습니다.",
    },
    {
      id: 8,
      chatpersoncheck: true,
      content: "아 저도 상도쪽인데 내일 15시에 숭실대 정문 괜찮으세요?",
    },
    {
      id: 9,
      chatpersoncheck: false,
      content: "가능합니다.",
    },
    {
      id: 10,
      chatpersoncheck: true,
      content: "내일 뵙겠습니다.",
    },
  ],
};
