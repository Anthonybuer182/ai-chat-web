const ApiUrl = process.env.NEXT_PUBLIC_API_URL;
function getApiUrl() {
    return ApiUrl;
  }
import { useAppStore } from "@/zustand/store";

 function getToken() {
    return useAppStore.getState().token;
  }


import { StatusCodes } from 'http-status-codes';
export async function fetcher(endpoint, method, body) {
    const url = `${getApiUrl()}${endpoint}`;

    const headers =  {'Content-Type': 'application/x-www-form-urlencoded' }

    const response = await fetch(url, {
        method,
        headers: headers,
        body: body ? new URLSearchParams(body).toString() : undefined,
    });
    
    if (response.ok) {
        return response.json();
    }

    const errorText = await response.text();
    throw new Error(`Request failed: ${response.status} ${response.statusText}. Details: ${errorText}`);
}
export async function fetchData(endpoint, method, body) {

    const url = `${getApiUrl()}${endpoint}`;
    const token = getToken();

    const headers =  {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
    };

    const response = await fetch(url, {
        method,
        headers: headers,
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Request failed: ${response.status} ${response.statusText}. Details: ${errorText}`);
    }
    
    const responseJson = await response.json();
    if (responseJson.code !== StatusCodes.OK) {
        throw new Error(`Error: ${responseJson.message}, Code: ${responseJson.code}`);
    }
    
    return responseJson.data;
}