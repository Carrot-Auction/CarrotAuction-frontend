import { Box } from "@chakra-ui/layout";
import { Header, UserProfile } from "components";
import { useQuery } from "hooks/useQuery";
import React, { FC, Suspense } from "react";
import { Route, useHistory, useLocation } from "react-router-dom";
import { routes } from "routes";
import { ChatList } from "./components/ChatList";
import { chatState, ShowChat, PickChat } from "./atoms/ChatState";
import { useRecoilState, useRecoilValue } from "recoil";
import { Chat } from "./components/Chat";
import { useAlreadyLoggedInState } from "atoms";

const App: FC = () => {
  const history = useHistory();
  const location = useLocation();
  const queries = useQuery();
  const login = useAlreadyLoggedInState();
  const chatlist = useRecoilValue(chatState);
  const pickchat = useRecoilValue(PickChat);
  const [showchat, showchatSet] = useRecoilState(ShowChat);
  const isme = element => {
    if (element.title === pickchat) {
      return true;
    }
  };

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
      {showchat ? (
        <Box position="fixed" bottom="1rem" right="10rem">
          <Chat {...chatlist.find(isme)}></Chat>
        </Box>
      ) : (
        <></>
      )}
      <Box position="absolute">
        <ChatList chatlist={chatlist}></ChatList>
      </Box>
    </>
  );
};
export default App;
