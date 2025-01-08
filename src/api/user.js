import { getApiUrl,getToken } from './url';
import { StatusCodes } from 'http-status-codes';

export async function signIn(username, password) {
    const response = await fetch(getApiUrl() + '/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            grant_type: 'password',
            username,
            password,
        }).toString(),
    });

    if (response.ok) {
        return response.json();
    }
    throw new Error(response.toString());
}
export async function getUser() {
    const response = await fetch(getApiUrl() + '/user/get', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (response.ok) {
        const responseData = await response.json();
        
        if (responseData.code === StatusCodes.OK) {
            return responseData.data;
        } else {
            throw new Error(`Error: ${responseData.message}, Code: ${responseData.code}`);
        }
    }
    throw new Error('Network response was not ok');
}
