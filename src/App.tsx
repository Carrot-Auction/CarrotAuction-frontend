import { Box } from "@chakra-ui/layout";
import { Header } from "components";
import React, { FC } from "react";
import { Route } from "react-router-dom";
import { routes } from "routes";

const App: FC = () => {
  return (
    <>
      <Header />
      <Box p="1rem">
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Box>
    </>
  );
};
export default App;
