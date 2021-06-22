import { UserView } from "api";
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
  return useRecoilState(currentUserState);
}

export const alreadyLoggedInState = selector({
  key: "AlreadyLoggedInState",
  get: ({ get }) => get(currentUserState) !== null,
});

export function useAlreadyLoggedInState(): boolean {
  return useRecoilValue(alreadyLoggedInState);
}
