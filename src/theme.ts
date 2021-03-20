import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bgColor: "appBG",
      },
    },
  },
  colors: {
    appBG: "#F9F9F9",
  },
  components: {
    Input: {
      baseStyle: {
        _hover: {
          borderColor: "orange.400",
        },
      },
    },
  },
});

export default theme;
