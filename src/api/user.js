import { getApiUrl,getToken } from './url';

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
    const response = await fetch(getApiUrl() + '/token', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Authorization: `Bearer ${getToken()}`,
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
