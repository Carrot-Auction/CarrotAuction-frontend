interface Category {
  id: number;
  buy_price: number;
  buy_year: string;
  category: string;
  status: string;
}

export const getCategoryList = async (): Promise<CAResponse<Category[]>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/category`, {
      method: "GET",
    })
  ).json();

export const createCategory = async (): Promise<CAResponse<Category>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/category`, {
      method: "POST",
    })
  ).json();

export const updateCategory = async (): Promise<CAResponse<Category>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/category`, {
      method: "DELETE",
    })
  ).json();

export const deleteCategory = async (
  categoryId: number
): Promise<CAResponse<Category>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/category/${categoryId}`, {
      method: "DELETE",
    })
  ).json();

export const getCategory = async (
  categoryId: number
): Promise<CAResponse<Category>> =>
  (
    await fetch(`${process.env.API_BASE_URL}/api/category/${categoryId}`, {
      method: "GET",
    })
  ).json();

export const getAvgPrice = async (
  categoryId: number,
  buyYear: string,
  buyPrice: number,
  status: string
): Promise<CAResponse<{ price: number }>> =>
  (
    await fetch(
      `${process.env.API_BASE_URL}/api/category/avgPrice/${categoryId}/${buyYear}/${buyPrice}/${status}`,
      {
        method: "GET",
      }
    )
  ).json();
