import { getLoginUser, UserView } from "api";
import { atom, SetterOrUpdater, useRecoilState } from "recoil";

export const userState = atom<UserView | null>({
  key: "userState",
  default: (async () => {
    try {
      const userInfo = await getLoginUser();
      return userInfo.data;
    } catch (err) {
      return null;
    }
  })(),
});

export function useUserState(): [
  UserView | null,
  SetterOrUpdater<UserView | null>
] {
  return useRecoilState(userState);
}
