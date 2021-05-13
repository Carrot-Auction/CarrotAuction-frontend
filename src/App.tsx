import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { Header } from "components";
import { useQuery } from "hooks/useQuery";
import React, { FC } from "react";
import {
  Route,
  Link as RouterLink,
  useHistory,
  useLocation,
} from "react-router-dom";
import { routes } from "routes";

const App: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const queries = useQuery();
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
        onSearch={q => history.push(`/search?q=${encodeURIComponent(q)}`)}
        searchValue={
          location.pathname === "/search" ? queries.get("q") : undefined
        }
      />
      <Box p="1rem">
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Box>
    </>
  );
};
export default App;
