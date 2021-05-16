import { Item } from "api";
import { ApiResponse } from "types";
import { apiRequest } from "utils";

export interface ItemBider {
  id: number;
  item_api_response: Item;
  item_id: number;
  price: number;
  user_id: number;
}

export const getItemBiderList = async (): Promise<ApiResponse<ItemBider[]>> =>
  await apiRequest("GET", `/api/itemBider`);

export const createItemBider = async (): Promise<ApiResponse<ItemBider>> =>
  await apiRequest("POST", `/api/itemBider`);

export const updateItemBider = async (
  itemBiderId: number
): Promise<ApiResponse<ItemBider>> =>
  await apiRequest("PUT", `/api/itemBider/${itemBiderId}`);

export const deleteItemBider = async (
  itemBiderId: number
): Promise<ApiResponse<ItemBider>> =>
  await apiRequest("DELETE", `/api/itemBider/${itemBiderId}`);

export const getItemBider = async (
  itemBiderId: number
): Promise<ApiResponse<ItemBider>> =>
  await apiRequest("GET", `/api/itemBider/${itemBiderId}`);
