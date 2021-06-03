import { currentUserState } from "atoms/currentUserState";
import { useHistory } from "react-router";
import { userLogin, UserLoginInput } from "api";
import { useSetRecoilState } from "recoil";

type UserLoginResult = (user: UserLoginInput) => Promise<void>;
export default function useLogin(): UserLoginResult {
  const setUserState = useSetRecoilState(currentUserState);
  const history = useHistory();
  const login = async (user: UserLoginInput) => {
    const userInfo = await userLogin(user);
    setUserState(userInfo.data);
    history.push("/");
  };
  return login;
}
