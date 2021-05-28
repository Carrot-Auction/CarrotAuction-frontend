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
import { useAlreadyLoggedInState } from "atoms";
import { useFormik } from "formik";
import useLogin from "hooks/useLogin";
import { Link as RotueLink, useHistory } from "react-router-dom";

export const LoginPage: React.FC = () => {
  const loggedInLoadable = useAlreadyLoggedInState();
  const history = useHistory();
  switch (loggedInLoadable.state) {
    case "loading": {
      return null;
    }
    case "hasError":
    case "hasValue": {
      const isLoggedIn = loggedInLoadable.contents;
      if (isLoggedIn) {
        history.push("/");
        return null;
      } else return <LoginContent />;
    }
  }
};

const LoginContent: React.FC = () => {
  const login = useLogin();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async values => {
      try {
        await login(values);
      } catch (err) {
        alert(err.message);
      }
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
            <FormControl id="email" isRequired>
              <FormLabel>이메일</FormLabel>
              <Input
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                onChange={formik.handleChange}
                value={formik.values.email}
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
