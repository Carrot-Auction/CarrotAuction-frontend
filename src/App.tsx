import { Box } from "@chakra-ui/layout";
import { getLoginUser } from "api";
import { useCurrentUserState } from "atoms";
import { Header, UserProfile } from "components";
import { useQuery } from "hooks/useQuery";
import React, { FC, Suspense, useEffect } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { routes } from "routes";

const App: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const queries = useQuery();
  const [user, setUser] = useCurrentUserState();

  useEffect(() => {
    if (user === null)
      (async () => {
        try {
          const userInfo = await getLoginUser();
          setUser(userInfo.data);
        } catch (err) {
          return null;
        }
      })();
  }, []);
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
      <Box flexGrow={1}>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Box>
    </>
  );
};
export default App;
