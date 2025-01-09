import { fetchData, fetcher } from "./url";

export async function signUp(userRequest) {
    return fetchData('/user/signup', 'POST', userRequest);
}

export async function signIn(username, password) {
    return fetcher('/token', 'POST', 
{
            grant_type: 'password',
            username,
            password,
        },
    );
}

export async function getUser() {
    const data = await fetchData('/user/get', 'GET');
    return data
}
