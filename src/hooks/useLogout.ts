import { useUserState } from "atoms/authState";
import { useHistory } from "react-router";
import { userLogout } from "api";

type UserLogoutResult = () => Promise<void>;
export default function useLogout(): UserLogoutResult {
  const [, setUserState] = useUserState();
  const history = useHistory();
  const logout = async () => {
    await userLogout();
    setUserState(null);
    history.push("/");
  };
  return logout;
}
