import { Box } from "@chakra-ui/layout";
import { Header, UserProfile } from "components";
import { useQuery } from "hooks/useQuery";
import React, { FC, Suspense } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { routes } from "routes";

const App: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const queries = useQuery();
  return (
    <>
      <Header
        rightArea={
          <Suspense fallback={<div>Loading...</div>}>
            <UserProfile />
          </Suspense>
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
