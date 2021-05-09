import { LoginPage, MainPage, RegisterPage } from "pages";
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
];
