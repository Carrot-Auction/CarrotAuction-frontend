import { ApiResponse } from "types";
import { apiRequest } from "utils";

interface Category {
  id: number;
  buy_price: number;
  buy_year: string;
  category: string;
  status: string;
}

export const getCategoryList = async (): Promise<ApiResponse<Category[]>> =>
  await apiRequest("GET", `/api/category`);

export const createCategory = async (): Promise<ApiResponse<Category>> =>
  await apiRequest("POST", `/api/category`);

export const updateCategory = async (
  categoryId: number
): Promise<ApiResponse<Category>> =>
  await apiRequest("PUT", `/api/category/${categoryId}`);

export const deleteCategory = async (
  categoryId: number
): Promise<ApiResponse<Category>> =>
  await apiRequest("DELETE", `/api/category/${categoryId}`);

export const getCategory = async (
  categoryId: number
): Promise<ApiResponse<Category>> =>
  await apiRequest("GET", `/api/category/${categoryId}`);

export const getAvgPrice = async (
  categoryId: number,
  buyYear: string,
  buyPrice: number,
  status: string
): Promise<ApiResponse<{ price: number }>> =>
  await apiRequest(
    "GET",
    `/api/category/avgPrice/${categoryId}/${buyYear}/${buyPrice}/${status}`
  );
