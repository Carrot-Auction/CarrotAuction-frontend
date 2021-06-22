import { chatState, countChatState, Show } from "atoms/ChatState";
import React, { FC } from "react";
import { atom, useRecoilValue, useRecoilState } from "recoil";
import { Chat, ChatProps } from "./Chat";
import {
  Box,
  Icon,
  Button,
  IconButton,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import { FaFacebookMessenger } from "react-icons/fa";
import { ChatListItem } from "./ChatListItem";

export type ChatListProps = { chatlist: ChatProps[] };

export const ChatList: FC<ChatListProps> = props => {
  const [showItem, showItemSet] = useRecoilState(Show);
  const showOnclick = () => {
    showItem ? showItemSet(false) : showItemSet(true);
  };
  const count = useRecoilValue(countChatState);
  const fake = [{ title: "구본휘" }, { title: "이동곤" }];
  const chatstate = useRecoilValue(chatState);
  return (
    <Box position="fixed" bottom="1rem" right="5rem">
      <VStack>
        {showItem ? (
          //chatstate.map((item, idx) => <ChatListItem key={idx} title={item.title} />)
          chatstate
            .filter(item => item.chatListShow === true)
            .map((items, idx) => <ChatListItem key={idx} {...items} />)
        ) : (
          <Box></Box>
        )}
        <Tooltip label="메세지">
          <IconButton
            aria-label="show chat"
            icon={<FaFacebookMessenger size="2em" />}
            colorScheme="green"
            w="3.5rem"
            h="3.5em"
            borderRadius="full"
            onClick={showOnclick}
          />
        </Tooltip>
      </VStack>
    </Box>
  );
};
