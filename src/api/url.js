const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
function getApiUrl() {
    return ApiUrl;
  }
import { useAppStore } from "@/zustand/store";

 function getToken() {
    return useAppStore.getState().token;
  }


import { StatusCodes } from 'http-status-codes';
async function fetcher(endpoint, method, options = {}) {
    const { headers, body } = options;
    const url = `${getApiUrl()}${endpoint}`;
    const token = getToken();

    // 如果没有传入 headers，使用默认请求头
    const finalHeaders = headers || {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(url, {
        method,
        headers: finalHeaders,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (response.ok) {
        return response.json();
    }

    const errorText = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText}. Details: ${errorText}`);
}
async function fetchData(endpoint, method, options = {}) {
    const response = await fetcher(endpoint, method, options);
    if (response.code === StatusCodes.OK) {
        return response.data;
    }
    throw new Error(`Error: ${response.message}, Code: ${response.code}`);
}