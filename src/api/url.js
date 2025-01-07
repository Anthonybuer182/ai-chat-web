const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
export function getApiUrl() {
    return ApiUrl;
  }
import { useAppStore } from "@/zustand/store";

export function getToken() {
    return useAppStore.getState().token;
  }