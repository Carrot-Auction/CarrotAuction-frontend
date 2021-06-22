import { ChatListProps } from "components/ChatList";
import { atom, selector } from "recoil";

export const initialState = [
  {
    title: "구본휘",
    logincheck: false,
    chatListShow: true,
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
  },
  {
    title: "이동곤",
    logincheck: true,
    chatListShow: true,
    contents: [
      {
        id: 0,
        chatpersoncheck: false,
        content: "저 일산 불곰입니다. 네고하시죠.",
      },
      {
        id: 1,
        chatpersoncheck: false,
        content: "좋게 말할때 받아주시죠.",
      },
      {
        id: 3,
        chatpersoncheck: true,
        content: "아... 죄송합니다. 제가 돈이 급해서 ㅜㅜ.",
      },
      {
        id: 4,
        chatpersoncheck: true,
        content: "다른 분들꺼 찾아 보시는게 좋을거 같아요!",
      },
      {
        id: 5,
        chatpersoncheck: false,
        content: "다들 맞기 전까지는 그러더라고요 ㅎㅎ.",
      },
    ],
  },
];

export const chatState = atom<ChatListProps["chatlist"]>({
  key: "chatState", // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: initialState,
});

export const Show = atom({
  key: "Show", // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: false,
});

export const ShowChat = atom({
  key: "ShowChat", // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: false,
});

export const PickChat = atom({
  key: "PickChat",
  default: "이동곤",
});

export const countChatState = selector({
  key: "countChatState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(chatState);
    return count.length;
  },
});
