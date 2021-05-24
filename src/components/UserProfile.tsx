import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useCurrentUserState } from "atoms/currentUserState";
import {
  NotificationIconButton,
  NotificationList,
  NotificationPopover,
  SimpleUserDisplay,
} from "components";
import useLogout from "hooks/useLogout";
import React from "react";
import { CgLogOut, CgProfile } from "react-icons/cg";
import { MdSettings } from "react-icons/md";
import { useHistory, Link as RouterLink } from "react-router-dom";

export const UserProfile: React.FC = () => {
  const history = useHistory();
  const [user] = useCurrentUserState();
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
          <MenuItem
            icon={<CgProfile />}
            onClick={() => history.push(`/user/${user.id}`)}
          >
            프로필
          </MenuItem>
          <MenuItem
            icon={<MdSettings />}
            onClick={() => history.push("/mypage")}
          >
            마이페이지
          </MenuItem>
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
