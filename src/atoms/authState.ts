import { UserView } from "api";
import { atom, SetterOrUpdater, useRecoilState } from "recoil";

export const userState = atom<UserView | null>({
  key: "userState",
  default: null,
});

export function useUserState(): [UserView, SetterOrUpdater<UserView>] {
  return useRecoilState(userState);
}
