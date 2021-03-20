import { addDecorator } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import "typeface-noto-sans-kr";

import theme from "theme";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
};

addDecorator(StoryFn => (
  <ChakraProvider theme={theme}>
    <StoryFn />
  </ChakraProvider>
));
