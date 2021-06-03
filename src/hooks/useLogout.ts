import { currentUserState } from "atoms/currentUserState";
import { useHistory } from "react-router";
import { userLogout } from "api";
import { useSetRecoilState } from "recoil";

type UserLogoutResult = () => Promise<void>;
export default function useLogout(): UserLogoutResult {
  const setUserState = useSetRecoilState(currentUserState);
  const history = useHistory();
  const logout = async () => {
    await userLogout();
    setUserState(null);
    history.push("/");
  };
  return logout;
}
