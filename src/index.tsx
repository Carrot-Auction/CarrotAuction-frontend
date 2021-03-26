import ReactDOM from "react-dom";
import "typeface-noto-sans-kr";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import App from "App";
import theme from "theme";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <BrowserRouter basename={process.env.BASE_NAME}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById("root")
);
