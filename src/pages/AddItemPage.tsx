import { FC, useRef, useState, useEffect, useCallback } from "react";
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
  HStack,
  Image,
  Icon,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  InputGroup,
  InputRightAddon,
  Textarea,
} from "@chakra-ui/react";
import { AiOutlinePicture } from "react-icons/ai";
import { useHistory } from "react-router";
import { apiRequest } from "utils";
import { ApiResponse } from "types";

export type ItemRegisterInput = {
  startPrice: string;
  mainTitle: string;
};

//export const UserItemRegister = async (
// payload: ItemRegisterInput
//): Promise<ApiResponse<ItemRegisterInput>> =>
// await apiRequest("POST", "/api/user/register", payload);

//type UseItemRegisterResult = (item: ItemRegisterInput) => Promise<void>;
//export default function useItemRegister(): UseItemRegisterResult {
// const history = useHistory();
// const ItemRegister = async (item: ItemRegisterInput) => {
//  await UserItemRegister(item);
//  history.push("/");
//};
//return ItemRegister;
//}

export const AddItemPage: FC = () => {
  const [previewURL, setPreviewURL] = useState(null);
  const fileRef = useRef(null);

  const handleFileOnChange = e => {
    //파일 불러오기
    const fileArr = e.target.files;
    const fileURLs = [];
    const filesLength = fileArr.length;
    let fie;
    for (let i = 0; i < filesLength; i++) {
      fie = fileArr[i];
      const reader = new FileReader();
      reader.onload = e => {
        fileURLs[i] = reader.result;
        setPreviewURL([...fileURLs]);
        console.log(previewURL);
      };
      reader.readAsDataURL(fie);
    }
    const value = previewURL;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };

  const handleFileButtonClick = e => {
    fileRef.current.click();
  };

  const initialValues = {
    pictures: null,
    categori: "",
    buyYear: "",
    buyPrice: "",
    state: "",
    mainTitle: "",
    startPrice: "",
    itemExplain: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback(
    e => {
      const { name, value } = e.target;
      setValues({ ...values, [name]: value });
      console.log(values);
    },
    [values]
  );

  const handleSubmit = e => {
    setSubmitting(true);
    async () =>
      (
        await fetch("http://localhost:8080/api/item", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: values.mainTitle,
            start_price: values.startPrice,
          }),
        })
      ).json();
  };

  // const ItemRegister = useItemRegister();
  // const onSubmit = async values => {
  //  try {
  //   await ItemRegister({
  //    prictures: values.prictures,
  //   categori: values.categori,
  //  buyYear: values.buyYear,
  // buyPrice: values.buyPrice,
  //state: values.state,
  // mainTitle: values.mainTitle,
  // startPrice: values.startPrice,
  // itemExplain: values.itemExplain,
  // date: values.date,
  //});
  //} catch (err) {
  // alert(err.message);
  // }
  //};

  return (
    <Flex justifyContent="center" flexDir="column" bgColor="white">
      <Box m="0 auto" w="47rem" p="1rem" marginTop="8rem">
        <Heading size="lg">상품등록</Heading>
        <Divider m="0.5rem 0" marginTop="0.5rem" />

        <form onSubmit={handleSubmit}>
          <VStack marginTop="5rem" spacing="1rem">
            <FormControl id="image">
              <FormLabel>사진등록</FormLabel>
              <Box marginTop="0.5rem" marginBottom="0.5rem">
                <Input
                  name="pictures"
                  hidden={true}
                  ref={fileRef}
                  padding="0.25rem"
                  type="file"
                  accept="image/jpeg, image/jpg"
                  multiple
                  onChange={handleFileOnChange}
                />
                <Button
                  w="5rem"
                  h="5rem"
                  onClick={handleFileButtonClick}
                  bgColor="gray.300"
                >
                  <Icon as={AiOutlinePicture} boxSize="2rem" />
                </Button>
              </Box>
              <HStack
                alignItems="flex-start"
                justifyContent="center"
                spacing={3}
                w="full"
              >
                <Box w="full">
                  {previewURL === null ? (
                    <Box></Box>
                  ) : (
                    previewURL.map((item, idx) => (
                      <Image
                        w="15rem"
                        h="20rem"
                        display="inline-block"
                        key={idx}
                        src={item}
                      />
                    ))
                  )}
                </Box>
              </HStack>
            </FormControl>
            <Box w="full">
              <Flex justifyContent="space-between">
                <FormControl isRequired id="categori" w="20rem">
                  <FormLabel>종류</FormLabel>
                  <Select
                    name="categori"
                    onChange={handleChange}
                    placeholder="종류를 고르세요."
                  >
                    <option value="옷">옷</option>
                    <option value="신발">신발</option>
                    <option value="모자">모자</option>
                    <option value="핸드폰">핸드폰</option>
                    <option value="테블릿">테블릿</option>
                    <option value="가전제품">가전제품</option>
                  </Select>
                </FormControl>
                <FormControl isRequired id="buyYear" w="20rem">
                  <FormLabel>구입년도</FormLabel>
                  <InputGroup>
                    <Input
                      name="buyYear"
                      type="number"
                      value={values.buyYear}
                      onChange={handleChange}
                    />
                    <InputRightAddon>년</InputRightAddon>
                  </InputGroup>
                </FormControl>
              </Flex>
            </Box>
            <Box w="full">
              <Flex justifyContent="space-between">
                <FormControl isRequired id="state" w="20rem">
                  <FormLabel>상태</FormLabel>
                  <Select
                    name="state"
                    onChange={handleChange}
                    placeholder="상태를 고르세요."
                  >
                    <option value="상">상</option>
                    <option value="중">중</option>
                    <option value="하">하</option>
                  </Select>
                </FormControl>
                <FormControl isRequired id="buyPrice" w="20rem">
                  <FormLabel>구입가격</FormLabel>
                  <InputGroup>
                    <Input
                      name="buyPrice"
                      value={values.buyPrice}
                      onChange={handleChange}
                      type="number"
                      placeholder="가격을 입력하세요."
                    />
                    <InputRightAddon>₩</InputRightAddon>
                  </InputGroup>
                </FormControl>
              </Flex>
            </Box>
            <FormControl isRequired id="mainTitle" w="full">
              <FormLabel>제목</FormLabel>
              <Input
                type="text"
                name="mainTitle"
                value={values.mainTitle}
                onChange={handleChange}
                placeholder="제목을 입력하세요."
              />
            </FormControl>
            <FormControl isRequired id="itemExplain" w="full">
              <FormLabel>내용</FormLabel>
              <Textarea
                w="full"
                h="30rem"
                name="itemExplain"
                value={values.itemExplain}
                onChange={handleChange}
                placeholder="내용을 입력하세요."
              />
            </FormControl>
            <Box w="full">
              <Flex justifyContent="space-between">
                <FormControl isRequired id="startPrice" w="20rem">
                  <FormLabel>시작가격</FormLabel>
                  <InputGroup>
                    <Input
                      name="startPrice"
                      type="number"
                      value={values.startPrice}
                      onChange={handleChange}
                      placeholder="가격을 입력하세요."
                    />
                    <InputRightAddon>₩</InputRightAddon>
                  </InputGroup>
                </FormControl>
                <FormControl id="date" w="20rem">
                  <FormLabel>기한</FormLabel>
                  <Input
                    type="date"
                    name="date"
                    value={values.date}
                    onChange={handleChange}
                  />
                </FormControl>
              </Flex>
            </Box>
          </VStack>
          <Box marginTop="3rem" marginBottom="5rem">
            <Flex justifyContent="center">
              <FormControl id="subMit" w="10rem">
                <Input type="submit" value="제품등록" bgColor="gray.300" />
              </FormControl>
            </Flex>
          </Box>
        </form>
      </Box>
    </Flex>
  );
};
