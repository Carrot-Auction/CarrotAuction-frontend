import { Box } from "@chakra-ui/layout";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { Header, UserProfile } from "components";
import { useQuery } from "hooks/useQuery";
import React, { FC, Suspense } from "react";
import { FaPlus } from "react-icons/fa";
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
      <Box>
        {routes.map(route => (
          <Route key={route.path} {...route} />
        ))}
      </Box>
      <Tooltip label="상품 등록">
        <IconButton
          position="fixed"
          bottom="1rem"
          right="1rem"
          aria-label="Search database"
          icon={<FaPlus />}
          colorScheme="orange"
          size="lg"
          borderRadius="full"
          onClick={() => history.push("/addItem")}
        />
      </Tooltip>
    </>
  );
};
export default App;
