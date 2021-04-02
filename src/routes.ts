import { MainPage } from "pages";
import React from "react";

interface Rotue {
  path: string;
  component: React.ComponentType;
}

export const routes: Rotue[] = [
  {
    path: "/",
    component: MainPage,
  },
];
