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
  const res: ApiResponse<R> = await (
    await fetch(`${process.env.API_BASE_URL}${path}`, {
      method,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    })
  ).json();
  if (res.result_code === "ERROR") throw Error(res.description);
  return res;
}
