import {
  Box,
  Text,
  Avatar,
  AvatarBadge,
  Icon,
  Input,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";
import React, { FC, useState } from "react";
import {
  AiOutlineMinus,
  AiOutlineClose,
  AiOutlineSend,
  AiOutlinePicture,
} from "react-icons/ai";
import { FaRegWindowMaximize } from "react-icons/fa";

export type ContentList = {
  id: number;
  chatpersoncheck: boolean;
  content: string;
};

export type ChatProps = {
  title: string;
  logincheck: boolean;
  imghandle?: (value: void) => void;
  roomid: number;
  chatCloseHandle?: React.MouseEventHandler<HTMLButtonElement>;
  sendMessageHandle?: React.FormEventHandler<HTMLFormElement>;
  contents: ContentList[];
};

export const Chat: FC<ChatProps> = props => {
  const [minState, minStateSet] = useState(true);
  return (
    <Box filter="drop-shadow(1px 1px 2px gray)">
      <Box
        w="27rem"
        h="4rem"
        display="flex"
        backgroundColor="white"
        position="relative"
        alignItems="center"
        borderRadius="0.7rem 0.7rem 0 0/0.7rem 0.7rem 0 0"
      >
        {props.logincheck ? (
          <Avatar marginLeft="1rem">
            <AvatarBadge boxSize="1.25em" bg="green.500" />
          </Avatar>
        ) : (
          <Avatar marginLeft="1rem">
            <AvatarBadge
              borderColor="papayawhip"
              bg="tomato"
              boxSize="1.25em"
            />
          </Avatar>
        )}
        <Text marginLeft="1rem" fontSize="1.5rem">
          {props.title}
        </Text>
        {minState ? (
          <Button
            onClick={() => minStateSet(false)}
            marginLeft="12em"
            w="1.5rem"
            h="1.5rem"
            bgColor="white"
          >
            <Icon as={AiOutlineMinus} w="1.5rem" h="1.5rem" />
          </Button>
        ) : (
          <Button
            onClick={() => minStateSet(true)}
            marginLeft="12rem"
            w="1.5rem"
            h="1.5rem"
            bgColor="white"
          >
            <Icon as={FaRegWindowMaximize} w="1.5rem" h="1.5rem" />
          </Button>
        )}
        <Button
          onClick={props.chatCloseHandle}
          marginLeft="0.5rem"
          w="1.5rem"
          h="1.5rem"
          bgColor="white"
        >
          <Icon as={AiOutlineClose} w="1.5rem" h="1.5rem" />
        </Button>
      </Box>
      {minState ? <ChatDown {...props} /> : <Box></Box>}
    </Box>
  );
};

export const ChatDown: FC<ChatProps> = props => {
  const [text, setText] = useState("");
  const onChange = e => {
    setText(e.target.value);
  };
  const onReset = () => {
    setText("");
  };
  return (
    <Box>
      <Flex
        w="27rem"
        h="27rem"
        direction="column"
        backgroundColor="white"
        overflowY="auto"
      >
        {props.contents.map(content => (
          <ShowContent key={content.id} {...content} />
        ))}
      </Flex>
      <Box
        w="27rem"
        h="4rem"
        display="flex"
        backgroundColor="white"
        alignItems="center"
        borderRadius="0 0 0.7rem 0.7rem/0 0 0.7rem 0.7rem"
      >
        <form onSubmit={props.sendMessageHandle}>
          <Box display="flex" alignItems="center">
            <Input
              placeholder="메세지를 입력하세요."
              marginLeft="1rem"
              w="20rem"
              onChange={onChange}
              value={text}
              type="text"
            />
            <Button
              type="submit"
              onClick={onReset}
              w="1.5rem"
              h="1.5rem "
              marginLeft="0.5rem"
              bgColor="white"
            >
              <Icon as={AiOutlineSend} w="1.5rem" h="1.5rem " />
            </Button>
          </Box>
        </form>
        <Button w="1.5rem" h="1.5rem " marginLeft="0.3rem" bgColor="white">
          <Icon as={AiOutlinePicture} w="1.5rem" h="1.5rem " />
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
          padding="0.5rem"
          display="inline-block"
          margin="0.5rem"
        >
          {props.content}
        </Box>
      ) : (
        <Box
          borderRadius="0 1rem 1rem 1rem/0 1rem 1rem 1rem"
          marginLeft="0"
          bgColor="lightgray"
          margin="0.5rem"
          padding="0.5rem"
          display="inline-block"
        >
          {props.content}
        </Box>
      )}
    </Flex>
  );
};
