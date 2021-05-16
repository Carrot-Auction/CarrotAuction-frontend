import { ApiResponse } from "types";
import { apiRequest } from "utils";

interface ItemImage {
  id: number;
  url: string;
}

export const getItemImageList = async (): Promise<ApiResponse<ItemImage[]>> =>
  await apiRequest("GET", `/api/itemImage`);

export const createItemImage = async (): Promise<ApiResponse<ItemImage>> =>
  await apiRequest("POST", `/api/itemImage`);

export const updateItemImage = async (
  itemImageId: number
): Promise<ApiResponse<ItemImage>> =>
  await apiRequest("PUT", `/api/itemImage/${itemImageId}`);

export const deleteItemImage = async (
  itemImageId: number
): Promise<ApiResponse<ItemImage>> =>
  await apiRequest("DELETE", `/api/itemImage/${itemImageId}`);

export const getItemImage = async (
  itemImageId: number
): Promise<ApiResponse<ItemImage>> =>
  await apiRequest("GET", `/api/itemImage/${itemImageId}`);
