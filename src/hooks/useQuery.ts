import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export function useQuery(): URLSearchParams {
  const location = useLocation();
  return useMemo(() => new URLSearchParams(location.search), [location]);
}
