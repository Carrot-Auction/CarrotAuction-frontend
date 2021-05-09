interface ItemImage {
  id: number;
  url: string;
}

export const getItemImageList = async (): Promise<CAResponse<ItemImage[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemImage`, {
      method: "GET",
    })
  ).json();

export const createItemImage = async (): Promise<CAResponse<ItemImage>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemImage`, {
      method: "POST",
    })
  ).json();

export const updateItemImage = async (): Promise<CAResponse<ItemImage>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemImage`, {
      method: "DELETE",
    })
  ).json();

export const deleteItemImage = async (
  itemImageId: number
): Promise<CAResponse<ItemImage>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemImage/${itemImageId}`, {
      method: "DELETE",
    })
  ).json();

export const getItemImage = async (
  itemImageId: number
): Promise<CAResponse<ItemImage>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/itemImage/${itemImageId}`, {
      method: "GET",
    })
  ).json();
