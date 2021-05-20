import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Header } from "components";
import React, { FC } from "react";
import { Route, Link as RouterLink } from "react-router-dom";
import { routes } from "routes";

const App: FC = () => {
  return (
    <>
      <Header
        rightArea={
          <RouterLink to="/login">
            <Button variant="outline" h="full" colorScheme="orange">
              로그인
            </Button>
          </RouterLink>
        }
      />
      <Box>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Box>
    </>
  );
};
export default App;
