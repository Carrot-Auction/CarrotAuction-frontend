import { useUserState } from "atoms/authState";
import { useHistory } from "react-router";
import { userLogin, UserLoginInput } from "api";

type UserLoginResult = (user: UserLoginInput) => Promise<void>;
export default function useLogin(): UserLoginResult {
  const [, setUserState] = useUserState();
  const history = useHistory();
  const login = async (user: UserLoginInput) => {
    const userInfo = await userLogin(user);
    setUserState(userInfo.data);
    history.push("/");
  };
  return login;
}
