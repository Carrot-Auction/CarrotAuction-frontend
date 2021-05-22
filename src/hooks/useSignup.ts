import { useCurrentUserState } from "atoms/currentUserState";
import { useHistory } from "react-router";
import { userRegister, UserRegisterInput } from "api";

type UseSignupResult = (user: UserRegisterInput) => Promise<void>;
export default function useSignup(): UseSignupResult {
  const [, setUserState] = useCurrentUserState();
  const history = useHistory();
  const signup = async (user: UserRegisterInput) => {
    const userInfo = await userRegister(user);
    setUserState(userInfo.data);
    history.push("/");
  };
  return signup;
}
