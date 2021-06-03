import { getLoginUser, UserView } from "api";
import {
  atom,
  Loadable,
  selector,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValueLoadable,
} from "recoil";

export const currentUserState = atom<UserView | null>({
  key: "CurrentUserState",
  default: selector({
    key: "CurrentUserState/Default",
    get: async () => {
      try {
        const userInfo = await getLoginUser();
        return userInfo.data;
      } catch (err) {
        return null;
      }
    },
  }),
});

export function useCurrentUserState(): [
  UserView | null,
  SetterOrUpdater<UserView | null>
] {
  return useRecoilState(currentUserState);
}

export const alreadyLoggedInState = selector({
  key: "AlreadyLoggedInState",
  get: ({ get }) => get(currentUserState) !== null,
});

export function useAlreadyLoggedInState(): Loadable<boolean> {
  return useRecoilValueLoadable(alreadyLoggedInState);
}
