import {
  Button,
  Divider,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  VStack,
} from "@chakra-ui/react";
import { useCurrentUserState } from "atoms";
import { useFormik } from "formik";
import React, { FC } from "react";

const Edit: FC = () => {
  const [currentUserState] = useCurrentUserState();
  const formik = useFormik({
    initialValues: {
      nickname: currentUserState.nickname,
      location: currentUserState.location,
      password: "",
      passwordConfirm: "",
    },
    onSubmit: async () => {
      return;
    },
    validate: values => {
      const errors: Partial<typeof values> = {};

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
    <>
      <Heading size="md">회원정보 수정</Heading>
      <Divider m="0.25rem 0" />
      <form onSubmit={formik.handleSubmit}>
        <VStack spacing="1rem" p="1rem">
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
            <FormErrorMessage>{formik.errors.passwordConfirm}</FormErrorMessage>
          </FormControl>

          <Button w="full" type="submit">
            수정
          </Button>
        </VStack>
      </form>
    </>
  );
};

export default Edit;
