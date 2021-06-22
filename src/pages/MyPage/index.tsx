import { Box, Flex, Link, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useAlreadyLoggedInState } from "atoms";
import React from "react";
import { FaHeart, FaListAlt, FaUserEdit } from "react-icons/fa";
import {
  Link as RouterLink,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Edit from "./Edit";
import History from "./History";
import Favorite from "./Favorite";

export const MyPage: React.FC = () => {
  const isLoggedIn = useAlreadyLoggedInState();
  const history = useHistory();
  if (!isLoggedIn) {
    history.push("/login");
    return null;
  } else return <MyPageContent />;
};

const MyPageContent: React.FC = () => {
  return (
    <Flex p="1rem" flexDir="row" gridGap="3" h="full">
      <Box borderRadius="1rem" bgColor="white" p="1rem" minW="14rem">
        <List spacing={3}>
          <ListItem>
            <Link as={RouterLink} to="/mypage/edit">
              <ListIcon as={FaUserEdit} />
              {"회원 정보 수정"}
            </Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to="/mypage/history">
              <ListIcon as={FaListAlt} />
              {"거래이력"}
            </Link>
          </ListItem>
          <ListItem>
            <Link as={RouterLink} to="/mypage/favorite">
              <ListIcon as={FaHeart} />
              {"찜목록"}
            </Link>
          </ListItem>
        </List>
      </Box>

      <Box borderRadius="1rem" bgColor="white" p="1rem" flexGrow={1}>
        <Switch>
          <Route exact path="/mypage">
            <Redirect to="/mypage/edit" />
          </Route>
          <Route path="/mypage/edit">
            <Edit />
          </Route>
          <Route path="/mypage/history">
            <History />
          </Route>
          <Route path="/mypage/favorite">
            <Favorite />
          </Route>
        </Switch>
      </Box>
    </Flex>
  );
};
