import { getLoginUser, UserView } from "api";
import { useEffect } from "react";
import {
  atom,
  selector,
  SetterOrUpdater,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const currentUserState = atom<UserView | null>({
  key: "CurrentUserState",
  default: null,
});

export function useCurrentUserState(): [
  UserView | null,
  SetterOrUpdater<UserView | null>
] {
  const [user, setUser] = useRecoilState(currentUserState);
  useEffect(() => {
    if (user === null)
      (async () => {
        try {
          const userInfo = await getLoginUser();
          setUser(userInfo.data);
        } catch (err) {
          return null;
        }
      })();
  }, []);
  return [user, setUser];
}

export const alreadyLoggedInState = selector({
  key: "AlreadyLoggedInState",
  get: ({ get }) => get(currentUserState) !== null,
});

export function useAlreadyLoggedInState(): boolean {
  return useRecoilValue(alreadyLoggedInState);
}
