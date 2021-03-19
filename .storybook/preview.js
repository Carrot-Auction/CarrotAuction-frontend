import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import "typeface-noto-sans-kr";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(StoryFn => (
  <ChakraProvider>
    <StoryFn />
  </ChakraProvider>
));
