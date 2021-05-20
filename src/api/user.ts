import { Favorite, ItemBider } from "api";
import { ApiResponse } from "types";
import { apiRequest } from "utils";

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
export type UserLoginInput = Pick<User, "email" | "password">;
export type UserView = Omit<User, "password">;

export const getUserList = async (): Promise<ApiResponse<UserView[]>> =>
  await apiRequest("GET", `/api/user`);

export const updateUser = async (): Promise<ApiResponse<User>> =>
  await apiRequest("PUT", `/api/user`);

export const deleteUser = async (userId: number): Promise<ApiResponse<User>> =>
  await apiRequest("DELETE", `/api/user/${userId}`);

export const getUser = async (userId: number): Promise<ApiResponse<UserView>> =>
  await apiRequest("GET", `/api/user/${userId}`);

export const getLoginUser = async (): Promise<ApiResponse<UserView>> =>
  await apiRequest("GET", `/api/user/loginUser`);

export const getUserFavorites = async (
  userId: number
): Promise<ApiResponse<Favorite[]>> =>
  await apiRequest("GET", `/api/user/${userId}/favoriteItem`);

export const getUserBittenItems = async (
  userId: number
): Promise<ApiResponse<ItemBider[]>> =>
  await apiRequest("GET", `/api/user/${userId}/itemBider`);

export const getUserBiderInfo = async (
  userId: number
): Promise<ApiResponse<UserView>> =>
  await apiRequest("GET", `/api/user/${userId}/itemBider`);

export const userLogin = async (
  payload: UserLoginInput
): Promise<ApiResponse<UserView>> =>
  await apiRequest("POST", "/api/user/login", payload);

export const userRegister = async (
  payload: UserRegisterInput
): Promise<ApiResponse<UserView>> =>
  await apiRequest("POST", "/api/user/register", payload);
