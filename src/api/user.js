import { fetchData, fetcher } from "./url";

export async function signUp(userRequest) {
    return fetcher('/user/signup', 'POST', { body: userRequest });
}

export async function signIn(username, password) {
    const body = new URLSearchParams({
        grant_type: 'password',
        username,
        password,
    }).toString();

    return fetcher('/token', 'POST', {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
    });
}

export async function getUser() {
    const data = await fetchData('/user/get', 'GET');
    return data
}
