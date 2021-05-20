import { Box } from "@chakra-ui/layout";
import {
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useUserState } from "atoms/authState";
import {
  Header,
  NotificationIconButton,
  NotificationList,
  NotificationPopover,
  SimpleUserDisplay,
} from "components";
import { useQuery } from "hooks/useQuery";
import React, { FC, Suspense } from "react";
import {
  Route,
  Link as RouterLink,
  useHistory,
  useLocation,
} from "react-router-dom";
import { routes } from "routes";
import { CgProfile, CgLogOut } from "react-icons/cg";
import useLogout from "hooks/useLogout";

const UserProfile: FC = () => {
  const [user] = useUserState();
  const logout = useLogout();
  return user === null ? (
    <RouterLink to="/login">
      <Button variant="outline" h="full" colorScheme="orange">
        로그인
      </Button>
    </RouterLink>
  ) : (
    <HStack spacing={4} mt="-0.25rem">
      <Box>
        <NotificationPopover trigger={<NotificationIconButton unread />}>
          <NotificationList items={[]} />
        </NotificationPopover>
      </Box>
      <Menu>
        <MenuButton>
          <SimpleUserDisplay username={user.nickname} />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<CgProfile />}>프로필</MenuItem>
          <MenuItem
            icon={<CgLogOut />}
            onClick={() => {
              try {
                logout();
              } catch (err) {
                console.log(err.message);
              }
            }}
          >
            로그아웃
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
};

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
