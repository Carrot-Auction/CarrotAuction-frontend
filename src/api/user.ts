import { ItemBider } from "api";
import { ApiResponse } from "types";
import { apiRequest } from "utils";
import { Item } from "./item";

export interface User {
  id: number;
  item_bider_api_response_list: ItemBider[];
  location: string;
  nickname: string;
  email: string;
  password: string;
}
export type UserRegisterInput = Omit<
  User,
  "item_bider_api_response_list" | "id"
>;
export type UserUpdateInput = Omit<
  User,
  "item_bider_api_response_list" | "password" | "email"
>;
export type UserLoginInput = Pick<User, "email" | "password">;
export type UserView = Omit<User, "password">;

export const getUserList = async (): Promise<ApiResponse<UserView[]>> =>
  await apiRequest("GET", `/api/user`);

export const updateUser = async (
  payload: UserUpdateInput
): Promise<ApiResponse<User>> => await apiRequest("PUT", `/api/user`, payload);

export const deleteUser = async (userId: number): Promise<ApiResponse<User>> =>
  await apiRequest("DELETE", `/api/user/${userId}`);

export const getUser = async (userId: number): Promise<ApiResponse<UserView>> =>
  await apiRequest("GET", `/api/user/${userId}`);

export const getLoginUser = async (): Promise<ApiResponse<UserView>> =>
  await apiRequest("GET", `/api/user/loginUser`);

export const getMyFavorites = async (): Promise<ApiResponse<Item[]>> =>
  await apiRequest("GET", `/api/user/myFavorite`);

export const getMyItems = async (): Promise<ApiResponse<Item[]>> =>
  await apiRequest("GET", `/api/user/myItem`);

export const getMyBid = async (): Promise<ApiResponse<Item[]>> =>
  await apiRequest("GET", `/api/user/myBid`);

export const getUserBiderInfo = async (
  userId: number
): Promise<ApiResponse<UserView>> =>
  await apiRequest("GET", `/api/user/${userId}/itemBider`);

export const userLogin = async (
  payload: UserLoginInput
): Promise<ApiResponse<UserView>> =>
  await apiRequest("POST", "/api/user/login", payload);

export const userLogout = async (): Promise<ApiResponse<string>> =>
  await apiRequest("GET", "/api/user/logout");

export const userRegister = async (
  payload: UserRegisterInput
): Promise<ApiResponse<UserView>> =>
  await apiRequest("POST", "/api/user/register", payload);
