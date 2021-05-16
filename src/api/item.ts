import { ApiResponse } from "types";
import { apiRequest } from "utils";

export interface Item {
  category_id: number;
  description: string;
  id: number;
  item_image_id: number;
  start_price: number;
  title: string;
  user_id: number;
}

export const getItemList = async (): Promise<ApiResponse<Item[]>> =>
  await apiRequest("GET", `/api/item`);

export const createItem = async (): Promise<ApiResponse<Item>> =>
  await apiRequest("POST", `/api/item`);

export const updateItem = async (itemId: number): Promise<ApiResponse<Item>> =>
  await apiRequest("PUT", `/api/item/${itemId}`);

export const deleteItem = async (itemId: number): Promise<ApiResponse<Item>> =>
  await apiRequest("DELETE", `/api/item/${itemId}`);

export const getItem = async (itemId: number): Promise<ApiResponse<Item>> =>
  await apiRequest("GET", `/api/item/${itemId}`);
