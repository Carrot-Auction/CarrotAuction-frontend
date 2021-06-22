import { ApiResponse } from "types";
import { apiRequest } from "utils";

export interface Item {
  category_id: number;
  description: string;
  id: number;
  url: string;
  start_price: number;
  title: string;
  user_id: number;
  favorite: boolean;
  likes: number;
  duration: string;
  location: string;
  nickname: string;
}

export const createItem = async (): Promise<ApiResponse<Item>> =>
  await apiRequest("POST", `/api/item`);

export const updateItem = async (itemId: number): Promise<ApiResponse<Item>> =>
  await apiRequest("PUT", `/api/item/${itemId}`);

export const deleteItem = async (itemId: number): Promise<ApiResponse<Item>> =>
  await apiRequest("DELETE", `/api/item/${itemId}`);

export const getItem = async (itemId: number): Promise<ApiResponse<Item>> =>
  await apiRequest("GET", `/api/item/${itemId}`);

export const searchItem = async (title: string): Promise<ApiResponse<Item[]>> =>
  await apiRequest("GET", `/api/item/search/${title}`);

export const newItemList = async (limit = 5): Promise<ApiResponse<Item[]>> =>
  await apiRequest(
    "GET",
    `/api/item/newItemList?pageSize=${encodeURIComponent(limit)}`
  );

export const deadlineItemList = async (
  limit = 5
): Promise<ApiResponse<Item[]>> =>
  await apiRequest(
    "GET",
    `/api/item/deadlineItemList?pageSize=${encodeURIComponent(limit)}`
  );
