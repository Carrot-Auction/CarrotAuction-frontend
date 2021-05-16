export interface ApiResponse<T> {
  transaction_time: string;
  result_code: string;
  description: string;
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
