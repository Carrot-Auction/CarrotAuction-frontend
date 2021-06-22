export interface ApiResponse<T> {
  error?: string;
  transaction_time: string;
  result_code?: "ERROR" | "OK";
  description?: string;
  pagination?: Pagination;
  data: T;
}

export interface ApiRequest<T> {
  data: T;
}

export interface Pagination {
  current_elements: number;
  current_page: number;
  total_elements: number;
  total_pages: number;
}
