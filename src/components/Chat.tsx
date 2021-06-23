import {
  Box,
  Text,
  Avatar,
  AvatarBadge,
  Icon,
  Input,
  Button,
  Flex,
} from "@chakra-ui/react";
import React, { FC, useCallback, useState } from "react";
import {
  AiOutlineMinus,
  AiOutlineSend,
  AiOutlinePicture,
} from "react-icons/ai";
import { useRecoilState } from "recoil";
import { chatState, ShowChat } from "atoms/ChatState";

export type ContentList = {
  id: number;
  userId?: number;
  chatpersoncheck: boolean;
  imgurl?: string;
  content: string;
};

export type ChatProps = {
  title: string;
  roodId?: number;
  userId?: number;
  otherUserId?: number;
  logincheck: boolean;
  chatListShow: boolean;
  profilurl?: string;
  imghandle?: (value: void) => void;
  roomid?: number;
  sendMessageHandle?: React.FormEventHandler<HTMLFormElement>;
  contents: ContentList[];
};

export const Chat: FC<ChatProps> = props => {
  const [showchat, showchatSet] = useRecoilState(ShowChat);
  const showchatSetF = () => {
    showchatSet(false);
  };
  return (
    <Box filter="drop-shadow(1px 1px 2px gray)">
      <Box
        w="19rem"
        h="3.5rem"
        display="flex"
        backgroundColor="white"
        position="relative"
        alignItems="center"
        borderRadius="0.7rem 0.7rem 0 0/0.7rem 0.7rem 0 0"
      >
        {props.logincheck ? (
          <Avatar marginLeft="0.6rem" marginTop="0.1rem" boxSize="2.7rem">
            <AvatarBadge boxSize="1.2rem" bg="green.500" />
          </Avatar>
        ) : (
          <Avatar marginLeft="0.6rem" marginTop="0.1rem" boxSize="2.7rem">
            <AvatarBadge
              borderColor="papayawhip"
              bg="tomato"
              boxSize="1.2rem"
            />
          </Avatar>
        )}
        <Text marginLeft="0.7rem" fontSize="1.3rem" marginTop="0.1rem">
          {props.title}
        </Text>
        <Button
          onClick={showchatSetF}
          marginLeft="8.2rem"
          w="1rem"
          bgColor="white"
          marginTop="0.1rem"
        >
          <Icon as={AiOutlineMinus} boxSize="1.5rem" />
        </Button>
      </Box>
      <ChatDown {...props} />
    </Box>
  );
};

export const ChatDown: FC<ChatProps> = props => {
  const [text, setText] = useState("");
  const [texts, setTexts] = useState(null);
  //const [allText, setAllText] = useRecoilState(chatState);
  const onChange = e => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  const send = e => {
    const array = [];
    array[array.length] = text;
    setTexts(array);
    onReset();
  };
  return (
    <Box>
      <Flex
        w="19rem"
        h="20rem"
        direction="column"
        backgroundColor="white"
        overflowY="auto"
      >
        {props.contents.map(content => (
          <ShowContent key={content.id} {...content} />
        ))}
        {texts ? (
          texts.map(item => <ShowContentOnly key={item.id} content={item} />)
        ) : (
          <></>
        )}
      </Flex>
      <Box
        w="19rem"
        h="3.5rem"
        display="flex"
        backgroundColor="white"
        alignItems="center"
        borderRadius="0 0 0.7rem 0.7rem/0 0 0.7rem 0.7rem"
      >
        <Box display="flex" alignItems="center">
          <Input
            placeholder="메세지를 입력하세요."
            marginLeft="0.6rem"
            marginTop="0.1rem"
            w="12rem"
            onChange={onChange}
            value={text}
            type="text"
          />
          <Button
            type="submit"
            onClick={send}
            marginTop="0.1rem"
            marginLeft="0.3rem"
            bgColor="white"
            w="1rem"
          >
            <Icon as={AiOutlineSend} boxSize="1.5rem" />
          </Button>
        </Box>
        <Button marginTop="0.1rem" marginLeft="0.1rem" bgColor="white" w="1rem">
          <Icon as={AiOutlinePicture} boxSize="1.5rem" />
        </Button>
      </Box>
    </Box>
  );
};

const ShowContent: FC<ContentList> = props => {
  return (
    <Flex justifyContent={props.chatpersoncheck ? "flex-end" : "flex-start"}>
      {props.chatpersoncheck ? (
        <Box
          borderRadius="1rem 1rem 0 1rem/1rem 1rem 0 1rem"
          h="auto"
          bgColor="rgb(0, 132, 255)"
          textColor="white"
          padding="0.4rem"
          display="inline-block"
          marginRight="0.5rem"
          marginLeft="0.5rem"
          marginTop="0.3rem"
          marginBottom="0.3rem"
          fontSize="0.9rem"
        >
          {props.content}
        </Box>
      ) : (
        <Box
          borderRadius="0 1rem 1rem 1rem/0 1rem 1rem 1rem"
          bgColor="lightgray"
          marginLeft="0.5rem"
          marginRight="0.5rem"
          marginTop="0.3rem"
          marginBottom="0.3rem"
          padding="0.4rem"
          display="inline-block"
          fontSize="0.9rem"
        >
          {props.content}
        </Box>
      )}
    </Flex>
  );
};

export type only = {
  content: string;
};

const ShowContentOnly: FC<only> = props => {
  const chatpersoncheck = true;
  return (
    <Flex justifyContent={chatpersoncheck ? "flex-end" : "flex-start"}>
      {chatpersoncheck ? (
        <Box
          borderRadius="1rem 1rem 0 1rem/1rem 1rem 0 1rem"
          h="auto"
          bgColor="rgb(0, 132, 255)"
          textColor="white"
          padding="0.4rem"
          display="inline-block"
          marginRight="0.5rem"
          marginLeft="0.5rem"
          marginTop="0.3rem"
          marginBottom="0.3rem"
          fontSize="0.9rem"
        >
          {props.content}
        </Box>
      ) : (
        <Box
          borderRadius="0 1rem 1rem 1rem/0 1rem 1rem 1rem"
          bgColor="lightgray"
          marginLeft="0.5rem"
          marginRight="0.5rem"
          marginTop="0.3rem"
          marginBottom="0.3rem"
          padding="0.4rem"
          display="inline-block"
          fontSize="0.9rem"
        >
          {props.content}
        </Box>
      )}
    </Flex>
  );
};
