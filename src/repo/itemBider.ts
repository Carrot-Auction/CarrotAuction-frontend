import { Item } from "repo";

export interface ItemBider {
  id: number;
  item_api_response: Item;
  item_id: number;
  price: number;
  user_id: number;
}

export const getItemBiderList = async (): Promise<CAResponse<ItemBider[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemBider`, {
      method: "GET",
    })
  ).json();

export const createItemBider = async (): Promise<CAResponse<ItemBider>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemBider`, {
      method: "POST",
    })
  ).json();

export const updateItemBider = async (): Promise<CAResponse<ItemBider>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemBider`, {
      method: "DELETE",
    })
  ).json();

export const deleteItemBider = async (
  itemBiderId: number
): Promise<CAResponse<ItemBider>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemBider/${itemBiderId}`, {
      method: "DELETE",
    })
  ).json();

export const getItemBider = async (
  itemBiderId: number
): Promise<CAResponse<ItemBider>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemBider/${itemBiderId}`, {
      method: "GET",
    })
  ).json();
