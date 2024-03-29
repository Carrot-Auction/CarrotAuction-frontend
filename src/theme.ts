import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        bgColor: "appBG",
      },
      "#root": {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      },
    },
  },
  colors: {
    appBG: "#F9F9F9",
  },
  shadows: {
    outline: "0 0 0 1px rgba(221, 107, 32, 0.6)",
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "orange.400",
      },
      baseStyle: {
        _hover: {
          borderColor: "orange.400",
        },
      },
    },
    Popover: {
      baseStyle: {
        popper: {
          width: "fit-content",
          maxWidth: "fit-content",
        },
      },
    },
  },
});

export default theme;
