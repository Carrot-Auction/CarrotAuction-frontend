interface CAResponse<T> {
  data: T;
  description: string;
  pagination: {
    current_elements: number;
    current_page: number;
    total_elements: number;
    total_pages: number;
  };
  result_code: string;
}
