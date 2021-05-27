import {
  ItemDetailPage,
  LoginPage,
  MainPage,
  MyPage,
  RegisterPage,
  SearchResultPage,
  UserProfilePage,
} from "pages";
import React from "react";

interface Rotue {
  path: string;
  exact?: boolean;
  component: React.ComponentType;
}

export const routes: Rotue[] = [
  {
    path: "/",
    component: MainPage,
    exact: true,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/register",
    component: RegisterPage,
  },
  {
    path: "/search",
    component: SearchResultPage,
  },
  {
    path: "/mypage",
    component: MyPage,
  },
  {
    path: "/items/:id",
    component: ItemDetailPage,
  },
  {
    path: "/users/:id",
    component: UserProfilePage,
  },
];
