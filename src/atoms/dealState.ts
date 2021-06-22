import { atom, selector } from "recoil";

export const ShowDeal = atom({
  key: "ShowDeal", // unique ID(다른 atom/selectors 와 구별하기 위함)
  default: false,
});
