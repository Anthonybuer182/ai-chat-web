import { fetchData } from "./url";
export async function getCharacters(characterListRequest) {
    const data = await fetchData('/character/list', 'POST',{ body: characterListRequest });
    return data
}
export async function getMyCharacters(characterListRequest) {
    const data = await fetchData('/character/my', 'POST',{ body: characterListRequest });
    return data
}
export async function getCharacter(id) {
    const data = await fetchData(`/character/get/${id}`, 'GET');
    return data
}