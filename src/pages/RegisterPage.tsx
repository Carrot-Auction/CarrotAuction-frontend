import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import useSignup from "hooks/useSignup";
import React from "react";

export const RegisterPage: React.FC = () => {
  const signup = useSignup();
  const formik = useFormik({
    initialValues: {
      email: "",
      nickname: "",
      location: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async values => {
      try {
        await signup({
          email: values.email,
          password: values.password,
          nickname: values.nickname,
          location: values.location,
        });
      } catch (err) {
        alert(err.message);
      }
    },
    validate: values => {
      const errors: Partial<typeof values> = {};

      if (!values.email) errors.email = "내용을 입력해주세요!";
      else if (
        // eslint-disable-next-line no-control-regex
        !/^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/.test(
          values.email
        )
      )
        errors.email = "4글자 이상의 영문과 _만 사용이 가능합니다.";

      if (!values.nickname) errors.nickname = "내용을 입력해주세요!";
      else if (!/^[0-9a-zA-Z가-힣_]+$/.test(values.nickname))
        errors.nickname = "숫자, 영문, 한글만 가능합니다.";

      if (!values.location) errors.location = "내용을 입력해주세요!";

      if (!values.password) errors.password = "내용을 입력해주세요!";
      else if (values.password.length < 6)
        errors.password = "6글자 이상이어야 합니다.";
      else if (!/^(?=.*\d)(?=.*[a-z]).*$/.test(values.password))
        errors.password = "영문자와 숫자를 반드시 포함하여야 합니다.";

      if (values.passwordConfirm !== values.password)
        errors.passwordConfirm = "패스워드와 다릅니다.";

      return errors;
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
        <Heading size="md">회원가입</Heading>
        <Divider m="0.5rem 0" />

        <form onSubmit={formik.handleSubmit}>
          <VStack spacing="1rem">
            <FormControl
              id="email"
              isRequired
              isInvalid={formik.errors.email && formik.touched.email}
            >
              <FormLabel>이메일</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="nickname"
              isRequired
              isInvalid={formik.errors.nickname && formik.touched.nickname}
            >
              <FormLabel>닉네임</FormLabel>
              <Input
                name="nickname"
                onChange={formik.handleChange}
                value={formik.values.nickname}
              />
              <FormErrorMessage>{formik.errors.nickname}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="location"
              isRequired
              isInvalid={formik.errors.location && formik.touched.location}
            >
              <FormLabel>위치</FormLabel>
              <Input
                name="location"
                onChange={formik.handleChange}
                value={formik.values.location}
              />
              <FormErrorMessage>{formik.errors.location}</FormErrorMessage>
            </FormControl>

            <FormControl
              id="password"
              isRequired
              isInvalid={formik.errors.password && formik.touched.password}
            >
              <FormLabel>패스워드</FormLabel>
              <Input
                type="password"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
              <FormErrorMessage>{formik.errors.password}</FormErrorMessage>
            </FormControl>
            <FormControl
              id="passwordConfirm"
              isRequired
              isInvalid={
                formik.errors.passwordConfirm && formik.touched.passwordConfirm
              }
            >
              <FormLabel>패스워드 확인</FormLabel>
              <Input
                type="password"
                pattern="(?=.*\d)(?=.*[a-z]).{6,}"
                onChange={formik.handleChange}
                value={formik.values.passwordConfirm}
              />
              <FormErrorMessage>
                {formik.errors.passwordConfirm}
              </FormErrorMessage>
            </FormControl>

            <Button w="full" type="submit">
              회원가입
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
};
