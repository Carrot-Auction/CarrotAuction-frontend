import { useUserState } from "atoms/authState";
import { useHistory } from "react-router";
import { userRegister, UserRegisterInput } from "api";

type UseSignupResult = (user: UserRegisterInput) => Promise<void>;
export default function useSignup(): UseSignupResult {
  const [, setUserState] = useUserState();
  const history = useHistory();
  const signup = async (user: UserRegisterInput) => {
    const userInfo = await userRegister(user);
    setUserState(userInfo.data);
    history.push("/");
  };
  return signup;
}
