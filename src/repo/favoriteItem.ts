import { Item } from "repo";

export interface Favorite {
  id: number;
  item: number;
  user: number;
  item_api_response: Item;
}

export const getFavoriteList = async (): Promise<CAResponse<Favorite[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/favoriteItem`, {
      method: "GET",
    })
  ).json();

export const createFavorite = async (): Promise<CAResponse<Favorite>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/favoriteItem`, {
      method: "POST",
    })
  ).json();

export const updateFavorite = async (): Promise<CAResponse<Favorite>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/favoriteItem`, {
      method: "DELETE",
    })
  ).json();

export const deleteFavorite = async (
  favoriteId: number
): Promise<CAResponse<Favorite>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/favoriteItem/${favoriteId}`, {
      method: "DELETE",
    })
  ).json();

export const getFavorite = async (
  favoriteId: number
): Promise<CAResponse<Favorite>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/favoriteItem/${favoriteId}`, {
      method: "GET",
    })
  ).json();
