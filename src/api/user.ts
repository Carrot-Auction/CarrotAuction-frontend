import { Favorite, ItemBider } from "api";

export interface User {
  id: number;
  item_bider_api_response_list: ItemBider[];
  location: string;
  nickname: string;
  user_id: string;
  user_pw: string;
}
export type UserView = Omit<User, "user_pw">;

export const getUserList = async (): Promise<CAResponse<UserView[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user`, {
      method: "GET",
    })
  ).json();

export const createUser = async (): Promise<CAResponse<User>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user`, {
      method: "POST",
    })
  ).json();

export const updateUser = async (): Promise<CAResponse<User>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user`, {
      method: "DELETE",
    })
  ).json();

export const deleteUser = async (userId: number): Promise<CAResponse<User>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user/${userId}`, {
      method: "DELETE",
    })
  ).json();

export const getUser = async (userId: number): Promise<CAResponse<UserView>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user/${userId}`, {
      method: "GET",
    })
  ).json();

export const getUserFavorites = async (
  userId: number
): Promise<CAResponse<Favorite[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user/${userId}/favoriteItem`, {
      method: "GET",
    })
  ).json();

export const getUserBittenItems = async (
  userId: number
): Promise<CAResponse<ItemBider[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user/${userId}/itemBider`, {
      method: "GET",
    })
  ).json();

export const getUserBiderInfo = async (
  userId: number
): Promise<CAResponse<{ user_api_response: UserView }>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/user/${userId}/itemBider`, {
      method: "GET",
    })
  ).json();
