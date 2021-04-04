import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";

export const RegisterPage: React.FC = () => (
  <>
    <Flex h="100vh" justifyContent="center" flexDir="column">
      <Box
        m="0 auto"
        w="full"
        maxW="28rem"
        borderRadius="1rem"
        bgColor="white"
        p="1rem"
      >
        <Heading size="md">회원가입</Heading>
        <Divider m="0.5rem 0" />

        <form>
          <VStack spacing="1rem">
            <FormControl id="username" isRequired>
              <FormLabel>아이디</FormLabel>
              <Input pattern="[a-zA-Z\d_]{4,}" />
            </FormControl>

            <FormControl id="nickname" isRequired>
              <FormLabel>닉네임</FormLabel>
              <Input pattern="[0-9a-zA-Z가-힣_]+" />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>패스워드</FormLabel>
              <Input type="password" pattern="(?=.*\d)(?=.*[a-z]).{8,}" />
            </FormControl>
            <FormControl id="password_confirm" isRequired>
              <FormLabel>패스워드 확인</FormLabel>
              <Input type="password" pattern="(?=.*\d)(?=.*[a-z]).{8,}" />
            </FormControl>

            <Button w="full" type="submit">
              회원가입
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  </>
);
