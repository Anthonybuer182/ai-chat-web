
import { getApiUrl } from './url';
export async function signIn(username,password) {
    console.log('ApiUrl2', getApiUrl());
    const response = await fetch(getApiUrl()+'/token',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            grant_type: 'password',
            username,
            password,
        }),
    });
    if (response.ok) {
        return response.json();
    }
    throw new Error(response.toString());
}