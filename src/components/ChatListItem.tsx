import React, { FC, useCallback } from "react";
import { Box, IconButton, Tooltip } from "@chakra-ui/react";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useRecoilState } from "recoil";
import { chatState, PickChat, ShowChat } from "atoms/ChatState";
import { ChatProps } from "./Chat";

export const ChatListItem: FC<ChatProps> = props => {
  const [changeChat, changeChatSet] = useRecoilState(PickChat);
  const [changeShowChat, changeShowChatSet] = useRecoilState(ShowChat);
  const [chatstate, chatstateSet] = useRecoilState(chatState);
  const deleteShowList = useCallback(() => {
    const newProps = [...chatstate];
    const found = newProps.find(chat => chat.title === props.title);
    if (found !== undefined) {
      found.chatListShow = false;
      chatstateSet(newProps);
    }
  }, [chatstate]);
  const changeChatF = () => {
    changeChatSet(props.title);
    props.title === changeChat
      ? changeShowChat
        ? changeShowChatSet(false)
        : changeShowChatSet(true)
      : changeShowChatSet(true);
  };
  return (
    <Box position="relative">
      <Box zIndex="1">
        <Tooltip hasArrow label={props.title} placement="left" bg="gray.500">
          <IconButton
            aria-label="Search Chat"
            //src={props.profilurl}
            icon={<BsFillPersonFill size="2em" />}
            colorScheme="orange"
            h="3.5em"
            w="3.5rem"
            borderRadius="full"
            onClick={changeChatF}
            //onMouseOver
          />
        </Tooltip>
      </Box>
      <Box
        top="-0.6rem"
        right="1.4rem"
        w="0.1rem"
        position="absolute"
        zIndex="2"
      >
        <IconButton
          aria-label="chatList Delete"
          icon={<AiOutlineCloseCircle size="1.5em" />}
          color="blackAlpha.600"
          w="1rem"
          h="1rem"
          colorScheme="gray.400"
          borderRadius="full"
          onClick={deleteShowList}
        />
      </Box>
    </Box>
  );
};
