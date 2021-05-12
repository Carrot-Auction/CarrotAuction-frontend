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
  Link,
} from "@chakra-ui/react";
import { userLogin } from "api";
import { useFormik } from "formik";
import { Link as RotueLink } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: async values => {
      await userLogin(values.username, values.password);
    },
  });
  return (
    <Flex h="calc(100vh - 6rem)" justifyContent="center" flexDir="column">
      <Box
        m="0 auto"
        w="full"
        maxW="28rem"
        borderRadius="1rem"
        bgColor="white"
        p="1rem"
      >
        <Heading size="md">로그인</Heading>
        <Divider m="0.5rem 0" />

        <form onSubmit={formik.handleSubmit}>
          <VStack spacing="1rem">
            <FormControl id="username" isRequired>
              <FormLabel>아이디</FormLabel>
              <Input
                pattern="[a-zA-Z\d_]{4,}"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>패스워드</FormLabel>
              <Input
                type="password"
                pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>

            <Button w="full" type="submit">
              로그인
            </Button>

            <Box>
              {"또는 "}
              <Link as={RotueLink} to="/register">
                회원가입
              </Link>
            </Box>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
