export interface Item {
  category_id: number;
  description: string;
  id: number;
  item_image_id: number;
  start_price: number;
  title: string;
  user_id: number;
}

export const getItemList = async (): Promise<CAResponse<Item[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/item`, {
      method: "GET",
    })
  ).json();

export const createItem = async (): Promise<CAResponse<Item>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/item`, {
      method: "POST",
    })
  ).json();

export const updateItem = async (): Promise<CAResponse<Item>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/item`, {
      method: "DELETE",
    })
  ).json();

export const deleteItem = async (itemId: number): Promise<CAResponse<Item>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/item/${itemId}`, {
      method: "DELETE",
    })
  ).json();

export const getItem = async (itemId: number): Promise<CAResponse<Item>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/item/${itemId}`, {
      method: "GET",
    })
  ).json();
