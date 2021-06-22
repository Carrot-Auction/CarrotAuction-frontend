import { Item } from "api";
import { ApiResponse } from "types";
import { apiRequest } from "utils";

export interface Favorite {
  id: number;
  item: number;
  user: number;
  item_api_response: Item;
}

export const getFavoriteList = async (): Promise<ApiResponse<Favorite[]>> =>
  await apiRequest("GET", `/api/favoriteItem`);

export const createFavorite = async (): Promise<ApiResponse<Favorite>> =>
  await apiRequest("POST", `/api/favoriteItem`);

export const updateFavorite = async (
  favoriteId: number
): Promise<ApiResponse<Favorite>> =>
  await apiRequest("PUT", `/api/favoriteItem/${favoriteId}`);

export const deleteFavorite = async (
  favoriteId: number
): Promise<ApiResponse<Favorite>> =>
  await apiRequest("DELETE", `/api/favoriteItem/${favoriteId}`);

export const getFavorite = async (
  favoriteId: number
): Promise<ApiResponse<Favorite>> =>
  await apiRequest("GET", `/api/favoriteItem/${favoriteId}`);

export const toggleFavorite = async (
  itemId: number
): Promise<ApiResponse<Favorite>> =>
  await apiRequest("GET", `/api/favoriteItem/toggle/${itemId}`);
