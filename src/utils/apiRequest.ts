import { ApiRequest, ApiResponse } from "types";

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export default async function apiRequest<D = void, R = void>(
  method: HTTPMethod,
  path: string,
  data?: D
): Promise<ApiResponse<R>> {
  let body = undefined;
  if (data !== undefined) {
    const requestData: ApiRequest<D> = { data };
    body = JSON.stringify(requestData);
  }
  return await (
    await fetch(`${process.env.API_BASE_URL}${path}`, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
  ).json();
}
